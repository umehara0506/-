/**
 * 演習２－04
 * 
 * クラスPersonに以下のメンバーを追加で定義してください。
 * 身長を表すプロパティ: height
 * 体重を表すプロパティ: weight
*/
function myFunction2_04() {

  class Person {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }
  }

  const p1 = new Person('Bob', 25, 172, 65);
  console.log(p1);

  const p2 = new Person('Tom', 32, 178, 69);
  console.log(p2);
}
