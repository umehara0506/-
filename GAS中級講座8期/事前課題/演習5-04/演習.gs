function myFunction5_04() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  console.log(ss.getSheets().length);
  
  // 関数の戻り値を表示
  console.log(getSheetsLength(ss));
  
}

/**
 * 関数名参考
 * https://qiita.com/naqtn/items/54457666316461d098a4
 */
function getSheetsLength(ss) {
  return ss.getSheets().length;
}
