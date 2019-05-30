function init(){
    constructorWithPrototypes();
}

function example(){
    //different ways to create an object
    var obj1 = {};
    var obj2 = Object.create( Object.prototype );
    var obj3 = new Object();
    var obj4 = new Object();

    //there are 4 ways in which keys and values can then be assigned to an object
    //First way [set - get]
    obj1.name = "Alfredo";
    var obj1Name = obj1.name;
    console.log("Object 1: ", obj1);

    //Sexond way [set - get]
    obj2["name"] = "Christian";
    var obj2Name = obj2["name"];
    console.log("Object 2: ", obj2);

    //Third way: Object.defineProperty [set - get]
    Object.defineProperty(obj3, "lastName", {
        value: "Montero",
        writable: true,
        enumerable: true,
        configurable: true
    });

    console.log("Object 3: ", obj3);

    //If the above feels a little difficult to read,a  short handcould be written as follows
    var defineProp = function(obj, key, value){
        var config = {
            value: value,
            writable: true,
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(obj, key, config);
    };

    //To use it
    var person = Object.create(Object.prototype);

    //Populate the object with the properties
    defineProp(person, "name", "Christian");
    defineProp(person, "lastName", "Montero");
    defineProp(person, "Age", 27);

    console.log("The person info is: ", person);

    //Fourth way
    Object.defineProperties(obj4, {
        "name":{
            value: "Alfredo",
            writable: true
        },
        "lastName":{
            value: "Martinez",
            writable: true
        },
        "age":{
            value: 27,
            writable: true
        }
    });
    console.log("Object 4: ", obj4);
}

function basicConstructor(){

    //Constructor to create a person
    function Person(name, lastName, age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    var p1 = new Person("Christian", "Montero", 27);

    console.log("The person 1 is: ", p1);

}

function constructorWithPrototypes(){
    function Car(model, year, miles){
        this.model = model;
        this.year = year;
        this.miles = miles;
    }

    Car.prototype.displayModel = function(){
        return "The model of this car is: " + this.model;
    }

    var mustang = new Car("Mustang", 2019, 20000);
    console.log(mustang.displayModel());
}

window.onload = init;