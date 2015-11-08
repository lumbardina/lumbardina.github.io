'use strict';
/* jshint esnext: true */

import HomeController from './home.controller';

var homeModule = angular.module('lumbardina.home',
				['ngRoute'])
	.controller('homeController', HomeController)
	.config(($routeProvider) => {
	    'ngInject';

	    $routeProvider
		.when('/', {
		    templateUrl: 'app/home/home.template.html',
		    controller: 'homeController',
		    controllerAs: 'homeController',
		    bindToController: true
		});
	});

export default homeModule;
