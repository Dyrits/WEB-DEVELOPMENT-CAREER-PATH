let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },

  get appetizers() {return this._courses.appetizers;},
  get mains() {return this._courses.mains;},
  get desserts() {return this._courses.desserts;},

  set appetizers(appetizer) {this._courses.appetizers = appetizer},
  set mains(main) { this._courses.mains = main},
  set desserts(dessert) { this._courses.desserts = dessert},

  get courses() {
    return { 
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },

  addDishToCourse (courseName, dishName, dishPrice) {
    this.courses[courseName].push({
      name: dishName,
      price: dishPrice
    })
  },

  getRandomDishFromCourse (courseName) {
    let dishes = this.courses[courseName]
    return dishes[Math.floor(Math.random() * dishes.length)]
  },

  getRandomMeal() {
    let appetizer = this.getRandomDishFromCourse("appetizers")
    let main = this.getRandomDishFromCourse("mains")
    let dessert = this.getRandomDishFromCourse("desserts")
    return `Appetizer: ${appetizer.name} | Main: ${main.name} | Dessert: ${dessert.name} || Total: $${appetizer.price + main.price + dessert.price}`
  }

}

menu.addDishToCourse("appetizers", "Foie gras", 12)
menu.addDishToCourse("appetizers", "Chèvre chaud", 8)
menu.addDishToCourse("appetizers", "Salade verte", 4)
menu.addDishToCourse("mains", "Lasagne", 17)
menu.addDishToCourse("mains", "Cheeseburger", 12)
menu.addDishToCourse("mains", "Filet mignon", 15)
menu.addDishToCourse("desserts", "Panacota", 5)
menu.addDishToCourse("desserts", "Brownie", 4.5)
menu.addDishToCourse("desserts", "Affogato al' cafè", 5)

console.log(menu.getRandomMeal())
