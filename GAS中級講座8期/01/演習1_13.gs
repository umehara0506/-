/**
 * シートのセル数を返す関数
 * @params {object} sht - sheetオブジェクト
 * @return {int}
 */
function countUsingCells_(sht) {
  const rows = sht.getMaxRows();
  const columns = sht.getMaxColumns();

  const usingCells = rows * columns;
  return usingCells;
}

/**
任意の数の整数を引数として渡して、その総和を求める関数を作成しましょう。
ちなみに、任意の数で渡せる引数を「可変長引数」といいます。
*/

function myFunction1_13() {

  console.log(sum(10, 2, 42, 6));

}

function sum(...args) {
  const total = args.reduce((prev, current) => prev + current);
  return total; 
}