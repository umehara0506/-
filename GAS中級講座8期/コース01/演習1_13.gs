/**
 * 演習１－13
 * 任意の数の整数を引数として渡して、その総和を求める関数を作成しましょう。
 * ちなみに、任意の数で渡せる引数を「可変長引数」といいます。
*/
function myFunction1_13() {

  console.log(sum_(10, 2, 42, 6));
  console.log(sum_([10, 2, 42, 6]));

}


/**
 * 複数の整数を受けて、総和を返す
 * @param {...number|Array<number>} numbers - 任意の数の数値 or 数値の配列
 * @return {number} 渡された数値の総和
 */
function sum_(...numbers) {
  
  const _numbers = numbers.flat(Infinity); // 間違えて配列で渡した場合も対応可能にする
  const total = _numbers.reduce((prev, current) => prev + current);
  return total;
  
}