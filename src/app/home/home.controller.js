'use strict';
/* jshint esnext: true */
/* jshint -W106 */

class HomeController {
    constructor(page) {
	'ngInject';
	this.page = page;
	this.numberOfStars = 3;
	this.noWrapSlides = false;
	page.setTitle('Home');
	this.apartments = [
	    {
		image: '/assets/images/A2/profile.jpg',
		text: 'Lumbardina A2',
		link: '/A2'
	    },
	    {
		image: '/assets/images/A1/profile.jpg',
		text: 'Lumbardina A1',
		link: '/A1'
	    }];
	
	this.slides = [
	    {
		image: '/assets/images/A2/profile.jpg',
		text: 'Lumbardina A2'
	    },
	    {
		image: '/assets/images/A1/profile.jpg',
		text: 'Lumbardina A1'
	    },
	    {
		image: '/assets/images/Lumbarda/lumbarda.jpg',
		text: 'Lumbarda'
	    },
	    {
		image: '/assets/images/Lumbarda/bilin-zal.jpg',
		text: 'The best beaches of Korcula: Bilin Zal'
	    },
	    {
		image: '/assets/images/Lumbarda/bilin-zal1.jpg',
		text: 'The best beaches of Korcula: Bilin Zal'
	    },
	    {
		image: '/assets/images/Lumbarda/przina.jpg',
		text: 'The best beaches of Korcula: Przina'
	    }];
    }
}
export default HomeController;
