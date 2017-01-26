(function() {
    'use strict';

    angular.module('app').config(config)

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']
    //
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true)
        $stateProvider
            .state({
                name: 'house-list',
                url: '/',
                component: 'houseList',
            })
            .state({
                name: 'house-new',
                url: '/houses/new',
                component: 'houseNew',
            })
            .state({
                name: 'house-show',
                url: '/house-show/:id',
                component: 'houseShow',
            })
    }
}());
