/* global angular  */
/* global cordova  */
/* global StatusBar  */

angular.module('hackathon', [
  'ionic'
  , 'app.homeCtrl'
  , 'app.loginCtrl'
  , 'app.directives'
  , 'app.factory'
  , 'app.services'
  , 'app.filters'
  , 'app.validators'
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
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "views/menu/menu.html"
    })
    .state('app.login', {
      url: "/login",
      views: {
        'appContent' :{
          templateUrl: 'views/login/login.html'
          , controller:'login.ctrl'
        }
      }
    })
    .state('app.home', {
      url: "/home",
      views: {
        'appContent' :{
          templateUrl: 'views/home/home.html'
          , controller:'home.ctrl'
        }
      }
    })
  $urlRouterProvider.otherwise('/app/login');
})
