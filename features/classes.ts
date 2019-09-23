class Vehicle {
  // public drive(): void {
  //   console.log('chugga chugga');
  // }

  public honk(): void {
    console.log('beep');
  }
};

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  };

  startDrivingProcess(): void {
    this.drive();
  }
};

const car = new Car();
// car.drive();
car.startDrivingProcess();
car.honk();