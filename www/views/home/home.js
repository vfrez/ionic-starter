'use strict';
/* global angular */

angular.module('app.homeCtrl', [])

.controller('home.ctrl', function($scope, $state, $ionicSideMenuDelegate, $timeout){
    /**
     * @todo - Responsalvel para escutar se o menu está aberto ou não e jogar um valor booleano para a váriavel de controle na view
     */
    $scope.$watch(function (){
        return $ionicSideMenuDelegate.isOpenLeft();
    }, function (isOpen) {
        $timeout(function(){
            $scope.menu = isOpen;
        }, 160);
    });
    /**
     * @todo - Abre o sideMenu
     */
    $scope.openMenu = function(){
        $ionicSideMenuDelegate.toggleLeft();
    };
})