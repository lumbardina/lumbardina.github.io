'use strict';
/* jshint esnext: true */

import navBarDirective from './nav-bar/nav-bar.directive';

import successModalService from './success-modal/success-modal.service';
import errorModalService from './error-modal/error-modal.service';
import pdfViewDirective from './pdf-view/pdf-view.directive';
import commonModule from '../common/common.module';

var uiModule =  angular.module('maxeler.ui', ['ngSanitize',
					      'ngGrid', 
					      'ui.bootstrap',
					      commonModule.name])
	.service('successModalService', successModalService)
	.service('errorModalService', errorModalService)
	.directive('navBar', navBarDirective)
	.directive('pdfView', pdfViewDirective);

export default uiModule;
