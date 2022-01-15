function myFunction6_09() {
  
  const shtName = '事前課題';
  const sht = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(shtName);

  // Arrayオブジェクトのpushメソッドを使って最終行に追加
  addData = [];
  addData.push('A');
  addData.push('Ron');
  addData.push(30);
  addData.push('melon');

  sht.appendRow(addData);


  // Arrayオブジェクトのshiftメソッドを使って、見出し行を削除
  const values = sht.getDataRange().getValues();
  const hedears = values.shift();

  console.log('hedears:', hedears);
  console.log('values:', values);


}
