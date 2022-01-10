function myFunction3_13() {
  const numbers = [[10, 30, 20, 40], [11, 31, 21], [12]];

  for (const record of numbers) {
    for (const number of record) {
      console.log(number);
    }
  }
}

function lenArray(array) {
  return array.length;
}