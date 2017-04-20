(function() {
    function SignInCtrl() {
        this.testtitle = "Sign In to this Organized World!";
        console.log("Running signIn control");
    }
    angular
        .module('ChalkEmOffApp')
        .controller('SignInCtrl', SignInCtrl);
})();
