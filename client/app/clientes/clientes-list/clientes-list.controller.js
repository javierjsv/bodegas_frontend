'use strict';

(function(){

class ClientesListComponent {
  constructor(clientesService) {
    this.clientesService = clientesService;
  }

  $onInit(){
  	this.clientesService.query().$promise
  	.then(response => {
  		console.log("CIENTES OK",response);
      this.clientes = response;
  	})
  	.catch(err => {
  		console.log("ERROR",err);
  	});


  }
}

ClientesListComponent.$inject = ['clientesService'];
angular.module('bodegasPalmarApp')
  .component('clientesList', {
    templateUrl: 'app/clientes/clientes-list/clientes-list.html',
    controller: ClientesListComponent,
    controllerAs: 'vm'
  });

})();
