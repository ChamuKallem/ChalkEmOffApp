(function() {
    function todosCtrl($scope, $http, $state) {
        var Todos = [];
        $scope.newTodo = true;
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
        this.showTodoItems = function (todo_id, title){
          // $http.get('http://localhost:3000/v1/todos/1/items').
          $scope.newTodo = false;
          var str = todo_id + '';
          $http.get('http://localhost:3000/v1/todos/' + str + '/items').
          then(function(responseItems) {
              console.log(responseItems);
              if (responseItems.data.data){
                $scope.Todos.Items = responseItems.data.data;
                $scope.Todos.title = title;
                $scope.Todos.todo_id = todo_id;
                console.log($scope.Todos.Items);
              }
             });
          console.log("show todo works");
        };
        this.toggleItem = function(item_id, name, bool){

          var str = item_id + '';
          var data = { "name":name, "done": bool};
          console.log(str);
          console.log(JSON.stringify(data));
          $http.put('http://localhost:3000/v1/items/' + str , JSON.stringify(data)).
          then(function(respUpdatedItem){
            console.log(respUpdatedItem);
          });
          console.log("entered toggleItem");
        };
        this.createTodo = function(){
          $scope.newTodo = true;
          console.log("new todo button works");
        };
        this.createTodoCat = function(){
          var catName = document.getElementById('newTodoName').value;
          console.log(catName);
          var data = {"title": catName, "complete": false, "user_id": $scope.user.id};
          $http.post('http://localhost:3000/v1/todos/', JSON.stringify(data)).
          then(function(responseTodos) {
              console.log(responseTodos);
              if (responseTodos.data.data){
                $scope.Todos.push(responseTodos.data.data);
                $scope.newTodo = false;
                $scope.Todos.Items = [];
                $scope.Todos.title = catName;
                $scope.Todos.todo_id = responseTodos.data.data.id;
              }
             });
        };
        this.addTodoItem = function(){
          var itemName = document.getElementById('newItemName').value;
          console.log(itemName);
          var data = {"name": itemName, "done": false};
          var str = $scope.Todos.todo_id + '';
          $http.post('http://localhost:3000/v1/todos/' + str + '/items', JSON.stringify(data)).
            then(function(responseNewItem) {
              console.log(responseNewItem);
              if (responseNewItem.data.data){
                $scope.Todos.Items.push(responseNewItem.data.data);
              }
             });
        };
        this.deleteItem = function(item_id){
          var itemIndex = $scope.Todos.Items.map(function(e) { return e.id; }).indexOf(item_id);
          var str = item_id + '';
          $http.delete('http://localhost:3000/v1/items/' + str).
            then(function(delteResponse) {
              console.log(delteResponse);
              $scope.Todos.Items.splice(itemIndex, 1);
             });
          console.log("entered delete Item");
        };

    }
    angular
        .module('ChalkEmOffApp')
        .controller('todosCtrl', ['$scope', '$http', '$state', todosCtrl]);
})();
