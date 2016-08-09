'use strict';
/* global angular */

angular.module('app.directives', [])

.directive('toogleMenu', function(){
    return {
      template:  `<div ng-click="openMenu()">
                    <div id="nav-icon3" ng-class="{'open':menu}">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>`
    };
})