'use strict';
/*jshint esnext: true */

import NavBarController from './nav-bar.controller';

var navBarDirective = () => {
    return {
	restrict: 'E',
        transclude: true,
	templateUrl: 'components/ui/nav-bar/nav-bar.template.html',
	scope: {},
	controller: NavBarController,
	controllerAs: 'navBar'
    };
};

export default navBarDirective;

