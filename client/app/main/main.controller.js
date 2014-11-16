'use strict';

angular.module('nspenderApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
     $scope.expenseList = [];
        $scope.categoryList = [];
        $scope.newExpense = {
            value: 10,
            date: Date.now(),
            category: 'food',
            title: 'anonimowy'
        };

        $http.get('/api/expenses').success(function(expenseList) {
            $scope.expenseList = expenseList;
            socket.syncUpdates('expense', $scope.expenseList);
        });
        $http.get('/api/categories').success(function(categoryList) {
            $scope.categoryList = categoryList;
            socket.syncUpdates('category', $scope.categoryList);
        });


        $scope.addThing = function() {
            if ($scope.newValue === '') {
                return;
            }
            $http.post('/api/expenses', {
                value: $scope.newExpense.value,
                date: $scope.newExpense.date,
                category: $scope.newExpense.category,
                title: $scope.newExpense.title
            });
            $scope.newExpense = {
                value: 10,
                date: Date.now(),
                category: 'food',
                title: 'anonimowy'
            };
        };
//TODO: get by user
        $scope.deleteExpense = function(expense) {
            $http.delete('/api/expenses/' + expense._id);
        };

        $scope.$on('$destroy', function() {
            socket.unsyncUpdates('expense');
        });
  });
