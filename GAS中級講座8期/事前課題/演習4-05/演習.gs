function myFunction4_05() {
  const obj = {
    Bob: {age: 24, favorit: 'apple'},
    Tom: {age: 28, favorit: 'grape'},
    Ivy: {age: 20, favorit: 'orange'}
  };
  showObj(obj);
}

function showObj(obj) {

  for (const key in obj) {
    Logger.log(`${key}:${JSON.stringify(obj[key])}`);
  }
}
