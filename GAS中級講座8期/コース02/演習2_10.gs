/**
 * 演習２－10
 *
 * 演習２-05のクラスOnigiriに税込価格を返すgetTaxIncludedメソッドと、売り切れかどうかをブール値で返すisSoldOutメソッドを追加してください。
 * なお、getTaxIncludedメソッドの引数として税率を表す数値を渡すことができるものとし、その省略時は0.1を採用するものとします。
*/
class Onigiri {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  /**
   * 税込み金額を返す
   * @params {float} tax - 税率
   * @return {float} - 税込み金額
   */
  getTaxIncluded(tax = 0.1) {
    const taxIncudedPrice = Math.floor(this.price * (1 + tax));
    return taxIncudedPrice;
  }

  /**
   * 在庫(stock)がない場合trueを返す
   * @return {boolean} - 在庫の有無
   */
  isSoldOut() {
    return this.stock == 0;
  }
}

function myFunction2_10() {

  const umeOnigiri = new Onigiri('梅', 110, 7);
  console.log(umeOnigiri);
  console.log(umeOnigiri.getTaxIncluded());
  console.log(umeOnigiri.isSoldOut());

  const kanimisoOnigiri = new Onigiri('かにみそ', 180, 2);
  console.log(kanimisoOnigiri);
  console.log(kanimisoOnigiri.getTaxIncluded());
  console.log(kanimisoOnigiri.isSoldOut());

  const umemisoOnigiri = new Onigiri('うめみそ', 140, 0);
  console.log(umemisoOnigiri);
  console.log(umemisoOnigiri.getTaxIncluded());
  console.log(umemisoOnigiri.isSoldOut());
}
