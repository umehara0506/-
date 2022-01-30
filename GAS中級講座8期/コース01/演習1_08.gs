/**
 * 演習１－08
 * Spreadsheetオブジェクトを渡すと、残り使用可能なセル数を返す関数を作成しましょう。
 * （スプレッドシートの使用可能なセル数は1000万セル
 */
function myFunction1_08() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  console.log(`残り使用可能なセル数：${countAvailableCells_(ss)}`);

}


/**
 * スプレッドシートの残りセル数を返す関数
 * @param {SpreadsheetApp.Spreadsheet} ss - Spreadsheetオブジェクト
 * @return {number} 
 */
function countAvailableCells_(ss) {

  const MAX_CELLS = 1000000; // 定数なのでアッパースネークケースで定義
  let totalUsingCells = 0;
  const shts = ss.getSheets();
  
  for (const sht of shts) {
    totalUsingCells += countUsingCells_(sht);
  }

  const remainCells = MAX_CELLS - totalUsingCells;
  return remainCells;

}


/**
 * シートの使用しているセル数を返す
 * @param {SpreadsheetApp.Sheet} sht - Sheetオブジェクト
 * @return {number} 使用しているセル数
 */
function countUsingCells_(sht) {

  const usingCells = sht.getMaxRows() * sht.getMaxColumns(); // return前に何を返しているのかを変数名でイメージできるように直接returnは避けています
  return usingCells

}