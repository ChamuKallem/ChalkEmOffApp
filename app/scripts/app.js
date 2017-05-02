(function(){
  function config($stateProvider, $locationProvider, $authProvider){
    $authProvider.configure({
      apiUrl: 'http://localhost:3000',
      handleRegistrationResponse: function(response) {
            alert("Registration response");
            console.log(response.data);
            return response.data;
        }
    });
    $locationProvider
        .html5Mode({
          enabled: true,
          requireBase: false
        });
        $stateProvider
            .state('landing', {
              url: '/',
              controller: 'LandingCtrl as landing',
              templateUrl: '/templates/landing.html'
            })
            .state('todos', {
              url: '/todos',
              controller: 'todosCtrl as todos',
              templateUrl: '/templates/todos.html'
            })
            .state('signin', {
                url:'/signin',
                controller: 'SignInCtrl as signin',
                templateUrl: '/templates/signin.html'

            })
            .state('signup', {
                url:'/signup',
                controller: 'SignUpCtrl as signup',
                templateUrl: '/templates/signup.html'
            });
  }
  angular
      .module('ChalkEmOffApp', ['ng-token-auth', 'ui.router', 'ui.bootstrap'])
      .config(config);
})();
