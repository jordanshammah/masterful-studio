/**
 * Masterful — audit questionnaire -> Google Sheet
 * --------------------------------------------------------------
 * One-time setup:
 *   1. Create (or open) a Google Sheet to collect submissions.
 *   2. Extensions -> Apps Script. Delete the default code and paste this file.
 *   3. Save, then Deploy -> New deployment -> select type "Web app".
 *        - Description: Masterful audit intake
 *        - Execute as: Me
 *        - Who has access: Anyone
 *      Click Deploy and authorise. Copy the "Web app" URL.
 *   4. In src/pages/audit.astro, set:  const SHEET_ENDPOINT = '<that URL>';
 *   5. Commit + deploy. New submissions append as rows on the "Audits" tab.
 *
 * Re-deploying after edits: Deploy -> Manage deployments -> edit -> new version.
 * The form posts application/x-www-form-urlencoded fields, read via e.parameter.
 */
var SHEET_NAME = 'Audits';
var FIELDS = ['submittedAt', 'name', 'role', 'email', 'phone', 'business',
              'website', 'niche', 'revenue', 'budget', 'goals', 'source', 'page'];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(30000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(FIELDS); // header row
    }
    var params = (e && e.parameter) || {};
    sheet.appendRow(FIELDS.map(function (f) { return params[f] || ''; }));
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

// Lets you open the deployment URL in a browser to confirm it's live.
function doGet() {
  return ContentService.createTextOutput('Masterful audit intake is live.');
}
