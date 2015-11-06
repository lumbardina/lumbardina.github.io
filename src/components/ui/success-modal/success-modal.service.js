'use strict';
/* jshint esnext: true */

import SuccessModalController from './success-modal.controller';

class SuccessModalService {
    constructor($modal) {
	'ngInject';

	this.$modal = $modal;
    }

    open(message, header, link) {
	this.$modal.open({
	    backdrop: false,
	    templateUrl:'components/ui/success-modal/success-modal.template.html',
	    controller: SuccessModalController,
	    controllerAs: 'successModal',
	    resolve: {
		successMessage: () =>  message,
		successHeader: () => header,
		successLink: () => link
	    }
	});
    }
}

export default SuccessModalService;
