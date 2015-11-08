'use strict';
/* jshint esnext: true */

class SuccessModalController {
    constructor($modal, page, $modalInstance, successMessage, successHeader, successLink) {
	'ngInject';

	this.$modalInstance = $modalInstance; 
	this.page = page;
	this.successMessage = successMessage;
	this.successHeader = successHeader;
	this.successLink = successLink;
    }

    cancel() {
	this.$modalInstance.close();
	this.page.go(this.successLink);
    }
}

export default SuccessModalController;
