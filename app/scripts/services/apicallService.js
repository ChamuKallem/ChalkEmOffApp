(function(){
    function apicallService($http){
        var Service = {};
        Service.getTodos = function (){
          $http.get('http://localhost:3000/v1/todos').
          then(function(responseList){
            console.log(responseList);
            return responseList.data.data;
          });
        };
        return Service;
    }
    angular
        .module('ChalkEmOffApp')
        .service('apicallService', ['$http', apicallService]);
})();
