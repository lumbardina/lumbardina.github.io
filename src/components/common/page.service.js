'use strict';
/* jshint esnext: true */

var darkBackground = { backgroundColor: '#2d3235',
		       backgroundSize: 'cover'
		     };

var lightBackground = { backgroundColor: 'white',
			backgroundSize: 'cover'
		      };
var blueBackground = { backgroundColor: '#00183A',
		       backgroundSize: 'cover'
		     };

var defaultBackground = lightBackground;

class PageService {
    constructor($location, $rootScope) {
	'ngInject';

	this.$location = $location;
	this.$rootScope = $rootScope;
	this.title = 'Apartments Lumbardina';

	this.history = [];

	// direction of transition when changing route (used by ng-view) 
	this.transition = 'right';
	this.background = lightBackground;

	$rootScope.$on('$locationChangeStart', ()=> {
	    this.background = defaultBackground;
	});
    }

    setTitle(newTitle) {
	this.title = newTitle;
    }
    
    setLightBackground() {
	this.background = lightBackground;
    }

    setDarkBackground() {
	this.background = darkBackground;
    }

    setBlueBackground() {
	this.background = blueBackground;
    } 

    go(path) {
	if(path === undefined) {
	    this.go('/');
	    return;
	}
	this.history.push(path);
	this.transition = this.transition === 'right' ? 'left' : 'right';
	this.$location.path(path);
    }

    goBack() {
	this.history.pop();
	this.go(this.history.pop());
    }

    deleteHistory() {
	this.history = [];
    }
}

export default PageService;