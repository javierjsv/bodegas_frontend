'use strict';

function clientesService($resource,API) {
	return $resource(API+"/api/clientes/:id",{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}
	})
}

angular.module('bodegasPalmarApp')
  .factory('clientesService', clientesService);
