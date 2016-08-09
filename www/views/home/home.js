'use strict';
/* global angular */

angular.module('app.homeCtrl', [])

.controller('home.ctrl', function($scope, $state, $ionicSideMenuDelegate, $timeout){
    $scope.$watch(function (){
        return $ionicSideMenuDelegate.isOpenLeft();
    }, function (isOpen) {
        $timeout(function(){
            $scope.menu = isOpen;
        }, 160);
  });
  
  $scope.openMenu = function(){
    $ionicSideMenuDelegate.toggleLeft();
  };
})