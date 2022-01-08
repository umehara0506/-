





function myFunction2_4() {
  const x = 10;

  if (x % 2 === 0) console.log(`${x}は偶数です。`);
  if (x % 2 === 1) console.log(`${x}は奇数です。`);
}


function myFunction2_10() {
  let total = 0;

  const x = 10;
  for(let i=1; i<=x; i++){
    total += i;
  }

  console.log(`1から${x}まで加算すると${total}です。`)
}

function myFunction2_12() {
  let x = 1;
  total = 0;
  
  while (x <= 100) {
    console.log(x);
    total += x;
    x *= 2;
  }
}


function myFunction2_14() {
  for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
      console.log(`${i}×${j}=${i*j}`);
    }
  }
}

function myFunction3_03(x, y) {
  return x % y;
}

function myFunction3_04(x) {
  return x % 2 === 0;
}

const myFunction3_07 = x => x % 2 === 0;

function myFunction3_11() {
  const names = ['Bob', 'Tom', 'Jay', 'Tom'];
  for (const name of names.reverse()) {
    console.log(name);
  }
}

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

function myFunction3_14() {
  const members1 = ['Bob', 'Tom', 'Jay'];
  console.log(lenArray(members1)); //3
  
  const members2 = [['Bob', 'Tom', 'jay']];
  console.log(lenArray(members2)); //1

}


function test() {
  console.log(myFunction3_03(6, 3));
}

