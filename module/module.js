function init(){
    //Tetsing the module
    // myModule.saySomething();
    // myModule.reportMyConfig();
    // myModule.updateMyConfig({
    //     language: "fr",
    //     useCaching: false
    // });

    // myModule.reportMyConfig();

    testModule.incrementCounter();
    testModule.incrementCounter();
    testModule.incrementCounter();
    testModule.incrementCounter();
    testModule.incrementCounter();
    testModule.resetCounter();
}

//declaring a module as an object litheral
var myModule = {
    myConfig: {
        useCaching: true,
        language: "en"
    },

    //a very basic method
    saySomething: function(){
        console.log("How are you today?");
    },

    //output a value bassed on the current configuration
    reportMyConfig: function(){
        console.log("Caching is: "+ (this.myConfig.useCaching ? "enabled" : "disabled"));
    },

    //Override the current configuration
    updateMyConfig: function( newConfig ){
        if( typeof newConfig === "object" ){
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }
};

var testModule = (function(){
    var counter = 0;
    return{
        incrementCounter: function(){
            return counter++;
        },

        resetCounter: function(){
            console.log("Counter value before reset: " + counter);
            counter = 0;
        }
    };
})();


window.onload = init;