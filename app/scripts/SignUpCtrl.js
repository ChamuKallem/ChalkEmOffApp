(function() {
    function SignUpCtrl($scope, $state, $auth) {
        this.testtitle = "Sing Up for this Organized World!";
        console.log("Running signup control");

        $scope.doRegister = function(){
          $auth.submitRegistration($scope.registrationForm)
            .then(function(resp) {
              // handle success response
              console.log(resp);
              console.log("entered sign up");
              $state.go('test')
            })
            .catch(function(resp) {
              // handle error response
              console.log("entered sign up in error");
              console.log(resp);

            });
          };

    }
    angular
        .module('ChalkEmOffApp')
        .controller('SignUpCtrl', ['$scope', '$state', '$auth', SignUpCtrl]);
})();
