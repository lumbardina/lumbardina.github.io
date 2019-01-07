(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
'use strict';
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var A1Controller = function A1Controller(page, openImageModalService) {
  'ngInject';
  this.page = page;
  this.openImageModalService = openImageModalService;
  page.setTitle('A1');
  this.mainSlides = [{
    image: 'assets/images/A1/profile.jpg',
    text: 'Lumbardina A1'
  }, {
    image: 'assets/images/A2/1020.jpg',
    text: 'Lumbardina apartments'
  }, {
    image: 'assets/images/A1/1030.jpg',
    text: 'Balcony'
  }, {
    image: 'assets/images/A1/1070.jpg',
    text: 'Access to stone house, parking, stone house and garden'
  }, {
    image: 'assets/images/A1/1290.jpg',
    text: 'Room 1'
  }, {
    image: 'assets/images/A1/1350.jpg',
    text: 'Room 1'
  }, {
    image: 'assets/images/A1/1410.jpg',
    text: 'Room 1'
  }];
  this.slides = [{
    image: 'assets/images/A1/profile.jpg',
    text: 'Lumbardina A1'
  }, {
    image: 'assets/images/A2/1020.jpg',
    text: 'Lumbardina apartments'
  }, {
    image: 'assets/images/A1/1025.jpg',
    text: 'Lumbardina apartments'
  }, {
    image: 'assets/images/A1/1030.jpg',
    text: 'Balcony'
  }, {
    image: 'assets/images/A1/1040.jpg',
    text: 'Stone house'
  }, {
    image: 'assets/images/A1/1050.jpg',
    text: 'Stone house'
  }, {
    image: 'assets/images/A1/1060.jpg',
    text: 'Stone house, A1 is on first floor and owner on the ground floor'
  }, {
    image: 'assets/images/A1/1070.jpg',
    text: 'Access to stone house, parking, stone house and garden'
  }, {
    image: 'assets/images/A1/1080.jpg',
    text: 'Path to stone house with parking'
  }, {
    image: 'assets/images/A1/1090.jpg',
    text: 'View and road from stone hose on garden, sea and apartment A2'
  }, {
    image: 'assets/images/A1/1095.jpg',
    text: 'View from the balcony of the apartment A1 and access to the sea'
  }, {
    image: 'assets/images/A1/1100.jpg',
    text: 'Balcony'
  }, {
    image: 'assets/images/A1/1120.jpg',
    text: 'View from apartment'
  }, {
    image: 'assets/images/A1/1140.jpg',
    text: 'Stairway to separate entrance of apartment A1'
  }, {
    image: 'assets/images/A1/1150.jpg',
    text: 'Fig tree next to stairway'
  }, {
    image: 'assets/images/A1/1160.jpg',
    text: 'Separate entrance to apartment and terrace'
  }, {
    image: 'assets/images/A1/1170.jpg',
    text: 'Terrace'
  }, {
    image: 'assets/images/A1/1180.jpg',
    text: 'Terrace and garden'
  }, {
    image: 'assets/images/A1/1190.jpg',
    text: 'Terrace'
  }, {
    image: 'assets/images/A1/1200.jpg',
    text: 'Terrace'
  }, {
    image: 'assets/images/A1/1210.jpg',
    text: 'Terrace'
  }, {
    image: 'assets/images/A1/1220.jpg',
    text: 'Kitchen'
  }, {
    image: 'assets/images/A1/1230.jpg',
    text: 'Kitchen and dining area'
  }, {
    image: 'assets/images/A1/1240.jpg',
    text: 'Kitchen'
  }, {
    image: 'assets/images/A1/1250.jpg',
    text: ''
  }, {
    image: 'assets/images/A1/1280.jpg',
    text: 'Bathroom 1'
  }, {
    image: 'assets/images/A1/1290.jpg',
    text: 'Bathroom 1'
  }, {
    image: 'assets/images/A1/1300.jpg',
    text: 'Bathroom 1'
  }, {
    image: 'assets/images/A1/1310.jpg',
    text: 'Room 1 (studio)'
  }, {
    image: 'assets/images/A1/1320.jpg',
    text: 'Room 1 (studio)'
  }, {
    image: 'assets/images/A1/1330.jpg',
    text: 'Room 1 (studio)'
  }, {
    image: 'assets/images/A1/1335.jpg',
    text: 'Room 1 (studio)'
  }, {
    image: 'assets/images/A1/1340.jpg',
    text: 'Room 1 (studio)'
  }, {
    image: 'assets/images/A1/1350.jpg',
    text: 'Room 1 (studio)'
  }, {
    image: 'assets/images/A1/1360.jpg',
    text: 'Room 1 (studio)'
  }, {
    image: 'assets/images/A1/1370.jpg',
    text: 'Room 1 (studio)'
  }, {
    image: 'assets/images/A1/1380.jpg',
    text: 'Room 2'
  }, {
    image: 'assets/images/A1/1390.jpg',
    text: 'terrace'
  }, {
    image: 'assets/images/A1/1400.jpg',
    text: 'Room 2'
  }, {
    image: 'assets/images/A1/1410.jpg',
    text: 'Room 3'
  }, {
    image: 'assets/images/A1/1420.jpg',
    text: 'Room 3'
  }, {
    image: 'assets/images/A1/1430.jpg',
    text: 'Bathroom 2 and separate toilet'
  }, {
    image: 'assets/images/A1/1440.jpg',
    text: 'Neighborhood'
  }, {
    image: 'assets/images/A1/1450.jpg',
    text: 'Neighborhood'
  }, {
    image: 'assets/images/A1/1460.jpg',
    text: 'Neighborhood'
  }, {
    image: 'assets/images/A1/1470.jpg',
    text: 'Neighborhood'
  }, {
    image: 'assets/images/A1/1480.jpg',
    text: 'Neighborhood'
  }, {
    image: 'assets/images/A1/1490.jpg',
    text: 'Sunset'
  }];
  this.openImageModalService.slides = this.slides;
};
A1Controller.$inject = ["page", "openImageModalService"];
($traceurRuntime.createClass)(A1Controller, {}, {});
var $__default = A1Controller;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/app/A1/A1.controller.js
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__A1_46_controller__;
'use strict';
var A1Controller = ($__A1_46_controller__ = require("./A1.controller"), $__A1_46_controller__ && $__A1_46_controller__.__esModule && $__A1_46_controller__ || {default: $__A1_46_controller__}).default;
var A1Module = angular.module('lumbardina.A1', ['ngRoute']).controller('A1Controller', A1Controller).config((["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  'ngInject';
  $routeProvider.when('/A1', {
    templateUrl: 'app/A1/A1.template.html',
    controller: 'A1Controller',
    controllerAs: 'A1Controller',
    bindToController: true
  });
}]));
var $__default = A1Module;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/app/A1/A1.module.js
},{"./A1.controller":1}],3:[function(require,module,exports){
"use strict";
'use strict';
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var A2Controller = function A2Controller(page, openImageModalService) {
  'ngInject';
  this.page = page;
  this.openImageModalService = openImageModalService;
  page.setTitle('A2');
  this.noWrapSlides = false;
  this.mainSlides = [{
    image: 'assets/images/A2/profile.jpg',
    text: ''
  }, {
    image: 'assets/images/A2/1020.jpg',
    text: 'Lumbardina apartments'
  }, {
    image: 'assets/images/A2/1050.jpg',
    text: 'May'
  }, {
    image: 'assets/images/A2/1110.jpg',
    text: ''
  }, {
    image: 'assets/images/A2/1056.jpg',
    text: ''
  }, {
    image: 'assets/images/A2/1057.jpg',
    text: ''
  }, {
    image: 'assets/images/A2/1058.jpg',
    text: ''
  }, {
    image: 'assets/images/A2/1059.jpg',
    text: ''
  }, {
    image: 'assets/images/A2/1070.jpg',
    text: ''
  }, {
    image: 'assets/images/A2/1320.jpg',
    text: 'view from the entrance side'
  }];
  this.slides = [{
    image: 'assets/images/A2/profile.jpg',
    text: ''
  }, {
    image: 'assets/images/A2/1020.jpg',
    text: 'Lumbardina apartments'
  }, {
    image: 'assets/images/A2/1030.jpg',
    text: 'April'
  }, {
    image: 'assets/images/A2/1040.jpg',
    text: 'April'
  }, {
    image: 'assets/images/A2/1050.jpg',
    text: 'May'
  }, {
    image: 'assets/images/A2/1055.jpg',
    text: 'The best balcony in Lumbarda'
  }, {
    image: 'assets/images/A2/1056.jpg',
    text: 'The best balcony in Lumbarda'
  }, {
    image: 'assets/images/A2/1057.jpg',
    text: 'The best balcony in Lumbarda'
  }, {
    image: 'assets/images/A2/1058.jpg',
    text: 'The best balcony in Lumbarda'
  }, {
    image: 'assets/images/A2/1059.jpg',
    text: 'The best balcony in Lumbarda'
  }, {
    image: 'assets/images/A2/1060.jpg',
    text: 'The best balcony in Lumbarda'
  }, {
    image: 'assets/images/A2/1070.jpg',
    text: 'The best balcony in Lumbarda'
  }, {
    image: 'assets/images/A2/1076.jpg',
    text: 'Awning'
  }, {
    image: 'assets/images/A2/1077.jpg',
    text: 'Awning'
  }, {
    image: 'assets/images/A2/1078.jpg',
    text: 'Awning'
  }, {
    image: 'assets/images/A2/1090.jpg',
    text: 'Living room'
  }, {
    image: 'assets/images/A2/1095.jpg',
    text: 'Living room'
  }, {
    image: 'assets/images/A2/1097.jpg',
    text: 'Living room'
  }, {
    image: 'assets/images/A2/1100.jpg',
    text: 'Living room'
  }, {
    image: 'assets/images/A2/1110.jpg',
    text: 'Living room'
  }, {
    image: 'assets/images/A2/1120.jpg',
    text: 'Living room'
  }, {
    image: 'assets/images/A2/1130.jpg',
    text: 'Living room'
  }, {
    image: 'assets/images/A2/1135.jpg',
    text: 'Living room - new TV'
  }, {
    image: 'assets/images/A2/1136.jpg',
    text: 'Living room - new TV'
  }, {
    image: 'assets/images/A2/1140.jpg',
    text: 'Entrance, Room 1, Kitchen and Dinig area'
  }, {
    image: 'assets/images/A2/1150.jpg',
    text: 'Kitchen'
  }, {
    image: 'assets/images/A2/1160.jpg',
    text: 'Kitchen'
  }, {
    image: 'assets/images/A2/1180.jpg',
    text: 'Room 1 and Bathroom2'
  }, {
    image: 'assets/images/A2/1190.jpg',
    text: 'Room 1'
  }, {
    image: 'assets/images/A2/1200.jpg',
    text: 'Room 1'
  }, {
    image: 'assets/images/A2/1210.jpg',
    text: 'Room 1'
  }, {
    image: 'assets/images/A2/1220.jpg',
    text: 'Room 1'
  }, {
    image: 'assets/images/A2/1225.jpg',
    text: 'Living room'
  }, {
    image: 'assets/images/A2/1230.jpg',
    text: 'Room 1, Bathroom 2, Room 2 and dining room'
  }, {
    image: 'assets/images/A2/1240.jpg',
    text: 'Bathroom 2 and Room 2'
  }, {
    image: 'assets/images/A2/1250.jpg',
    text: 'Room 2'
  }, {
    image: 'assets/images/A2/1260.jpg',
    text: 'Room 2'
  }, {
    image: 'assets/images/A2/1261.jpg',
    text: 'Room 2'
  }, {
    image: 'assets/images/A2/1262.jpg',
    text: 'Room 2'
  }, {
    image: 'assets/images/A2/1263.jpg',
    text: 'Room 2'
  }, {
    image: 'assets/images/A2/1280.jpg',
    text: 'Olive'
  }, {
    image: 'assets/images/A2/1290.jpg',
    text: 'Bathroom 1'
  }, {
    image: 'assets/images/A2/1300.jpg',
    text: 'Bathroom 1'
  }, {
    image: 'assets/images/A2/1310.jpg',
    text: 'view from the entrance side'
  }, {
    image: 'assets/images/A2/1315.jpg',
    text: 'view from the entrance side'
  }, {
    image: 'assets/images/A2/1320.jpg',
    text: 'view from the entrance side'
  }, {
    image: 'assets/images/A2/1330.jpg',
    text: 'Apartment from street'
  }, {
    image: 'assets/images/A2/1340.jpg',
    text: 'Neighborhood'
  }, {
    image: 'assets/images/A2/1350.jpg',
    text: 'Neighborhood'
  }, {
    image: 'assets/images/A2/1360.jpg',
    text: 'Neighborhood April'
  }, {
    image: 'assets/images/A2/1370.jpg',
    text: 'Neighborhood Jun'
  }, {
    image: 'assets/images/A2/1380.jpg',
    text: 'Neighborhood Jul'
  }, {
    image: 'assets/images/A2/1390.jpg',
    text: 'Neighborhood'
  }, {
    image: 'assets/images/A2/1400.jpg',
    text: 'Neighborhood'
  }, {
    image: 'assets/images/A2/1410.jpg',
    text: 'Sunset'
  }];
  this.openImageModalService.slides = this.slides;
};
A2Controller.$inject = ["page", "openImageModalService"];
($traceurRuntime.createClass)(A2Controller, {}, {});
var $__default = A2Controller;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/app/A2/A2.controller.js
},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__A2_46_controller__,
    $___46__46__47__46__46__47_components_47_ui_47_ui_46_module__;
'use strict';
var A2Controller = ($__A2_46_controller__ = require("./A2.controller"), $__A2_46_controller__ && $__A2_46_controller__.__esModule && $__A2_46_controller__ || {default: $__A2_46_controller__}).default;
var uiModule = ($___46__46__47__46__46__47_components_47_ui_47_ui_46_module__ = require("../../components/ui/ui.module"), $___46__46__47__46__46__47_components_47_ui_47_ui_46_module__ && $___46__46__47__46__46__47_components_47_ui_47_ui_46_module__.__esModule && $___46__46__47__46__46__47_components_47_ui_47_ui_46_module__ || {default: $___46__46__47__46__46__47_components_47_ui_47_ui_46_module__}).default;
var A2Module = angular.module('lumbardina.A2', ['ngRoute', uiModule.name]).controller('A2Controller', A2Controller).config((["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  'ngInject';
  $routeProvider.when('/A2', {
    templateUrl: 'app/A2/A2.template.html',
    controller: 'A2Controller',
    controllerAs: 'A2Controller',
    bindToController: true
  });
}]));
var $__default = A2Module;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/app/A2/A2.module.js
},{"../../components/ui/ui.module":22,"./A2.controller":3}],5:[function(require,module,exports){
"use strict";
'use strict';
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var ContactController = function ContactController(page) {
  'ngInject';
  this.page = page;
  page.setTitle('Contact');
  this.map = {
    center: {
      latitude: 42.922672,
      longitude: 17.171059
    },
    zoom: 15,
    bounds: {},
    options: {scrollwheel: false}
  };
  this.marker = {
    id: 0,
    coords: {
      latitude: 42.922672,
      longitude: 17.171059
    },
    options: {draggable: true}
  };
  this.slides = [{
    image: '/assets/images/A2/profile.jpg',
    text: 'Lumbardina A2'
  }, {
    image: '/assets/images/A2/livingroom.jpg',
    text: 'Living room'
  }, {
    image: '/assets/images/A2/kitchen.jpg',
    text: 'Kitchen'
  }, {
    image: '/assets/images/A2/room2.jpg',
    text: 'Room'
  }, {
    image: '/assets/images/A2/facade.jpg',
    text: 'Apartment from street'
  }];
};
ContactController.$inject = ["page"];
($traceurRuntime.createClass)(ContactController, {}, {});
var $__default = ContactController;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/app/contact/contact.controller.js
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__contact_46_controller__;
'use strict';
var ContactController = ($__contact_46_controller__ = require("./contact.controller"), $__contact_46_controller__ && $__contact_46_controller__.__esModule && $__contact_46_controller__ || {default: $__contact_46_controller__}).default;
var contactModule = angular.module('lumbardina.contact', ['ngRoute', 'uiGmapgoogle-maps']).controller('contactController', ContactController).config((["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  'ngInject';
  $routeProvider.when('/contact', {
    templateUrl: 'app/contact/contact.template.html',
    controller: 'contactController',
    controllerAs: 'contactController',
    bindToController: true
  });
}]));
var $__default = contactModule;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/app/contact/contact.module.js
},{"./contact.controller":5}],7:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $___46__46__47_components_47_ui_47_ui_46_module__,
    $___46__46__47_components_47_common_47_common_46_module__,
    $__home_47_home_46_module__,
    $__contact_47_contact_46_module__,
    $__A1_47_A1_46_module__,
    $__A2_47_A2_46_module__;
