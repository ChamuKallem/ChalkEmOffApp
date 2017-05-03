(function() {
    function userAuthCtrl($scope, $state, $auth, $rootScope) {
      $scope.doSignIn = function(){
        $state.go('signin');
        // $scope.isLogin = true;
      };
      $scope.doSignUp = function(){
        $state.go('signup');
        // $scope.isLogin = true;
      };
      $scope.doSignOut = function(){
        console.log($auth);
        $rootScope.isLogin = false;

        // $scope.isLogin = false;
        $auth.signOut()
          .then(function(resp) {
            console.log(resp);
            // // handle success response
            // $state.go('/')
            // $scope.isLogin = false;
          })
          .catch(function(resp) {
            // handle error response
            console.log("entered sign out in error");
            $state.go('landing');
          });
      };

    }
    angular
        .module('ChalkEmOffApp')
        .controller('userAuthCtrl', ['$scope', '$state', '$auth', '$rootScope', userAuthCtrl]);
})();
