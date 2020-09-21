module.exports = function(app){
    var Sidepanel = Object.getPrototypeOf(app).Sidepanel = new app.Component("sidepanel");
    //Sidepanel.debug = true;
    Sidepanel.createdAt      = "2.0.0";
    Sidepanel.lastUpdate     = "2.0.0";
    Sidepanel.version        = "1";
    // Sidepanel.factoryExclude = true;
    // Sidepanel.loadingMsg     = "This message will display in the console when component will be loaded.";
    // Sidepanel.requires       = [];

    // Sidepanel.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return Sidepanel;
}