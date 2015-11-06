'use strict';
/* jshint esnext: true */
/* jshint -W106 */

class A2Controller {
    constructor(page) {
	'ngInject';
	this.page = page;
	page.setTitle('Home');
	this.noWrapSlides = false;
	this.slides = [
	    {
		image: '/assets/images/A2/profile.jpg',
		text: 'Lumbardina A2'
	    },
	    {
		image: '/assets/images/A2/terrace1.jpg',
		text: 'Terrace'
	    },
	    {
		image: '/assets/images/A2/terrace2.jpg',
		text: 'Terrace'
	    },
	    {
		image: '/assets/images/A2/terrace3.jpg',
		text: 'Terrace'
	    },
	    {
		image: '/assets/images/A2/Izabrana.jpg',
		text: 'Lumbardina A2'
	    },
	    {
		image: '/assets/images/A2/livingroom.jpg',
		text: 'Living room'
	    },
	    {
		image: '/assets/images/A2/livingroom2.jpg',
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
	    },
	    {
		image: '/assets/images/A2/entrance.jpg',
		text: 'Apartment entrance'
	    }];
    }
}
export default A2Controller;
