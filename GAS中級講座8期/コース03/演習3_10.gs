/**
 * 演習３－10
 * 
 * 任意の桁数の半角文字列を要素とするリストと、桁数を表す整数を引数として渡すと、配列のすべての要素について
 * 桁数を表す整数でゼロパディング
 * を施した配列を返す関数を作成してください。
 */
function myFunction3_10() {
  
  const strNumbers = ['1231', '84', '327', '020'];
  console.log(zeroPadding_(strNumbers, 6));
}

/**
 * 渡した配列を指定した桁数で0埋めして返す関数
 * 
 * @params {Array<tring>} strNumbers - 配列の中は数値がテキストになったデータ
 * @params {number} digits - 桁数
 * 
 * @return {Array<string>} 0埋めされた配列
 */
function zeroPadding_(strNumbers, digits) {

  zeroPaddigedNumbers = strNumbers.map(val => val.padStart(digits, '0'));
  return zeroPaddigedNumbers;
}
