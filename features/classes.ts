class Vehicle {
  // public drive(): void {
  //   console.log('chugga chugga');
  // }

  // color: string = 'red';
  // color: string;

  constructor(public color: string) {
    // this.color = color;
  }

  protected honk(): void {
    console.log('beep beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
// vehicle.drive();
// vehicle.honk();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(2,'Telemagenta');
car.startDrivingProcess();
// car.honk();
