'use strict';

angular.module('bodegasPalmarApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('clientes-create', {
        url: '/clientes-create',
        template: '<clientes-create></clientes-create>'
      })
      .state('clientes-list', {
        url: '/clientes-list',
        template: '<clientes-list></clientes-list>'
      })
      .state('clientes-update', {
        url: '/clientes-update',
        template: '<clientes-update></clientes-update>'
      });
  });
