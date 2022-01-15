function myFunction7_08() {

  const url = 'https://httpbin.org/post';
  const params = {
    method: 'post',
    payload: { custname: 'Bob', custtel: '090-0000', comments: 'よろしく！' }
  };
  const response = UrlFetchApp.fetch(url, params);
  const text = response.getContentText();
  const obj = JSON.parse(text);
  const formData = obj.form;

  const responseValues = [];
  for (const key in formData) {
    const record = [];
    record.push(key);
    record.push(formData[key]);
    responseValues.push(record);
  }

  reflectValues(responseValues);

}

function reflectValues(values) {

  const shtName = '事前課題_演習7';
  const targetSht = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(shtName);

  // B1から反映
  targetSht.getRange(1, 2, values.length, values[0].length).setValues(values);

}

