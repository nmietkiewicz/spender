'use strict';

angular.module('nspenderApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/categories', {
        templateUrl: 'app/categories/categories.html',
        controller: 'CategoriesCtrl'
      });
  });
