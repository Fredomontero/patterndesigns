function init(){
    example2();
}

function Vehicle(vehicletype){
    this.vehicleType = vehicletype || "car";
    this.model = "default",
    this.license = "00000-000";
}

function example1(){
    //Test instance for a basic vehicle
    var testInstance = new Vehicle("car");
    console.log(testInstance);

    //Lets create a new instance of vehicle, to be decorated
    var truck = new Vehicle("truck");
    
    //New functionality we're decorating vehicle with
    truck.setModel = function( modelName ){
        this.model = modelName;
    };

    truck.setColor = function( color ){
        this.color = color;
    }

    //Test the value setters and value assignments works correctly
    truck.setModel("CAT");
    truck.setColor("blue");
    console.log(truck);

    //Demonstrate that vehicle is still unaltered
    var secondInstance = new Vehicle("car");
    console.log(secondInstance);
}

function MacBook(){
    this.cost = function(){ return 997; };
    this.screenSize = function(){ return 11.6; };
}

//Decorator 1
function memory(mackbook){
    var v = mackbook.cost();
    mackbook.cost = function(){
        return v + 75;
    }
}

//Decorator 2
function engraving(mackbook){
    var v = mackbook.cost();
    mackbook.cost = function(){
        return v + 200;
    }
}

//Decorator 3
function insurance(mackbook){
    var v = mackbook.cost();
    mackbook.cost = function(){
        return v + 250;
    }
}

function example2(){
    var mb = new MacBook();
    memory(mb);
    engraving(mb);
    insurance(mb);

    console.log(mb.cost());
    console.log(mb.screenSize());

}

window.onload = init;