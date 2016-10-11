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
            "value": '',

          }
          ,
          /*{
           "type": "condition",
           "target": "Carrier",
           "payment": "CPA",
           "compare":"Greater then",
           "value": "2"
           },
           {
           "type": "logic",
           "logicOrAnd": false,
           },*/
          /*[
            {
             id_rule : 'NewRule1',
             "type": "condition",
             "target": "Carrier",
             "payment": "CPA",
             "compare":"Greater then",
             "value": ''
             },*/
            /* {
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
          ]*/

        ],
        "then": "black"
      }];

    vm.addNewRule = function () {

    }

    vm.addNewFields = function (rule) {
      var newItemNo = vm.array.length + 1;
      rule.push(
        {"id_logic": "NewRule" + newItemNo, "type": "logic", "logicOrAnd": true},
        {"id_rule": "NewRule" + newItemNo, "type": "condition", "target": "placement", "compare": "<", "value": ""}
      );

    };
    vm.addNewGroupFields = function (rule) {
      var newItemNo = vm.array.length + 1;
      rule.push(
        {"id_logic": "NewRule" + newItemNo, "type": "logic", "logicOrAnd": true},
        {"id_rule": "NewRule" + newItemNo, "type": "condition", "target": "placement", "compare": "<", "value": "",
          "if": [{
          id_rule: 'NewRule1',
          "type": "condition",
          "target": "Carrier",
          "payment": "CPA",
          "compare": "Greater then",
          "value": ''
        }]}



      );
    };
    vm.addNewRule = function () {
      var newItemNo = vm.array.length + 1;

      vm.array.push(
        {
          "id": "rule" + newItemNo,
          "if": [
            {"id_rule": "NewRule" + newItemNo, "type": "condition", "target": "placement", "compare": "<", "value": ""}
          ],
          "then": "black"
        }
      );

      /*  vm.array.push(
       { "id": "rule", "if": [
       { "id_rule" :"NewRule" +  newItemNo,
       "type": "condition",
       "target": "placement",
       "compare": "<",
       "value": ""
       }],
       "then": "black"
       }

       );*/

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

    vm.typeOfArray = function (rule) {
      if (Array.isArray(rule) == true) {
        return true;
      } else {
        return false;
      }
    };
  }

})();
