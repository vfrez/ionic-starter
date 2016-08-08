/* global angular  */
/* global cordova  */
/* global StatusBar  */

angular.module('hackathon', [
  'ionic'
  , 'app.home'
  , 'app.login'
])

.run(function($ionicPlatform, $rootScope, $ionicHistory) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  /**
   * @todo Back view function
   */
  $rootScope.back = function(){
    $ionicHistory.goBack();
  };
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login'
      , templateUrl: 'views/login/login.html'
      , controller:'login.ctrl'
    })
    .state('home', {
      url: '/home'
      , templateUrl: 'views/home/home.html'
      , controller:'home.ctrl'
    });
  $urlRouterProvider.otherwise('/login');
})
