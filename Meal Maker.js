const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizersIn) {
      this._appetizers = appetizersIn;
    },
    get mains() {
      return this._mains;
    },
    set mains(mainsIn) {
      this._mains = mainsIn;
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertsIn) {
      this._desserts = dessertsIn;
    },
  },
  
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
},
  
  
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    
    this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomI = Math.floor(Math.random() * dishes.length);
    return dishes[randomI];
  },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The cost is $${totalPrice.toFixed(2)}.`;
  },
};

menu.addDishToCourse('appetizers', 'Greek Salad', 4.25);
menu.addDishToCourse('appetizers', 'Salmon Bruschetta', 5.09);
menu.addDishToCourse('appetizers', 'Quiche', 5.50);

menu.addDishToCourse('mains', ' Chicken Lasagna', 10.75);
menu.addDishToCourse('mains', 'Pork Steak', 14.95);
menu.addDishToCourse('mains', 'Fried Fish', 10.95);

menu.addDishToCourse('desserts', 'Nuttela Croissant', 3.50);
menu.addDishToCourse('desserts', 'Muffins', 2.40);
menu.addDishToCourse('desserts', 'Lava Cake', 3.20);

let meal = menu.generateRandomMeal();

console.log(meal);