(function () {
  'use strict';

  angular
    .module('test')
    .controller('MainController', MainController);


  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $scope) {

    var vm = this;


    vm.array = [
      {
        "id": "rule",
        "if": [
          {
            id_rule: 'NewRule1',
            "type": "condition",
            "target": "Carrier",
            "payment": "CPA",
            "compare": "Greater then",
            "value": ''
          }
        ],
        "then": "black"
      }
    ];

    vm.addNewRule = function () {

    }

    vm.addNewFields = function (rule) {
      var newItemNo = vm.array.length + 1;
      rule.push(
        {"id_logic": "NewRule" + newItemNo, "type": "logic", "logicOrAnd": true},
        {"id_rule": "NewRule" + newItemNo, "type": "condition", "target": "placement", "compare": "<", "value": ""}
      );

    };

    vm.addNewFieldsToGroups = function (data) {
      var newItemNo = vm.array.length + 1;
      data.push(
        {"id_logic": "NewRule" + newItemNo, "type": "logic", "logicOrAnd": true},
        {"id_rule": "NewRule" + newItemNo, "type": "condition", "target": "placement", "compare": "<", "value": ""}
      );

    };
    vm.addNewGroupFields = function (rule) {
      var newItemNo = vm.array.length + 1;
      rule.push(
        {"id_logic": "NewRule",
          "type": "logic",
          "logicOrAnd": true
        },
        { "type": "group",
          "nodes": [
            {
              id_rule: 'NewRule1',
              "type": "condition",
              "target": "Carrier",
              "payment": "CPA",
              "compare": "Greater then",
              "value": ''
            }
          ]
        }
      );
      console.log(vm.array);
    };
    vm.addNewRule = function () {
      var newItemNo = vm.array.length + 1;

      vm.array.push(
        {
          "id": "rule" + newItemNo,
          "if": [
            {
              "id_rule": "NewRule" + newItemNo,
              "type": "condition",
              "target": "placement",
              "compare": "<",
              "value": ""
            }
          ],
          "then": "black"
        }
      );
      console.log(vm.array);
    };


    vm.deleteNewlogic = function (ind) {

      vm.array.splice(ind, 1);

    };

    vm.deleteNewfilds = function (ruleIf, ind) {
      ruleIf.splice(ind, 2);

    };


    vm.addlist = function () {
    };
    vm.ChoiceB = function () {

      alert('condition');
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

    vm.typeOfGroup = function (rule) {
      if (rule.type == 'group') {
        return true;
      } else {
        return false;
      }
    };
  }

})();
