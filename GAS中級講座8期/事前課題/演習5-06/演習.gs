function myFunction5_06() {

  console.log(getA1Notation(2, 5, 3, 6)); //E2:J4

}

function getA1Notation(row, column, numRows, numColumns) {

  const sht = SpreadsheetApp.getActiveSheet();
  const range = sht.getRange(row, column, numRows, numColumns);
  const a1notation = range.getA1Notation();
  return a1notation;

}