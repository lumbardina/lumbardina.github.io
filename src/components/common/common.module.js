'use strict';
/*jshint esnext: true */

import PageService from './page.service';

const kilobytes = 1024;
const max_profile_picture_size = 100 * kilobytes;
const max_app_icon_size = 100 * kilobytes;

var commonModule =  angular.module('common', [])
	.service('page', PageService)
	.constant('kilobytes', kilobytes)
	.constant('max_app_icon_size', max_app_icon_size)
	.constant('max_profile_picture_size', max_profile_picture_size);

export default commonModule;
