(function() {
    function todosCtrl($scope, $http) {
        var Todos = [];
        $http.get('http://localhost:3000/v1/todos').
        then(function(responseList) {
            console.log(responseList);
            // $scope.users = response.data;
            angular.forEach(responseList.data.data, function(obj){
              if (obj.attributes["user-id"] == $scope.user.id){
                Todos.push(obj);
              }
            });
            // $scope.Todos = responseList.data.data;
            $scope.Todos = Todos;
            $scope.testtitle = "Testing todos";
        });

        // $http.get('http://localhost:3000/v1/users').
        // then(function(responseUsers) {
        //     console.log(responseUsers);
        //     // $scope.users = response.data;
        // });
    }
    angular
        .module('ChalkEmOffApp')
        .controller('todosCtrl', ['$scope', '$http', todosCtrl]);
})();
