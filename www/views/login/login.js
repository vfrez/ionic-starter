'use strict';
/* global angular */

angular.module('app.login', [])

.controller('login.ctrl', function($scope, $rootScope, $state){
    $scope.goHome = function(){
        $state.go('home');
    };
})