'use strict';
var uiModule = ($___46__46__47_components_47_ui_47_ui_46_module__ = require("../components/ui/ui.module"), $___46__46__47_components_47_ui_47_ui_46_module__ && $___46__46__47_components_47_ui_47_ui_46_module__.__esModule && $___46__46__47_components_47_ui_47_ui_46_module__ || {default: $___46__46__47_components_47_ui_47_ui_46_module__}).default;
var commonModule = ($___46__46__47_components_47_common_47_common_46_module__ = require("../components/common/common.module"), $___46__46__47_components_47_common_47_common_46_module__ && $___46__46__47_components_47_common_47_common_46_module__.__esModule && $___46__46__47_components_47_common_47_common_46_module__ || {default: $___46__46__47_components_47_common_47_common_46_module__}).default;
var homeModule = ($__home_47_home_46_module__ = require("./home/home.module"), $__home_47_home_46_module__ && $__home_47_home_46_module__.__esModule && $__home_47_home_46_module__ || {default: $__home_47_home_46_module__}).default;
var contactModule = ($__contact_47_contact_46_module__ = require("./contact/contact.module"), $__contact_47_contact_46_module__ && $__contact_47_contact_46_module__.__esModule && $__contact_47_contact_46_module__ || {default: $__contact_47_contact_46_module__}).default;
var A1Module = ($__A1_47_A1_46_module__ = require("./A1/A1.module"), $__A1_47_A1_46_module__ && $__A1_47_A1_46_module__.__esModule && $__A1_47_A1_46_module__ || {default: $__A1_47_A1_46_module__}).default;
var A2Module = ($__A2_47_A2_46_module__ = require("./A2/A2.module"), $__A2_47_A2_46_module__ && $__A2_47_A2_46_module__.__esModule && $__A2_47_A2_46_module__ || {default: $__A2_47_A2_46_module__}).default;
var LumbardinaModule = angular.module('LumbardinaWeb', ['ngRoute', uiModule.name, commonModule.name, homeModule.name, contactModule.name, A1Module.name, A2Module.name, 'ui.bootstrap', 'wu.masonry', 'ngSanitize', 'ngAnimate', 'angulartics', 'angulartics.google.analytics', 'angulartics.scroll']).config((["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  'ngInject';
  $routeProvider.otherwise({redirectTo: '/'});
}])).controller('commonCtrl', ["page", function(page) {
  'ngInject';
  this.page = page;
}]);
var $__default = LumbardinaModule;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/app/fake_a93e6b30.js
},{"../components/common/common.module":10,"../components/ui/ui.module":22,"./A1/A1.module":2,"./A2/A2.module":4,"./contact/contact.module":6,"./home/home.module":9}],8:[function(require,module,exports){
"use strict";
'use strict';
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var HomeController = function HomeController($window, page) {
  'ngInject';
  this.page = page;
  this.numberOfStars = 3;
  this.noWrapSlides = false;
  this.$window = $window;
  page.setTitle('Home');
  this.apartments = [{
    image: 'assets/images/A2/profile.jpg',
    text: 'Lumbardina A2',
    link: '/A2'
  }, {
    image: 'assets/images/A1/profile.jpg',
    text: 'Lumbardina A1',
    link: '/A1'
  }];
  this.slides = [{
    image: 'assets/images/A2/profile.jpg',
    text: 'Lumbardina A2'
  }, {
    image: 'assets/images/A1/profile.jpg',
    text: 'Lumbardina A1'
  }, {
    image: 'assets/images/Lumbarda/lumbarda.jpg',
    text: 'Lumbarda'
  }, {
    image: 'assets/images/Lumbarda/bilin-zal.jpg',
    text: 'The best beaches of Korcula: Bilin Zal'
  }, {
    image: 'assets/images/Lumbarda/bilin-zal1.jpg',
    text: 'The best beaches of Korcula: Bilin Zal'
  }, {
    image: 'assets/images/Lumbarda/przina.jpg',
    text: 'The best beaches of Korcula: Przina'
  }];
  this.map = {
    center: {
      latitude: 42.922672,
      longitude: 17.171059
    },
    zoom: 15,
    bounds: {},
    options: {scrollwheel: false}
  };
  this.marker = {
    id: 0,
    coords: {
      latitude: 42.922672,
      longitude: 17.171059
    },
    options: {draggable: true}
  };
};
HomeController.$inject = ["$window", "page"];
($traceurRuntime.createClass)(HomeController, {openAir: function() {
    this.$window.open('https://www.airbnb.com/users/show/7262321', '_blank');
  }}, {});
var $__default = HomeController;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/app/home/home.controller.js
},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__home_46_controller__;
'use strict';
var HomeController = ($__home_46_controller__ = require("./home.controller"), $__home_46_controller__ && $__home_46_controller__.__esModule && $__home_46_controller__ || {default: $__home_46_controller__}).default;
var homeModule = angular.module('lumbardina.home', ['ngRoute']).controller('homeController', HomeController).config((["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  'ngInject';
  $routeProvider.when('/', {
    templateUrl: 'app/home/home.template.html',
    controller: 'homeController',
    controllerAs: 'homeController',
    bindToController: true
  });
}]));
var $__default = homeModule;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/app/home/home.module.js
},{"./home.controller":8}],10:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__page_46_service__;
'use strict';
var PageService = ($__page_46_service__ = require("./page.service"), $__page_46_service__ && $__page_46_service__.__esModule && $__page_46_service__ || {default: $__page_46_service__}).default;
var kilobytes = 1024;
var max_profile_picture_size = 100 * kilobytes;
var max_app_icon_size = 100 * kilobytes;
var commonModule = angular.module('common', []).service('page', PageService).constant('kilobytes', kilobytes).constant('max_app_icon_size', max_app_icon_size).constant('max_profile_picture_size', max_profile_picture_size);
var $__default = commonModule;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/components/common/common.module.js
},{"./page.service":11}],11:[function(require,module,exports){
"use strict";
'use strict';
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var darkBackground = {
  backgroundColor: '#2d3235',
  backgroundSize: 'cover'
};
var lightBackground = {
  backgroundColor: 'white',
  backgroundSize: 'cover'
};
var blueBackground = {
  backgroundColor: '#00183A',
  backgroundSize: 'cover'
};
var defaultBackground = lightBackground;
var PageService = function PageService($location, $rootScope) {
  'ngInject';
  var $__0 = this;
  this.$location = $location;
  this.$rootScope = $rootScope;
  this.title = 'Apartments Lumbardina';
  this.history = [];
  this.transition = 'right';
  this.background = lightBackground;
  $rootScope.$on('$locationChangeStart', (function() {
    $__0.background = defaultBackground;
  }));
};
PageService.$inject = ["$location", "$rootScope"];
($traceurRuntime.createClass)(PageService, {
  setTitle: function(newTitle) {
    this.title = newTitle;
  },
  setLightBackground: function() {
    this.background = lightBackground;
  },
  setDarkBackground: function() {
    this.background = darkBackground;
  },
  setBlueBackground: function() {
    this.background = blueBackground;
  },
  go: function(path) {
    if (path === undefined) {
      this.go('/');
      return;
    }
    this.history.push(path);
    this.transition = this.transition === 'right' ? 'left' : 'right';
    this.$location.path(path);
  },
  goBack: function() {
    this.history.pop();
    this.go(this.history.pop());
  },
  deleteHistory: function() {
    this.history = [];
  }
}, {});
var $__default = PageService;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/components/common/page.service.js
},{}],12:[function(require,module,exports){
"use strict";
'use strict';
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var ErrorModalController = function ErrorModalController($modal, $modalInstance, errorMessage, errorHeader) {
  'ngInject';
  this.$modal = $modal;
  this.$modalInstance = $modalInstance;
  this.errorMessage = errorMessage;
  this.errorHeader = errorHeader;
};
ErrorModalController.$inject = ["$modal", "$modalInstance", "errorMessage", "errorHeader"];
($traceurRuntime.createClass)(ErrorModalController, {cancel: function() {
    this.$modalInstance.close();
  }}, {});
var $__default = ErrorModalController;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/components/ui/error-modal/error-modal.controller.js
},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__error_45_modal_46_controller__;
'use strict';
var ErrorModalController = ($__error_45_modal_46_controller__ = require("./error-modal.controller"), $__error_45_modal_46_controller__ && $__error_45_modal_46_controller__.__esModule && $__error_45_modal_46_controller__ || {default: $__error_45_modal_46_controller__}).default;
var ErrorModalService = function ErrorModalService($modal) {
  'ngInject';
  this.$modal = $modal;
};
ErrorModalService.$inject = ["$modal"];
($traceurRuntime.createClass)(ErrorModalService, {open: function(message, header) {
    this.$modal.open({
      backdrop: false,
      templateUrl: 'components/ui/error-modal/error-modal.template.html',
      controller: ErrorModalController,
      controllerAs: 'errorModal',
      resolve: {
        errorMessage: (function() {
          return message;
        }),
        errorHeader: (function() {
          return header;
        })
      }
    });
  }}, {});
var $__default = ErrorModalService;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/components/ui/error-modal/error-modal.service.js
},{"./error-modal.controller":12}],14:[function(require,module,exports){
"use strict";
'use strict';
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var NavBarController = function NavBarController(page) {
  'ngInject';
  this.page = page;
};
NavBarController.$inject = ["page"];
($traceurRuntime.createClass)(NavBarController, {}, {});
var $__default = NavBarController;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/components/ui/nav-bar/nav-bar.controller.js
},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__nav_45_bar_46_controller__;
'use strict';
var NavBarController = ($__nav_45_bar_46_controller__ = require("./nav-bar.controller"), $__nav_45_bar_46_controller__ && $__nav_45_bar_46_controller__.__esModule && $__nav_45_bar_46_controller__ || {default: $__nav_45_bar_46_controller__}).default;
var navBarDirective = (function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'components/ui/nav-bar/nav-bar.template.html',
    scope: {},
    controller: NavBarController,
    controllerAs: 'navBar'
  };
});
var $__default = navBarDirective;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/components/ui/nav-bar/nav-bar.directive.js
},{"./nav-bar.controller":14}],16:[function(require,module,exports){
"use strict";
'use strict';
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var imageViewDirective = (function($window) {
  'ngInject';
  return {
    restrict: 'A',
    link: (function($scope, elem, attr) {
      elem.on('load', (function() {
        console.log("sirina slike je", elem.innerWidth());
        console.log("sirina ekrana je", $window.innerWidth);
        var width = elem.innerWidth() < $window.innerWidth * 0.89 ? elem.innerWidth() : $window.innerWidth * 0.89;
        var height = elem.innerHeight() < $window.innerHeight * 0.70 ? elem.innerHeight() : $window.innerHeight * 0.70;
        elem.attr('style', 'max-width: ' + width + 'px;' + 'max-height: ' + height + 'px;');
      }));
    })
  };
});
imageViewDirective.$inject = ["$window"];
var $__default = imageViewDirective;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/components/ui/open-image-directive/open-image.directive.js
},{}],17:[function(require,module,exports){
"use strict";
'use strict';
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var OpenImageModalController = function OpenImageModalController($uibModalInstance, openImageModalService, page, imageInfo) {
  'ngInject';
  this.$uibModalInstance = $uibModalInstance;
  this.page = page;
  this.imageInfo = imageInfo;
  this.currentImage = imageInfo;
  this.openImageModalService = openImageModalService;
};
OpenImageModalController.$inject = ["$uibModalInstance", "openImageModalService", "page", "imageInfo"];
($traceurRuntime.createClass)(OpenImageModalController, {
  updateImage: function(direction) {
    var currentImageIndex = this.openImageModalService.slides.indexOf(this.currentImage);
    var newIndex = currentImageIndex + direction;
    if (newIndex >= 0 && newIndex < this.openImageModalService.slides.length) {
      this.currentImage = this.openImageModalService.slides[newIndex];
    }
  },
  keyPress: function($event) {
    if ($event.keyCode == 39) {
      this.updateImage(1);
    } else if ($event.keyCode == 37) {
      this.updateImage(-1);
    }
  },
  cancel: function() {
    this.$uibModalInstance.close();
  }
}, {});
var $__default = OpenImageModalController;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/components/ui/open-image-modal/open-image-modal.controller.js
},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__open_45_image_45_modal_46_controller__;
'use strict';
var OpenImageModalController = ($__open_45_image_45_modal_46_controller__ = require("./open-image-modal.controller"), $__open_45_image_45_modal_46_controller__ && $__open_45_image_45_modal_46_controller__.__esModule && $__open_45_image_45_modal_46_controller__ || {default: $__open_45_image_45_modal_46_controller__}).default;
var OpenImageModalService = function OpenImageModalService($uibModal) {
  'ngInject';
  this.$uibModal = $uibModal;
  this.slides = [];
};
OpenImageModalService.$inject = ["$uibModal"];
($traceurRuntime.createClass)(OpenImageModalService, {open: function(imageInfo) {
    this.$uibModal.open({
      backdrop: true,
      windowClass: 'full-screen-modal',
      templateUrl: 'components/ui/open-image-modal/open-image-modal.template.html',
      controller: OpenImageModalController,
      controllerAs: 'openImageModalController',
      resolve: {imageInfo: (function() {
          return imageInfo;
        })}
    });
  }}, {});
var $__default = OpenImageModalService;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/components/ui/open-image-modal/open-image-modal.service.js
},{"./open-image-modal.controller":17}],19:[function(require,module,exports){
"use strict";
'use strict';
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var pdfViewDirective = (function() {
  return {
    restrict: 'E',
    templateUrl: 'components/ui/pdf-view/pdf-view.template.html',
    scope: {pdf: '='}
  };
});
var $__default = pdfViewDirective;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/components/ui/pdf-view/pdf-view.directive.js
},{}],20:[function(require,module,exports){
"use strict";
'use strict';
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var SuccessModalController = function SuccessModalController($modal, page, $modalInstance, successMessage, successHeader, successLink) {
  'ngInject';
  this.$modalInstance = $modalInstance;
  this.page = page;
  this.successMessage = successMessage;
  this.successHeader = successHeader;
  this.successLink = successLink;
};
SuccessModalController.$inject = ["$modal", "page", "$modalInstance", "successMessage", "successHeader", "successLink"];
($traceurRuntime.createClass)(SuccessModalController, {cancel: function() {
    this.$modalInstance.close();
    this.page.go(this.successLink);
  }}, {});
var $__default = SuccessModalController;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/components/ui/success-modal/success-modal.controller.js
},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__success_45_modal_46_controller__;
'use strict';
var SuccessModalController = ($__success_45_modal_46_controller__ = require("./success-modal.controller"), $__success_45_modal_46_controller__ && $__success_45_modal_46_controller__.__esModule && $__success_45_modal_46_controller__ || {default: $__success_45_modal_46_controller__}).default;
var SuccessModalService = function SuccessModalService($modal) {
  'ngInject';
  this.$modal = $modal;
};
SuccessModalService.$inject = ["$modal"];
($traceurRuntime.createClass)(SuccessModalService, {open: function(message, header, link) {
    this.$modal.open({
      backdrop: false,
      templateUrl: 'components/ui/success-modal/success-modal.template.html',
      controller: SuccessModalController,
      controllerAs: 'successModal',
      resolve: {
        successMessage: (function() {
          return message;
        }),
        successHeader: (function() {
          return header;
        }),
        successLink: (function() {
          return link;
        })
      }
    });
  }}, {});
var $__default = SuccessModalService;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/components/ui/success-modal/success-modal.service.js
},{"./success-modal.controller":20}],22:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__nav_45_bar_47_nav_45_bar_46_directive__,
    $__success_45_modal_47_success_45_modal_46_service__,
    $__error_45_modal_47_error_45_modal_46_service__,
    $__pdf_45_view_47_pdf_45_view_46_directive__,
    $__open_45_image_45_directive_47_open_45_image_46_directive__,
    $___46__46__47_common_47_common_46_module__,
    $__open_45_image_45_modal_47_open_45_image_45_modal_46_service__;
