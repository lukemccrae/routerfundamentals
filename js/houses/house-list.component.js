(function() {
    'use strict'

    angular.module('app')
        .component('houseList', {
            controller: function($state, houseService) {

                const vm = this
                vm.$onInit = function() {
                    vm.houses = houseService.houses
                }
                vm.setHouse = function(house) {
                    $state.go('house-show', {
                        "id": house.id
                    })
                }
            },
            template: `
        <h1>Houses</h1>
        <ul>
          <li ng-repeat="house in $ctrl.houses" ng-click="$ctrl.setHouse(house)">
          {{house.address}}
          {{house.name}}
          </li>
        </ul>

<a ui-sref="house-new">Add Houses</a>
      `
        })

}());;
