function myFunction1_16() {

  // SpreadsheetApp.getActiveSheet().getDataRange().getValues()
  const activeSheet = {
    sheet: SpreadsheetApp.getActiveSheet(),
    values: SpreadsheetApp.getActiveSheet().getDataRange().getValues(),
    getRemainingCells() {
      return 1000000 - (this.sheet.getMaxRows() * this.sheet.getMaxColumns());
    }
  }

  Logger.log(activeSheet.sheet);
  console.log(activeSheet.values);
  console.log(activeSheet.getRemainingCells());

}
