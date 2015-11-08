'use strict';
/* jshint esnext: true */

import NavBarController from './nav-bar.controller';

describe ('Nav-Bar Controller', () => {
    var navBarController;
    var page,
	user;

    beforeEach(() => {
	page = jasmine.createSpyObj('page', ['go']);
	user = jasmine.createSpyObj('user', ['logout']);

	navBarController = new NavBarController(user, page);
    });

    it('has page', () => {
	expect(navBarController.page).toBe(page);
    });

    it('has user', () => {
	expect(navBarController.user).toBe(user);
    });

    it('calls user.logout on logout', () => {
	navBarController.logout();

	expect(user.logout).toHaveBeenCalled();
    });

    it('goes to login page after successful logout', () => {
	navBarController.logout();

	expect(page.go).toHaveBeenCalledWith('/login');
    });
});
