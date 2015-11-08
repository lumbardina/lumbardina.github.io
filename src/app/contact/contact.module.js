'use strict';
/* jshint esnext: true */

import ContactController from './contact.controller';

var contactModule = angular.module('lumbardina.contact',
				   ['ngRoute',
				    'uiGmapgoogle-maps'])
	.controller('contactController', ContactController)
	.config(($routeProvider) => {
	    'ngInject';

	    $routeProvider
		.when('/contact', {
		    templateUrl: 'app/contact/contact.template.html',
		    controller: 'contactController',
		    controllerAs: 'contactController',
		    bindToController: true
		});
	});

export default contactModule;
