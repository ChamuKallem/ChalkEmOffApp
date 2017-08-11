(function() {
    function SignInCtrl($scope, $state, $auth, $rootScope) {
        this.testtitle = "Sign In to this Organized World!";
        console.log("Running signIn control");

        $scope.doLogin = function(){
          $auth.submitLogin($scope.signInForm)
            .then(function(resp) {
              // handle success response
              console.log(resp);
              console.log("Login success");
              $rootScope.isLogin = true;
              // $rootScope.user_id = resp.data.data.id;
              sessionStorage.setItem('user_id', resp.id);
              // $scope.isLogin = true;
              // $scope.user_id = resp.id;
              $state.reload();
              $state.go('todos');
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
        .controller('SignInCtrl', ['$scope', '$state', '$auth', '$rootScope', SignInCtrl]);
})();
