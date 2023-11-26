//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
// console.log(v.make);


class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage, maxPassengers, passenger, numberofWheels, fuel, scheduleService) {
        super(make, model, year, color, mileage);
        this.maxPassengers = maxPassengers;
        this.passenger = passenger;
        this.numberOfWheels = numberofWheels;
        this.maximumSpeed = this.maximumSpeed;
        this.fuel = fuel;
        this.started = false
        this.scheduleService = scheduleService;
    }

 loadPassenger(num) {
if (this.maxPassengers > 5) {
    console.log("Max passenger has been reach")

}
 }
 

start() {
    if (this.fuel > 10) {
        console.log("engine will start");
        return this.started = true
    }
    else {
        console.log("no fuel");
        return this.started = false;
    }

 }

 checkService() {
    if (this.mileage > 3000) {
        console.log("Time for Service")
        this.scheduleService = true
        return this.scheduleService;
        
    }

 }
    }

 let Toyota = new Car ("Toyota", "SUV", "2020", "Blue", "5000", 5, 3, 4, 200, 50, false);
 console.log(Toyota.start(50))
 



//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
