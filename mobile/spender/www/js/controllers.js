angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
$scope.newExpense = {
            value: 15,
            date: Date.now(),
            category: 'food',
            title: 'ionicowy'
        };


	 $scope.categoryList = [];
    
    $http.get('http://localhost:9000/api/categories').success(function(categoryList) {
      $scope.categoryList = categoryList;
     });
        $scope.createExpense = function() {
            if ($scope.newValue === '') {
                return;
            }
            $http.post('http://localhost:9000/api/expenses', {
                value: $scope.newExpense.value,
                date: $scope.newExpense.date,
                category: $scope.newExpense.category,
                title: $scope.newExpense.title
            });
            $scope.newExpense = {
                value: 10,
                date: Date.now(),
                category: 'food',
                title: 'ionicowy po'
            };
        };


})

.controller('ExpensesCtrl', function($scope, $http, Friends) {
	$scope.expenseList = [];
 	$http.get('http://localhost:9000/api/expenses').success(function(expenseList) {
            $scope.expenseList = expenseList;
        });
  //$scope.friends = Friends.all();
})

.controller('ExpenseDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);




})

.controller('AccountCtrl', function($scope) {
})
.filter('categoryIcon', function() {
    return function(input) {
        switch (input) {
        case 'food':
            return 'ion-pizza';
        case 'entertainment':
            return 'ion-film-marker';
        default:
            return 'ion-asterisk';
        }
    };
});