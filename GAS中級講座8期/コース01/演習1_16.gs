/**
 * 演習１－16
 * アクティブなスプレッドシートについて、以下のプロパティまたはメソッドを持つオブジェクトを生成して返す関数を作成してください。なお、シートは１枚のみ存在するものとします。
 * Sheetオブジェクトを表すプロパティ
 * シートの使用範囲の値の二次元配列を表すプロパティ
 * 残り使用可能なセル数を整数で返すメソッド
*/
function myFunction1_16() {

  const sheetInfo = getSheetInfo_();

  Logger.log(sheetInfo.sheet);
  console.log(sheetInfo.values);
  console.log(sheetInfo.getRemainingCells());

}


/**
 * シートに関するオブジェクトを作成して返す(シートは1枚の前提)
 * @return {Object} シート情報
 */
function getSheetInfo_() {

  const sheetInfo = {
    sheet: SpreadsheetApp.getActiveSheet(),
    values: SpreadsheetApp.getActiveSheet().getDataRange().getValues(),
    getRemainingCells() {
      return 1000000 - (this.sheet.getMaxRows() * this.sheet.getMaxColumns());
    }
  }

  return sheetInfo;

}