'use strict';
var navBarDirective = ($__nav_45_bar_47_nav_45_bar_46_directive__ = require("./nav-bar/nav-bar.directive"), $__nav_45_bar_47_nav_45_bar_46_directive__ && $__nav_45_bar_47_nav_45_bar_46_directive__.__esModule && $__nav_45_bar_47_nav_45_bar_46_directive__ || {default: $__nav_45_bar_47_nav_45_bar_46_directive__}).default;
var successModalService = ($__success_45_modal_47_success_45_modal_46_service__ = require("./success-modal/success-modal.service"), $__success_45_modal_47_success_45_modal_46_service__ && $__success_45_modal_47_success_45_modal_46_service__.__esModule && $__success_45_modal_47_success_45_modal_46_service__ || {default: $__success_45_modal_47_success_45_modal_46_service__}).default;
var errorModalService = ($__error_45_modal_47_error_45_modal_46_service__ = require("./error-modal/error-modal.service"), $__error_45_modal_47_error_45_modal_46_service__ && $__error_45_modal_47_error_45_modal_46_service__.__esModule && $__error_45_modal_47_error_45_modal_46_service__ || {default: $__error_45_modal_47_error_45_modal_46_service__}).default;
var pdfViewDirective = ($__pdf_45_view_47_pdf_45_view_46_directive__ = require("./pdf-view/pdf-view.directive"), $__pdf_45_view_47_pdf_45_view_46_directive__ && $__pdf_45_view_47_pdf_45_view_46_directive__.__esModule && $__pdf_45_view_47_pdf_45_view_46_directive__ || {default: $__pdf_45_view_47_pdf_45_view_46_directive__}).default;
var imageViewDirective = ($__open_45_image_45_directive_47_open_45_image_46_directive__ = require("./open-image-directive/open-image.directive"), $__open_45_image_45_directive_47_open_45_image_46_directive__ && $__open_45_image_45_directive_47_open_45_image_46_directive__.__esModule && $__open_45_image_45_directive_47_open_45_image_46_directive__ || {default: $__open_45_image_45_directive_47_open_45_image_46_directive__}).default;
var commonModule = ($___46__46__47_common_47_common_46_module__ = require("../common/common.module"), $___46__46__47_common_47_common_46_module__ && $___46__46__47_common_47_common_46_module__.__esModule && $___46__46__47_common_47_common_46_module__ || {default: $___46__46__47_common_47_common_46_module__}).default;
var OpenImageModalService = ($__open_45_image_45_modal_47_open_45_image_45_modal_46_service__ = require("./open-image-modal/open-image-modal.service"), $__open_45_image_45_modal_47_open_45_image_45_modal_46_service__ && $__open_45_image_45_modal_47_open_45_image_45_modal_46_service__.__esModule && $__open_45_image_45_modal_47_open_45_image_45_modal_46_service__ || {default: $__open_45_image_45_modal_47_open_45_image_45_modal_46_service__}).default;
var uiModule = angular.module('maxeler.ui', ['ngSanitize', 'ngGrid', 'ui.bootstrap', commonModule.name]).service('successModalService', successModalService).service('errorModalService', errorModalService).service('openImageModalService', OpenImageModalService).directive('navBar', navBarDirective).directive('pdfView', pdfViewDirective).directive('imageViewDirective', imageViewDirective);
var $__default = uiModule;


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/components/ui/ui.module.js
},{"../common/common.module":10,"./error-modal/error-modal.service":13,"./nav-bar/nav-bar.directive":15,"./open-image-directive/open-image.directive":16,"./open-image-modal/open-image-modal.service":18,"./pdf-view/pdf-view.directive":19,"./success-modal/success-modal.service":21}]},{},[7])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9wZXRhci80YmRlOWYwNi04YjQ3LTQ0NDktYmY3YS05Y2NmZTA2OTgxOTEvd29ya3NwYWNlL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL21lZGlhL3BldGFyLzRiZGU5ZjA2LThiNDctNDQ0OS1iZjdhLTljY2ZlMDY5ODE5MS93b3Jrc3BhY2UvbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvYXBwL0ExL0ExLmNvbnRyb2xsZXIuanMiLCIvbWVkaWEvcGV0YXIvNGJkZTlmMDYtOGI0Ny00NDQ5LWJmN2EtOWNjZmUwNjk4MTkxL3dvcmtzcGFjZS9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9hcHAvQTEvQTEubW9kdWxlLmpzIiwiL21lZGlhL3BldGFyLzRiZGU5ZjA2LThiNDctNDQ0OS1iZjdhLTljY2ZlMDY5ODE5MS93b3Jrc3BhY2UvbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvYXBwL0EyL0EyLmNvbnRyb2xsZXIuanMiLCIvbWVkaWEvcGV0YXIvNGJkZTlmMDYtOGI0Ny00NDQ5LWJmN2EtOWNjZmUwNjk4MTkxL3dvcmtzcGFjZS9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9hcHAvQTIvQTIubW9kdWxlLmpzIiwiL21lZGlhL3BldGFyLzRiZGU5ZjA2LThiNDctNDQ0OS1iZjdhLTljY2ZlMDY5ODE5MS93b3Jrc3BhY2UvbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb250cm9sbGVyLmpzIiwiL21lZGlhL3BldGFyLzRiZGU5ZjA2LThiNDctNDQ0OS1iZjdhLTljY2ZlMDY5ODE5MS93b3Jrc3BhY2UvbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5tb2R1bGUuanMiLCIvbWVkaWEvcGV0YXIvNGJkZTlmMDYtOGI0Ny00NDQ5LWJmN2EtOWNjZmUwNjk4MTkxL3dvcmtzcGFjZS9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9hcHAvZmFrZV9hOTNlNmIzMC5qcyIsIi9tZWRpYS9wZXRhci80YmRlOWYwNi04YjQ3LTQ0NDktYmY3YS05Y2NmZTA2OTgxOTEvd29ya3NwYWNlL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2FwcC9ob21lL2hvbWUuY29udHJvbGxlci5qcyIsIi9tZWRpYS9wZXRhci80YmRlOWYwNi04YjQ3LTQ0NDktYmY3YS05Y2NmZTA2OTgxOTEvd29ya3NwYWNlL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2FwcC9ob21lL2hvbWUubW9kdWxlLmpzIiwiL21lZGlhL3BldGFyLzRiZGU5ZjA2LThiNDctNDQ0OS1iZjdhLTljY2ZlMDY5ODE5MS93b3Jrc3BhY2UvbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvY29tcG9uZW50cy9jb21tb24vY29tbW9uLm1vZHVsZS5qcyIsIi9tZWRpYS9wZXRhci80YmRlOWYwNi04YjQ3LTQ0NDktYmY3YS05Y2NmZTA2OTgxOTEvd29ya3NwYWNlL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2NvbXBvbmVudHMvY29tbW9uL3BhZ2Uuc2VydmljZS5qcyIsIi9tZWRpYS9wZXRhci80YmRlOWYwNi04YjQ3LTQ0NDktYmY3YS05Y2NmZTA2OTgxOTEvd29ya3NwYWNlL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2NvbXBvbmVudHMvdWkvZXJyb3ItbW9kYWwvZXJyb3ItbW9kYWwuY29udHJvbGxlci5qcyIsIi9tZWRpYS9wZXRhci80YmRlOWYwNi04YjQ3LTQ0NDktYmY3YS05Y2NmZTA2OTgxOTEvd29ya3NwYWNlL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2NvbXBvbmVudHMvdWkvZXJyb3ItbW9kYWwvZXJyb3ItbW9kYWwuc2VydmljZS5qcyIsIi9tZWRpYS9wZXRhci80YmRlOWYwNi04YjQ3LTQ0NDktYmY3YS05Y2NmZTA2OTgxOTEvd29ya3NwYWNlL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2NvbXBvbmVudHMvdWkvbmF2LWJhci9uYXYtYmFyLmNvbnRyb2xsZXIuanMiLCIvbWVkaWEvcGV0YXIvNGJkZTlmMDYtOGI0Ny00NDQ5LWJmN2EtOWNjZmUwNjk4MTkxL3dvcmtzcGFjZS9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9jb21wb25lbnRzL3VpL25hdi1iYXIvbmF2LWJhci5kaXJlY3RpdmUuanMiLCIvbWVkaWEvcGV0YXIvNGJkZTlmMDYtOGI0Ny00NDQ5LWJmN2EtOWNjZmUwNjk4MTkxL3dvcmtzcGFjZS9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9jb21wb25lbnRzL3VpL29wZW4taW1hZ2UtZGlyZWN0aXZlL29wZW4taW1hZ2UuZGlyZWN0aXZlLmpzIiwiL21lZGlhL3BldGFyLzRiZGU5ZjA2LThiNDctNDQ0OS1iZjdhLTljY2ZlMDY5ODE5MS93b3Jrc3BhY2UvbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvY29tcG9uZW50cy91aS9vcGVuLWltYWdlLW1vZGFsL29wZW4taW1hZ2UtbW9kYWwuY29udHJvbGxlci5qcyIsIi9tZWRpYS9wZXRhci80YmRlOWYwNi04YjQ3LTQ0NDktYmY3YS05Y2NmZTA2OTgxOTEvd29ya3NwYWNlL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2NvbXBvbmVudHMvdWkvb3Blbi1pbWFnZS1tb2RhbC9vcGVuLWltYWdlLW1vZGFsLnNlcnZpY2UuanMiLCIvbWVkaWEvcGV0YXIvNGJkZTlmMDYtOGI0Ny00NDQ5LWJmN2EtOWNjZmUwNjk4MTkxL3dvcmtzcGFjZS9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9jb21wb25lbnRzL3VpL3BkZi12aWV3L3BkZi12aWV3LmRpcmVjdGl2ZS5qcyIsIi9tZWRpYS9wZXRhci80YmRlOWYwNi04YjQ3LTQ0NDktYmY3YS05Y2NmZTA2OTgxOTEvd29ya3NwYWNlL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2NvbXBvbmVudHMvdWkvc3VjY2Vzcy1tb2RhbC9zdWNjZXNzLW1vZGFsLmNvbnRyb2xsZXIuanMiLCIvbWVkaWEvcGV0YXIvNGJkZTlmMDYtOGI0Ny00NDQ5LWJmN2EtOWNjZmUwNjk4MTkxL3dvcmtzcGFjZS9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9jb21wb25lbnRzL3VpL3N1Y2Nlc3MtbW9kYWwvc3VjY2Vzcy1tb2RhbC5zZXJ2aWNlLmpzIiwiL21lZGlhL3BldGFyLzRiZGU5ZjA2LThiNDctNDQ0OS1iZjdhLTljY2ZlMDY5ODE5MS93b3Jrc3BhY2UvbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvY29tcG9uZW50cy91aS91aS5tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUFBLFdBQVcsQ0FBQztBQUFaLEtBQUssaUJBQWlCLEFBQUMsQ0FBQyxPQUFNO1NBQTlCLEVBQUMsR0FBRSxZQUFxQjtBQUFFLHVCQUF3QjtJQUFFLEFBQTlCLENBQUM7QUFBdkIsV0FBUyxDQUFULEVBQUMsS0FBSSxDQUFPLEtBQUcsQUFBUyxDQUFDO0NBQXlCLENBQUM7QUFBbkQsQUFBSSxFQUFBLGVBSUosU0FBTSxhQUFXLENBQ0QsSUFBRyxDQUFHLENBQUEscUJBQW9CLENBQUc7QUFDNUMsV0FBUyxDQUFDO0FBQ1YsS0FBRyxLQUFLLEVBQUksS0FBRyxDQUFDO0FBQ2hCLEtBQUcsc0JBQXNCLEVBQUksc0JBQW9CLENBQUM7QUFFbEQsS0FBRyxTQUFTLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQztBQUVuQixLQUFHLFdBQVcsRUFBRyxFQUNiO0FBQ0gsUUFBSSxDQUFHLCtCQUE2QjtBQUNwQyxPQUFHLENBQUcsZ0JBQWM7QUFBQSxFQUNqQixDQUNBO0FBQ0gsUUFBSSxDQUFHLDRCQUEwQjtBQUNqQyxPQUFHLENBQUcsd0JBQXNCO0FBQUEsRUFDekIsQ0FDQTtBQUNILFFBQUksQ0FBRyw0QkFBMEI7QUFDakMsT0FBRyxDQUFHLFVBQVE7QUFBQSxFQUNYLENBQ0E7QUFDSCxRQUFJLENBQUcsNEJBQTBCO0FBQ2pDLE9BQUcsQ0FBRyx5REFBdUQ7QUFBQSxFQUMxRCxDQUNPO0FBQ1YsUUFBSSxDQUFHLDRCQUEwQjtBQUNqQyxPQUFHLENBQUcsU0FBTztBQUFBLEVBQ1Ys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REFBbUIsQ0FEOUQsQUFDK0QsQ0FBQztFQVN2RyxhQUFXLEVBVmxCLEVBQUMsNkNBQW9CLENBQUEsT0FBTSxBQUFDLDJCQUFrQixDQUN0QyxDQUFBLDhDQUFxQix1REFBMkIsQ0FBQSw4Q0FBcUIsR0FBSyxFQUFDLE9BQU0sNkNBQW1CLENBRDlELEFBQytELENBQUM7RUFVdkcsc0JBQW9CLEVBWDNCLEVBQUMsa0VBQW9CLENBQUEsT0FBTSxBQUFDLCtDQUFrQixDQUN0QyxDQUFBLG1FQUFxQiw0RUFBMkIsQ0FBQSxtRUFBcUIsR0FBSyxFQUFDLE9BQU0sa0VBQW1CLENBRDlELEFBQytELENBQUM7QUFZOUcsQUFBSSxFQUFBLENBQUEsUUFBTyxFQUFLLENBQUEsT0FBTSxPQUFPLEFBQUMsQ0FBQyxZQUFXLENBQUcsRUFBQyxZQUFXLENBQzlDLFNBQU8sQ0FDUCxlQUFhLENBQ2IsQ0FBQSxZQUFXLEtBQUssQ0FBQyxDQUFDLFFBQ2xCLEFBQUMsQ0FBQyxxQkFBb0IsQ0FBRyxvQkFBa0IsQ0FBQyxRQUM1QyxBQUFDLENBQUMsbUJBQWtCLENBQUcsa0JBQWdCLENBQUMsUUFDeEMsQUFBQyxDQUFDLHVCQUFzQixDQUFHLHNCQUFvQixDQUFDLFVBQzlDLEFBQUMsQ0FBQyxRQUFPLENBQUcsZ0JBQWMsQ0FBQyxVQUMzQixBQUFDLENBQUMsU0FBUSxDQUFHLGlCQUFlLENBQUMsVUFDN0IsQUFBQyxDQUFDLG9CQUFtQixDQUFHLG1CQUFpQixDQUFDLENBQUM7QUF0QnhELEFBQUksRUFBQSxDQUFBLFVBQVMsRUF3QkUsU0FBTyxBQXhCVyxDQUFBO0FBeUJqQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG4vKiBqc2hpbnQgLVcxMDYgKi9cblxuY2xhc3MgQTFDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYWdlLCBvcGVuSW1hZ2VNb2RhbFNlcnZpY2UpIHtcblx0J25nSW5qZWN0Jztcblx0dGhpcy5wYWdlID0gcGFnZTtcblx0dGhpcy5vcGVuSW1hZ2VNb2RhbFNlcnZpY2UgPSBvcGVuSW1hZ2VNb2RhbFNlcnZpY2U7XG5cblx0cGFnZS5zZXRUaXRsZSgnQTEnKTtcblxuXHR0aGlzLm1haW5TbGlkZXMgPVtcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvcHJvZmlsZS5qcGcnLFxuXHRcdHRleHQ6ICdMdW1iYXJkaW5hIEExJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTAyMC5qcGcnLFxuXHRcdHRleHQ6ICdMdW1iYXJkaW5hIGFwYXJ0bWVudHMnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMDMwLmpwZycsXG5cdFx0dGV4dDogJ0JhbGNvbnknXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMDcwLmpwZycsXG5cdFx0dGV4dDogJ0FjY2VzcyB0byBzdG9uZSBob3VzZSwgcGFya2luZywgc3RvbmUgaG91c2UgYW5kIGdhcmRlbidcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEyOTAuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAxJ1xuXHQgICAgfSxcbiAgICAgICAgICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTM1MC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDEnXG5cdCAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzE0MTAuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAxJ1xuXHQgICAgfVxuXHRdO1xuXG5cdHRoaXMuc2xpZGVzID0gW1xuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS9wcm9maWxlLmpwZycsXG5cdFx0dGV4dDogJ0x1bWJhcmRpbmEgQTEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDIwLmpwZycsXG5cdFx0dGV4dDogJ0x1bWJhcmRpbmEgYXBhcnRtZW50cydcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEwMjUuanBnJyxcblx0XHR0ZXh0OiAnTHVtYmFyZGluYSBhcGFydG1lbnRzJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTAzMC5qcGcnLFxuXHRcdHRleHQ6ICdCYWxjb255J1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTA0MC5qcGcnLFxuXHRcdHRleHQ6ICdTdG9uZSBob3VzZSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEwNTAuanBnJyxcblx0XHR0ZXh0OiAnU3RvbmUgaG91c2UnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMDYwLmpwZycsXG5cdFx0dGV4dDogJ1N0b25lIGhvdXNlLCBBMSBpcyBvbiBmaXJzdCBmbG9vciBhbmQgb3duZXIgb24gdGhlIGdyb3VuZCBmbG9vcidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEwNzAuanBnJyxcblx0XHR0ZXh0OiAnQWNjZXNzIHRvIHN0b25lIGhvdXNlLCBwYXJraW5nLCBzdG9uZSBob3VzZSBhbmQgZ2FyZGVuJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTA4MC5qcGcnLFxuXHRcdHRleHQ6ICdQYXRoIHRvIHN0b25lIGhvdXNlIHdpdGggcGFya2luZydcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEwOTAuanBnJyxcblx0XHR0ZXh0OiAnVmlldyBhbmQgcm9hZCBmcm9tIHN0b25lIGhvc2Ugb24gZ2FyZGVuLCBzZWEgYW5kIGFwYXJ0bWVudCBBMidcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEwOTUuanBnJyxcblx0XHR0ZXh0OiAnVmlldyBmcm9tIHRoZSBiYWxjb255IG9mIHRoZSBhcGFydG1lbnQgQTEgYW5kIGFjY2VzcyB0byB0aGUgc2VhJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTEwMC5qcGcnLFxuXHRcdHRleHQ6ICdCYWxjb255J1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTEyMC5qcGcnLFxuXHRcdHRleHQ6ICdWaWV3IGZyb20gYXBhcnRtZW50J1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTE0MC5qcGcnLFxuXHRcdHRleHQ6ICdTdGFpcndheSB0byBzZXBhcmF0ZSBlbnRyYW5jZSBvZiBhcGFydG1lbnQgQTEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMTUwLmpwZycsXG5cdFx0dGV4dDogJ0ZpZyB0cmVlIG5leHQgdG8gc3RhaXJ3YXknXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMTYwLmpwZycsXG5cdFx0dGV4dDogJ1NlcGFyYXRlIGVudHJhbmNlIHRvIGFwYXJ0bWVudCBhbmQgdGVycmFjZSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzExNzAuanBnJyxcblx0XHR0ZXh0OiAnVGVycmFjZSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzExODAuanBnJyxcblx0XHR0ZXh0OiAnVGVycmFjZSBhbmQgZ2FyZGVuJ1xuXHQgICAgfSAsXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzExOTAuanBnJyxcblx0XHR0ZXh0OiAnVGVycmFjZSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEyMDAuanBnJyxcblx0XHR0ZXh0OiAnVGVycmFjZSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEyMTAuanBnJyxcblx0XHR0ZXh0OiAnVGVycmFjZSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEyMjAuanBnJyxcblx0XHR0ZXh0OiAnS2l0Y2hlbidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEyMzAuanBnJyxcblx0XHR0ZXh0OiAnS2l0Y2hlbiBhbmQgZGluaW5nIGFyZWEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMjQwLmpwZycsXG5cdFx0dGV4dDogJ0tpdGNoZW4nXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMjUwLmpwZycsXG5cdFx0dGV4dDogJydcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEyODAuanBnJyxcblx0XHR0ZXh0OiAnQmF0aHJvb20gMSdcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEyOTAuanBnJyxcblx0XHR0ZXh0OiAnQmF0aHJvb20gMSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEzMDAuanBnJyxcblx0XHR0ZXh0OiAnQmF0aHJvb20gMSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEzMTAuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAxIChzdHVkaW8pJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTMyMC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDEgKHN0dWRpbyknXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMzMwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMSAoc3R1ZGlvKSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEzMzUuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAxIChzdHVkaW8pJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTM0MC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDEgKHN0dWRpbyknXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMzUwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMSAoc3R1ZGlvKSdcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEzNjAuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAxIChzdHVkaW8pJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTM3MC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDEgKHN0dWRpbyknXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMzgwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEzOTAuanBnJyxcblx0XHR0ZXh0OiAndGVycmFjZSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzE0MDAuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAyJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTQxMC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDMnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xNDIwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMydcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzE0MzAuanBnJyxcblx0XHR0ZXh0OiAnQmF0aHJvb20gMiBhbmQgc2VwYXJhdGUgdG9pbGV0J1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTQ0MC5qcGcnLFxuXHRcdHRleHQ6ICdOZWlnaGJvcmhvb2QnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xNDUwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzE0NjAuanBnJyxcblx0XHR0ZXh0OiAnTmVpZ2hib3Job29kJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTQ3MC5qcGcnLFxuXHRcdHRleHQ6ICdOZWlnaGJvcmhvb2QnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xNDgwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzE0OTAuanBnJyxcblx0XHR0ZXh0OiAnU3Vuc2V0J1xuXHQgICAgfV07XG4gICAgICAgIHRoaXMub3BlbkltYWdlTW9kYWxTZXJ2aWNlLnNsaWRlcyA9IHRoaXMuc2xpZGVzO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEExQ29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cblxuaW1wb3J0IEExQ29udHJvbGxlciBmcm9tICcuL0ExLmNvbnRyb2xsZXInO1xuXG52YXIgQTFNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnbHVtYmFyZGluYS5BMScsXG5cdFx0XHQgICAgICBbJ25nUm91dGUnXSlcbiAgICAuY29udHJvbGxlcignQTFDb250cm9sbGVyJywgQTFDb250cm9sbGVyKVxuICAgIC5jb25maWcoKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikgPT4ge1xuXHQnbmdJbmplY3QnO1xuXG5cdCRyb3V0ZVByb3ZpZGVyXG5cdCAgICAud2hlbignL0ExJywge1xuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL0ExL0ExLnRlbXBsYXRlLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdBMUNvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ0ExQ29udHJvbGxlcicsXG5cdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuXHQgICAgfSk7XG4gICAgICAgIC8vIHVzZSB0aGUgSFRNTDUgSGlzdG9yeSBBUElcbiAgICAgICAgLy8gJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuICAgIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBBMU1vZHVsZTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbi8qIGpzaGludCAtVzEwNiAqL1xuXG5jbGFzcyBBMkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhZ2UsIG9wZW5JbWFnZU1vZGFsU2VydmljZSkge1xuXHQnbmdJbmplY3QnO1xuXHR0aGlzLnBhZ2UgPSBwYWdlO1xuXHR0aGlzLm9wZW5JbWFnZU1vZGFsU2VydmljZSA9IG9wZW5JbWFnZU1vZGFsU2VydmljZTtcblxuXHRwYWdlLnNldFRpdGxlKCdBMicpO1xuXG5cdHRoaXMubm9XcmFwU2xpZGVzID0gZmFsc2U7XG5cdHRoaXMubWFpblNsaWRlcyA9W1xuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi9wcm9maWxlLmpwZycsXG5cdFx0dGV4dDogJydcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEwMjAuanBnJyxcblx0XHR0ZXh0OiAnTHVtYmFyZGluYSBhcGFydG1lbnRzJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTA1MC5qcGcnLFxuXHRcdHRleHQ6ICdNYXknXG5cdCAgICB9LFxuXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzExMTAuanBnJyxcblx0XHR0ZXh0OiAnJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTA1Ni5qcGcnLFxuXHRcdHRleHQ6ICcnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDU3LmpwZycsXG5cdFx0dGV4dDogJydcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEwNTguanBnJyxcblx0XHR0ZXh0OiAnJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTA1OS5qcGcnLFxuXHRcdHRleHQ6ICcnXG5cdCAgICB9LHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTA3MC5qcGcnLFxuXHRcdHRleHQ6ICcnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMzIwLmpwZycsXG5cdFx0dGV4dDogJ3ZpZXcgZnJvbSB0aGUgZW50cmFuY2Ugc2lkZSdcblx0ICAgIH1cblx0XTtcblx0dGhpcy5zbGlkZXMgPSBbXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyL3Byb2ZpbGUuanBnJyxcblx0XHR0ZXh0OiAnJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTAyMC5qcGcnLFxuXHRcdHRleHQ6ICdMdW1iYXJkaW5hIGFwYXJ0bWVudHMnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDMwLmpwZycsXG5cdFx0dGV4dDogJ0FwcmlsJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTA0MC5qcGcnLFxuXHRcdHRleHQ6ICdBcHJpbCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEwNTAuanBnJyxcblx0XHR0ZXh0OiAnTWF5J1xuXHQgICAgfSxcblxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDU1LmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJhbGNvbnkgaW4gTHVtYmFyZGEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDU2LmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJhbGNvbnkgaW4gTHVtYmFyZGEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDU3LmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJhbGNvbnkgaW4gTHVtYmFyZGEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDU4LmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJhbGNvbnkgaW4gTHVtYmFyZGEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDU5LmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJhbGNvbnkgaW4gTHVtYmFyZGEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDYwLmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJhbGNvbnkgaW4gTHVtYmFyZGEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDcwLmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJhbGNvbnkgaW4gTHVtYmFyZGEnXG5cdCAgICB9LFxuICAgICAgICAgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDc2LmpwZycsXG5cdFx0dGV4dDogJ0F3bmluZydcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEwNzcuanBnJyxcblx0XHR0ZXh0OiAnQXduaW5nJ1xuXHQgICAgfSxcbiAgICAgICAgICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTA3OC5qcGcnLFxuXHRcdHRleHQ6ICdBd25pbmcnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDkwLmpwZycsXG5cdFx0dGV4dDogJ0xpdmluZyByb29tJ1xuXHQgICAgfSxcbiAgICAgICAgICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTA5NS5qcGcnLFxuXHRcdHRleHQ6ICdMaXZpbmcgcm9vbSdcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEwOTcuanBnJyxcblx0XHR0ZXh0OiAnTGl2aW5nIHJvb20nXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMTAwLmpwZycsXG5cdFx0dGV4dDogJ0xpdmluZyByb29tJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTExMC5qcGcnLFxuXHRcdHRleHQ6ICdMaXZpbmcgcm9vbSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzExMjAuanBnJyxcblx0XHR0ZXh0OiAnTGl2aW5nIHJvb20nXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMTMwLmpwZycsXG5cdFx0dGV4dDogJ0xpdmluZyByb29tJ1xuXHQgICAgfSxcbiAgICAgICAgICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTEzNS5qcGcnLFxuXHRcdHRleHQ6ICdMaXZpbmcgcm9vbSAtIG5ldyBUVidcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzExMzYuanBnJyxcblx0XHR0ZXh0OiAnTGl2aW5nIHJvb20gLSBuZXcgVFYnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMTQwLmpwZycsXG5cdFx0dGV4dDogJ0VudHJhbmNlLCBSb29tIDEsIEtpdGNoZW4gYW5kIERpbmlnIGFyZWEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMTUwLmpwZycsXG5cdFx0dGV4dDogJ0tpdGNoZW4nXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMTYwLmpwZycsXG5cdFx0dGV4dDogJ0tpdGNoZW4nXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMTgwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMSBhbmQgQmF0aHJvb20yJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTE5MC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMjAwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEyMTAuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAxJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTIyMC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDEnXG5cdCAgICB9LFxuICAgICAgICAgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMjI1LmpwZycsXG5cdFx0dGV4dDogJ0xpdmluZyByb29tJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTIzMC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDEsIEJhdGhyb29tIDIsIFJvb20gMiBhbmQgZGluaW5nIHJvb20nXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMjQwLmpwZycsXG5cdFx0dGV4dDogJ0JhdGhyb29tIDIgYW5kIFJvb20gMidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEyNTAuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAyJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTI2MC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDInXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMjYxLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEyNjIuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAyJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTI2My5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDInXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMjgwLmpwZycsXG5cdFx0dGV4dDogJ09saXZlJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTI5MC5qcGcnLFxuXHRcdHRleHQ6ICdCYXRocm9vbSAxJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTMwMC5qcGcnLFxuXHRcdHRleHQ6ICdCYXRocm9vbSAxJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTMxMC5qcGcnLFxuXHRcdHRleHQ6ICd2aWV3IGZyb20gdGhlIGVudHJhbmNlIHNpZGUnXG5cdCAgICB9LFxuICAgICAgICAgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMzE1LmpwZycsXG5cdFx0dGV4dDogJ3ZpZXcgZnJvbSB0aGUgZW50cmFuY2Ugc2lkZSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEzMjAuanBnJyxcblx0XHR0ZXh0OiAndmlldyBmcm9tIHRoZSBlbnRyYW5jZSBzaWRlJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTMzMC5qcGcnLFxuXHRcdHRleHQ6ICdBcGFydG1lbnQgZnJvbSBzdHJlZXQnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMzQwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEzNTAuanBnJyxcblx0XHR0ZXh0OiAnTmVpZ2hib3Job29kJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTM2MC5qcGcnLFxuXHRcdHRleHQ6ICdOZWlnaGJvcmhvb2QgQXByaWwnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMzcwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCBKdW4nXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMzgwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCBKdWwnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMzkwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzE0MDAuanBnJyxcblx0XHR0ZXh0OiAnTmVpZ2hib3Job29kJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTQxMC5qcGcnLFxuXHRcdHRleHQ6ICdTdW5zZXQnXG5cdCAgICB9XTtcbiAgICAgICAgdGhpcy5vcGVuSW1hZ2VNb2RhbFNlcnZpY2Uuc2xpZGVzID0gdGhpcy5zbGlkZXM7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQTJDb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5pbXBvcnQgQTJDb250cm9sbGVyIGZyb20gJy4vQTIuY29udHJvbGxlcic7XG5pbXBvcnQgdWlNb2R1bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aS91aS5tb2R1bGUnO1xuXG5cbnZhciBBMk1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdsdW1iYXJkaW5hLkEyJyxcblx0XHRcdCAgICAgIFsnbmdSb3V0ZScsXG5cdFx0XHQgICAgICAgdWlNb2R1bGUubmFtZSxdKVxuICAgIC5jb250cm9sbGVyKCdBMkNvbnRyb2xsZXInLCBBMkNvbnRyb2xsZXIpXG4gICAgLmNvbmZpZygoJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSA9PiB7XG5cdCduZ0luamVjdCc7XG5cblx0JHJvdXRlUHJvdmlkZXJcblx0ICAgIC53aGVuKCcvQTInLCB7XG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvQTIvQTIudGVtcGxhdGUuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogJ0EyQ29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAnQTJDb250cm9sbGVyJyxcblx0XHRiaW5kVG9Db250cm9sbGVyOiB0cnVlXG5cdCAgICB9KTtcbiAgICAgICAgLy8gdXNlIHRoZSBIVE1MNSBIaXN0b3J5IEFQSVxuICAgICAgICAvLyAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG4gICAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IEEyTW9kdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuLyoganNoaW50IC1XMTA2ICovXG5cbmNsYXNzIENvbnRhY3RDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYWdlKSB7XG5cdCduZ0luamVjdCc7XG5cdHRoaXMucGFnZSA9IHBhZ2U7XG5cdHBhZ2Uuc2V0VGl0bGUoJ0NvbnRhY3QnKTtcblx0dGhpcy5tYXAgPSB7Y2VudGVyOiB7bGF0aXR1ZGU6IDQyLjkyMjY3Mixcblx0XHRcdCAgICAgbG9uZ2l0dWRlOiAgMTcuMTcxMDU5IH0sXG5cdFx0ICAgIHpvb206IDE1LFxuXHRcdCAgICBib3VuZHM6IHt9LFxuXHRcdCAgICBvcHRpb25zOiB7c2Nyb2xsd2hlZWw6IGZhbHNlfX07XG5cdHRoaXMubWFya2VyID0ge1xuXHQgICAgaWQ6IDAsXG5cdCAgICBjb29yZHM6IHtcblx0XHRsYXRpdHVkZTogNDIuOTIyNjcyLFxuXHRcdGxvbmdpdHVkZTogMTcuMTcxMDU5XG5cdCAgICB9LFxuXHQgICAgb3B0aW9uczogeyBkcmFnZ2FibGU6IHRydWUgfVxuXHR9O1xuXHR0aGlzLnNsaWRlcyA9IFtcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyL3Byb2ZpbGUuanBnJyxcblx0XHR0ZXh0OiAnTHVtYmFyZGluYSBBMidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi9saXZpbmdyb29tLmpwZycsXG5cdFx0dGV4dDogJ0xpdmluZyByb29tJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyL2tpdGNoZW4uanBnJyxcblx0XHR0ZXh0OiAnS2l0Y2hlbidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi9yb29tMi5qcGcnLFxuXHRcdHRleHQ6ICdSb29tJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyL2ZhY2FkZS5qcGcnLFxuXHRcdHRleHQ6ICdBcGFydG1lbnQgZnJvbSBzdHJlZXQnXG5cdCAgICB9XTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb250YWN0Q29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cblxuaW1wb3J0IENvbnRhY3RDb250cm9sbGVyIGZyb20gJy4vY29udGFjdC5jb250cm9sbGVyJztcblxudmFyIGNvbnRhY3RNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnbHVtYmFyZGluYS5jb250YWN0Jyxcblx0XHRcdFx0ICAgWyduZ1JvdXRlJyxcblx0XHRcdFx0ICAgICd1aUdtYXBnb29nbGUtbWFwcyddKVxuICAgIC5jb250cm9sbGVyKCdjb250YWN0Q29udHJvbGxlcicsIENvbnRhY3RDb250cm9sbGVyKVxuICAgIC5jb25maWcoKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikgPT4ge1xuXHQnbmdJbmplY3QnO1xuXG5cdCRyb3V0ZVByb3ZpZGVyXG5cdCAgICAud2hlbignL2NvbnRhY3QnLCB7XG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvY29udGFjdC9jb250YWN0LnRlbXBsYXRlLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdjb250YWN0Q29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAnY29udGFjdENvbnRyb2xsZXInLFxuXHRcdGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcblx0ICAgIH0pO1xuXHQvLyB1c2UgdGhlIEhUTUw1IEhpc3RvcnkgQVBJXG4gICAgICAgIC8vICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTt4XG4gICAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RNb2R1bGU7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmltcG9ydCB1aU1vZHVsZSBmcm9tICcuLi9jb21wb25lbnRzL3VpL3VpLm1vZHVsZSc7XG5pbXBvcnQgY29tbW9uTW9kdWxlIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL2NvbW1vbi5tb2R1bGUnO1xuXG5pbXBvcnQgaG9tZU1vZHVsZSBmcm9tICcuL2hvbWUvaG9tZS5tb2R1bGUnO1xuaW1wb3J0IGNvbnRhY3RNb2R1bGUgZnJvbSAnLi9jb250YWN0L2NvbnRhY3QubW9kdWxlJztcbmltcG9ydCBBMU1vZHVsZSBmcm9tICcuL0ExL0ExLm1vZHVsZSc7XG5pbXBvcnQgQTJNb2R1bGUgZnJvbSAnLi9BMi9BMi5tb2R1bGUnO1xuXG4vL2FuZ3VsYXIubW9kdWxlKCd0ZW1wbGF0ZXMnLCBbXSk7XG52YXIgTHVtYmFyZGluYU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdMdW1iYXJkaW5hV2ViJyxcblx0XHRcdFx0ICAgICAgWyduZ1JvdXRlJyxcblx0XHRcdFx0ICAgICAgIHVpTW9kdWxlLm5hbWUsXG5cdFx0XHRcdCAgICAgICBjb21tb25Nb2R1bGUubmFtZSxcblx0XHRcdFx0ICAgICAgIGhvbWVNb2R1bGUubmFtZSxcblx0XHRcdFx0ICAgICAgIGNvbnRhY3RNb2R1bGUubmFtZSxcblx0XHRcdFx0ICAgICAgIEExTW9kdWxlLm5hbWUsXG5cdFx0XHRcdCAgICAgICBBMk1vZHVsZS5uYW1lLFxuXHRcdFx0XHQgICAgICAgJ3VpLmJvb3RzdHJhcCcsXG5cdFx0XHRcdCAgICAgICAnd3UubWFzb25yeScsXG5cdFx0XHRcdCAgICAgICAnbmdTYW5pdGl6ZScsXG5cdFx0XHRcdCAgICAgICAnbmdBbmltYXRlJyxcblx0XHRcdFx0ICAgICAgICdhbmd1bGFydGljcycsXG5cdFx0XHRcdCAgICAgICAnYW5ndWxhcnRpY3MuZ29vZ2xlLmFuYWx5dGljcycsXG5cdFx0XHRcdCAgICAgICAnYW5ndWxhcnRpY3Muc2Nyb2xsJ10pXG4gICAgLmNvbmZpZygoJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSA9PiB7XG5cdCduZ0luamVjdCc7XG5cdCRyb3V0ZVByb3ZpZGVyXG5cdCAgICAub3RoZXJ3aXNlKHtcblx0XHRyZWRpcmVjdFRvOiAnLydcblx0ICAgIH0pO1xuICAgICAgICAvLyB1c2UgdGhlIEhUTUw1IEhpc3RvcnkgQVBJXG4gICAgICAgIC8vICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcbiAgICB9KVxuICAgIC5jb250cm9sbGVyKCdjb21tb25DdHJsJywgZnVuY3Rpb24ocGFnZSkge1xuXHQnbmdJbmplY3QnO1xuXHR0aGlzLnBhZ2UgPSBwYWdlO1xuICAgIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBMdW1iYXJkaW5hTW9kdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuLyoganNoaW50IC1XMTA2ICovXG5cbmNsYXNzIEhvbWVDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigkd2luZG93LCBwYWdlKSB7XG5cdCduZ0luamVjdCc7XG5cdHRoaXMucGFnZSA9IHBhZ2U7XG5cdHRoaXMubnVtYmVyT2ZTdGFycyA9IDM7XG5cdHRoaXMubm9XcmFwU2xpZGVzID0gZmFsc2U7XG5cdHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG5cdHBhZ2Uuc2V0VGl0bGUoJ0hvbWUnKTtcblx0dGhpcy5hcGFydG1lbnRzID0gW1xuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi9wcm9maWxlLmpwZycsXG5cdFx0dGV4dDogJ0x1bWJhcmRpbmEgQTInLFxuXHRcdGxpbms6ICcvQTInXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS9wcm9maWxlLmpwZycsXG5cdFx0dGV4dDogJ0x1bWJhcmRpbmEgQTEnLFxuXHRcdGxpbms6ICcvQTEnXG5cdCAgICB9XTtcblxuXHR0aGlzLnNsaWRlcyA9IFtcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvcHJvZmlsZS5qcGcnLFxuXHRcdHRleHQ6ICdMdW1iYXJkaW5hIEEyJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvcHJvZmlsZS5qcGcnLFxuXHRcdHRleHQ6ICdMdW1iYXJkaW5hIEExJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvTHVtYmFyZGEvbHVtYmFyZGEuanBnJyxcblx0XHR0ZXh0OiAnTHVtYmFyZGEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9MdW1iYXJkYS9iaWxpbi16YWwuanBnJyxcblx0XHR0ZXh0OiAnVGhlIGJlc3QgYmVhY2hlcyBvZiBLb3JjdWxhOiBCaWxpbiBaYWwnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9MdW1iYXJkYS9iaWxpbi16YWwxLmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJlYWNoZXMgb2YgS29yY3VsYTogQmlsaW4gWmFsJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvTHVtYmFyZGEvcHJ6aW5hLmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJlYWNoZXMgb2YgS29yY3VsYTogUHJ6aW5hJ1xuXHQgICAgfV07XG5cdHRoaXMubWFwID0ge2NlbnRlcjoge2xhdGl0dWRlOiA0Mi45MjI2NzIsXG5cdFx0XHQgICAgIGxvbmdpdHVkZTogIDE3LjE3MTA1OSB9LFxuXHRcdCAgICB6b29tOiAxNSxcblx0XHQgICAgYm91bmRzOiB7fSxcblx0XHQgICAgb3B0aW9uczoge3Njcm9sbHdoZWVsOiBmYWxzZX19O1xuXHR0aGlzLm1hcmtlciA9IHtcblx0ICAgIGlkOiAwLFxuXHQgICAgY29vcmRzOiB7XG5cdFx0bGF0aXR1ZGU6IDQyLjkyMjY3Mixcblx0XHRsb25naXR1ZGU6IDE3LjE3MTA1OVxuXHQgICAgfSxcblx0ICAgIG9wdGlvbnM6IHsgZHJhZ2dhYmxlOiB0cnVlIH1cblx0fTtcbiAgICB9XG5cbiAgICBvcGVuQWlyKCkge1xuXHR0aGlzLiR3aW5kb3cub3BlbignaHR0cHM6Ly93d3cuYWlyYm5iLmNvbS91c2Vycy9zaG93LzcyNjIzMjEnLCAnX2JsYW5rJyk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZUNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmltcG9ydCBIb21lQ29udHJvbGxlciBmcm9tICcuL2hvbWUuY29udHJvbGxlcic7XG5cbnZhciBob21lTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2x1bWJhcmRpbmEuaG9tZScsXG5cdFx0XHRcdFsnbmdSb3V0ZSddKVxuXHQuY29udHJvbGxlcignaG9tZUNvbnRyb2xsZXInLCBIb21lQ29udHJvbGxlcilcbiAgICAuY29uZmlnKCgkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpID0+IHtcblx0ICAgICduZ0luamVjdCc7XG5cblx0ICAgICRyb3V0ZVByb3ZpZGVyXG5cdFx0LndoZW4oJy8nLCB7XG5cdFx0ICAgIHRlbXBsYXRlVXJsOiAnYXBwL2hvbWUvaG9tZS50ZW1wbGF0ZS5odG1sJyxcblx0XHQgICAgY29udHJvbGxlcjogJ2hvbWVDb250cm9sbGVyJyxcblx0XHQgICAgY29udHJvbGxlckFzOiAnaG9tZUNvbnRyb2xsZXInLFxuXHRcdCAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG5cdFx0fSk7XG4gICAgICAgICAgICAvLyB1c2UgdGhlIEhUTUw1IEhpc3RvcnkgQVBJXG4gICAgICAgICAgICAvLyAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG5cdH0pO1xuXG5leHBvcnQgZGVmYXVsdCBob21lTW9kdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLypqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmltcG9ydCBQYWdlU2VydmljZSBmcm9tICcuL3BhZ2Uuc2VydmljZSc7XG5cbmNvbnN0IGtpbG9ieXRlcyA9IDEwMjQ7XG5jb25zdCBtYXhfcHJvZmlsZV9waWN0dXJlX3NpemUgPSAxMDAgKiBraWxvYnl0ZXM7XG5jb25zdCBtYXhfYXBwX2ljb25fc2l6ZSA9IDEwMCAqIGtpbG9ieXRlcztcblxudmFyIGNvbW1vbk1vZHVsZSA9ICBhbmd1bGFyLm1vZHVsZSgnY29tbW9uJywgW10pXG5cdC5zZXJ2aWNlKCdwYWdlJywgUGFnZVNlcnZpY2UpXG5cdC5jb25zdGFudCgna2lsb2J5dGVzJywga2lsb2J5dGVzKVxuXHQuY29uc3RhbnQoJ21heF9hcHBfaWNvbl9zaXplJywgbWF4X2FwcF9pY29uX3NpemUpXG5cdC5jb25zdGFudCgnbWF4X3Byb2ZpbGVfcGljdHVyZV9zaXplJywgbWF4X3Byb2ZpbGVfcGljdHVyZV9zaXplKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbW9uTW9kdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG52YXIgZGFya0JhY2tncm91bmQgPSB7IGJhY2tncm91bmRDb2xvcjogJyMyZDMyMzUnLFxuXHRcdCAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xuXHRcdCAgICAgfTtcblxudmFyIGxpZ2h0QmFja2dyb3VuZCA9IHsgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuXHRcdFx0YmFja2dyb3VuZFNpemU6ICdjb3Zlcidcblx0XHQgICAgICB9O1xudmFyIGJsdWVCYWNrZ3JvdW5kID0geyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAxODNBJyxcblx0XHQgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3Zlcidcblx0XHQgICAgIH07XG5cbnZhciBkZWZhdWx0QmFja2dyb3VuZCA9IGxpZ2h0QmFja2dyb3VuZDtcblxuY2xhc3MgUGFnZVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCRsb2NhdGlvbiwgJHJvb3RTY29wZSkge1xuXHQnbmdJbmplY3QnO1xuXG5cdHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuXHR0aGlzLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xuXHR0aGlzLnRpdGxlID0gJ0FwYXJ0bWVudHMgTHVtYmFyZGluYSc7XG5cblx0dGhpcy5oaXN0b3J5ID0gW107XG5cblx0Ly8gZGlyZWN0aW9uIG9mIHRyYW5zaXRpb24gd2hlbiBjaGFuZ2luZyByb3V0ZSAodXNlZCBieSBuZy12aWV3KSBcblx0dGhpcy50cmFuc2l0aW9uID0gJ3JpZ2h0Jztcblx0dGhpcy5iYWNrZ3JvdW5kID0gbGlnaHRCYWNrZ3JvdW5kO1xuXG5cdCRyb290U2NvcGUuJG9uKCckbG9jYXRpb25DaGFuZ2VTdGFydCcsICgpPT4ge1xuXHQgICAgdGhpcy5iYWNrZ3JvdW5kID0gZGVmYXVsdEJhY2tncm91bmQ7XG5cdH0pO1xuICAgIH1cblxuICAgIHNldFRpdGxlKG5ld1RpdGxlKSB7XG5cdHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG4gICAgXG4gICAgc2V0TGlnaHRCYWNrZ3JvdW5kKCkge1xuXHR0aGlzLmJhY2tncm91bmQgPSBsaWdodEJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgc2V0RGFya0JhY2tncm91bmQoKSB7XG5cdHRoaXMuYmFja2dyb3VuZCA9IGRhcmtCYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIHNldEJsdWVCYWNrZ3JvdW5kKCkge1xuXHR0aGlzLmJhY2tncm91bmQgPSBibHVlQmFja2dyb3VuZDtcbiAgICB9IFxuXG4gICAgZ28ocGF0aCkge1xuXHRpZihwYXRoID09PSB1bmRlZmluZWQpIHtcblx0ICAgIHRoaXMuZ28oJy8nKTtcblx0ICAgIHJldHVybjtcblx0fVxuXHR0aGlzLmhpc3RvcnkucHVzaChwYXRoKTtcblx0dGhpcy50cmFuc2l0aW9uID0gdGhpcy50cmFuc2l0aW9uID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3JpZ2h0Jztcblx0dGhpcy4kbG9jYXRpb24ucGF0aChwYXRoKTtcbiAgICB9XG5cbiAgICBnb0JhY2soKSB7XG5cdHRoaXMuaGlzdG9yeS5wb3AoKTtcblx0dGhpcy5nbyh0aGlzLmhpc3RvcnkucG9wKCkpO1xuICAgIH1cblxuICAgIGRlbGV0ZUhpc3RvcnkoKSB7XG5cdHRoaXMuaGlzdG9yeSA9IFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVNlcnZpY2U7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmNsYXNzIEVycm9yTW9kYWxDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigkbW9kYWwsICRtb2RhbEluc3RhbmNlLCBlcnJvck1lc3NhZ2UsIGVycm9ySGVhZGVyKSB7XG5cdCduZ0luamVjdCc7XG5cblx0dGhpcy4kbW9kYWwgPSAkbW9kYWw7XG5cdHRoaXMuJG1vZGFsSW5zdGFuY2UgPSAkbW9kYWxJbnN0YW5jZTsgXG5cdHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlO1xuXHR0aGlzLmVycm9ySGVhZGVyID0gZXJyb3JIZWFkZXI7XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuXHR0aGlzLiRtb2RhbEluc3RhbmNlLmNsb3NlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvck1vZGFsQ29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cblxuaW1wb3J0IEVycm9yTW9kYWxDb250cm9sbGVyIGZyb20gJy4vZXJyb3ItbW9kYWwuY29udHJvbGxlcic7XG5cbmNsYXNzIEVycm9yTW9kYWxTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigkbW9kYWwpIHtcblx0J25nSW5qZWN0JztcblxuXHR0aGlzLiRtb2RhbCA9ICRtb2RhbDtcbiAgICB9XG5cbiAgICBvcGVuKG1lc3NhZ2UsIGhlYWRlcikge1xuXHR0aGlzLiRtb2RhbC5vcGVuKHtcblx0ICAgIGJhY2tkcm9wOiBmYWxzZSxcblx0ICAgIHRlbXBsYXRlVXJsOidjb21wb25lbnRzL3VpL2Vycm9yLW1vZGFsL2Vycm9yLW1vZGFsLnRlbXBsYXRlLmh0bWwnLFxuXHQgICAgY29udHJvbGxlcjogRXJyb3JNb2RhbENvbnRyb2xsZXIsXG5cdCAgICBjb250cm9sbGVyQXM6ICdlcnJvck1vZGFsJyxcblx0ICAgIHJlc29sdmU6IHtcblx0XHRlcnJvck1lc3NhZ2UgOiAoKSA9PiBtZXNzYWdlLFxuXHRcdGVycm9ySGVhZGVyIDogKCkgPT4gaGVhZGVyXG5cdCAgICB9XG5cdH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JNb2RhbFNlcnZpY2U7XG4iLCIndXNlIHN0cmljdCc7XG4vKmpzaGludCBlc25leHQ6IHRydWUgKi9cblxuY2xhc3MgTmF2QmFyQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IocGFnZSkge1xuXHQnbmdJbmplY3QnO1xuXG5cdHRoaXMucGFnZSA9IHBhZ2U7XHRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhckNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG4vKmpzaGludCBlc25leHQ6IHRydWUgKi9cblxuaW1wb3J0IE5hdkJhckNvbnRyb2xsZXIgZnJvbSAnLi9uYXYtYmFyLmNvbnRyb2xsZXInO1xuXG52YXIgbmF2QmFyRGlyZWN0aXZlID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG5cdHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG5cdHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy91aS9uYXYtYmFyL25hdi1iYXIudGVtcGxhdGUuaHRtbCcsXG5cdHNjb3BlOiB7fSxcblx0Y29udHJvbGxlcjogTmF2QmFyQ29udHJvbGxlcixcblx0Y29udHJvbGxlckFzOiAnbmF2QmFyJ1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuYXZCYXJEaXJlY3RpdmU7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGltYWdlVmlld0RpcmVjdGl2ZSA9ICgkd2luZG93KSA9PiB7XG4gICAgJ25nSW5qZWN0JztcbiAgICByZXR1cm4ge1xuXHRyZXN0cmljdDogJ0EnLFxuXHRsaW5rOiAoJHNjb3BlLCBlbGVtLCBhdHRyKSA9PiB7XG4gICAgICAgICAgICBlbGVtLm9uKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2lyaW5hIHNsaWtlIGplXCIsIGVsZW0uaW5uZXJXaWR0aCgpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNpcmluYSBla3JhbmEgamVcIiwgJHdpbmRvdy5pbm5lcldpZHRoKTtcblxuXHRcdGxldCB3aWR0aCA9IGVsZW0uaW5uZXJXaWR0aCgpIDwgJHdpbmRvdy5pbm5lcldpZHRoKjAuODkgPyBlbGVtLmlubmVyV2lkdGgoKSA6ICR3aW5kb3cuaW5uZXJXaWR0aCowLjg5O1xuXHRcdGxldCBoZWlnaHQgPSBlbGVtLmlubmVySGVpZ2h0KCkgPCAkd2luZG93LmlubmVySGVpZ2h0KjAuNzAgPyBlbGVtLmlubmVySGVpZ2h0KCkgOiAkd2luZG93LmlubmVySGVpZ2h0ICowLjcwO1xuXHRcdGVsZW0uYXR0cignc3R5bGUnLCAnbWF4LXdpZHRoOiAnICsgd2lkdGggKyAncHg7JyArICdtYXgtaGVpZ2h0OiAnICsgaGVpZ2h0ICsgJ3B4OycpO1xuXHQgICAgfSk7XG5cdH1cbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW1hZ2VWaWV3RGlyZWN0aXZlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5jbGFzcyBPcGVuSW1hZ2VNb2RhbENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCR1aWJNb2RhbEluc3RhbmNlLCBvcGVuSW1hZ2VNb2RhbFNlcnZpY2UsIHBhZ2UsIGltYWdlSW5mbykge1xuXHQnbmdJbmplY3QnO1xuXHR0aGlzLiR1aWJNb2RhbEluc3RhbmNlID0gJHVpYk1vZGFsSW5zdGFuY2U7XG5cdHRoaXMucGFnZSA9IHBhZ2U7XG5cdHRoaXMuaW1hZ2VJbmZvID0gaW1hZ2VJbmZvO1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IGltYWdlSW5mbztcbiAgICAgICAgdGhpcy5vcGVuSW1hZ2VNb2RhbFNlcnZpY2UgPSBvcGVuSW1hZ2VNb2RhbFNlcnZpY2U7XG4gICAgfVxuXG4gICAgdXBkYXRlSW1hZ2UoZGlyZWN0aW9uKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgV2lsbCBzaG93IG5leHQgaW1hZ2UgaWYgZGlyZWN0aW9uIGlzIDEsXG4gICAgICAgICAgaWYgZGlyZWN0aW9uIGlzIC0xIHNob3dzLCBwcmV2aW91c1xuICAgICAgICAqL1xuICAgICAgICBsZXQgY3VycmVudEltYWdlSW5kZXggPVxuICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VNb2RhbFNlcnZpY2Uuc2xpZGVzLmluZGV4T2YodGhpcy5jdXJyZW50SW1hZ2UpO1xuICAgICAgICBsZXQgbmV3SW5kZXggPSBjdXJyZW50SW1hZ2VJbmRleCArIGRpcmVjdGlvbjtcbiAgICAgICAgaWYgKG5ld0luZGV4ID49IDAgJiYgbmV3SW5kZXggPCB0aGlzLm9wZW5JbWFnZU1vZGFsU2VydmljZS5zbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VNb2RhbFNlcnZpY2Uuc2xpZGVzW25ld0luZGV4XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtleVByZXNzKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LmtleUNvZGUgPT0gMzkpIHtcbiAgICAgICAgICAgIC8vcmlnaHQgYXJyb3dcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW1hZ2UoMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoJGV2ZW50LmtleUNvZGUgPT0gMzcpIHtcbiAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xuICAgICAgICAgICAgdGhpcy51cGRhdGVJbWFnZSgtMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG5cdHRoaXMuJHVpYk1vZGFsSW5zdGFuY2UuY2xvc2UoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9wZW5JbWFnZU1vZGFsQ29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cblxuaW1wb3J0IE9wZW5JbWFnZU1vZGFsQ29udHJvbGxlciBmcm9tICcuL29wZW4taW1hZ2UtbW9kYWwuY29udHJvbGxlcic7XG5cbmNsYXNzIE9wZW5JbWFnZU1vZGFsU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoJHVpYk1vZGFsKSB7XG5cdCduZ0luamVjdCc7XG5cdHRoaXMuJHVpYk1vZGFsID0gJHVpYk1vZGFsO1xuICAgICAgICB0aGlzLnNsaWRlcyA9IFtdO1xuICAgIH1cblxuICAgIG9wZW4oaW1hZ2VJbmZvKSB7XG5cdHRoaXMuJHVpYk1vZGFsLm9wZW4oe1xuXHQgICAgYmFja2Ryb3A6IHRydWUsXG5cdCAgICB3aW5kb3dDbGFzczogJ2Z1bGwtc2NyZWVuLW1vZGFsJyxcblx0ICAgIHRlbXBsYXRlVXJsOidjb21wb25lbnRzL3VpL29wZW4taW1hZ2UtbW9kYWwvb3Blbi1pbWFnZS1tb2RhbC50ZW1wbGF0ZS5odG1sJyxcblx0ICAgIGNvbnRyb2xsZXI6IE9wZW5JbWFnZU1vZGFsQ29udHJvbGxlcixcblx0ICAgIGNvbnRyb2xsZXJBczogJ29wZW5JbWFnZU1vZGFsQ29udHJvbGxlcicsXG5cdCAgICByZXNvbHZlOiB7XG5cdFx0aW1hZ2VJbmZvOiAoKSA9PiBpbWFnZUluZm9cblx0ICAgIH1cblx0fSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcGVuSW1hZ2VNb2RhbFNlcnZpY2U7XG4iLCIndXNlIHN0cmljdCc7XG4vKmpzaGludCBlc25leHQ6IHRydWUgKi9cblxudmFyIHBkZlZpZXdEaXJlY3RpdmUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcblx0cmVzdHJpY3Q6ICdFJyxcblx0dGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL3VpL3BkZi12aWV3L3BkZi12aWV3LnRlbXBsYXRlLmh0bWwnLFxuXHRzY29wZTogeyBwZGYgICAgIDogJz0nXG5cdCAgICAgICB9XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBkZlZpZXdEaXJlY3RpdmU7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmNsYXNzIFN1Y2Nlc3NNb2RhbENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCRtb2RhbCwgcGFnZSwgJG1vZGFsSW5zdGFuY2UsIHN1Y2Nlc3NNZXNzYWdlLCBzdWNjZXNzSGVhZGVyLCBzdWNjZXNzTGluaykge1xuXHQnbmdJbmplY3QnO1xuXG5cdHRoaXMuJG1vZGFsSW5zdGFuY2UgPSAkbW9kYWxJbnN0YW5jZTsgXG5cdHRoaXMucGFnZSA9IHBhZ2U7XG5cdHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBzdWNjZXNzTWVzc2FnZTtcblx0dGhpcy5zdWNjZXNzSGVhZGVyID0gc3VjY2Vzc0hlYWRlcjtcblx0dGhpcy5zdWNjZXNzTGluayA9IHN1Y2Nlc3NMaW5rO1xuICAgIH1cblxuICAgIGNhbmNlbCgpIHtcblx0dGhpcy4kbW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xuXHR0aGlzLnBhZ2UuZ28odGhpcy5zdWNjZXNzTGluayk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWNjZXNzTW9kYWxDb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5pbXBvcnQgU3VjY2Vzc01vZGFsQ29udHJvbGxlciBmcm9tICcuL3N1Y2Nlc3MtbW9kYWwuY29udHJvbGxlcic7XG5cbmNsYXNzIFN1Y2Nlc3NNb2RhbFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCRtb2RhbCkge1xuXHQnbmdJbmplY3QnO1xuXG5cdHRoaXMuJG1vZGFsID0gJG1vZGFsO1xuICAgIH1cblxuICAgIG9wZW4obWVzc2FnZSwgaGVhZGVyLCBsaW5rKSB7XG5cdHRoaXMuJG1vZGFsLm9wZW4oe1xuXHQgICAgYmFja2Ryb3A6IGZhbHNlLFxuXHQgICAgdGVtcGxhdGVVcmw6J2NvbXBvbmVudHMvdWkvc3VjY2Vzcy1tb2RhbC9zdWNjZXNzLW1vZGFsLnRlbXBsYXRlLmh0bWwnLFxuXHQgICAgY29udHJvbGxlcjogU3VjY2Vzc01vZGFsQ29udHJvbGxlcixcblx0ICAgIGNvbnRyb2xsZXJBczogJ3N1Y2Nlc3NNb2RhbCcsXG5cdCAgICByZXNvbHZlOiB7XG5cdFx0c3VjY2Vzc01lc3NhZ2U6ICgpID0+ICBtZXNzYWdlLFxuXHRcdHN1Y2Nlc3NIZWFkZXI6ICgpID0+IGhlYWRlcixcblx0XHRzdWNjZXNzTGluazogKCkgPT4gbGlua1xuXHQgICAgfVxuXHR9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1Y2Nlc3NNb2RhbFNlcnZpY2U7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmltcG9ydCBuYXZCYXJEaXJlY3RpdmUgZnJvbSAnLi9uYXYtYmFyL25hdi1iYXIuZGlyZWN0aXZlJztcblxuaW1wb3J0IHN1Y2Nlc3NNb2RhbFNlcnZpY2UgZnJvbSAnLi9zdWNjZXNzLW1vZGFsL3N1Y2Nlc3MtbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgZXJyb3JNb2RhbFNlcnZpY2UgZnJvbSAnLi9lcnJvci1tb2RhbC9lcnJvci1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCBwZGZWaWV3RGlyZWN0aXZlIGZyb20gJy4vcGRmLXZpZXcvcGRmLXZpZXcuZGlyZWN0aXZlJztcbmltcG9ydCBpbWFnZVZpZXdEaXJlY3RpdmUgZnJvbSAnLi9vcGVuLWltYWdlLWRpcmVjdGl2ZS9vcGVuLWltYWdlLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCBjb21tb25Nb2R1bGUgZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IE9wZW5JbWFnZU1vZGFsU2VydmljZSBmcm9tICcuL29wZW4taW1hZ2UtbW9kYWwvb3Blbi1pbWFnZS1tb2RhbC5zZXJ2aWNlJztcblxudmFyIHVpTW9kdWxlID0gIGFuZ3VsYXIubW9kdWxlKCdtYXhlbGVyLnVpJywgWyduZ1Nhbml0aXplJyxcblx0XHRcdFx0XHQgICAgICAnbmdHcmlkJywgXG5cdFx0XHRcdFx0ICAgICAgJ3VpLmJvb3RzdHJhcCcsXG5cdFx0XHRcdFx0ICAgICAgY29tbW9uTW9kdWxlLm5hbWVdKVxuICAgIC5zZXJ2aWNlKCdzdWNjZXNzTW9kYWxTZXJ2aWNlJywgc3VjY2Vzc01vZGFsU2VydmljZSlcbiAgICAuc2VydmljZSgnZXJyb3JNb2RhbFNlcnZpY2UnLCBlcnJvck1vZGFsU2VydmljZSlcbiAgICAuc2VydmljZSgnb3BlbkltYWdlTW9kYWxTZXJ2aWNlJywgT3BlbkltYWdlTW9kYWxTZXJ2aWNlKVxuICAgIC5kaXJlY3RpdmUoJ25hdkJhcicsIG5hdkJhckRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdwZGZWaWV3JywgcGRmVmlld0RpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdpbWFnZVZpZXdEaXJlY3RpdmUnLCBpbWFnZVZpZXdEaXJlY3RpdmUpO1xuXG5leHBvcnQgZGVmYXVsdCB1aU1vZHVsZTtcbiJdfQ==

