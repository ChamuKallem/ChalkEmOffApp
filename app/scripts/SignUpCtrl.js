(function() {
    function SignUpCtrl($scope, $state, $auth) {
        this.testtitle = "Sing Up for this Organized World!";
        console.log("Running signup control");

        $scope.handleRegBtnClick = function() {
          $auth.submitRegistration($scope.registrationForm)
            .then(function(resp) {
              // handle success response
              console.log("entered sign up")
            })
            .catch(function(resp) {
              // handle error response
            });
          };

    }
    angular
        .module('ChalkEmOffApp')
        .controller('SignUpCtrl', ['$scope', '$state', '$auth', SignUpCtrl]);
})();
