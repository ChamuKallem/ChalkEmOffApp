(function() {
    function SignUpCtrl($scope, $state, $auth, $rootScope) {
        this.testtitle = "Sing Up for this Organized World!";
        console.log("Running signup control");

        $scope.doRegister = function(){
          $auth.submitRegistration($scope.registrationForm)
            .then(function(resp) {
              // handle success response
              console.log(resp);
              console.log("entered sign up");
              $rootScope.isLogin = true;
              sessionStorage.setItem('user_id', resp.id);
              // $scope.isLogin = true;
              // $scope.user_id = resp.id;
              $state.reload();
              $state.go('todos');
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
        .controller('SignUpCtrl', ['$scope', '$state', '$auth', '$rootScope',  SignUpCtrl]);
})();
