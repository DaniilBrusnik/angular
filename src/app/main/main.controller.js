(function () {
    'use strict';

    angular
      .module('test')
      .controller('MainController', MainController);


    /** @ngInject */
    function MainController($timeout, webDevTec, toastr, $scope) {

      var vm = this;
      vm.k=0;

      vm.array = [
        {
          "id": "rule",
          "if": [
            {
              id_rule: 'NewRule1',
              "type": "condition",
              "target": "Placement/App",
              "payment": "CPA",
              "compare": ">",
              "value": 0
            }
          ],
          "then": "black"
        }
      ];

      vm.addField = function (rule) {
        if (rule.$parent.$parent.$parent.$parent.rule) {
          var newItemNo = vm.array.length + 1;
          rule.$parent.$parent.$parent.$parent.rule.push(
            {"id_logic": "NewRule" + newItemNo, "type": "logic", "logicOrAnd": true},
            {"id_rule": "NewRule" + newItemNo,
              "type": "condition",
              "target": "Placement/App",
              "payment": "CPA",
              "compare": ">",
              "value": 0
            }
          );

        } else {
          var newItemNo = vm.array.length + 1;
          rule.$parent.$parent.rules.if.push(
            {"id_logic": "NewRule" + newItemNo, "type": "logic", "logicOrAnd": true},
            {"id_rule": "NewRule" + newItemNo,
              "type": "condition",
              "target": "Placement/App",
              "payment": "CPA",
              "compare": ">",
              "value": 0
            }
          );
        }
      };

      vm.addGroup = function (rule, ind) {
        if (rule.$parent.$parent.$parent.rule) {
          var newItemNo = vm.array.length + 1;
          rule.$parent.$parent.$parent.rule.push({
              "id_logic": "NewRule" + newItemNo,
              "type": "logic",
              "logicOrAnd": true
            },
            [
              {
                id_rule: 'NewGroup' + newItemNo,
                "type": "condition",
                "target": "Placement/App",
                "payment": "CPA",
                "compare": ">",
                "value": 0
              }
            ]
          );
        } else {
          var newItemNo = vm.array.length + 1;
          rule.$parent.rules.if.push({"id_logic": "NewRule" + newItemNo, "type": "logic", "logicOrAnd": true},
            [
              {
                id_rule: 'NewGroup' + newItemNo,
                "type": "condition",
                "target": "Placement/App",
                "payment": "CPA",
                "compare": ">",
                "value": 0
              }
            ]
          );
        }
      };

      vm.addNewRule = function () {
        var newItemNo = vm.array.length + 1;
        vm.array.push(
          {
            "id": "rule" + newItemNo,
            "if": [
              {"id_rule": "NewRule" + newItemNo,
                "type": "condition",
                "target": "Placement/App",
                "payment": "CPA",
                "compare": ">",
                "value": 0
              }
            ],
            "then": "black"
          }
        );
      };



      vm.deleteRule = function (ind) {
        vm.array.splice(ind, 1);
      };

      vm.deleteFilds = function (rule, ind) {
        /*rule.splice(ind, 2);*/
        if (rule.$parent.$parent.$parent.$parent.rule) {
          rule.$parent.$parent.$parent.$parent.rule.splice(ind, 2);
        } else {
          rule.$parent.$parent.rules.if.splice(ind, 2);
        }
      };

      vm.typeOfLogic = function (rule) {
        if (rule.type === 'logic') {
          return true;
        } else {
          return false;
        }
      };

      vm.typeOfObject = function (rule) {
        if (rule.type == 'condition') {
          return true;
        } else {
          return false;
        }
      };

      vm.typeOfArray = function (rule) {
        if (Array.isArray(rule) == true) {
          return true;
        } else {
          return false;
        }
      };

    }
  }
  )();
