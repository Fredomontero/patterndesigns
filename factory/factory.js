function init(){
    ///create an instance of our factory that makes cars
    var carFactory = new VehicleFactory();
    var car = carFactory.createVehicle({
        vehicleClass: "car",
        color: "yellow",
        doors: 6
    });

    //Test to confirm our car was created
    console.log(car instanceof Car);
    console.log(car);

    //create a truck
    var frontier = carFactory.createVehicle({
        vehicleClass: "truck",
        state:"like new",
        color: "red",
        wheelSize: "small"
    });

    console.log(frontier instanceof Truck);
    console.log(frontier);
}

//A constrcutor defining new cars
function Car( options ){
    //some defaults
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
}

//A constrcutor defining new trucks
function Truck( options ){
    //some defaults
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
}

//Factory Example
//[1].- We define a skeleton vehicle factory
function VehicleFactory() {};

//[2].- Define the proptotypes and utilities for this factory, our default vehicleClass is Car
VehicleFactory.prototype.vehicleClass = Car;

//[3].- Our factory method for creating new vechicle instances
VehicleFactory.prototype.createVehicle = function( options ){
    switch(options.vehicleClass){
        case "car":
            this.vehicleClass = Car;
            break;
        case "truck":
            this.vehicleClass = Truck;
            break;
        //defaults to VehicleFactory.prototype.vehicleClass(Car)
    }
    return new this.vehicleClass( options );
};


window.onload = init;