class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
    static hello() {
        return "Hello!!";
      }
  }
  
  const myCar = new Model("Ford", "Mustang");
  console.log(myCar.show())
  console.log(Model.hello())