'use strict';
/* jshint esnext: true */

import ErrorModalController from './error-modal.controller';

class ErrorModalService {
    constructor($modal) {
	'ngInject';

	this.$modal = $modal;
    }

    open(message, header) {
	this.$modal.open({
	    backdrop: false,
	    templateUrl:'components/ui/error-modal/error-modal.template.html',
	    controller: ErrorModalController,
	    controllerAs: 'errorModal',
	    resolve: {
		errorMessage : () => message,
		errorHeader : () => header
	    }
	});
    }
}

export default ErrorModalService;
