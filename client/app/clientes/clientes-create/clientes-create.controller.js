'use strict';

(function(){

class ClientesCreateComponent {
  constructor(clientesService,$state) {
    this.clientesService = clientesService;
    this.$state = $state;
  }



  createClientes(){
  	this.clientesService.save(this.usuario).$promise
  	.then(response => {
  		console.log("Clientes registrado correctamente ",response);
      this.$state.go('clientes-list');
  	})
  	.catch(err=>{
  		console.log("Error al crear el cliente ",err);
  	})
  }
}
ClientesCreateComponent.$inject = ['clientesService','$state'];
angular.module('bodegasPalmarApp')
  .component('clientesCreate', {
    templateUrl: 'app/clientes/clientes-create/clientes-create.html',
    controller: ClientesCreateComponent,
    controllerAs: 'vm'
  });

})();
