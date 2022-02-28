/**
 * 演習3－08
 * スプレッドシートの単一列を表す二次元配列と、文字列を引数として渡したとき、二次元配列に文字列が存在すればそのインデックスを、そうでなければ-1を返す関数を作成しましょう。
 */

function myFunction3_08() {
  
  // 定数として設定する想定でアッパースネークケースで定義(本来はsetting.gs、global.gsファイルとかで定義する)
  const COLUMN_A1_NOTATION = 'A:A';

  const sht = SpreadsheetApp.getActiveSheet();
  const values = sht.getRange(COLUMN_A1_NOTATION).getValues();
  
  console.log(hasValue_(values, '梅'));
}

/**
 * 単一列の二次元配列に値があるかどうかを返す
 * 
 * @params {Array<>} values - 取得した1列分の二次元配列
 * @params {string} searchValue - 存在するか確かめたい値
 * 
 * return {boolean} 存在したらTrue
 */
function hasValue_(values, searchValue) {

  // 複数列指定されていたらエラーを返す
  if (values[0].length >= 2) throw('1列分のみ指定してデータを渡してください');

  const flatValue = values.flat();
  const hasValue = flatValue.includes(searchValue);

  return hasValue;

}
