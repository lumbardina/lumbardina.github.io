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
    image: 'assets/images/A1/1260.jpg',
    text: 'Room 1'
  }, {
    image: 'assets/images/A1/1310.jpg',
    text: 'Room 3'
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
    image: 'assets/images/A1/1330.jpg',
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
    image: 'assets/images/A2/1075.jpg',
    text: 'Awning'
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
    image: 'assets/images/A2/1080.jpg',
    text: 'November'
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


//# sourceURL=/media/petar/4bde9f06-8b47-4449-bf7a-9ccfe0698191/workspace/lumbardina-web-page/src/app/fake_bc9a7217.js
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9wZXRhci80YmRlOWYwNi04YjQ3LTQ0NDktYmY3YS05Y2NmZTA2OTgxOTEvd29ya3NwYWNlL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL21lZGlhL3BldGFyLzRiZGU5ZjA2LThiNDctNDQ0OS1iZjdhLTljY2ZlMDY5ODE5MS93b3Jrc3BhY2UvbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvYXBwL0ExL0ExLmNvbnRyb2xsZXIuanMiLCIvbWVkaWEvcGV0YXIvNGJkZTlmMDYtOGI0Ny00NDQ5LWJmN2EtOWNjZmUwNjk4MTkxL3dvcmtzcGFjZS9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9hcHAvQTEvQTEubW9kdWxlLmpzIiwiL21lZGlhL3BldGFyLzRiZGU5ZjA2LThiNDctNDQ0OS1iZjdhLTljY2ZlMDY5ODE5MS93b3Jrc3BhY2UvbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvYXBwL0EyL0EyLmNvbnRyb2xsZXIuanMiLCIvbWVkaWEvcGV0YXIvNGJkZTlmMDYtOGI0Ny00NDQ5LWJmN2EtOWNjZmUwNjk4MTkxL3dvcmtzcGFjZS9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9hcHAvQTIvQTIubW9kdWxlLmpzIiwiL21lZGlhL3BldGFyLzRiZGU5ZjA2LThiNDctNDQ0OS1iZjdhLTljY2ZlMDY5ODE5MS93b3Jrc3BhY2UvbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb250cm9sbGVyLmpzIiwiL21lZGlhL3BldGFyLzRiZGU5ZjA2LThiNDctNDQ0OS1iZjdhLTljY2ZlMDY5ODE5MS93b3Jrc3BhY2UvbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5tb2R1bGUuanMiLCIvbWVkaWEvcGV0YXIvNGJkZTlmMDYtOGI0Ny00NDQ5LWJmN2EtOWNjZmUwNjk4MTkxL3dvcmtzcGFjZS9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9hcHAvZmFrZV9iYzlhNzIxNy5qcyIsIi9tZWRpYS9wZXRhci80YmRlOWYwNi04YjQ3LTQ0NDktYmY3YS05Y2NmZTA2OTgxOTEvd29ya3NwYWNlL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2FwcC9ob21lL2hvbWUuY29udHJvbGxlci5qcyIsIi9tZWRpYS9wZXRhci80YmRlOWYwNi04YjQ3LTQ0NDktYmY3YS05Y2NmZTA2OTgxOTEvd29ya3NwYWNlL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2FwcC9ob21lL2hvbWUubW9kdWxlLmpzIiwiL21lZGlhL3BldGFyLzRiZGU5ZjA2LThiNDctNDQ0OS1iZjdhLTljY2ZlMDY5ODE5MS93b3Jrc3BhY2UvbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvY29tcG9uZW50cy9jb21tb24vY29tbW9uLm1vZHVsZS5qcyIsIi9tZWRpYS9wZXRhci80YmRlOWYwNi04YjQ3LTQ0NDktYmY3YS05Y2NmZTA2OTgxOTEvd29ya3NwYWNlL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2NvbXBvbmVudHMvY29tbW9uL3BhZ2Uuc2VydmljZS5qcyIsIi9tZWRpYS9wZXRhci80YmRlOWYwNi04YjQ3LTQ0NDktYmY3YS05Y2NmZTA2OTgxOTEvd29ya3NwYWNlL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2NvbXBvbmVudHMvdWkvZXJyb3ItbW9kYWwvZXJyb3ItbW9kYWwuY29udHJvbGxlci5qcyIsIi9tZWRpYS9wZXRhci80YmRlOWYwNi04YjQ3LTQ0NDktYmY3YS05Y2NmZTA2OTgxOTEvd29ya3NwYWNlL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2NvbXBvbmVudHMvdWkvZXJyb3ItbW9kYWwvZXJyb3ItbW9kYWwuc2VydmljZS5qcyIsIi9tZWRpYS9wZXRhci80YmRlOWYwNi04YjQ3LTQ0NDktYmY3YS05Y2NmZTA2OTgxOTEvd29ya3NwYWNlL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2NvbXBvbmVudHMvdWkvbmF2LWJhci9uYXYtYmFyLmNvbnRyb2xsZXIuanMiLCIvbWVkaWEvcGV0YXIvNGJkZTlmMDYtOGI0Ny00NDQ5LWJmN2EtOWNjZmUwNjk4MTkxL3dvcmtzcGFjZS9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9jb21wb25lbnRzL3VpL25hdi1iYXIvbmF2LWJhci5kaXJlY3RpdmUuanMiLCIvbWVkaWEvcGV0YXIvNGJkZTlmMDYtOGI0Ny00NDQ5LWJmN2EtOWNjZmUwNjk4MTkxL3dvcmtzcGFjZS9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9jb21wb25lbnRzL3VpL29wZW4taW1hZ2UtZGlyZWN0aXZlL29wZW4taW1hZ2UuZGlyZWN0aXZlLmpzIiwiL21lZGlhL3BldGFyLzRiZGU5ZjA2LThiNDctNDQ0OS1iZjdhLTljY2ZlMDY5ODE5MS93b3Jrc3BhY2UvbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvY29tcG9uZW50cy91aS9vcGVuLWltYWdlLW1vZGFsL29wZW4taW1hZ2UtbW9kYWwuY29udHJvbGxlci5qcyIsIi9tZWRpYS9wZXRhci80YmRlOWYwNi04YjQ3LTQ0NDktYmY3YS05Y2NmZTA2OTgxOTEvd29ya3NwYWNlL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2NvbXBvbmVudHMvdWkvb3Blbi1pbWFnZS1tb2RhbC9vcGVuLWltYWdlLW1vZGFsLnNlcnZpY2UuanMiLCIvbWVkaWEvcGV0YXIvNGJkZTlmMDYtOGI0Ny00NDQ5LWJmN2EtOWNjZmUwNjk4MTkxL3dvcmtzcGFjZS9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9jb21wb25lbnRzL3VpL3BkZi12aWV3L3BkZi12aWV3LmRpcmVjdGl2ZS5qcyIsIi9tZWRpYS9wZXRhci80YmRlOWYwNi04YjQ3LTQ0NDktYmY3YS05Y2NmZTA2OTgxOTEvd29ya3NwYWNlL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2NvbXBvbmVudHMvdWkvc3VjY2Vzcy1tb2RhbC9zdWNjZXNzLW1vZGFsLmNvbnRyb2xsZXIuanMiLCIvbWVkaWEvcGV0YXIvNGJkZTlmMDYtOGI0Ny00NDQ5LWJmN2EtOWNjZmUwNjk4MTkxL3dvcmtzcGFjZS9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9jb21wb25lbnRzL3VpL3N1Y2Nlc3MtbW9kYWwvc3VjY2Vzcy1tb2RhbC5zZXJ2aWNlLmpzIiwiL21lZGlhL3BldGFyLzRiZGU5ZjA2LThiNDctNDQ0OS1iZjdhLTljY2ZlMDY5ODE5MS93b3Jrc3BhY2UvbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvY29tcG9uZW50cy91aS91aS5tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUFBLFdBQVcsQ0FBQztBQUFaLEtBQUssaUJBQWlCLEFBQUMsQ0FBQyxPQUFNO1NBQTlCLEVBQUMsR0FBRSxZQUFxQjtBQUFFLHVCQUF3QjtJQUFFLEFBQTlCLENBQUM7QUFBdkIsV0FBUyxDQUFULEVBQUMsS0FBSSxDQUFPLEtBQUcsQUFBUyxDQUFDO0NBQXlCLENBQUM7QUFBbkQsQUFBSSxFQUFBLGVBSUosU0FBTSxhQUFXLENBQ0QsSUFBRyxDQUFHLENBQUEscUJBQW9CLENBQUc7QUFDNUMsV0FBUyxDQUFDO0FBQ1YsS0FBRyxLQUFLLEVBQUksS0FBRyxDQUFDO0FBQ2hCLEtBQUcsc0JBQXNCLEVBQUksc0JBQW9CLENBQUM7QUFFbEQsS0FBRyxTQUFTLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQztBQUVuQixLQUFHLFdBQVcsRUFBRyxFQUNiO0FBQ0gsUUFBSSxDQUFHLCtCQUE2QjtBQUNwQyxPQUFHLENBQUcsZ0JBQWM7QUFBQSxFQUNqQixDQUNBO0FBQ0gsUUFBSSxDQUFHLDRCQUEwQjtBQUNqQyxPQUFHLENBQUcsd0JBQXNCO0FBQUEsRUFDekIsQ0FDQTtBQUNILFFBQUksQ0FBRyw0QkFBMEI7QUFDakMsT0FBRyxDQUFHLFVBQVE7QUFBQSxFQUNYLENBQ0E7QUFDSCxRQUFJLENBQUcsNEJBQTBCO0FBQ2pDLE9BQUcsQ0FBRyx5REFBdUQ7QUFBQSxFQUMxRCxDQUNPO0FBQ1YsUUFBSSxDQUFHLDRCQUEwQjtBQUNqQyxPQUFHLENBQUcsU0FBTztBQUFBLEVBQ1Ys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QUFNLDZDQUFtQixDQUQ5RCxBQUMrRCxDQUFDO0VBVXZHLHNCQUFvQixFQVgzQixFQUFDLGtFQUFvQixDQUFBLE9BQU0sQUFBQywrQ0FBa0IsQ0FDdEMsQ0FBQSxtRUFBcUIsNEVBQTJCLENBQUEsbUVBQXFCLEdBQUssRUFBQyxPQUFNLGtFQUFtQixDQUQ5RCxBQUMrRCxDQUFDO0FBWTlHLEFBQUksRUFBQSxDQUFBLFFBQU8sRUFBSyxDQUFBLE9BQU0sT0FBTyxBQUFDLENBQUMsWUFBVyxDQUFHLEVBQUMsWUFBVyxDQUM5QyxTQUFPLENBQ1AsZUFBYSxDQUNiLENBQUEsWUFBVyxLQUFLLENBQUMsQ0FBQyxRQUNsQixBQUFDLENBQUMscUJBQW9CLENBQUcsb0JBQWtCLENBQUMsUUFDNUMsQUFBQyxDQUFDLG1CQUFrQixDQUFHLGtCQUFnQixDQUFDLFFBQ3hDLEFBQUMsQ0FBQyx1QkFBc0IsQ0FBRyxzQkFBb0IsQ0FBQyxVQUM5QyxBQUFDLENBQUMsUUFBTyxDQUFHLGdCQUFjLENBQUMsVUFDM0IsQUFBQyxDQUFDLFNBQVEsQ0FBRyxpQkFBZSxDQUFDLFVBQzdCLEFBQUMsQ0FBQyxvQkFBbUIsQ0FBRyxtQkFBaUIsQ0FBQyxDQUFDO0FBdEJ4RCxBQUFJLEVBQUEsQ0FBQSxVQUFTLEVBd0JFLFNBQU8sQUF4QlcsQ0FBQTtBQXlCakMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuLyoganNoaW50IC1XMTA2ICovXG5cbmNsYXNzIEExQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IocGFnZSwgb3BlbkltYWdlTW9kYWxTZXJ2aWNlKSB7XG5cdCduZ0luamVjdCc7XG5cdHRoaXMucGFnZSA9IHBhZ2U7XG5cdHRoaXMub3BlbkltYWdlTW9kYWxTZXJ2aWNlID0gb3BlbkltYWdlTW9kYWxTZXJ2aWNlO1xuXG5cdHBhZ2Uuc2V0VGl0bGUoJ0ExJyk7XG5cblx0dGhpcy5tYWluU2xpZGVzID1bXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExL3Byb2ZpbGUuanBnJyxcblx0XHR0ZXh0OiAnTHVtYmFyZGluYSBBMSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEwMjAuanBnJyxcblx0XHR0ZXh0OiAnTHVtYmFyZGluYSBhcGFydG1lbnRzJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTAzMC5qcGcnLFxuXHRcdHRleHQ6ICdCYWxjb255J1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTA3MC5qcGcnLFxuXHRcdHRleHQ6ICdBY2Nlc3MgdG8gc3RvbmUgaG91c2UsIHBhcmtpbmcsIHN0b25lIGhvdXNlIGFuZCBnYXJkZW4nXG5cdCAgICB9LFxuICAgICAgICAgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMjYwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMSdcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEzMTAuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAzJ1xuXHQgICAgfVxuXHRdO1xuXG5cdHRoaXMuc2xpZGVzID0gW1xuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS9wcm9maWxlLmpwZycsXG5cdFx0dGV4dDogJ0x1bWJhcmRpbmEgQTEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDIwLmpwZycsXG5cdFx0dGV4dDogJ0x1bWJhcmRpbmEgYXBhcnRtZW50cydcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEwMjUuanBnJyxcblx0XHR0ZXh0OiAnTHVtYmFyZGluYSBhcGFydG1lbnRzJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTAzMC5qcGcnLFxuXHRcdHRleHQ6ICdCYWxjb255J1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTA0MC5qcGcnLFxuXHRcdHRleHQ6ICdTdG9uZSBob3VzZSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEwNTAuanBnJyxcblx0XHR0ZXh0OiAnU3RvbmUgaG91c2UnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMDYwLmpwZycsXG5cdFx0dGV4dDogJ1N0b25lIGhvdXNlLCBBMSBpcyBvbiBmaXJzdCBmbG9vciBhbmQgb3duZXIgb24gdGhlIGdyb3VuZCBmbG9vcidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEwNzAuanBnJyxcblx0XHR0ZXh0OiAnQWNjZXNzIHRvIHN0b25lIGhvdXNlLCBwYXJraW5nLCBzdG9uZSBob3VzZSBhbmQgZ2FyZGVuJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTA4MC5qcGcnLFxuXHRcdHRleHQ6ICdQYXRoIHRvIHN0b25lIGhvdXNlIHdpdGggcGFya2luZydcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEwOTAuanBnJyxcblx0XHR0ZXh0OiAnVmlldyBhbmQgcm9hZCBmcm9tIHN0b25lIGhvc2Ugb24gZ2FyZGVuLCBzZWEgYW5kIGFwYXJ0bWVudCBBMidcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEwOTUuanBnJyxcblx0XHR0ZXh0OiAnVmlldyBmcm9tIHRoZSBiYWxjb255IG9mIHRoZSBhcGFydG1lbnQgQTEgYW5kIGFjY2VzcyB0byB0aGUgc2VhJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTEwMC5qcGcnLFxuXHRcdHRleHQ6ICdCYWxjb255J1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTEyMC5qcGcnLFxuXHRcdHRleHQ6ICdWaWV3IGZyb20gYXBhcnRtZW50J1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTE0MC5qcGcnLFxuXHRcdHRleHQ6ICdTdGFpcndheSB0byBzZXBhcmF0ZSBlbnRyYW5jZSBvZiBhcGFydG1lbnQgQTEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMTUwLmpwZycsXG5cdFx0dGV4dDogJ0ZpZyB0cmVlIG5leHQgdG8gc3RhaXJ3YXknXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMTYwLmpwZycsXG5cdFx0dGV4dDogJ1NlcGFyYXRlIGVudHJhbmNlIHRvIGFwYXJ0bWVudCBhbmQgdGVycmFjZSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzExNzAuanBnJyxcblx0XHR0ZXh0OiAnVGVycmFjZSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzExODAuanBnJyxcblx0XHR0ZXh0OiAnVGVycmFjZSBhbmQgZ2FyZGVuJ1xuXHQgICAgfSAsXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzExOTAuanBnJyxcblx0XHR0ZXh0OiAnVGVycmFjZSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEyMDAuanBnJyxcblx0XHR0ZXh0OiAnVGVycmFjZSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEyMTAuanBnJyxcblx0XHR0ZXh0OiAnVGVycmFjZSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEyMjAuanBnJyxcblx0XHR0ZXh0OiAnS2l0Y2hlbidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEyMzAuanBnJyxcblx0XHR0ZXh0OiAnS2l0Y2hlbiBhbmQgZGluaW5nIGFyZWEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMjQwLmpwZycsXG5cdFx0dGV4dDogJ0tpdGNoZW4nXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMjUwLmpwZycsXG5cdFx0dGV4dDogJydcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEyODAuanBnJyxcblx0XHR0ZXh0OiAnQmF0aHJvb20gMSdcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEyOTAuanBnJyxcblx0XHR0ZXh0OiAnQmF0aHJvb20gMSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEzMDAuanBnJyxcblx0XHR0ZXh0OiAnQmF0aHJvb20gMSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEzMTAuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAxIChzdHVkaW8pJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTMyMC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDEgKHN0dWRpbyknXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMzMwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMSAoc3R1ZGlvKSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEzMzAuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAxIChzdHVkaW8pJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTM0MC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDEgKHN0dWRpbyknXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMzUwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMSAoc3R1ZGlvKSdcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEzNjAuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAxIChzdHVkaW8pJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTM3MC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDEgKHN0dWRpbyknXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xMzgwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzEzOTAuanBnJyxcblx0XHR0ZXh0OiAndGVycmFjZSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzE0MDAuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAyJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTQxMC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDMnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xNDIwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMydcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzE0MzAuanBnJyxcblx0XHR0ZXh0OiAnQmF0aHJvb20gMiBhbmQgc2VwYXJhdGUgdG9pbGV0J1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTQ0MC5qcGcnLFxuXHRcdHRleHQ6ICdOZWlnaGJvcmhvb2QnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xNDUwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzE0NjAuanBnJyxcblx0XHR0ZXh0OiAnTmVpZ2hib3Job29kJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvMTQ3MC5qcGcnLFxuXHRcdHRleHQ6ICdOZWlnaGJvcmhvb2QnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS8xNDgwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0ExLzE0OTAuanBnJyxcblx0XHR0ZXh0OiAnU3Vuc2V0J1xuXHQgICAgfV07XG4gICAgICAgIHRoaXMub3BlbkltYWdlTW9kYWxTZXJ2aWNlLnNsaWRlcyA9IHRoaXMuc2xpZGVzO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEExQ29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cblxuaW1wb3J0IEExQ29udHJvbGxlciBmcm9tICcuL0ExLmNvbnRyb2xsZXInO1xuXG52YXIgQTFNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnbHVtYmFyZGluYS5BMScsXG5cdFx0XHQgICAgICBbJ25nUm91dGUnXSlcbiAgICAuY29udHJvbGxlcignQTFDb250cm9sbGVyJywgQTFDb250cm9sbGVyKVxuICAgIC5jb25maWcoKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikgPT4ge1xuXHQnbmdJbmplY3QnO1xuXG5cdCRyb3V0ZVByb3ZpZGVyXG5cdCAgICAud2hlbignL0ExJywge1xuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL0ExL0ExLnRlbXBsYXRlLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdBMUNvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ0ExQ29udHJvbGxlcicsXG5cdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuXHQgICAgfSk7XG4gICAgICAgIC8vIHVzZSB0aGUgSFRNTDUgSGlzdG9yeSBBUElcbiAgICAgICAgLy8gJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuICAgIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBBMU1vZHVsZTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbi8qIGpzaGludCAtVzEwNiAqL1xuXG5jbGFzcyBBMkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhZ2UsIG9wZW5JbWFnZU1vZGFsU2VydmljZSkge1xuXHQnbmdJbmplY3QnO1xuXHR0aGlzLnBhZ2UgPSBwYWdlO1xuXHR0aGlzLm9wZW5JbWFnZU1vZGFsU2VydmljZSA9IG9wZW5JbWFnZU1vZGFsU2VydmljZTtcblxuXHRwYWdlLnNldFRpdGxlKCdBMicpO1xuXG5cdHRoaXMubm9XcmFwU2xpZGVzID0gZmFsc2U7XG5cdHRoaXMubWFpblNsaWRlcyA9W1xuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi9wcm9maWxlLmpwZycsXG5cdFx0dGV4dDogJydcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEwMjAuanBnJyxcblx0XHR0ZXh0OiAnTHVtYmFyZGluYSBhcGFydG1lbnRzJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTA1MC5qcGcnLFxuXHRcdHRleHQ6ICdNYXknXG5cdCAgICB9LFxuXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzExMTAuanBnJyxcblx0XHR0ZXh0OiAnJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTA1Ni5qcGcnLFxuXHRcdHRleHQ6ICcnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDU3LmpwZycsXG5cdFx0dGV4dDogJydcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEwNTguanBnJyxcblx0XHR0ZXh0OiAnJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTA1OS5qcGcnLFxuXHRcdHRleHQ6ICcnXG5cdCAgICB9LHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTA3MC5qcGcnLFxuXHRcdHRleHQ6ICcnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMzIwLmpwZycsXG5cdFx0dGV4dDogJ3ZpZXcgZnJvbSB0aGUgZW50cmFuY2Ugc2lkZSdcblx0ICAgIH1cblx0XTtcblx0dGhpcy5zbGlkZXMgPSBbXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyL3Byb2ZpbGUuanBnJyxcblx0XHR0ZXh0OiAnJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTAyMC5qcGcnLFxuXHRcdHRleHQ6ICdMdW1iYXJkaW5hIGFwYXJ0bWVudHMnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDMwLmpwZycsXG5cdFx0dGV4dDogJ0FwcmlsJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTA0MC5qcGcnLFxuXHRcdHRleHQ6ICdBcHJpbCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEwNTAuanBnJyxcblx0XHR0ZXh0OiAnTWF5J1xuXHQgICAgfSxcblxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDU1LmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJhbGNvbnkgaW4gTHVtYmFyZGEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDU2LmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJhbGNvbnkgaW4gTHVtYmFyZGEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDU3LmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJhbGNvbnkgaW4gTHVtYmFyZGEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDU4LmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJhbGNvbnkgaW4gTHVtYmFyZGEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDU5LmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJhbGNvbnkgaW4gTHVtYmFyZGEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDYwLmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJhbGNvbnkgaW4gTHVtYmFyZGEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDcwLmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJhbGNvbnkgaW4gTHVtYmFyZGEnXG5cdCAgICB9LFxuICAgICAgICAgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDc1LmpwZycsXG5cdFx0dGV4dDogJ0F3bmluZydcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEwNzYuanBnJyxcblx0XHR0ZXh0OiAnQXduaW5nJ1xuXHQgICAgfSxcbiAgICAgICAgICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTA3Ny5qcGcnLFxuXHRcdHRleHQ6ICdBd25pbmcnXG5cdCAgICB9LFxuICAgICAgICAgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDc4LmpwZycsXG5cdFx0dGV4dDogJ0F3bmluZydcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEwODAuanBnJyxcblx0XHR0ZXh0OiAnTm92ZW1iZXInXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMDkwLmpwZycsXG5cdFx0dGV4dDogJ0xpdmluZyByb29tJ1xuXHQgICAgfSxcbiAgICAgICAgICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTA5NS5qcGcnLFxuXHRcdHRleHQ6ICdMaXZpbmcgcm9vbSdcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEwOTcuanBnJyxcblx0XHR0ZXh0OiAnTGl2aW5nIHJvb20nXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMTAwLmpwZycsXG5cdFx0dGV4dDogJ0xpdmluZyByb29tJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTExMC5qcGcnLFxuXHRcdHRleHQ6ICdMaXZpbmcgcm9vbSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzExMjAuanBnJyxcblx0XHR0ZXh0OiAnTGl2aW5nIHJvb20nXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMTMwLmpwZycsXG5cdFx0dGV4dDogJ0xpdmluZyByb29tJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTE0MC5qcGcnLFxuXHRcdHRleHQ6ICdFbnRyYW5jZSwgUm9vbSAxLCBLaXRjaGVuIGFuZCBEaW5pZyBhcmVhJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTE1MC5qcGcnLFxuXHRcdHRleHQ6ICdLaXRjaGVuJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTE2MC5qcGcnLFxuXHRcdHRleHQ6ICdLaXRjaGVuJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTE4MC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDEgYW5kIEJhdGhyb29tMidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzExOTAuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAxJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTIwMC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMjEwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEyMjAuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAxJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTIzMC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDEsIEJhdGhyb29tIDIsIFJvb20gMiBhbmQgZGluaW5nIHJvb20nXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMjQwLmpwZycsXG5cdFx0dGV4dDogJ0JhdGhyb29tIDIgYW5kIFJvb20gMidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEyNTAuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAyJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTI2MC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDInXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMjYxLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEyNjIuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAyJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTI2My5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDInXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMjgwLmpwZycsXG5cdFx0dGV4dDogJ09saXZlJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTI5MC5qcGcnLFxuXHRcdHRleHQ6ICdCYXRocm9vbSAxJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTMwMC5qcGcnLFxuXHRcdHRleHQ6ICdCYXRocm9vbSAxJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTMxMC5qcGcnLFxuXHRcdHRleHQ6ICd2aWV3IGZyb20gdGhlIGVudHJhbmNlIHNpZGUnXG5cdCAgICB9LFxuICAgICAgICAgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMzE1LmpwZycsXG5cdFx0dGV4dDogJ3ZpZXcgZnJvbSB0aGUgZW50cmFuY2Ugc2lkZSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEzMjAuanBnJyxcblx0XHR0ZXh0OiAndmlldyBmcm9tIHRoZSBlbnRyYW5jZSBzaWRlJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTMzMC5qcGcnLFxuXHRcdHRleHQ6ICdBcGFydG1lbnQgZnJvbSBzdHJlZXQnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMzQwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzEzNTAuanBnJyxcblx0XHR0ZXh0OiAnTmVpZ2hib3Job29kJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTM2MC5qcGcnLFxuXHRcdHRleHQ6ICdOZWlnaGJvcmhvb2QgQXByaWwnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMzcwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCBKdW4nXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMzgwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCBKdWwnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi8xMzkwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICdhc3NldHMvaW1hZ2VzL0EyLzE0MDAuanBnJyxcblx0XHR0ZXh0OiAnTmVpZ2hib3Job29kJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvMTQxMC5qcGcnLFxuXHRcdHRleHQ6ICdTdW5zZXQnXG5cdCAgICB9XTtcbiAgICAgICAgdGhpcy5vcGVuSW1hZ2VNb2RhbFNlcnZpY2Uuc2xpZGVzID0gdGhpcy5zbGlkZXM7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQTJDb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5pbXBvcnQgQTJDb250cm9sbGVyIGZyb20gJy4vQTIuY29udHJvbGxlcic7XG5pbXBvcnQgdWlNb2R1bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aS91aS5tb2R1bGUnO1xuXG5cbnZhciBBMk1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdsdW1iYXJkaW5hLkEyJyxcblx0XHRcdCAgICAgIFsnbmdSb3V0ZScsXG5cdFx0XHQgICAgICAgdWlNb2R1bGUubmFtZSxdKVxuICAgIC5jb250cm9sbGVyKCdBMkNvbnRyb2xsZXInLCBBMkNvbnRyb2xsZXIpXG4gICAgLmNvbmZpZygoJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSA9PiB7XG5cdCduZ0luamVjdCc7XG5cblx0JHJvdXRlUHJvdmlkZXJcblx0ICAgIC53aGVuKCcvQTInLCB7XG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvQTIvQTIudGVtcGxhdGUuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogJ0EyQ29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAnQTJDb250cm9sbGVyJyxcblx0XHRiaW5kVG9Db250cm9sbGVyOiB0cnVlXG5cdCAgICB9KTtcbiAgICAgICAgLy8gdXNlIHRoZSBIVE1MNSBIaXN0b3J5IEFQSVxuICAgICAgICAvLyAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG4gICAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IEEyTW9kdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuLyoganNoaW50IC1XMTA2ICovXG5cbmNsYXNzIENvbnRhY3RDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYWdlKSB7XG5cdCduZ0luamVjdCc7XG5cdHRoaXMucGFnZSA9IHBhZ2U7XG5cdHBhZ2Uuc2V0VGl0bGUoJ0NvbnRhY3QnKTtcblx0dGhpcy5tYXAgPSB7Y2VudGVyOiB7bGF0aXR1ZGU6IDQyLjkyMjY3Mixcblx0XHRcdCAgICAgbG9uZ2l0dWRlOiAgMTcuMTcxMDU5IH0sXG5cdFx0ICAgIHpvb206IDE1LFxuXHRcdCAgICBib3VuZHM6IHt9LFxuXHRcdCAgICBvcHRpb25zOiB7c2Nyb2xsd2hlZWw6IGZhbHNlfX07XG5cdHRoaXMubWFya2VyID0ge1xuXHQgICAgaWQ6IDAsXG5cdCAgICBjb29yZHM6IHtcblx0XHRsYXRpdHVkZTogNDIuOTIyNjcyLFxuXHRcdGxvbmdpdHVkZTogMTcuMTcxMDU5XG5cdCAgICB9LFxuXHQgICAgb3B0aW9uczogeyBkcmFnZ2FibGU6IHRydWUgfVxuXHR9O1xuXHR0aGlzLnNsaWRlcyA9IFtcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyL3Byb2ZpbGUuanBnJyxcblx0XHR0ZXh0OiAnTHVtYmFyZGluYSBBMidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi9saXZpbmdyb29tLmpwZycsXG5cdFx0dGV4dDogJ0xpdmluZyByb29tJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyL2tpdGNoZW4uanBnJyxcblx0XHR0ZXh0OiAnS2l0Y2hlbidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi9yb29tMi5qcGcnLFxuXHRcdHRleHQ6ICdSb29tJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyL2ZhY2FkZS5qcGcnLFxuXHRcdHRleHQ6ICdBcGFydG1lbnQgZnJvbSBzdHJlZXQnXG5cdCAgICB9XTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb250YWN0Q29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cblxuaW1wb3J0IENvbnRhY3RDb250cm9sbGVyIGZyb20gJy4vY29udGFjdC5jb250cm9sbGVyJztcblxudmFyIGNvbnRhY3RNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnbHVtYmFyZGluYS5jb250YWN0Jyxcblx0XHRcdFx0ICAgWyduZ1JvdXRlJyxcblx0XHRcdFx0ICAgICd1aUdtYXBnb29nbGUtbWFwcyddKVxuICAgIC5jb250cm9sbGVyKCdjb250YWN0Q29udHJvbGxlcicsIENvbnRhY3RDb250cm9sbGVyKVxuICAgIC5jb25maWcoKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikgPT4ge1xuXHQnbmdJbmplY3QnO1xuXG5cdCRyb3V0ZVByb3ZpZGVyXG5cdCAgICAud2hlbignL2NvbnRhY3QnLCB7XG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvY29udGFjdC9jb250YWN0LnRlbXBsYXRlLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdjb250YWN0Q29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAnY29udGFjdENvbnRyb2xsZXInLFxuXHRcdGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcblx0ICAgIH0pO1xuXHQvLyB1c2UgdGhlIEhUTUw1IEhpc3RvcnkgQVBJXG4gICAgICAgIC8vICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTt4XG4gICAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RNb2R1bGU7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmltcG9ydCB1aU1vZHVsZSBmcm9tICcuLi9jb21wb25lbnRzL3VpL3VpLm1vZHVsZSc7XG5pbXBvcnQgY29tbW9uTW9kdWxlIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL2NvbW1vbi5tb2R1bGUnO1xuXG5pbXBvcnQgaG9tZU1vZHVsZSBmcm9tICcuL2hvbWUvaG9tZS5tb2R1bGUnO1xuaW1wb3J0IGNvbnRhY3RNb2R1bGUgZnJvbSAnLi9jb250YWN0L2NvbnRhY3QubW9kdWxlJztcbmltcG9ydCBBMU1vZHVsZSBmcm9tICcuL0ExL0ExLm1vZHVsZSc7XG5pbXBvcnQgQTJNb2R1bGUgZnJvbSAnLi9BMi9BMi5tb2R1bGUnO1xuXG4vL2FuZ3VsYXIubW9kdWxlKCd0ZW1wbGF0ZXMnLCBbXSk7XG52YXIgTHVtYmFyZGluYU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdMdW1iYXJkaW5hV2ViJyxcblx0XHRcdFx0ICAgICAgWyduZ1JvdXRlJyxcblx0XHRcdFx0ICAgICAgIHVpTW9kdWxlLm5hbWUsXG5cdFx0XHRcdCAgICAgICBjb21tb25Nb2R1bGUubmFtZSxcblx0XHRcdFx0ICAgICAgIGhvbWVNb2R1bGUubmFtZSxcblx0XHRcdFx0ICAgICAgIGNvbnRhY3RNb2R1bGUubmFtZSxcblx0XHRcdFx0ICAgICAgIEExTW9kdWxlLm5hbWUsXG5cdFx0XHRcdCAgICAgICBBMk1vZHVsZS5uYW1lLFxuXHRcdFx0XHQgICAgICAgJ3VpLmJvb3RzdHJhcCcsXG5cdFx0XHRcdCAgICAgICAnd3UubWFzb25yeScsXG5cdFx0XHRcdCAgICAgICAnbmdTYW5pdGl6ZScsXG5cdFx0XHRcdCAgICAgICAnbmdBbmltYXRlJyxcblx0XHRcdFx0ICAgICAgICdhbmd1bGFydGljcycsXG5cdFx0XHRcdCAgICAgICAnYW5ndWxhcnRpY3MuZ29vZ2xlLmFuYWx5dGljcycsXG5cdFx0XHRcdCAgICAgICAnYW5ndWxhcnRpY3Muc2Nyb2xsJ10pXG4gICAgLmNvbmZpZygoJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSA9PiB7XG5cdCduZ0luamVjdCc7XG5cdCRyb3V0ZVByb3ZpZGVyXG5cdCAgICAub3RoZXJ3aXNlKHtcblx0XHRyZWRpcmVjdFRvOiAnLydcblx0ICAgIH0pO1xuICAgICAgICAvLyB1c2UgdGhlIEhUTUw1IEhpc3RvcnkgQVBJXG4gICAgICAgIC8vICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcbiAgICB9KVxuICAgIC5jb250cm9sbGVyKCdjb21tb25DdHJsJywgZnVuY3Rpb24ocGFnZSkge1xuXHQnbmdJbmplY3QnO1xuXHR0aGlzLnBhZ2UgPSBwYWdlO1xuICAgIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBMdW1iYXJkaW5hTW9kdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuLyoganNoaW50IC1XMTA2ICovXG5cbmNsYXNzIEhvbWVDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigkd2luZG93LCBwYWdlKSB7XG5cdCduZ0luamVjdCc7XG5cdHRoaXMucGFnZSA9IHBhZ2U7XG5cdHRoaXMubnVtYmVyT2ZTdGFycyA9IDM7XG5cdHRoaXMubm9XcmFwU2xpZGVzID0gZmFsc2U7XG5cdHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG5cdHBhZ2Uuc2V0VGl0bGUoJ0hvbWUnKTtcblx0dGhpcy5hcGFydG1lbnRzID0gW1xuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMi9wcm9maWxlLmpwZycsXG5cdFx0dGV4dDogJ0x1bWJhcmRpbmEgQTInLFxuXHRcdGxpbms6ICcvQTInXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9BMS9wcm9maWxlLmpwZycsXG5cdFx0dGV4dDogJ0x1bWJhcmRpbmEgQTEnLFxuXHRcdGxpbms6ICcvQTEnXG5cdCAgICB9XTtcblxuXHR0aGlzLnNsaWRlcyA9IFtcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTIvcHJvZmlsZS5qcGcnLFxuXHRcdHRleHQ6ICdMdW1iYXJkaW5hIEEyJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvQTEvcHJvZmlsZS5qcGcnLFxuXHRcdHRleHQ6ICdMdW1iYXJkaW5hIEExJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvTHVtYmFyZGEvbHVtYmFyZGEuanBnJyxcblx0XHR0ZXh0OiAnTHVtYmFyZGEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9MdW1iYXJkYS9iaWxpbi16YWwuanBnJyxcblx0XHR0ZXh0OiAnVGhlIGJlc3QgYmVhY2hlcyBvZiBLb3JjdWxhOiBCaWxpbiBaYWwnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnYXNzZXRzL2ltYWdlcy9MdW1iYXJkYS9iaWxpbi16YWwxLmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJlYWNoZXMgb2YgS29yY3VsYTogQmlsaW4gWmFsJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvTHVtYmFyZGEvcHJ6aW5hLmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJlYWNoZXMgb2YgS29yY3VsYTogUHJ6aW5hJ1xuXHQgICAgfV07XG5cdHRoaXMubWFwID0ge2NlbnRlcjoge2xhdGl0dWRlOiA0Mi45MjI2NzIsXG5cdFx0XHQgICAgIGxvbmdpdHVkZTogIDE3LjE3MTA1OSB9LFxuXHRcdCAgICB6b29tOiAxNSxcblx0XHQgICAgYm91bmRzOiB7fSxcblx0XHQgICAgb3B0aW9uczoge3Njcm9sbHdoZWVsOiBmYWxzZX19O1xuXHR0aGlzLm1hcmtlciA9IHtcblx0ICAgIGlkOiAwLFxuXHQgICAgY29vcmRzOiB7XG5cdFx0bGF0aXR1ZGU6IDQyLjkyMjY3Mixcblx0XHRsb25naXR1ZGU6IDE3LjE3MTA1OVxuXHQgICAgfSxcblx0ICAgIG9wdGlvbnM6IHsgZHJhZ2dhYmxlOiB0cnVlIH1cblx0fTtcbiAgICB9XG5cbiAgICBvcGVuQWlyKCkge1xuXHR0aGlzLiR3aW5kb3cub3BlbignaHR0cHM6Ly93d3cuYWlyYm5iLmNvbS91c2Vycy9zaG93LzcyNjIzMjEnLCAnX2JsYW5rJyk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZUNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmltcG9ydCBIb21lQ29udHJvbGxlciBmcm9tICcuL2hvbWUuY29udHJvbGxlcic7XG5cbnZhciBob21lTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2x1bWJhcmRpbmEuaG9tZScsXG5cdFx0XHRcdFsnbmdSb3V0ZSddKVxuXHQuY29udHJvbGxlcignaG9tZUNvbnRyb2xsZXInLCBIb21lQ29udHJvbGxlcilcbiAgICAuY29uZmlnKCgkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpID0+IHtcblx0ICAgICduZ0luamVjdCc7XG5cblx0ICAgICRyb3V0ZVByb3ZpZGVyXG5cdFx0LndoZW4oJy8nLCB7XG5cdFx0ICAgIHRlbXBsYXRlVXJsOiAnYXBwL2hvbWUvaG9tZS50ZW1wbGF0ZS5odG1sJyxcblx0XHQgICAgY29udHJvbGxlcjogJ2hvbWVDb250cm9sbGVyJyxcblx0XHQgICAgY29udHJvbGxlckFzOiAnaG9tZUNvbnRyb2xsZXInLFxuXHRcdCAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG5cdFx0fSk7XG4gICAgICAgICAgICAvLyB1c2UgdGhlIEhUTUw1IEhpc3RvcnkgQVBJXG4gICAgICAgICAgICAvLyAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG5cdH0pO1xuXG5leHBvcnQgZGVmYXVsdCBob21lTW9kdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLypqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmltcG9ydCBQYWdlU2VydmljZSBmcm9tICcuL3BhZ2Uuc2VydmljZSc7XG5cbmNvbnN0IGtpbG9ieXRlcyA9IDEwMjQ7XG5jb25zdCBtYXhfcHJvZmlsZV9waWN0dXJlX3NpemUgPSAxMDAgKiBraWxvYnl0ZXM7XG5jb25zdCBtYXhfYXBwX2ljb25fc2l6ZSA9IDEwMCAqIGtpbG9ieXRlcztcblxudmFyIGNvbW1vbk1vZHVsZSA9ICBhbmd1bGFyLm1vZHVsZSgnY29tbW9uJywgW10pXG5cdC5zZXJ2aWNlKCdwYWdlJywgUGFnZVNlcnZpY2UpXG5cdC5jb25zdGFudCgna2lsb2J5dGVzJywga2lsb2J5dGVzKVxuXHQuY29uc3RhbnQoJ21heF9hcHBfaWNvbl9zaXplJywgbWF4X2FwcF9pY29uX3NpemUpXG5cdC5jb25zdGFudCgnbWF4X3Byb2ZpbGVfcGljdHVyZV9zaXplJywgbWF4X3Byb2ZpbGVfcGljdHVyZV9zaXplKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbW9uTW9kdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG52YXIgZGFya0JhY2tncm91bmQgPSB7IGJhY2tncm91bmRDb2xvcjogJyMyZDMyMzUnLFxuXHRcdCAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xuXHRcdCAgICAgfTtcblxudmFyIGxpZ2h0QmFja2dyb3VuZCA9IHsgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuXHRcdFx0YmFja2dyb3VuZFNpemU6ICdjb3Zlcidcblx0XHQgICAgICB9O1xudmFyIGJsdWVCYWNrZ3JvdW5kID0geyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAxODNBJyxcblx0XHQgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3Zlcidcblx0XHQgICAgIH07XG5cbnZhciBkZWZhdWx0QmFja2dyb3VuZCA9IGxpZ2h0QmFja2dyb3VuZDtcblxuY2xhc3MgUGFnZVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCRsb2NhdGlvbiwgJHJvb3RTY29wZSkge1xuXHQnbmdJbmplY3QnO1xuXG5cdHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuXHR0aGlzLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xuXHR0aGlzLnRpdGxlID0gJ0FwYXJ0bWVudHMgTHVtYmFyZGluYSc7XG5cblx0dGhpcy5oaXN0b3J5ID0gW107XG5cblx0Ly8gZGlyZWN0aW9uIG9mIHRyYW5zaXRpb24gd2hlbiBjaGFuZ2luZyByb3V0ZSAodXNlZCBieSBuZy12aWV3KSBcblx0dGhpcy50cmFuc2l0aW9uID0gJ3JpZ2h0Jztcblx0dGhpcy5iYWNrZ3JvdW5kID0gbGlnaHRCYWNrZ3JvdW5kO1xuXG5cdCRyb290U2NvcGUuJG9uKCckbG9jYXRpb25DaGFuZ2VTdGFydCcsICgpPT4ge1xuXHQgICAgdGhpcy5iYWNrZ3JvdW5kID0gZGVmYXVsdEJhY2tncm91bmQ7XG5cdH0pO1xuICAgIH1cblxuICAgIHNldFRpdGxlKG5ld1RpdGxlKSB7XG5cdHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG4gICAgXG4gICAgc2V0TGlnaHRCYWNrZ3JvdW5kKCkge1xuXHR0aGlzLmJhY2tncm91bmQgPSBsaWdodEJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgc2V0RGFya0JhY2tncm91bmQoKSB7XG5cdHRoaXMuYmFja2dyb3VuZCA9IGRhcmtCYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIHNldEJsdWVCYWNrZ3JvdW5kKCkge1xuXHR0aGlzLmJhY2tncm91bmQgPSBibHVlQmFja2dyb3VuZDtcbiAgICB9IFxuXG4gICAgZ28ocGF0aCkge1xuXHRpZihwYXRoID09PSB1bmRlZmluZWQpIHtcblx0ICAgIHRoaXMuZ28oJy8nKTtcblx0ICAgIHJldHVybjtcblx0fVxuXHR0aGlzLmhpc3RvcnkucHVzaChwYXRoKTtcblx0dGhpcy50cmFuc2l0aW9uID0gdGhpcy50cmFuc2l0aW9uID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3JpZ2h0Jztcblx0dGhpcy4kbG9jYXRpb24ucGF0aChwYXRoKTtcbiAgICB9XG5cbiAgICBnb0JhY2soKSB7XG5cdHRoaXMuaGlzdG9yeS5wb3AoKTtcblx0dGhpcy5nbyh0aGlzLmhpc3RvcnkucG9wKCkpO1xuICAgIH1cblxuICAgIGRlbGV0ZUhpc3RvcnkoKSB7XG5cdHRoaXMuaGlzdG9yeSA9IFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVNlcnZpY2U7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmNsYXNzIEVycm9yTW9kYWxDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigkbW9kYWwsICRtb2RhbEluc3RhbmNlLCBlcnJvck1lc3NhZ2UsIGVycm9ySGVhZGVyKSB7XG5cdCduZ0luamVjdCc7XG5cblx0dGhpcy4kbW9kYWwgPSAkbW9kYWw7XG5cdHRoaXMuJG1vZGFsSW5zdGFuY2UgPSAkbW9kYWxJbnN0YW5jZTsgXG5cdHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlO1xuXHR0aGlzLmVycm9ySGVhZGVyID0gZXJyb3JIZWFkZXI7XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuXHR0aGlzLiRtb2RhbEluc3RhbmNlLmNsb3NlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvck1vZGFsQ29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cblxuaW1wb3J0IEVycm9yTW9kYWxDb250cm9sbGVyIGZyb20gJy4vZXJyb3ItbW9kYWwuY29udHJvbGxlcic7XG5cbmNsYXNzIEVycm9yTW9kYWxTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigkbW9kYWwpIHtcblx0J25nSW5qZWN0JztcblxuXHR0aGlzLiRtb2RhbCA9ICRtb2RhbDtcbiAgICB9XG5cbiAgICBvcGVuKG1lc3NhZ2UsIGhlYWRlcikge1xuXHR0aGlzLiRtb2RhbC5vcGVuKHtcblx0ICAgIGJhY2tkcm9wOiBmYWxzZSxcblx0ICAgIHRlbXBsYXRlVXJsOidjb21wb25lbnRzL3VpL2Vycm9yLW1vZGFsL2Vycm9yLW1vZGFsLnRlbXBsYXRlLmh0bWwnLFxuXHQgICAgY29udHJvbGxlcjogRXJyb3JNb2RhbENvbnRyb2xsZXIsXG5cdCAgICBjb250cm9sbGVyQXM6ICdlcnJvck1vZGFsJyxcblx0ICAgIHJlc29sdmU6IHtcblx0XHRlcnJvck1lc3NhZ2UgOiAoKSA9PiBtZXNzYWdlLFxuXHRcdGVycm9ySGVhZGVyIDogKCkgPT4gaGVhZGVyXG5cdCAgICB9XG5cdH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JNb2RhbFNlcnZpY2U7XG4iLCIndXNlIHN0cmljdCc7XG4vKmpzaGludCBlc25leHQ6IHRydWUgKi9cblxuY2xhc3MgTmF2QmFyQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IocGFnZSkge1xuXHQnbmdJbmplY3QnO1xuXG5cdHRoaXMucGFnZSA9IHBhZ2U7XHRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhckNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG4vKmpzaGludCBlc25leHQ6IHRydWUgKi9cblxuaW1wb3J0IE5hdkJhckNvbnRyb2xsZXIgZnJvbSAnLi9uYXYtYmFyLmNvbnRyb2xsZXInO1xuXG52YXIgbmF2QmFyRGlyZWN0aXZlID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG5cdHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG5cdHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy91aS9uYXYtYmFyL25hdi1iYXIudGVtcGxhdGUuaHRtbCcsXG5cdHNjb3BlOiB7fSxcblx0Y29udHJvbGxlcjogTmF2QmFyQ29udHJvbGxlcixcblx0Y29udHJvbGxlckFzOiAnbmF2QmFyJ1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuYXZCYXJEaXJlY3RpdmU7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGltYWdlVmlld0RpcmVjdGl2ZSA9ICgkd2luZG93KSA9PiB7XG4gICAgJ25nSW5qZWN0JztcbiAgICByZXR1cm4ge1xuXHRyZXN0cmljdDogJ0EnLFxuXHRsaW5rOiAoJHNjb3BlLCBlbGVtLCBhdHRyKSA9PiB7XG4gICAgICAgICAgICBlbGVtLm9uKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2lyaW5hIHNsaWtlIGplXCIsIGVsZW0uaW5uZXJXaWR0aCgpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNpcmluYSBla3JhbmEgamVcIiwgJHdpbmRvdy5pbm5lcldpZHRoKTtcblxuXHRcdGxldCB3aWR0aCA9IGVsZW0uaW5uZXJXaWR0aCgpIDwgJHdpbmRvdy5pbm5lcldpZHRoKjAuODkgPyBlbGVtLmlubmVyV2lkdGgoKSA6ICR3aW5kb3cuaW5uZXJXaWR0aCowLjg5O1xuXHRcdGxldCBoZWlnaHQgPSBlbGVtLmlubmVySGVpZ2h0KCkgPCAkd2luZG93LmlubmVySGVpZ2h0KjAuNzAgPyBlbGVtLmlubmVySGVpZ2h0KCkgOiAkd2luZG93LmlubmVySGVpZ2h0ICowLjcwO1xuXHRcdGVsZW0uYXR0cignc3R5bGUnLCAnbWF4LXdpZHRoOiAnICsgd2lkdGggKyAncHg7JyArICdtYXgtaGVpZ2h0OiAnICsgaGVpZ2h0ICsgJ3B4OycpO1xuXHQgICAgfSk7XG5cdH1cbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW1hZ2VWaWV3RGlyZWN0aXZlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5jbGFzcyBPcGVuSW1hZ2VNb2RhbENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCR1aWJNb2RhbEluc3RhbmNlLCBvcGVuSW1hZ2VNb2RhbFNlcnZpY2UsIHBhZ2UsIGltYWdlSW5mbykge1xuXHQnbmdJbmplY3QnO1xuXHR0aGlzLiR1aWJNb2RhbEluc3RhbmNlID0gJHVpYk1vZGFsSW5zdGFuY2U7XG5cdHRoaXMucGFnZSA9IHBhZ2U7XG5cdHRoaXMuaW1hZ2VJbmZvID0gaW1hZ2VJbmZvO1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IGltYWdlSW5mbztcbiAgICAgICAgdGhpcy5vcGVuSW1hZ2VNb2RhbFNlcnZpY2UgPSBvcGVuSW1hZ2VNb2RhbFNlcnZpY2U7XG4gICAgfVxuXG4gICAgdXBkYXRlSW1hZ2UoZGlyZWN0aW9uKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgV2lsbCBzaG93IG5leHQgaW1hZ2UgaWYgZGlyZWN0aW9uIGlzIDEsXG4gICAgICAgICAgaWYgZGlyZWN0aW9uIGlzIC0xIHNob3dzLCBwcmV2aW91c1xuICAgICAgICAqL1xuICAgICAgICBsZXQgY3VycmVudEltYWdlSW5kZXggPVxuICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VNb2RhbFNlcnZpY2Uuc2xpZGVzLmluZGV4T2YodGhpcy5jdXJyZW50SW1hZ2UpO1xuICAgICAgICBsZXQgbmV3SW5kZXggPSBjdXJyZW50SW1hZ2VJbmRleCArIGRpcmVjdGlvbjtcbiAgICAgICAgaWYgKG5ld0luZGV4ID49IDAgJiYgbmV3SW5kZXggPCB0aGlzLm9wZW5JbWFnZU1vZGFsU2VydmljZS5zbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VNb2RhbFNlcnZpY2Uuc2xpZGVzW25ld0luZGV4XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtleVByZXNzKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LmtleUNvZGUgPT0gMzkpIHtcbiAgICAgICAgICAgIC8vcmlnaHQgYXJyb3dcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW1hZ2UoMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoJGV2ZW50LmtleUNvZGUgPT0gMzcpIHtcbiAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xuICAgICAgICAgICAgdGhpcy51cGRhdGVJbWFnZSgtMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG5cdHRoaXMuJHVpYk1vZGFsSW5zdGFuY2UuY2xvc2UoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9wZW5JbWFnZU1vZGFsQ29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cblxuaW1wb3J0IE9wZW5JbWFnZU1vZGFsQ29udHJvbGxlciBmcm9tICcuL29wZW4taW1hZ2UtbW9kYWwuY29udHJvbGxlcic7XG5cbmNsYXNzIE9wZW5JbWFnZU1vZGFsU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoJHVpYk1vZGFsKSB7XG5cdCduZ0luamVjdCc7XG5cdHRoaXMuJHVpYk1vZGFsID0gJHVpYk1vZGFsO1xuICAgICAgICB0aGlzLnNsaWRlcyA9IFtdO1xuICAgIH1cblxuICAgIG9wZW4oaW1hZ2VJbmZvKSB7XG5cdHRoaXMuJHVpYk1vZGFsLm9wZW4oe1xuXHQgICAgYmFja2Ryb3A6IHRydWUsXG5cdCAgICB3aW5kb3dDbGFzczogJ2Z1bGwtc2NyZWVuLW1vZGFsJyxcblx0ICAgIHRlbXBsYXRlVXJsOidjb21wb25lbnRzL3VpL29wZW4taW1hZ2UtbW9kYWwvb3Blbi1pbWFnZS1tb2RhbC50ZW1wbGF0ZS5odG1sJyxcblx0ICAgIGNvbnRyb2xsZXI6IE9wZW5JbWFnZU1vZGFsQ29udHJvbGxlcixcblx0ICAgIGNvbnRyb2xsZXJBczogJ29wZW5JbWFnZU1vZGFsQ29udHJvbGxlcicsXG5cdCAgICByZXNvbHZlOiB7XG5cdFx0aW1hZ2VJbmZvOiAoKSA9PiBpbWFnZUluZm9cblx0ICAgIH1cblx0fSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcGVuSW1hZ2VNb2RhbFNlcnZpY2U7XG4iLCIndXNlIHN0cmljdCc7XG4vKmpzaGludCBlc25leHQ6IHRydWUgKi9cblxudmFyIHBkZlZpZXdEaXJlY3RpdmUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcblx0cmVzdHJpY3Q6ICdFJyxcblx0dGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL3VpL3BkZi12aWV3L3BkZi12aWV3LnRlbXBsYXRlLmh0bWwnLFxuXHRzY29wZTogeyBwZGYgICAgIDogJz0nXG5cdCAgICAgICB9XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBkZlZpZXdEaXJlY3RpdmU7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmNsYXNzIFN1Y2Nlc3NNb2RhbENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCRtb2RhbCwgcGFnZSwgJG1vZGFsSW5zdGFuY2UsIHN1Y2Nlc3NNZXNzYWdlLCBzdWNjZXNzSGVhZGVyLCBzdWNjZXNzTGluaykge1xuXHQnbmdJbmplY3QnO1xuXG5cdHRoaXMuJG1vZGFsSW5zdGFuY2UgPSAkbW9kYWxJbnN0YW5jZTsgXG5cdHRoaXMucGFnZSA9IHBhZ2U7XG5cdHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBzdWNjZXNzTWVzc2FnZTtcblx0dGhpcy5zdWNjZXNzSGVhZGVyID0gc3VjY2Vzc0hlYWRlcjtcblx0dGhpcy5zdWNjZXNzTGluayA9IHN1Y2Nlc3NMaW5rO1xuICAgIH1cblxuICAgIGNhbmNlbCgpIHtcblx0dGhpcy4kbW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xuXHR0aGlzLnBhZ2UuZ28odGhpcy5zdWNjZXNzTGluayk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWNjZXNzTW9kYWxDb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5pbXBvcnQgU3VjY2Vzc01vZGFsQ29udHJvbGxlciBmcm9tICcuL3N1Y2Nlc3MtbW9kYWwuY29udHJvbGxlcic7XG5cbmNsYXNzIFN1Y2Nlc3NNb2RhbFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCRtb2RhbCkge1xuXHQnbmdJbmplY3QnO1xuXG5cdHRoaXMuJG1vZGFsID0gJG1vZGFsO1xuICAgIH1cblxuICAgIG9wZW4obWVzc2FnZSwgaGVhZGVyLCBsaW5rKSB7XG5cdHRoaXMuJG1vZGFsLm9wZW4oe1xuXHQgICAgYmFja2Ryb3A6IGZhbHNlLFxuXHQgICAgdGVtcGxhdGVVcmw6J2NvbXBvbmVudHMvdWkvc3VjY2Vzcy1tb2RhbC9zdWNjZXNzLW1vZGFsLnRlbXBsYXRlLmh0bWwnLFxuXHQgICAgY29udHJvbGxlcjogU3VjY2Vzc01vZGFsQ29udHJvbGxlcixcblx0ICAgIGNvbnRyb2xsZXJBczogJ3N1Y2Nlc3NNb2RhbCcsXG5cdCAgICByZXNvbHZlOiB7XG5cdFx0c3VjY2Vzc01lc3NhZ2U6ICgpID0+ICBtZXNzYWdlLFxuXHRcdHN1Y2Nlc3NIZWFkZXI6ICgpID0+IGhlYWRlcixcblx0XHRzdWNjZXNzTGluazogKCkgPT4gbGlua1xuXHQgICAgfVxuXHR9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1Y2Nlc3NNb2RhbFNlcnZpY2U7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmltcG9ydCBuYXZCYXJEaXJlY3RpdmUgZnJvbSAnLi9uYXYtYmFyL25hdi1iYXIuZGlyZWN0aXZlJztcblxuaW1wb3J0IHN1Y2Nlc3NNb2RhbFNlcnZpY2UgZnJvbSAnLi9zdWNjZXNzLW1vZGFsL3N1Y2Nlc3MtbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgZXJyb3JNb2RhbFNlcnZpY2UgZnJvbSAnLi9lcnJvci1tb2RhbC9lcnJvci1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCBwZGZWaWV3RGlyZWN0aXZlIGZyb20gJy4vcGRmLXZpZXcvcGRmLXZpZXcuZGlyZWN0aXZlJztcbmltcG9ydCBpbWFnZVZpZXdEaXJlY3RpdmUgZnJvbSAnLi9vcGVuLWltYWdlLWRpcmVjdGl2ZS9vcGVuLWltYWdlLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCBjb21tb25Nb2R1bGUgZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IE9wZW5JbWFnZU1vZGFsU2VydmljZSBmcm9tICcuL29wZW4taW1hZ2UtbW9kYWwvb3Blbi1pbWFnZS1tb2RhbC5zZXJ2aWNlJztcblxudmFyIHVpTW9kdWxlID0gIGFuZ3VsYXIubW9kdWxlKCdtYXhlbGVyLnVpJywgWyduZ1Nhbml0aXplJyxcblx0XHRcdFx0XHQgICAgICAnbmdHcmlkJywgXG5cdFx0XHRcdFx0ICAgICAgJ3VpLmJvb3RzdHJhcCcsXG5cdFx0XHRcdFx0ICAgICAgY29tbW9uTW9kdWxlLm5hbWVdKVxuICAgIC5zZXJ2aWNlKCdzdWNjZXNzTW9kYWxTZXJ2aWNlJywgc3VjY2Vzc01vZGFsU2VydmljZSlcbiAgICAuc2VydmljZSgnZXJyb3JNb2RhbFNlcnZpY2UnLCBlcnJvck1vZGFsU2VydmljZSlcbiAgICAuc2VydmljZSgnb3BlbkltYWdlTW9kYWxTZXJ2aWNlJywgT3BlbkltYWdlTW9kYWxTZXJ2aWNlKVxuICAgIC5kaXJlY3RpdmUoJ25hdkJhcicsIG5hdkJhckRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdwZGZWaWV3JywgcGRmVmlld0RpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKCdpbWFnZVZpZXdEaXJlY3RpdmUnLCBpbWFnZVZpZXdEaXJlY3RpdmUpO1xuXG5leHBvcnQgZGVmYXVsdCB1aU1vZHVsZTtcbiJdfQ==

angular.module('LumbardinaWeb').run(['$templateCache', function($templateCache) {$templateCache.put('app/A1/A1.template.html','<base href="/A1"><nav-bar></nav-bar><h5 style="text-align:center;">Lumbardina A1 (A3 + studio)</h5><div style="text-align: center;"><a href="//www.homeaway.co.uk/p1187894?uni_id=1452832" rel="nofollow"><img src="//www.homeaway.co.uk/haow/api/image/homeaway_uk/trips/1187894/reviews?unitId=1452832" alt="HomeAway Property" style="border:none;" rel="nofollow"></a><div style="text-align:center;"><a href="//www.homeaway.co.uk/reviews/p1187894?uni_id=1452832" rel="nofollow">Read</a> or <a href="//www.homeaway.co.uk/reviews/write/p1187894?uni_id=1452832" rel="nofollow">Write</a> Reviews</div></div><uib-carousel interval="5000" no-wrap="A1Controller.noWrapSlides"><uib-slide ng-repeat="slide in A1Controller.mainSlides" style=""><center><div ng-style="{\'background\': \'url(\\\'\' + slide.image + \'\\\')\', \'height\':\'528px\',\'background-size\': \'contain\',\'background-position\':\'center\', \'background-repeat\': \'no-repeat\'}" title="{{slide.text}}"></div></center><div class="carousel-caption"><p>{{slide.text}}</p></div></uib-slide></uib-carousel><div class="checkbox"><label><input type="checkbox" ng-model="A1Controller.noWrapSlides"> Disable Slide Looping</label></div><hr><div class="container"><p>&nbsp; &nbsp; Our relaxing Lumbardina A1 apartment is situated in TOP location, in the heart of the small, picturesque fishing village Lumbarda. The apartment is in the center of <b>Lumbarda</b>, only 60m from the sea, separated from seafront with owner\'s yard, fully equipped, spacious with provided parking space.</p><p>&nbsp; &nbsp; Apartment A1 (6) is on the same piece of land, behind Apartment A2 in a traditional dalmatian house. It is on the top floor and has a separate entrance,balcony with view on the sea and big terrace (20 square meters) only for you. There are 3 rooms, each with a double bed. One room is recently turned into studio for two, with new kitchen and bathroom. Apartment is equipped with 2 kitchens and 2 bathrooms, one with shower, another with bathtub (one has a washing machine in it),and dining table. The terrace on the first floor is perfect for alfresco dining. There is patio for barbecue. Size of apartment is 75 sq m.</p><p>If you wish to stay in a central location where everything is at hand, whilst enjoying total privacy, then this apartment is ideal for you with its private terrace and a beautiful Mediterranean garden with its lemon, orange, fig, pomegranate, kiwi and olive trees. Guests are also welcome to use the barbecue. For full enjoyment the apartment has a balcony with a splendid sea view, ideal to relax with a morning coffee or an evening glass of wine.</p><p>&nbsp; &nbsp; *Apartment A1 is rented in high season (July and August) as whole, and in other months it can be divided into 2 units: Apartment A3 for 4 persons and Room for 2-3 persons.</p><hr><p>&nbsp; &nbsp; Apartment is equipped with air conditioner, wireless internet access, fully equipped kitchen, washing machine, dining room and TV. A parking spot is also provided.</p><button class="btn btn-success" ng-click="A1Controller.page.go(\'contact\')" style="width:100%;">Contact us</button><br><br><button type="button" class="btn btn-default" ng-init="A1Controller.isCollapsed = false;" uib-tooltip="Click here to see more pictures of this wonderful apartment" ng-click="A1Controller.isCollapsed = !A1Controller.isCollapsed"><span ng-show="A1Controller.isCollapsed">Show</span> <span ng-hide="A1Controller.isCollapsed">Hide</span> images of apartment Lumbardina A1</button><hr><div uib-collapse="A1Controller.isCollapsed"><div class="well well-lg">Click on the image to enlarge it.<masonry masonry-options="{ isFitWidth: true, gutter: 36, transitionDuration: \'1.2s\'}" reload-on-show="" preserve-order="" style="margin: 20px auto 20px auto; display: block; cursor:pointer;" item-selector=".image-brick" column-width="20"><img masonry-brick="" ng-repeat="slide in A1Controller.slides" alt="{{slide.text}}" ng-src="{{slide.image}}" class="image-brick" ng-click="A1Controller.openImageModalService.open(slide)" uib-tooltip="{{slide.text}}"><masonry></masonry></masonry></div></div><div style="text-align: center;"><iframe scrolling="no" width="518" height="770" frameborder="0" style="overflow:hidden;border:none" src="//www.homeaway.co.uk/haow/widgets/calendar.html?propertyId=1187894&unitId=1452832&monthCount=12&orientation=full&site=homeaway_uk"></iframe><a href="//www.homeaway.co.uk/p1187894?uni_id=1452832" style="display:block;text-align:center;margin-top:-30px; font-size:12px;" rel="nofollow">HomeAway.co.uk #1187894</a></div></div>');
$templateCache.put('app/A2/A2.template.html','<nav-bar></nav-bar><h5 style="text-align:center;">Lumbardina A2</h5><div style="max-width:1200px; display:block; margin:10px auto;"><uib-carousel interval="5000" no-wrap="A2Controller.noWrapSlides"><uib-slide ng-repeat="slide in A2Controller.mainSlides"><center><div ng-style="{\'background\': \'url(\\\'\' + slide.image + \'\\\')\', \'height\':\'528px\',\'background-size\': \'contain\',\'background-position\':\'center\', \'background-repeat\': \'no-repeat\'}" title="{{slide.text}}"></div></center><div class="carousel-caption"><p>{{slide.text}}</p></div></uib-slide></uib-carousel><div class="checkbox"><label><input type="checkbox" ng-model="A2Controller.noWrapSlides"> Disable Picture Looping</label><p>&nbsp; &nbsp; Apartment A2 has astonishing terrace with view on the sea where our guests can fully enjoy meals or morning coffee.</p></div></div><hr><div class="container"><p>&nbsp; &nbsp; Our relaxing Lumbardina A2 apartment is situated in TOP location, in the heart of the small, picturesque fishing village Lumbarda.The apartment is in the center,the seafront only 30m from the sea, new, fully equipped, spacious with provided parking space</p><center><h5>Great Apartment In The Heart Of The Small, Picturesque Fishing Village Lumbarda</h5></center><p>&nbsp; &nbsp; The apartment is ideal for families and friends who want to stay in a central place close to many rural attractions, local restaurants (all styles such as traditional Croatian and Pizza), cafes, shops, bakeries, post office, local produce market, and the marina where you can rent boats, kayaks and snorkeling equipment. You can also rent bicycles or scooters and you are only a on 5-15 minute walk away from beautiful beaches.</p><p>&nbsp; &nbsp; The apartment is an ideal location to use as a base for all kind of activities like walking, cycling, fishing, diving, and sailing. Their location is also suitable for seniors, especially before and after peak holiday season when the sky and the sea are in perfect harmony and you have the beaches to yourself, walking, socializing and enjoying on the terrace, while all service activities are at hand.</p><p>&nbsp; &nbsp; Apartment A2 (4+2) is positioned on the first floor of a house on the seashore. There are 2 bedrooms, 2 bathrooms (one with washing machine), fully equipped kitchen, dining room with dining table for 6 persons, living room with TV and 2 sofa beds for extra people. The kitchen, dining room and living room are open plan, and are tastefully decorated, giving a pleasant and relaxed atmosphere. From the spacious living area, the balcony opens up to a large 20m2 terrace with unbelievable views of the sea, an ideal place to rest and enjoy the magic of summer and its nights.</p><hr><button class="btn btn-success" ng-click="A2Controller.page.go(\'contact\')" style="width:100%;">Contact us</button><br><br><button type="button" class="btn btn-default" ng-init="A2Controller.isCollapsed = false;" uib-tooltip="Click here to see more pictures of this wonderful apartment" ng-click="A2Controller.isCollapsed = !A2Controller.isCollapsed"><span ng-show="A2Controller.isCollapsed">Show</span> <span ng-hide="A2Controller.isCollapsed">Hide</span> images of apartment Lumbardina A2</button><hr><div uib-collapse="A2Controller.isCollapsed"><div class="well well-lg">Click on the image to enlarge it.<masonry masonry-options="{ isFitWidth: true, gutter: 36, transitionDuration: \'1.2s\'}" reload-on-show="" preserve-order="" style="margin: 20px auto 20px auto; display: block; cursor:pointer;" item-selector=".image-brick" column-width="20"><img masonry-brick="" ng-repeat="slide in A2Controller.slides" alt="{{slide.text}}" ng-src="{{slide.image}}" class="image-brick" ng-click="A2Controller.openImageModalService.open(slide)" uib-tooltip="{{slide.text}}"><masonry></masonry></masonry></div></div><div style="text-align: center;"><iframe scrolling="no" width="518" height="770" frameborder="0" style="overflow:hidden;border:none" src="//www.homeaway.co.uk/haow/widgets/calendar.html?propertyId=1187894&unitId=1449510&monthCount=12&orientation=full&site=homeaway_uk"></iframe><a href="//www.homeaway.co.uk/p1187894?uni_id=1449510" style="display:block;text-align:center;margin-top:-30px; font-size:12px;" rel="nofollow">HomeAway.co.uk #1187894</a></div></div>');
$templateCache.put('app/contact/contact.template.html','<nav-bar></nav-bar><div class="container"><center><h5>Contact information</h5></center><hr><p>You can contact us on:</p><div class="row"><div class="col-md-6 col-sm-6 col-xs-12"><span style="font-size: 15px">our email:</span> <i class="fa fa-envelope-o" style="margin-right:10px; margin-left:20px;"></i> <a href="mailto:nobilopetar@yahoo.com">nobilopetar@yahoo.com</a></div><div class="col-md-6 col-sm-6 col-xs-12"><span style="font-size: 15px">or via phone:</span> <i class="fa fa-mobile" style="margin-right:10px; margin-left:20px;"></i>+385 915706774</div></div><br><p>&nbsp; &nbsp; In case you have any questions or concerns please contact us using the form below. After filling in the following fields with your contact details and your query we will contact you to resolve any issues or queries:</p><center><iframe src="https://docs.google.com/forms/d/1OWYji9ioDg_itbKRtOwodp82dJnGgLvco6UP1hit7bY/viewform?embedded=true" style="max-width:700px; min-height:1300px; width:100%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe></center></div><br><ui-gmap-google-map center="contactController.map.center" draggable="true" zoom="contactController.map.zoom" options="contactController.map.options" bounds="contactController.map.bounds"><ui-gmap-marker coords="contactController.marker.coords" options="contactController.marker.options" idkey="contactController.marker.id"></ui-gmap-marker></ui-gmap-google-map>');
$templateCache.put('app/home/home.template.html','<nav-bar></nav-bar><div class="container"><br><center><h5>Welcome to apartments Lumbardina official webpage</h5></center><hr><p>&nbsp; &nbsp;Our delight apartments <b ng-click="homeController.page.go(\'/A1\')" class="underline-on-hover" style="cursor:pointer;">Lumbardina A1</b> and <b ng-click="homeController.page.go(\'/A2\')" class="underline-on-hover" style="cursor:pointer;">Lumbardina A2</b> are situated in <b>TOP</b> location, in <b>center</b>, the heart of the small, picturesque fishing village <b>Lumbarda</b> on island <b itemprop="addressLocality">Korcula</b> in <b itemprop="addressRegion">Dubrovacko-Neretvanska Zupanija</b> in <b itemprop="addressCountry">Croatia</b>. If you wish to stay on top location, close to all local amenities like: restaurants, wineries, shops, in an apartments with the <b>view on the sea</b> you have come to the right place !</p><p>To see more details about our apartments click on following images:</p><masonry masonry-options="{ isFitWidth: true, gutter: 36, transitionDuration: \'1.2s\'}" reload-on-show="" preserve-order="" style="margin: 20px auto 20px auto; display: block; cursor:pointer;" item-selector=".lumbardina-masonry-brick" column-width="150"><div masonry-brick="" class="lumbardina-masonry-brick" ng-click="homeController.page.go(apartment.link)" ng-repeat="apartment in homeController.apartments" tooltip="Click to see more info about {{apartment.text}}"><center><uib-rating data-readonly="true" ng-model="homeController.numberOfStars" max="3"></uib-rating></center><div><div ng-style="{\'background\': \'url(\\\'\' + apartment.image + \'\\\')\', \'height\':\'150px\',\'width\':\'150px\', \'background-size\': \'cover\',\'background-position\':\'center\', \'background-repeat\': \'no-repeat\'}"></div>{{apartment.text}}</div></div></masonry><p>&nbsp; &nbsp;Both apartments are equipped with an air conditioner, wireless internet access, a parking spot is also provided.</p><p>&nbsp; &nbsp; Apartments lumbardina A1 and A2 are situated in 2 separate houses, on the same property in the heart of the small, picturesque fishing village lumbarda. Apartment A2 is in the front of the property overlooking the seaside, and apartment a1 is 70 meters behind it on the same piece of land(10 ares). The apartments are ideal for families and friends who want to stay in a central place close to many village attractions, local restaurants (including traditional croatian and pizza restaurants), cafes, shops, bakeries, post office, a local green market, and the marina where you can rent boats, kayaks and snorkeling equipment. You can also rent bicycles or scooters as the apartments are only a 5-15 minute walk away from the most beautiful beaches.</p><div class="row"><div class="col-md-6" style="text-align:center;"><div style="display:inline-block"><a href="http://www.homeaway.co.uk/p1187894" rel="nofollow"><img src="http://www.homeaway.co.uk/haow/api/image/homeaway_uk/trips/1187894/reviews?unitId=1449510" alt="HomeAway Property" style="border:none;" rel="nofollow"></a><div style="text-align:center;"><a href="http://www.homeaway.co.uk/reviews/p1187894" rel="nofollow">Read</a> or <a href="http://www.homeaway.co.uk/reviews/write/p1187894" rel="nofollow">Write</a> Reviews</div></div></div><div class="col-md-6" style="text-align:center;"><a href="http://www.homeaway.co.uk/p1187894" rel="nofollow"><img src="http://www.homeaway.co.uk/haow/api/image/homeaway_uk/trips/1187894/tenure" alt="HomeAway Property" style="border:none;"></a></div></div><h5><i>Lumbarda and environment</i></h5><script src="https://www.jscache.com/wejs?wtype=linkingWidgetRedesign&amp;uniq=902&amp;locationId=1069851&amp;lang=en_US&amp;border=true&amp;display_version=2"></script><uib-carousel interval="5000" no-wrap="homeController.noWrapSlides"><uib-slide ng-repeat="slide in homeController.slides" style="max-height:532px;"><center><div ng-style="{\'background\': \'url(\\\'\' + slide.image + \'\\\')\', \'height\':\'528px\', \'background-size\': \'contain\',\'background-position\':\'center\', \'background-repeat\': \'no-repeat\'}" title="{{slide.text}}"></div></center><div class="carousel-caption"><p>{{slide.text}}</p></div></uib-slide></uib-carousel><div class="checkbox"><label><input type="checkbox" ng-model="homeController.noWrapSlides"> Disable Picture Looping</label></div><h5><i>How to get to us ?</i></h5><p>Our address is: <span itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">Lumbarda 376, Lumbarda, Croatia. <span>&nbsp; <span style="font-size: 15px">Our phone number is:</span> <i class="fa fa-mobile" style="margin-right:10px; margin-left:20px;"></i> <span itemprop="telephone">+385 915706774</span></span></span></p><p>&nbsp; &nbsp; You can get to Korcula on multiple ways. Here are useful links on which you can find informations about transport to Korcula island:</p><ul>From <b>Dubrovnik<b>:<li><a href="http://www.krilo.hr/en/" target="_blank">Krilo Jet</a><br><a href="http://www.jadrolinija.hr/en" target="_blank">Ferry and speedboats lines around the Dalmatian coast</a></li><li><a href="http://www.buscroatia.com/dubrovnik-korcula/" target="_blank">with bus</a>, <a href="https://www.autotrans.hr/en-us/home" target="_blank">here</a> you can book bus tickets.</li></b></b></ul><ul>From <b>Split<b>:<li>By catamaran:<br><a href="http://www.krilo.hr/en/" target="_blank">Krilo Jet</a><br><a href="http://www.jadrolinija.hr/en" target="_blank">Ferry and speedboats lines around the Dalmatian coast</a></li><li>By ferry boat from Split:<br>Take a ferry from Split to town Vela Luka (Kor\u010Dula), and then take bus to the town of Kor\u010Dula and then Lumbarda.</li><li><a href="http://www.buscroatia.com/split-korcula/" target="_blank">with bus</a>, <a href="https://www.autotrans.hr/en-us/home" target="_blank">here</a> you can book bus tickets.</li></b></b></ul><ui-gmap-google-map center="homeController.map.center" draggable="true" zoom="homeController.map.zoom" options="homeController.map.options" bounds="homeController.map.bounds"><ui-gmap-marker coords="homeController.marker.coords" options="homeController.marker.options" idkey="homeController.marker.id"></ui-gmap-marker></ui-gmap-google-map></div>');
$templateCache.put('components/ui/error-modal/error-modal.template.html','<div class="modal-header modal-header-error"><h4>{{ errorModal.errorHeader }}</h4></div><div class="modal-body modal-body-error"><pre>{{ errorModal.errorMessage }}</pre></div><div class="modal-footer"><button class="btn btn-primary" ng-click="errorModal.cancel()">Close</button></div>');
$templateCache.put('components/ui/nav-bar/nav-bar.template.html','<nav class="navbar navbar-inverse navbar-fixed-top navbar-home-page" role="navigation"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#action-bar" aria-expanded="false"></button><a class="navbar-brand" style="padding-right: 25px; height: 68px; cursor:pointer;" ng-click="navBar.page.go(\'/\')"></a></div><div class="collapse navbar-collapse navbar-left" id="action-bar"><ul class="nav navbar-nav"><li><a class="navbar_link" ng-click="navBar.page.go(\'/\')">Apartments:<meta itemprop="image" content="assets/images/Logo.svg"></a></li><li><a class="navbar_link" ng-click="navBar.page.go(\'/A2\')" analytics-on="click" analytics-event="Click on appartment A2">A2</a></li><li><a class="navbar_link" ng-click="navBar.page.go(\'/A1\')" analytics-on="click" analytics-event="Click on appartment A1">A1</a></li><li class="hidden-lg"><a class="navbar_link" ng-click="navBar.page.go(\'/contact\')" analytics-on="click" analytics-event="Click on contact us"><i class="fa fa-tty"></i> Contact Us</a></li></ul></div><div class="navbar-text navbar-right visible-lg" style="margin-right: 10px;"><a class="navbar_link" ng-click="navBar.page.go(\'/contact\')" analytics-on="click" analytics-event="Click on contact us"><i class="fa fa-tty"></i> Contact Us</a></div></nav>');
$templateCache.put('components/ui/open-image-modal/open-image-modal.template.html','<div class="modal-header modal-header-info" style="border-bottom-width: 0px;">{{openImageModalController.currentImage.text}} <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: white;" ng-click="openImageModalController.cancel()"><i class="fa fa-times-circle"></i></button></div><div style="display: table; width: 100%; height: 100%; background-color: grey; opacity: 0.97; padding-bottom: 20px;" tabindex="0" autofocus="" ng-keydown="openImageModalController.keyPress($event)"><div style="display: table-cell; vertical-align: middle; text-align: center; width: 10px; cursor: pointer;" ng-click="openImageModalController.updateImage(-1)"><i class="fa fa-chevron-left" style="cursor: pointer;" aria-hidden="true"></i></div><div style="display: table-cell; vertical-align: middle; text-align: center; width: 100% - 20px; height: 100%;" ng-style="{\'background\': \'url(\'+ openImageModalController.currentImage.image +\') no-repeat center center fixed\', \'background-size\': \'contain\'}"></div><div style="display: table-cell; vertical-align: middle; text-align: center; cursor: pointer; width: 10px;" ng-click="openImageModalController.updateImage(1)"><i class="fa fa-chevron-right" aria-hidden="true"></i></div></div>');
$templateCache.put('components/ui/pdf-view/pdf-view.template.html','<iframe ng-src="{{\'bower_components/pdfjs-1.0.473-dist/web/viewer.html?file=\' + pdf}}" ng-style="{ position: \'absolute\', height: \'100%\', width: \'100%\'}"></iframe>');
$templateCache.put('components/ui/success-modal/success-modal.template.html','<div class="modal-header modal-header-info"><h4>{{ successModal.successHeader }}</h4></div><div class="modal-body"><p class="small">{{ successModal.successMessage }}</p></div><div class="modal-footer"><button class="btn btn-primary" ng-click="successModal.cancel()">OK</button></div>');}]);