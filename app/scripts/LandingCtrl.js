(function() {
    function LandingCtrl() {
        this.title = "Organized World!";
        console.log("Running landing control");
    }
    angular
        .module('ChalkEmOffApp')
        .controller('LandingCtrl', LandingCtrl);
})();
