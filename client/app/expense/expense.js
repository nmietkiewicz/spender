'use strict';

angular.module('nspenderApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/expense', {
        templateUrl: 'app/expense/expense.html',
        controller: 'ExpenseCtrl'
      });
  });
