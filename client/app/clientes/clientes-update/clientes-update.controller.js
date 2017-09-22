'use strict';

(function(){

	class ClientesUpdateComponent {
		constructor(usuariosService,$stateParams,$state){
			this.clientesService = clientesService;
			this.$stateParams = $stateParams;
			this.$state = $state;
		}
		$onInit(){

			this.clientesService.get({id:this.$stateParams.idClientes}).$promise
			.then(response => {
				this.clientes = response;
				console.log(this.clientes);
			})
			.catch(err => console.error(err));
		}

	updateClientes(){
		this.clientesService.update({id:this.clientes.id},this.clientes).$promise
		.then(response => {
			console.log("Clientes actualizado")
			this.$state.go('clientes-list');
		})
		.catch(err => console.error(err));
	}

}

angular.module('bodegasPalmarApp')
.component('clientesUpdate', {
	templateUrl: 'app/clientes/clientes-update/clientes-update.html',
	controller: ClientesUpdateComponent,
	controllerAs: 'vm'
});

})();
