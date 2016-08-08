'use strict';
/* global angular */

angular.module('app.loginCtrl', [])

.controller('login.ctrl', function($scope, $rootScope, $state){
    $scope.goHome = function(){
        $state.go('app.home');
    };
    
    $scope.menu = false;
    
    $scope.closeMenu = function(){
        console.log('close menu');
    }
})