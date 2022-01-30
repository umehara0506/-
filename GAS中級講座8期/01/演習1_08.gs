function myFunction1_08() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  console.log(`残り使用可能なセル数：${countAvailableCells_(ss)}`);

}

/**
 * スプレッドシートの残りセル数を返す関数
 * @params {object} ss - spreadsheetオブジェクト
 * @return {int}
 */
function countAvailableCells_(ss) {

  const shts = ss.getSheets();
  let totalUsingCells = 0;
  
  for (const sht of shts) {
    totalUsingCells += countUsingCells_(sht);
  }

  return totalUsingCells;
}