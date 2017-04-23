(function() {
    function todosCtrl($scope, $http) {
        this.testtitle = "Testing redirect";
        $http.get('http://localhost:3000/v1/todos').
        then(function(responseList) {
            console.log(responseList);
            // $scope.users = response.data;
            this.todos = responseList.data.data
        });
        $http.get('http://localhost:3000/v1/users').
        then(function(responseUsers) {
            console.log(responseUsers);
            // $scope.users = response.data;
        });
    }
    angular
        .module('ChalkEmOffApp')
        .controller('todosCtrl', ['$scope', '$http', todosCtrl]);
})();
