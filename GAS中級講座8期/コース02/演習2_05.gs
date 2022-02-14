/**
 * 演習２－05
 * 
 * 以下のメンバーを持つクラスOnigiriと、いくつかのインスタンスを作成してください。
 * 
 * 商品名（＝おにぎりの具）を表すプロパティ: name
 * 販売金額を表すプロパティ: price
 * 在庫数を表すプロパティ: stock
*/
class Onigiri {
  constructor (name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

function myFunction2_05() {

  const umeOnigiri = new Onigiri('梅', 110, 7);
  console.log(umeOnigiri);

  const kanimisoOnigiri = new Onigiri('かにみそ', 180, 2);
  console.log(kanimisoOnigiri);

  const umemisoOnigiri = new Onigiri('うめみそ', 140, 5);
  console.log(umemisoOnigiri);
}
