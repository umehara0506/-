function myFunction4_10() {
  const area = {
    height: 10,
    width: 4,
    getArea() {
      return this.height * this.width
    }
  }

  console.log(area.getArea());
}
