function myFunction7_04() {

  const url = 'https://tonari-it.com/not-exists';
  try {
    const response = UrlFetchApp.fetch(url);
    console.log(response.getContentText().slice(0, 300));
  } catch (e) {
    logError(e);
  }

}

function logError(e) {

  const shtName = '事前課題_演習7'; //実務だと「errorlog」、「log」シートとかにします
  const logSht = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(shtName);

  const logMsg = [['例外が発生しました: ' + e.name], [e.message]];
  logSht.getRange(1, 1, logMsg.length, logMsg[0].length).setValues(logMsg);

}
