/**
 * Masterful — audit questionnaire -> Google Sheet
 * --------------------------------------------------------------
 * Setup:
 *   1. Open the Google Sheet that should collect submissions. Copy its ID from
 *      the URL: https://docs.google.com/spreadsheets/d/<<THIS PART>>/edit
 *   2. Paste that ID into SHEET_ID below.
 *   3. Save (💾).
 *   4. VERIFY IT WORKS: in the function dropdown pick "testWrite", click Run,
 *      and authorise when prompted. A row named "TEST ROW" should appear on the
 *      "Audits" tab. If Run shows an error, read it — it tells you what to fix
 *      (View -> Executions also shows the log).
 *   5. Deploy -> Manage deployments -> (your Web app) -> ✏️ Edit ->
 *      Version: "New version" -> Deploy. (Editing the code is NOT live until you
 *      ship a new version.) Keep: Execute as = Me, Who has access = Anyone.
 *   6. Delete the TEST ROW from the Sheet.
 *
 * The form posts application/x-www-form-urlencoded fields, read via e.parameter.
 */

// Paste the Sheet ID here (the long string between /d/ and /edit in the Sheet URL).
// Leave '' ONLY if this Apps Script is bound to the Sheet (opened via Extensions
// -> Apps Script from inside that Sheet).
var SHEET_ID = '';
var SHEET_NAME = 'Audits';
var FIELDS = ['submittedAt', 'name', 'role', 'email', 'phone', 'business',
              'website', 'niche', 'revenue', 'budget', 'goals', 'source', 'page'];

function getSheet_() {
  var ss = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    throw new Error('No spreadsheet found. Set SHEET_ID to your Google Sheet ID.');
  }
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(FIELDS); // header row
  }
  return sheet;
}

function appendSubmission_(params) {
  getSheet_().appendRow(FIELDS.map(function (f) { return params[f] || ''; }));
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(30000);
  try {
    appendSubmission_((e && e.parameter) || {});
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Open the deployment URL in a browser to confirm it's live.
function doGet() {
  return ContentService.createTextOutput('Masterful audit intake is live.');
}

// Run this once from the editor to verify the Sheet connection + authorise.
function testWrite() {
  appendSubmission_({
    submittedAt: new Date().toISOString(),
    name: 'TEST ROW',
    email: 'test@example.com',
    source: 'testWrite()'
  });
  Logger.log('Wrote a TEST ROW to the "' + SHEET_NAME + '" tab. Open the Sheet to confirm, then delete it.');
}
