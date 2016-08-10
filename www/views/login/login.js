'use strict';
/* global angular */

angular.module('app.loginCtrl', [])

.controller('login.ctrl', function($scope, $rootScope, $state, $ionicLoading){
    $scope.goHome = function(){
        $ionicLoading.show({
            template: `
            <div class="loader">
                <div class="spinner"></div>
            </div>`
        });
        setTimeout(function(){
            $ionicLoading.hide();
            $state.go('app.home');
        },1000);
    };

    $scope.closeMenu = function(){
        console.log('close menu');
    };
})