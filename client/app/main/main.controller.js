'use strict';

(function() {

  class MainController {

    constructor() {}

    $onInit() {


    }

  }

  angular.module('bodegasPalmarApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'vm'
    });
})();
