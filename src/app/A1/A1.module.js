'use strict';
/* jshint esnext: true */

import A1Controller from './A1.controller';

var A1Module = angular.module('lumbardina.A1',
			      ['ngRoute'])
    .controller('A1Controller', A1Controller)
    .config(($routeProvider) => {
	'ngInject';

	$routeProvider
	    .when('/A1', {
		templateUrl: 'app/A1/A1.template.html',
		controller: 'A1Controller',
		controllerAs: 'A1Controller',
		bindToController: true
	    });
    });

export default A1Module;
