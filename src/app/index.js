'use strict';
/* jshint esnext: true */

import uiModule from '../components/ui/ui.module';
import commonModule from '../components/common/common.module';

import homeModule from './home/home.module';
import contactModule from './contact/contact.module';
import A1Module from './A1/A1.module';
import A2Module from './A2/A2.module';

var LumbardinaModule = angular.module('Lumbardina', 
				      ['ngRoute',
				       uiModule.name,
				       commonModule.name,
				       homeModule.name,
				       contactModule.name,
				       A1Module.name,
				       A2Module.name,
				       'ui.bootstrap', 
				       'wu.masonry',
				       'ngSanitize',
				       'ngAnimate',
				       'angulartics',
				       'angulartics.google.analytics'] )	
    .config(($routeProvider) => {
	'ngInject';
	$routeProvider
	    .otherwise({
		redirectTo: '/'
	    });
    })
    .controller('commonCtrl', function(page) {
	'ngInject';
	this.page = page;	
    });

export default LumbardinaModule;
