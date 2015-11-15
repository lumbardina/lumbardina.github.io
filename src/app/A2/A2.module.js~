'use strict';
/* jshint esnext: true */

import A2Controller from './A2.controller';

var A2Module = angular.module('lumbardina.A2',
				['ngRoute'])
	.controller('A2Controller', A2Controller)
	.config(($routeProvider) => {
	    'ngInject';

	    $routeProvider
		.when('/A2', {
		    templateUrl: 'app/A2/A2.template.html',
		    controller: 'A2Controller',
		    controllerAs: 'A2Controller',
		    bindToController: true
		});
	});

export default A2Module;
