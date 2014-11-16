'use strict';

angular.module('nspenderApp')
  .controller('CategoriesCtrl', function ($scope, $http, socket) {
    $scope.categoryList = [];
    $scope.newCategory = '';

    $http.get('/api/categories').success(function(categoryList) {
      $scope.categoryList = categoryList;
      socket.syncUpdates('category', $scope.categoryList);
    });

    $scope.addThing = function() {
      if($scope.newValue === '') { return; }
      $http.post('/api/categories', { 
      	name: $scope.newCategory
      });
      $scope.newCategory = '';
    };

    $scope.deleteCategory = function(category) {
      $http.delete('/api/categories/' + category._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('category');
    });
  });
