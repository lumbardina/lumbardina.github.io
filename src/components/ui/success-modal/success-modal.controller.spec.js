'use strict';
/* jshint esnext: true */

import SuccessModalController from './success-modal.controller';

describe('Success Modal Controller', () => {
    beforeEach(angular.mock.module('maxeler.ui'));

    var $modal,
	$modalInstance,
	page,
	successMessage,
	successHeader,
	successLink;
    var successModalController;

    beforeEach(inject((_$modal_,
		       _page_) => {
			   $modal = _$modal_;
			   page = _page_;
			   successMessage = 'Success message';
			   successHeader = 'Success header';
			   successLink = 'http://success/link';

			   $modalInstance = $modal.open(
			       {
				   backdrop: false,
				   templateUrl:'components/ui/success-modal/success-modal.template.html',
				   controller: SuccessModalController,
				   controllerAs: 'successModal',
				   resolve: {
				       successMessage: () =>  successMessage,
				       successHeader: () => successHeader,
				       successLink: () => successLink
				   }
			       });

			   successModalController =
			       new SuccessModalController($modal,
							  page,
							  $modalInstance,
							  successMessage,
							  successHeader,
							  successLink);
		       }));

    it('has page', () => {
	expect(successModalController.page).toBe(page);
    });

    it('has success message', () => {
	expect(successModalController.successMessage).toEqual(successMessage);
    });

    it('has success header', () => {
	expect(successModalController.successHeader).toEqual(successHeader);
    });

    it('has success link', () => {
	expect(successModalController.successLink).toEqual(successLink);
    });

    describe('when cancels', () => {
	beforeEach(() => {
	    spyOn(successModalController.$modalInstance, 'close');
	    spyOn(successModalController.page, 'go');

	    successModalController.cancel();
	});

	it('closes modal', () => {
	    expect(successModalController.$modalInstance.close).toHaveBeenCalled();
	});

	it('goes to other page', () => {
	    expect(successModalController.page.go)
		.toHaveBeenCalledWith(successLink);
	});
    });
});
