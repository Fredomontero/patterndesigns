function init(){
    var singleA = mySingleton.getInstance();
    var singleB = mySingleton.getInstance();
    console.log(singleA.getRandomNumber() === singleB.getRandomNumber());

}

var mySingleton = (function(){
    //Instance stores a refrence to the singleton 
    var instance;

    function init(){
        //Singleton
        //Private methods and variables
        function privateMethod(){
            console.log("I'm Private");
        }

        var privateVariable  = "I'm also private";
        var privateRandomNumber = Math.random();

        return{
            //Public methods and variables
            publicMethod: function(){
                console.log("The public can see me");
            },

            publicProperty: "I'm also public" ,

            getRandomNumber: function(){
                return privateRandomNumber;
            }
        };
    };

    return {
        //Get the singleton isntace if one exists or create one if doesn't
        getInstance: function(){
            if(!instance){
                instance = init();
            }
            return instance;
        }
    };
})();


window.onload = init;