/**
 * 演習２－06
 * 
 * 演習2-05のクラスOnigiriについてスプレッドシートのシートに
 * 
 * |商品名|販売金額|在庫数|
 * 
 * というフィールドで複数レコードが存在しているとします。
 * そのすべてのレコードについてOnigiriインスタンスを生成するスクリプトを作成しましょう。
*/

// class Onigiri {
//   constructor (name, price, stock) {
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
//   }
// }

function myFunction2_06() {

  const sht = SpreadsheetApp.getActiveSheet();
  const values = sht.getDataRange().getValues();
  const header = values.shift();

  for (const record of values) {
    const [name, price, stock] = record;
    const onigiriInstance = new Onigiri(name, price, stock);
    console.log(onigiriInstance);
  }
}