angular.module('LumbardinaWeb').run(['$templateCache', function($templateCache) {$templateCache.put('app/A1/A1.template.html','<base href="/A1"><nav-bar></nav-bar><h5 style="text-align:center;">Lumbardina A1 (A3 + studio)</h5><div style="text-align: center;"><a href="//www.homeaway.co.uk/p1187894?uni_id=1452832" rel="nofollow"><img src="//www.homeaway.co.uk/haow/api/image/homeaway_uk/trips/1187894/reviews?unitId=1452832" alt="HomeAway Property" style="border:none;" rel="nofollow"></a><div style="text-align:center;"><a href="//www.homeaway.co.uk/reviews/p1187894?uni_id=1452832" rel="nofollow">Read</a> or <a href="//www.homeaway.co.uk/reviews/write/p1187894?uni_id=1452832" rel="nofollow">Write</a> Reviews</div></div><uib-carousel interval="5000" no-wrap="A1Controller.noWrapSlides"><uib-slide ng-repeat="slide in A1Controller.mainSlides" style=""><center><div ng-style="{\'background\': \'url(\\\'\' + slide.image + \'\\\')\', \'height\':\'528px\',\'background-size\': \'contain\',\'background-position\':\'center\', \'background-repeat\': \'no-repeat\'}" title="{{slide.text}}"></div></center><div class="carousel-caption"><p>{{slide.text}}</p></div></uib-slide></uib-carousel><div class="checkbox"><label><input type="checkbox" ng-model="A1Controller.noWrapSlides"> Disable Slide Looping</label></div><hr><div class="container"><p>&nbsp; &nbsp; Our relaxing Lumbardina A1 apartment is situated in TOP location, in the heart of the small, picturesque fishing village Lumbarda. The apartment is in the center of <b>Lumbarda</b>, only 60m from the sea, separated from seafront with owner\'s yard, fully equipped, spacious with provided parking space.</p><p>&nbsp; &nbsp; Apartment A1 (6) is on the same piece of land, behind Apartment A2 in a traditional dalmatian house. It is on the top floor and has a separate entrance,balcony with view on the sea and big terrace (20 square meters) only for you. There are 3 rooms, each with a double bed. One room is recently turned into studio for two, with new kitchen and bathroom. Apartment is equipped with 2 kitchens and 2 bathrooms, one with shower, another with bathtub (one has a washing machine in it),and dining table. The terrace on the first floor is perfect for alfresco dining. There is patio for barbecue. Size of apartment is 75 sq m.</p><p>If you wish to stay in a central location where everything is at hand, whilst enjoying total privacy, then this apartment is ideal for you with its private terrace and a beautiful Mediterranean garden with its lemon, orange, fig, pomegranate, kiwi and olive trees. Guests are also welcome to use the barbecue. For full enjoyment the apartment has a balcony with a splendid sea view, ideal to relax with a morning coffee or an evening glass of wine.</p><p>&nbsp; &nbsp; *Apartment A1 is rented in high season (July and August) as whole, and in other months it can be divided into 2 units: Apartment A3 for 4 persons and Studio for 2 persons.</p><hr><p>&nbsp; &nbsp; Apartment is equipped with air conditioner, wireless internet access, fully equipped kitchen, washing machine, dining room and TV. A parking spot is also provided.</p><button class="btn btn-success" ng-click="A1Controller.page.go(\'contact\')" style="width:100%;">Contact us</button><br><br><button type="button" class="btn btn-default" ng-init="A1Controller.isCollapsed = false;" uib-tooltip="Click here to see more pictures of this wonderful apartment" ng-click="A1Controller.isCollapsed = !A1Controller.isCollapsed"><span ng-show="A1Controller.isCollapsed">Show</span> <span ng-hide="A1Controller.isCollapsed">Hide</span> images of apartment Lumbardina A1</button><hr><div uib-collapse="A1Controller.isCollapsed"><div class="well well-lg">Click on the image to enlarge it.<masonry masonry-options="{ isFitWidth: true, gutter: 36, transitionDuration: \'1.2s\'}" reload-on-show="" preserve-order="" style="margin: 20px auto 20px auto; display: block; cursor:pointer;" item-selector=".image-brick" column-width="20"><img masonry-brick="" ng-repeat="slide in A1Controller.slides" alt="{{slide.text}}" ng-src="{{slide.image}}" class="image-brick" ng-click="A1Controller.openImageModalService.open(slide)" uib-tooltip="{{slide.text}}"><masonry></masonry></masonry></div></div></div>');
$templateCache.put('app/A2/A2.template.html','<nav-bar></nav-bar><h5 style="text-align:center;">Lumbardina A2</h5><div style="max-width:1200px; display:block; margin:10px auto;"><uib-carousel interval="5000" no-wrap="A2Controller.noWrapSlides"><uib-slide ng-repeat="slide in A2Controller.mainSlides"><center><div ng-style="{\'background\': \'url(\\\'\' + slide.image + \'\\\')\', \'height\':\'528px\',\'background-size\': \'contain\',\'background-position\':\'center\', \'background-repeat\': \'no-repeat\'}" title="{{slide.text}}"></div></center><div class="carousel-caption"><p>{{slide.text}}</p></div></uib-slide></uib-carousel><div class="checkbox"><label><input type="checkbox" ng-model="A2Controller.noWrapSlides"> Disable Picture Looping</label><p>&nbsp; &nbsp; Apartment A2 has astonishing terrace with view on the sea where our guests can fully enjoy meals or morning coffee.</p></div></div><hr><div class="container"><p>&nbsp; &nbsp; Our relaxing Lumbardina A2 apartment is situated in TOP location, in the heart of the small, picturesque fishing village Lumbarda.The apartment is in the center,the seafront only 30m from the sea, new, fully equipped, spacious with provided parking space</p><center><h5>Great Apartment In The Heart Of The Small, Picturesque Fishing Village Lumbarda</h5></center><p>&nbsp; &nbsp; The apartment is ideal for families and friends who want to stay in a central place close to many rural attractions, local restaurants (all styles such as traditional Croatian and Pizza), cafes, shops, bakeries, post office, local produce market, and the marina where you can rent boats, kayaks and snorkeling equipment. You can also rent bicycles or scooters and you are only a on 5-15 minute walk away from beautiful beaches.</p><p>&nbsp; &nbsp; The apartment is an ideal location to use as a base for all kind of activities like walking, cycling, fishing, diving, and sailing. Their location is also suitable for seniors, especially before and after peak holiday season when the sky and the sea are in perfect harmony and you have the beaches to yourself, walking, socializing and enjoying on the terrace, while all service activities are at hand.</p><p>&nbsp; &nbsp; Apartment A2 (4+2) is positioned on the first floor of a house on the seashore. There are 2 bedrooms, 2 bathrooms (one with washing machine), fully equipped kitchen, dining room with dining table for 6 persons, living room with TV and 2 sofa beds for extra people. The kitchen, dining room and living room are open plan, and are tastefully decorated, giving a pleasant and relaxed atmosphere. From the spacious living area, the balcony opens up to a large 20m2 terrace with unbelievable views of the sea, an ideal place to rest and enjoy the magic of summer and its nights.</p><hr><button class="btn btn-success" ng-click="A2Controller.page.go(\'contact\')" style="width:100%;">Contact us</button><br><br><button type="button" class="btn btn-default" ng-init="A2Controller.isCollapsed = false;" uib-tooltip="Click here to see more pictures of this wonderful apartment" ng-click="A2Controller.isCollapsed = !A2Controller.isCollapsed"><span ng-show="A2Controller.isCollapsed">Show</span> <span ng-hide="A2Controller.isCollapsed">Hide</span> images of apartment Lumbardina A2</button><hr><div uib-collapse="A2Controller.isCollapsed"><div class="well well-lg">Click on the image to enlarge it.<masonry masonry-options="{ isFitWidth: true, gutter: 36, transitionDuration: \'1.2s\'}" reload-on-show="" preserve-order="" style="margin: 20px auto 20px auto; display: block; cursor:pointer;" item-selector=".image-brick" column-width="20"><img masonry-brick="" ng-repeat="slide in A2Controller.slides" alt="{{slide.text}}" ng-src="{{slide.image}}" class="image-brick" ng-click="A2Controller.openImageModalService.open(slide)" uib-tooltip="{{slide.text}}"><masonry></masonry></masonry></div></div></div>');
$templateCache.put('app/contact/contact.template.html','<nav-bar></nav-bar><div class="container"><center><h5>Contact information</h5></center><hr><p>You can contact us on:</p><div class="row"><div class="col-md-6 col-sm-6 col-xs-12"><span style="font-size: 15px">our email:</span> <i class="fa fa-envelope-o" style="margin-right:10px; margin-left:20px;"></i> <a href="mailto:nobilopetar@yahoo.com">nobilopetar@yahoo.com</a></div><div class="col-md-6 col-sm-6 col-xs-12"><span style="font-size: 15px">or via phone:</span> <i class="fa fa-mobile" style="margin-right:10px; margin-left:20px;"></i>+385 915706774</div></div><br><p>&nbsp; &nbsp; In case you have any questions or concerns please contact us using the form below. After filling in the following fields with your contact details and your query we will contact you to resolve any issues or queries:</p><center><iframe src="https://docs.google.com/forms/d/1OWYji9ioDg_itbKRtOwodp82dJnGgLvco6UP1hit7bY/viewform?embedded=true" style="max-width:700px; min-height:1300px; width:100%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe></center></div><br><ui-gmap-google-map center="contactController.map.center" draggable="true" zoom="contactController.map.zoom" options="contactController.map.options" bounds="contactController.map.bounds"><ui-gmap-marker coords="contactController.marker.coords" options="contactController.marker.options" idkey="contactController.marker.id"></ui-gmap-marker></ui-gmap-google-map>');
$templateCache.put('app/home/home.template.html','<nav-bar></nav-bar><div class="container"><br><center><h5>Welcome to apartments Lumbardina official webpage</h5></center><hr><p>&nbsp; &nbsp;Our delight apartments <b ng-click="homeController.page.go(\'/A1\')" class="underline-on-hover" style="cursor:pointer;">Lumbardina A1</b> and <b ng-click="homeController.page.go(\'/A2\')" class="underline-on-hover" style="cursor:pointer;">Lumbardina A2</b> are situated in <b>TOP</b> location, in <b>center</b>, the heart of the small, picturesque fishing village <b>Lumbarda</b> on island <b itemprop="addressLocality">Korcula</b> in <b itemprop="addressRegion">Dubrovacko-Neretvanska Zupanija</b> in <b itemprop="addressCountry">Croatia</b>. If you wish to stay on top location, close to all local amenities like: restaurants, wineries, shops, in an apartments with the <b>view on the sea</b> you have come to the right place !</p><p>To see more details about our apartments click on following images:</p><masonry masonry-options="{ isFitWidth: true, gutter: 36, transitionDuration: \'1.2s\'}" reload-on-show="" preserve-order="" style="margin: 20px auto 20px auto; display: block; cursor:pointer;" item-selector=".lumbardina-masonry-brick" column-width="150"><div masonry-brick="" class="lumbardina-masonry-brick" ng-click="homeController.page.go(apartment.link)" ng-repeat="apartment in homeController.apartments" tooltip="Click to see more info about {{apartment.text}}"><center><uib-rating data-readonly="true" ng-model="homeController.numberOfStars" max="3"></uib-rating></center><div><div ng-style="{\'background\': \'url(\\\'\' + apartment.image + \'\\\')\', \'height\':\'150px\',\'width\':\'150px\', \'background-size\': \'cover\',\'background-position\':\'center\', \'background-repeat\': \'no-repeat\'}"></div>{{apartment.text}}</div></div></masonry><p>&nbsp; &nbsp;Both apartments are equipped with an air conditioner, wireless internet access, a parking spot is also provided.</p><p>&nbsp; &nbsp; Apartments lumbardina A1 and A2 are situated in 2 separate houses, on the same property in the heart of the small, picturesque fishing village lumbarda. Apartment A2 is in the front of the property overlooking the seaside, and apartment a1 is 70 meters behind it on the same piece of land(10 ares). The apartments are ideal for families and friends who want to stay in a central place close to many village attractions, local restaurants (including traditional croatian and pizza restaurants), cafes, shops, bakeries, post office, a local green market, and the marina where you can rent boats, kayaks and snorkeling equipment. You can also rent bicycles or scooters as the apartments are only a 5-15 minute walk away from the most beautiful beaches.</p><div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-evenly;"><div><div style="display:inline-block"><a href="http://www.homeaway.co.uk/p1187894" rel="nofollow"><img src="http://www.homeaway.co.uk/haow/api/image/homeaway_uk/trips/1187894/reviews?unitId=1449510" alt="HomeAway Property" style="border:none;" rel="nofollow"></a><div style="text-align:center;"><a href="http://www.homeaway.co.uk/reviews/p1187894" rel="nofollow">Read</a> or <a href="http://www.homeaway.co.uk/reviews/write/p1187894" rel="nofollow">Write</a> Reviews</div></div></div><div><a href="http://www.homeaway.co.uk/p1187894" rel="nofollow"><img src="http://www.homeaway.co.uk/haow/api/image/homeaway_uk/trips/1187894/tenure" alt="HomeAway Property" style="border:none;"></a></div><div class="tavr_certificate_of_excellence" style="height:130px;width:152px;position:relative;border-style:solid;border-width:2px;border-color:#bfebe1;background-color:white;" data-rid="591029" data-year="2017" data-locale="en_GB"><a target="_blank" style="text-decoration:none !important; color:#2c2c2c" href="https://www.tripadvisor.co.uk/VacationRentalReview-g1069851-d4746432"></a></div></div><script src="https://rentals-cdn.tacdn.com/publicjs/coeWidget.js" type="text/javascript"></script><h5><i>Lumbarda and environment</i></h5><uib-carousel interval="5000" no-wrap="homeController.noWrapSlides"><uib-slide ng-repeat="slide in homeController.slides" style="max-height:532px;"><center><div ng-style="{\'background\': \'url(\\\'\' + slide.image + \'\\\')\', \'height\':\'528px\', \'background-size\': \'contain\',\'background-position\':\'center\', \'background-repeat\': \'no-repeat\'}" title="{{slide.text}}"></div></center><div class="carousel-caption"><p>{{slide.text}}</p></div></uib-slide></uib-carousel><div class="checkbox"><label><input type="checkbox" ng-model="homeController.noWrapSlides"> Disable Picture Looping</label></div><h5><i>How to get to us ?</i></h5><p>Our address is: <span itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">Lumbarda 376, Lumbarda, Croatia. <span>&nbsp; <span style="font-size: 15px">Our phone number is:</span> <i class="fa fa-mobile" style="margin-right:10px; margin-left:20px;"></i> <span itemprop="telephone">+385 915706774</span></span></span></p><p>&nbsp; &nbsp; You can get to Korcula on multiple ways. Here are useful links on which you can find informations about transport to Korcula island:</p><ul>From <b>Dubrovnik<b>:<li><a href="http://www.krilo.hr/en/" target="_blank">Krilo Jet</a><br><a href="http://www.jadrolinija.hr/en" target="_blank">Ferry and speedboats lines around the Dalmatian coast</a></li><li><a href="http://www.buscroatia.com/dubrovnik-korcula/" target="_blank">with bus</a>, <a href="https://www.autotrans.hr/en-us/home" target="_blank">here</a> you can book bus tickets.</li></b></b></ul><ul>From <b>Split<b>:<li>By catamaran:<br><a href="http://www.krilo.hr/en/" target="_blank">Krilo Jet</a><br><a href="http://www.jadrolinija.hr/en" target="_blank">Ferry and speedboats lines around the Dalmatian coast</a></li><li>By ferry boat from Split:<br>Take a ferry from Split to town Vela Luka (Kor\u010Dula), and then take bus to the town of Kor\u010Dula and then Lumbarda.</li><li><a href="http://www.buscroatia.com/split-korcula/" target="_blank">with bus</a>, <a href="https://www.autotrans.hr/en-us/home" target="_blank">here</a> you can book bus tickets.</li></b></b></ul><ui-gmap-google-map center="homeController.map.center" draggable="true" zoom="homeController.map.zoom" options="homeController.map.options" bounds="homeController.map.bounds"><ui-gmap-marker coords="homeController.marker.coords" options="homeController.marker.options" idkey="homeController.marker.id"></ui-gmap-marker></ui-gmap-google-map></div>');
$templateCache.put('components/ui/error-modal/error-modal.template.html','<div class="modal-header modal-header-error"><h4>{{ errorModal.errorHeader }}</h4></div><div class="modal-body modal-body-error"><pre>{{ errorModal.errorMessage }}</pre></div><div class="modal-footer"><button class="btn btn-primary" ng-click="errorModal.cancel()">Close</button></div>');
$templateCache.put('components/ui/nav-bar/nav-bar.template.html','<nav class="navbar navbar-inverse navbar-fixed-top navbar-home-page" role="navigation"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#action-bar" aria-expanded="false"></button><a class="navbar-brand" style="padding-right: 25px; height: 68px; cursor:pointer;" ng-click="navBar.page.go(\'/\')"></a></div><div class="collapse navbar-collapse navbar-left" id="action-bar"><ul class="nav navbar-nav"><li><a class="navbar_link" ng-click="navBar.page.go(\'/\')">Apartments:<meta itemprop="image" content="assets/images/Logo.svg"></a></li><li><a class="navbar_link" ng-click="navBar.page.go(\'/A2\')" analytics-on="click" analytics-event="Click on appartment A2">A2</a></li><li><a class="navbar_link" ng-click="navBar.page.go(\'/A1\')" analytics-on="click" analytics-event="Click on appartment A1">A1</a></li><li class="hidden-lg"><a class="navbar_link" ng-click="navBar.page.go(\'/contact\')" analytics-on="click" analytics-event="Click on contact us"><i class="fa fa-tty"></i> Contact Us</a></li></ul></div><div class="navbar-text navbar-right visible-lg" style="margin-right: 10px;"><a class="navbar_link" ng-click="navBar.page.go(\'/contact\')" analytics-on="click" analytics-event="Click on contact us"><i class="fa fa-tty"></i> Contact Us</a></div></nav>');
$templateCache.put('components/ui/open-image-modal/open-image-modal.template.html','<div class="modal-header modal-header-info" style="border-bottom-width: 0px;">{{openImageModalController.currentImage.text}} <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: white;" ng-click="openImageModalController.cancel()"><i class="fa fa-times-circle"></i></button></div><div style="display: table; width: 100%; height: 100%; background-color: grey; opacity: 0.97; padding-bottom: 20px;" tabindex="0" autofocus="" ng-keydown="openImageModalController.keyPress($event)"><div style="display: table-cell; vertical-align: middle; text-align: center; width: 10px; cursor: pointer;" ng-click="openImageModalController.updateImage(-1)"><i class="fa fa-chevron-left" style="cursor: pointer;" aria-hidden="true"></i></div><div style="display: table-cell; vertical-align: middle; text-align: center; width: 100% - 20px; height: 100%;" ng-style="{\'background\': \'url(\'+ openImageModalController.currentImage.image +\') no-repeat center center fixed\', \'background-size\': \'contain\'}"></div><div style="display: table-cell; vertical-align: middle; text-align: center; cursor: pointer; width: 10px;" ng-click="openImageModalController.updateImage(1)"><i class="fa fa-chevron-right" aria-hidden="true"></i></div></div>');
$templateCache.put('components/ui/pdf-view/pdf-view.template.html','<iframe ng-src="{{\'bower_components/pdfjs-1.0.473-dist/web/viewer.html?file=\' + pdf}}" ng-style="{ position: \'absolute\', height: \'100%\', width: \'100%\'}"></iframe>');
$templateCache.put('components/ui/success-modal/success-modal.template.html','<div class="modal-header modal-header-info"><h4>{{ successModal.successHeader }}</h4></div><div class="modal-body"><p class="small">{{ successModal.successMessage }}</p></div><div class="modal-footer"><button class="btn btn-primary" ng-click="successModal.cancel()">OK</button></div>');}]);