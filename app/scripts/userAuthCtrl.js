(function() {
    function userAuthCtrl($scope, $state, $auth) {
      $scope.doSignIn = function(){
        $state.go('signin');
        $scope.isLogin = true;
      };
      $scope.doSignUp = function(){
        $state.go('signup');
        $scope.isLogin = true;
      };
      $scope.doSignOut = function(){
        $auth.signOut()
          .then(function(resp) {
            console.log(resp);
            // handle success response
            $state.go('/')
            $scope.isLogin = false;
          })
          .catch(function(resp) {
            // handle error response
            console.log("entered sign out in error");
          });
      };

    }
    angular
        .module('ChalkEmOffApp')
        .controller('userAuthCtrl', ['$scope', '$state', '$auth', userAuthCtrl]);
})();