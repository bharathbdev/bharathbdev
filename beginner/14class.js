class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }

    staticpresent() {
      return 'I have a ' + this.carname;
    }
  }
  
  const car1 = new Car('Alice');
  console.log(car1.present());
  console.log(car1.carname)
  console.log(Car.staticpresent())


  //Inheritance
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }

  }
  
  const myCar = new Model("Ford", "Mustang");
  console.log(myCar.show())
  