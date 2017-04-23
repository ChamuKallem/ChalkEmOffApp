(function() {
    function SignInCtrl($scope, $state, $auth) {
        this.testtitle = "Sign In to this Organized World!";
        console.log("Running signIn control");

        $scope.doLogin = function(){
          $auth.submitLogin($scope.signInForm)
            .then(function(resp) {
              // handle success response
              console.log(resp);
              console.log("Login success");
              $state.go('todos')
            })
            .catch(function(resp) {
              // handle error response
              console.log("entered signIn with error");
              console.log(resp);

            });
          };

    }
    angular
        .module('ChalkEmOffApp')
        .controller('SignInCtrl', ['$scope', '$state', '$auth', SignInCtrl]);
})();
