'use strict';
/* jshint esnext: true */

import ErrorModalService from './error-modal.service';
import ErrorModalController from './error-modal.controller';

describe('Error Modal Service', () => {
    beforeEach(angular.mock.module('maxeler.ui'));

    var $modal;
    var errorModalService;

    beforeEach(inject((_$modal_) => {
	$modal = _$modal_;

	spyOn($modal, 'open');

	errorModalService = new ErrorModalService($modal);
	errorModalService.open('Error message', 'Error header');
    }));

    it('opens error modal', () => {
	expect(errorModalService.$modal.open)
	    .toHaveBeenCalledWith({
		backdrop: false,
		templateUrl:'components/ui/error-modal/error-modal.template.html',
		controller: ErrorModalController,
		controllerAs: 'errorModal',
		resolve: {
		    errorMessage : jasmine.any(Function),
		    errorHeader : jasmine.any(Function)
		}
	    });
    });
});
