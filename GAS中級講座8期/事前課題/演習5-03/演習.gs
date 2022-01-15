function myFunction5_03() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const shts = ss.getSheets();

  for (const sht of shts) {
    console.log(sht.getName());
  }
}
