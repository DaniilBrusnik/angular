'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

angular.module('value', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.names = ['rule.or', 'rule.and'];
     // $scope.my = { favorite: 'unicorns' };
    }]);

vm.array = [
  { "id": "rule1",
    "if": [
      { "type": "condition",
        "target": "placement",
        "compare": "<",
        "cpa": "2"
      },
      {
        "type": "logic",
        "or": true,
        "and": false
      },
      {
        "type": "condition",
        "target": "placement",
        "compare": "<",
        "cpa": "2"
      },
      {
        "type": "logic",
        "or": false,
        "and": true
      },
      [
        {
          "type": "condition",
          "target": "placement",
          "compare": "<",
          "cpa": "2"
        },
        {
          "type": "logic",
          "or": false,
          "and": true
        },
        {
          "type": "condition",
          "target": "placement",
          "compare": "<",
          "cpa": "2"
        }
      ]
    ],
    "then": "black"
  }];