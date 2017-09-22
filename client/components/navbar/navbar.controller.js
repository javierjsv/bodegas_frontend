
'use strict';

(function(){

class NavbarComponent {
  constructor(AuthService) {
    this.AuthService = AuthService;
  }

}

NavbarComponent.$inject = ['AuthService'];
angular.module('bodegasPalmarApp')
  .component('navbar', {
    templateUrl: 'components/navbar/navbar.html',
    controller: NavbarComponent,
    controllerAs: 'vm'
  });

})();
