function myFunction4_09() {
  const person = {
    name: 'Bob',
    age: 25,
    isAdult() {
      return this.age >= 18
    },
    gender: 'mail',
    isMale() {
      return this.gender.toLowerCase() === 'mail'
    }
  }

  console.log(person.isMale());  //true
}
