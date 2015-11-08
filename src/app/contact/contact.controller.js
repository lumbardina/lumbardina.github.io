'use strict';
/* jshint esnext: true */
/* jshint -W106 */

class ContactController {
    constructor(page) {
	'ngInject';
	this.page = page;
	page.setTitle('Contact'); 
	this.map = {center: {latitude: 42.922672,
			     longitude:  17.171059 },
		    zoom: 15,
		    bounds: {},
		    options: {scrollwheel: false}};
	this.marker = {
	    id: 0,
	    coords: { 
		latitude: 42.922672,
		longitude: 17.171059
	    },
	    options: { draggable: true }
	};
	this.slides = [
	    {
		image: '/assets/images/A2/profile.jpg',
		text: 'Lumbardina A2'
	    },
	    {
		image: '/assets/images/A2/livingroom.jpg',
		text: 'Living room'
	    },
	    {
		image: '/assets/images/A2/kitchen.jpg',
		text: 'Kitchen'
	    },
	    {
		image: '/assets/images/A2/room2.jpg',
		text: 'Room'
	    },
	    {
		image: '/assets/images/A2/facade.jpg',
		text: 'Apartment from street'
	    }];
    }
}
export default ContactController;
