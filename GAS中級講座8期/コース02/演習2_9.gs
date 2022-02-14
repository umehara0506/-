/**
 * 演習２－09
 * 
 * 演習２-04のクラスPersonに、BMIを返すgetBmiメソッドを追加しましょう。
*/
function myFunction2_09() {

  class Person {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    /**
     * BMIを返す
     * @return {number} - BMI
     */
    getBMI() {
      const bmi = this.weight / ((this.height / 100) ** 2);
      return bmi;
    }
  }

  const p1 = new Person('Bob', 25, 172, 65);
  console.log(p1);
  console.log(p1.getBMI());

  const p2 = new Person('Tom', 32, 178, 69);
  console.log(p2);
  console.log(p2.getBMI());
}
