'use strict';
/* jshint esnext: true */

class ErrorModalController {
    constructor($modal, $modalInstance, errorMessage, errorHeader) {
	'ngInject';

	this.$modal = $modal;
	this.$modalInstance = $modalInstance; 
	this.errorMessage = errorMessage;
	this.errorHeader = errorHeader;
    }

    cancel() {
	this.$modalInstance.close();
    }
}

export default ErrorModalController;
