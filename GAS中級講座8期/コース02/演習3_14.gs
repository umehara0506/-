/**
 * 演習３－14
 * 
 * バインドしているスプレッドシートの唯一のシートのA2セルに日付、B2セルに時刻が入力されています。
 * 年・月・日をA2セルの日付、時・分・秒をB2セルの時刻とするDateオブジェクトを生成するスクリプトを作成してください。
 */
function myFunction3_14() {
  const sht = SpreadsheetApp.getActiveSheet();
  const values = sht.getDataRange().getValues();

  const date = new Date(values[1][0]);
  const time = new Date(values[1][1]);

  const dateTime = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    time.getHours(),
    time.getMinutes(),
    time.getSeconds(),
  )

  console.log(dateTime);

}
