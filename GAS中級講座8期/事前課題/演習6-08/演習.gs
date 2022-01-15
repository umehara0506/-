function myFunction6_08() {

  console.log(hasWord('Bob')); //true
  console.log(hasWord('Tim')); //false

}


/**
 * 渡された単語がアクティブシートに含まれているかを返す関数
 * @param {string} checkWord - 検索したいワード
 * @return {boolean}
 */
function hasWord(checkWord) {

  const sht = SpreadsheetApp.getActiveSheet();
  console.log(`「${sht.getName()}」シートがアクティブシートです。`)

  const values = sht.getDataRange().getValues();
  const faltValues = values.flat();

  return faltValues.includes(checkWord);

}
