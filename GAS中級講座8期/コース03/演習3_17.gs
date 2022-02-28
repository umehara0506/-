/**
 * 演習３－17
 * 
 * 以下の機能を持つクラスNumbersObjectを作成してください。
 * 
 * コンストラクタNumbersObject: 整数で構成される配列を渡してインスタンスを生成する
 * valuesプロパティ: Arrayオブジェクト
 * maxプロパティ・minプロパティ: valuesプロパティの最大値、最小値を返す
 * getTotalメソッド: valuesプロパティのすべての整数を加算した値を返す（totalプロパティでも可）
 * 
 */
function myFunction3_17() {
  
  class NumbersObject {
    
    constructor(values) {
      this.values = values;
      this.max = Math.max(...values);
      this.min = Math.min(...values);
    }

    getTotal() {
      const total = this.values.reduce((previous, current) => previous + current);
      return total;
    }

  }

  const myNum = new NumbersObject([1, 5, 12, 100]);
  console.log(myNum);
  console.log(myNum.getTotal());
}
