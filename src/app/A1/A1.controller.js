'use strict';
/* jshint esnext: true */
/* jshint -W106 */

class A1Controller {
    constructor(page) {
	'ngInject';
	this.page = page;
	page.setTitle('Home');
	this.slides = [
	    {
		image: '/assets/images/A1/profile.jpg',
		text: 'Lumbardina A1'
	    },
	    {
		image: '/assets/images/A1/balcony.jpg',
		text: 'Balcony'
	    },
	    {
		image: '/assets/images/A1/room1.jpg',
		text: 'Room'
	    },
	    {
		image: '/assets/images/A1/room2.jpg',
		text: 'Room'
	    },
	    {
		image: '/assets/images/A1/kitchen1.jpg',
		text: 'Kitchen'
	    },
	    {
		image: '/assets/images/A1/kitchen2.jpg',
		text: 'Kitchen'
	    },
	    {
		image: '/assets/images/A1/terrace.jpg',
		text: 'Terrace'
	    },
	    {
		image: '/assets/images/A1/terrace_barbecue.jpg',
		text: 'Terrace and barbecue'
	    }];
    }
}
export default A1Controller;
