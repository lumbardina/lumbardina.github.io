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
    image: '/assets/images/A1/profile.jpg',
    text: 'Lumbardina A1'
  }, {
    image: '/assets/images/A2/1020.jpg',
    text: 'Lumbardina apartments'
  }, {
    image: '/assets/images/A1/1030.jpg',
    text: 'Balcony'
  }, {
    image: '/assets/images/A1/1070.jpg',
    text: 'Access to stone house, parking, stone house and garden'
  }, {
    image: '/assets/images/A1/1260.jpg',
    text: 'Room 1'
  }, {
    image: '/assets/images/A1/1310.jpg',
    text: 'Room 3'
  }];
  this.slides = [{
    image: '/assets/images/A1/profile.jpg',
    text: 'Lumbardina A1'
  }, {
    image: '/assets/images/A2/1020.jpg',
    text: 'Lumbardina apartments'
  }, {
    image: '/assets/images/A1/1025.jpg',
    text: 'Lumbardina apartments'
  }, {
    image: '/assets/images/A1/1030.jpg',
    text: 'Balcony'
  }, {
    image: '/assets/images/A1/1040.jpg',
    text: 'Stone house'
  }, {
    image: '/assets/images/A1/1050.jpg',
    text: 'Stone house'
  }, {
    image: '/assets/images/A1/1060.jpg',
    text: 'Stone house, A1 is on first floor and owner on the ground floor'
  }, {
    image: '/assets/images/A1/1070.jpg',
    text: 'Access to stone house, parking, stone house and garden'
  }, {
    image: '/assets/images/A1/1080.jpg',
    text: 'Path to stone house with parking'
  }, {
    image: '/assets/images/A1/1090.jpg',
    text: 'View and road from stone hose on garden, sea and apartment A2'
  }, {
    image: '/assets/images/A1/1095.jpg',
    text: 'View from the balcony of the apartment A1 and access to the sea'
  }, {
    image: '/assets/images/A1/1100.jpg',
    text: 'Balcony'
  }, {
    image: '/assets/images/A1/1120.jpg',
    text: 'View from apartment'
  }, {
    image: '/assets/images/A1/1140.jpg',
    text: 'Stairway to separate entrance of apartment A1'
  }, {
    image: '/assets/images/A1/1150.jpg',
    text: 'Fig tree next to stairway'
  }, {
    image: '/assets/images/A1/1160.jpg',
    text: 'Separate entrance to apartment and terrace'
  }, {
    image: '/assets/images/A1/1170.jpg',
    text: 'Terrace'
  }, {
    image: '/assets/images/A1/1180.jpg',
    text: 'Terrace and garden'
  }, {
    image: '/assets/images/A1/1190.jpg',
    text: 'Terrace'
  }, {
    image: '/assets/images/A1/1200.jpg',
    text: 'Terrace'
  }, {
    image: '/assets/images/A1/1210.jpg',
    text: 'Terrace'
  }, {
    image: '/assets/images/A1/1220.jpg',
    text: 'Kitchen'
  }, {
    image: '/assets/images/A1/1230.jpg',
    text: 'Kitchen and dining area'
  }, {
    image: '/assets/images/A1/1240.jpg',
    text: 'Kitchen'
  }, {
    image: '/assets/images/A1/1250.jpg',
    text: ''
  }, {
    image: '/assets/images/A1/1260.jpg',
    text: 'Room 1'
  }, {
    image: '/assets/images/A1/1271.jpg',
    text: 'Room 1'
  }, {
    image: '/assets/images/A1/1280.jpg',
    text: 'Room 1'
  }, {
    image: '/assets/images/A1/1290.jpg',
    text: 'Room 2'
  }, {
    image: '/assets/images/A1/1300.jpg',
    text: 'Room 2'
  }, {
    image: '/assets/images/A1/1310.jpg',
    text: 'Room 3'
  }, {
    image: '/assets/images/A1/1320.jpg',
    text: 'Room 3'
  }, {
    image: '/assets/images/A1/1330.jpg',
    text: 'Room 3'
  }, {
    image: '/assets/images/A1/1340.jpg',
    text: 'Room 3'
  }, {
    image: '/assets/images/A1/1350.jpg',
    text: 'Room 3 and bathroom'
  }, {
    image: '/assets/images/A1/1360.jpg',
    text: 'Room 3 and bathroom'
  }, {
    image: '/assets/images/A1/1430.jpg',
    text: 'Bathroom 2 and separate toilet'
  }, {
    image: '/assets/images/A1/1440.jpg',
    text: 'Neighborhood'
  }, {
    image: '/assets/images/A1/1450.jpg',
    text: 'Neighborhood'
  }, {
    image: '/assets/images/A1/1460.jpg',
    text: 'Neighborhood'
  }, {
    image: '/assets/images/A1/1470.jpg',
    text: 'Neighborhood'
  }, {
    image: '/assets/images/A1/1480.jpg',
    text: 'Neighborhood'
  }, {
    image: '/assets/images/A1/1490.jpg',
    text: 'Sunset'
  }];
  this.openImageModalService.slides = this.slides;
};
A1Controller.$inject = ["page", "openImageModalService"];
($traceurRuntime.createClass)(A1Controller, {}, {});
var $__default = A1Controller;


//# sourceURL=/home/nobilo/lumbardina-web-page/src/app/A1/A1.controller.js
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


//# sourceURL=/home/nobilo/lumbardina-web-page/src/app/A1/A1.module.js
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
    image: '/assets/images/A2/profile.jpg',
    text: ''
  }, {
    image: '/assets/images/A2/1020.jpg',
    text: 'Lumbardina apartments'
  }, {
    image: '/assets/images/A2/1050.jpg',
    text: 'May'
  }, {
    image: '/assets/images/A2/1110.jpg',
    text: ''
  }, {
    image: '/assets/images/A2/1056.jpg',
    text: ''
  }, {
    image: '/assets/images/A2/1057.jpg',
    text: ''
  }, {
    image: '/assets/images/A2/1058.jpg',
    text: ''
  }, {
    image: '/assets/images/A2/1059.jpg',
    text: ''
  }, {
    image: '/assets/images/A2/1070.jpg',
    text: ''
  }, {
    image: '/assets/images/A2/1320.jpg',
    text: 'view from the entrance side'
  }];
  this.slides = [{
    image: '/assets/images/A2/profile.jpg',
    text: ''
  }, {
    image: '/assets/images/A2/1020.jpg',
    text: 'Lumbardina apartments'
  }, {
    image: '/assets/images/A2/1030.jpg',
    text: 'April'
  }, {
    image: '/assets/images/A2/1040.jpg',
    text: 'April'
  }, {
    image: '/assets/images/A2/1050.jpg',
    text: 'May'
  }, {
    image: '/assets/images/A2/1055.jpg',
    text: 'The best balcony in Lumbarda'
  }, {
    image: '/assets/images/A2/1056.jpg',
    text: 'The best balcony in Lumbarda'
  }, {
    image: '/assets/images/A2/1057.jpg',
    text: 'The best balcony in Lumbarda'
  }, {
    image: '/assets/images/A2/1058.jpg',
    text: 'The best balcony in Lumbarda'
  }, {
    image: '/assets/images/A2/1059.jpg',
    text: 'The best balcony in Lumbarda'
  }, {
    image: '/assets/images/A2/1060.jpg',
    text: 'The best balcony in Lumbarda'
  }, {
    image: '/assets/images/A2/1070.jpg',
    text: 'The best balcony in Lumbarda'
  }, {
    image: '/assets/images/A2/1075.jpg',
    text: 'Awning'
  }, {
    image: '/assets/images/A2/1076.jpg',
    text: 'Awning'
  }, {
    image: '/assets/images/A2/1077.jpg',
    text: 'Awning'
  }, {
    image: '/assets/images/A2/1078.jpg',
    text: 'Awning'
  }, {
    image: '/assets/images/A2/1080.jpg',
    text: 'November'
  }, {
    image: '/assets/images/A2/1090.jpg',
    text: 'Living room'
  }, {
    image: '/assets/images/A2/1095.jpg',
    text: 'Living room'
  }, {
    image: '/assets/images/A2/1097.jpg',
    text: 'Living room'
  }, {
    image: '/assets/images/A2/1100.jpg',
    text: 'Living room'
  }, {
    image: '/assets/images/A2/1110.jpg',
    text: 'Living room'
  }, {
    image: '/assets/images/A2/1120.jpg',
    text: 'Living room'
  }, {
    image: '/assets/images/A2/1130.jpg',
    text: 'Living room'
  }, {
    image: '/assets/images/A2/1140.jpg',
    text: 'Entrance, Room 1, Kitchen and Dinig area'
  }, {
    image: '/assets/images/A2/1150.jpg',
    text: 'Kitchen'
  }, {
    image: '/assets/images/A2/1160.jpg',
    text: 'Kitchen'
  }, {
    image: '/assets/images/A2/1180.jpg',
    text: 'Room 1 and Bathroom2'
  }, {
    image: '/assets/images/A2/1190.jpg',
    text: 'Room 1'
  }, {
    image: '/assets/images/A2/1200.jpg',
    text: 'Room 1'
  }, {
    image: '/assets/images/A2/1210.jpg',
    text: 'Room 1'
  }, {
    image: '/assets/images/A2/1220.jpg',
    text: 'Room 1'
  }, {
    image: '/assets/images/A2/1230.jpg',
    text: 'Room 1, Bathroom 2, Room 2 and dining room'
  }, {
    image: '/assets/images/A2/1240.jpg',
    text: 'Bathroom 2 and Room 2'
  }, {
    image: '/assets/images/A2/1250.jpg',
    text: 'Room 2'
  }, {
    image: '/assets/images/A2/1260.jpg',
    text: 'Room 2'
  }, {
    image: '/assets/images/A2/1261.jpg',
    text: 'Room 2'
  }, {
    image: '/assets/images/A2/1262.jpg',
    text: 'Room 2'
  }, {
    image: '/assets/images/A2/1263.jpg',
    text: 'Room 2'
  }, {
    image: '/assets/images/A2/1280.jpg',
    text: 'Olive'
  }, {
    image: '/assets/images/A2/1290.jpg',
    text: 'Bathroom 1'
  }, {
    image: '/assets/images/A2/1300.jpg',
    text: 'Bathroom 1'
  }, {
    image: '/assets/images/A2/1310.jpg',
    text: 'view from the entrance side'
  }, {
    image: '/assets/images/A2/1315.jpg',
    text: 'view from the entrance side'
  }, {
    image: '/assets/images/A2/1320.jpg',
    text: 'view from the entrance side'
  }, {
    image: '/assets/images/A2/1330.jpg',
    text: 'Apartment from street'
  }, {
    image: '/assets/images/A2/1340.jpg',
    text: 'Neighborhood'
  }, {
    image: '/assets/images/A2/1350.jpg',
    text: 'Neighborhood'
  }, {
    image: '/assets/images/A2/1360.jpg',
    text: 'Neighborhood April'
  }, {
    image: '/assets/images/A2/1370.jpg',
    text: 'Neighborhood Jun'
  }, {
    image: '/assets/images/A2/1380.jpg',
    text: 'Neighborhood Jul'
  }, {
    image: '/assets/images/A2/1390.jpg',
    text: 'Neighborhood'
  }, {
    image: '/assets/images/A2/1400.jpg',
    text: 'Neighborhood'
  }, {
    image: '/assets/images/A2/1410.jpg',
    text: 'Sunset'
  }];
  this.openImageModalService.slides = this.slides;
};
A2Controller.$inject = ["page", "openImageModalService"];
($traceurRuntime.createClass)(A2Controller, {}, {});
var $__default = A2Controller;


//# sourceURL=/home/nobilo/lumbardina-web-page/src/app/A2/A2.controller.js
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


//# sourceURL=/home/nobilo/lumbardina-web-page/src/app/A2/A2.module.js
},{"../../components/ui/ui.module":20,"./A2.controller":3}],5:[function(require,module,exports){
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
    $__A1_47_A1_46_module__,
    $__A2_47_A2_46_module__;
'use strict';
var uiModule = ($___46__46__47_components_47_ui_47_ui_46_module__ = require("../components/ui/ui.module"), $___46__46__47_components_47_ui_47_ui_46_module__ && $___46__46__47_components_47_ui_47_ui_46_module__.__esModule && $___46__46__47_components_47_ui_47_ui_46_module__ || {default: $___46__46__47_components_47_ui_47_ui_46_module__}).default;
var commonModule = ($___46__46__47_components_47_common_47_common_46_module__ = require("../components/common/common.module"), $___46__46__47_components_47_common_47_common_46_module__ && $___46__46__47_components_47_common_47_common_46_module__.__esModule && $___46__46__47_components_47_common_47_common_46_module__ || {default: $___46__46__47_components_47_common_47_common_46_module__}).default;
var homeModule = ($__home_47_home_46_module__ = require("./home/home.module"), $__home_47_home_46_module__ && $__home_47_home_46_module__.__esModule && $__home_47_home_46_module__ || {default: $__home_47_home_46_module__}).default;
var A1Module = ($__A1_47_A1_46_module__ = require("./A1/A1.module"), $__A1_47_A1_46_module__ && $__A1_47_A1_46_module__.__esModule && $__A1_47_A1_46_module__ || {default: $__A1_47_A1_46_module__}).default;
var A2Module = ($__A2_47_A2_46_module__ = require("./A2/A2.module"), $__A2_47_A2_46_module__ && $__A2_47_A2_46_module__.__esModule && $__A2_47_A2_46_module__ || {default: $__A2_47_A2_46_module__}).default;
var LumbardinaModule = angular.module('LumbardinaWeb', ['ngRoute', uiModule.name, commonModule.name, homeModule.name, A1Module.name, A2Module.name, 'ui.bootstrap', 'wu.masonry', 'ngSanitize', 'ngAnimate', 'angulartics', 'angulartics.google.analytics', 'angulartics.scroll']).config((["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  'ngInject';
  $routeProvider.otherwise({redirectTo: '/'});
}])).controller('commonCtrl', ["page", function(page) {
  'ngInject';
  this.page = page;
}]);
var $__default = LumbardinaModule;


//# sourceURL=/home/nobilo/lumbardina-web-page/src/app/fake_9458222a.js
},{"../components/common/common.module":8,"../components/ui/ui.module":20,"./A1/A1.module":2,"./A2/A2.module":4,"./home/home.module":7}],6:[function(require,module,exports){
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
    image: '/assets/images/A2/profile.jpg',
    text: 'Lumbardina A2',
    link: '/A2'
  }, {
    image: '/assets/images/A1/profile.jpg',
    text: 'Lumbardina A1',
    link: '/A1'
  }];
  this.slides = [{
    image: '/assets/images/A2/profile.jpg',
    text: 'Lumbardina A2'
  }, {
    image: '/assets/images/A1/profile.jpg',
    text: 'Lumbardina A1'
  }, {
    image: '/assets/images/Lumbarda/lumbarda.jpg',
    text: 'Lumbarda'
  }, {
    image: '/assets/images/Lumbarda/bilin-zal.jpg',
    text: 'The best beaches of Korcula: Bilin Zal'
  }, {
    image: '/assets/images/Lumbarda/bilin-zal1.jpg',
    text: 'The best beaches of Korcula: Bilin Zal'
  }, {
    image: '/assets/images/Lumbarda/przina.jpg',
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


//# sourceURL=/home/nobilo/lumbardina-web-page/src/app/home/home.controller.js
},{}],7:[function(require,module,exports){
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


//# sourceURL=/home/nobilo/lumbardina-web-page/src/app/home/home.module.js
},{"./home.controller":6}],8:[function(require,module,exports){
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


//# sourceURL=/home/nobilo/lumbardina-web-page/src/components/common/common.module.js
},{"./page.service":9}],9:[function(require,module,exports){
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


//# sourceURL=/home/nobilo/lumbardina-web-page/src/components/common/page.service.js
},{}],10:[function(require,module,exports){
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


//# sourceURL=/home/nobilo/lumbardina-web-page/src/components/ui/error-modal/error-modal.controller.js
},{}],11:[function(require,module,exports){
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


//# sourceURL=/home/nobilo/lumbardina-web-page/src/components/ui/error-modal/error-modal.service.js
},{"./error-modal.controller":10}],12:[function(require,module,exports){
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


//# sourceURL=/home/nobilo/lumbardina-web-page/src/components/ui/nav-bar/nav-bar.controller.js
},{}],13:[function(require,module,exports){
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


//# sourceURL=/home/nobilo/lumbardina-web-page/src/components/ui/nav-bar/nav-bar.directive.js
},{"./nav-bar.controller":12}],14:[function(require,module,exports){
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


//# sourceURL=/home/nobilo/lumbardina-web-page/src/components/ui/open-image-directive/open-image.directive.js
},{}],15:[function(require,module,exports){
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


//# sourceURL=/home/nobilo/lumbardina-web-page/src/components/ui/open-image-modal/open-image-modal.controller.js
},{}],16:[function(require,module,exports){
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


//# sourceURL=/home/nobilo/lumbardina-web-page/src/components/ui/open-image-modal/open-image-modal.service.js
},{"./open-image-modal.controller":15}],17:[function(require,module,exports){
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


//# sourceURL=/home/nobilo/lumbardina-web-page/src/components/ui/pdf-view/pdf-view.directive.js
},{}],18:[function(require,module,exports){
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


//# sourceURL=/home/nobilo/lumbardina-web-page/src/components/ui/success-modal/success-modal.controller.js
},{}],19:[function(require,module,exports){
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


//# sourceURL=/home/nobilo/lumbardina-web-page/src/components/ui/success-modal/success-modal.service.js
},{"./success-modal.controller":18}],20:[function(require,module,exports){
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


//# sourceURL=/home/nobilo/lumbardina-web-page/src/components/ui/ui.module.js
},{"../common/common.module":8,"./error-modal/error-modal.service":11,"./nav-bar/nav-bar.directive":13,"./open-image-directive/open-image.directive":14,"./open-image-modal/open-image-modal.service":16,"./pdf-view/pdf-view.directive":17,"./success-modal/success-modal.service":19}]},{},[5])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25vYmlsby9sdW1iYXJkaW5hLXdlYi1wYWdlL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL25vYmlsby9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9hcHAvQTEvQTEuY29udHJvbGxlci5qcyIsIi9ob21lL25vYmlsby9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9hcHAvQTEvQTEubW9kdWxlLmpzIiwiL2hvbWUvbm9iaWxvL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2FwcC9BMi9BMi5jb250cm9sbGVyLmpzIiwiL2hvbWUvbm9iaWxvL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2FwcC9BMi9BMi5tb2R1bGUuanMiLCIvaG9tZS9ub2JpbG8vbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvYXBwL2Zha2VfOTQ1ODIyMmEuanMiLCIvaG9tZS9ub2JpbG8vbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvYXBwL2hvbWUvaG9tZS5jb250cm9sbGVyLmpzIiwiL2hvbWUvbm9iaWxvL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2FwcC9ob21lL2hvbWUubW9kdWxlLmpzIiwiL2hvbWUvbm9iaWxvL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbW1vbi5tb2R1bGUuanMiLCIvaG9tZS9ub2JpbG8vbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvY29tcG9uZW50cy9jb21tb24vcGFnZS5zZXJ2aWNlLmpzIiwiL2hvbWUvbm9iaWxvL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2NvbXBvbmVudHMvdWkvZXJyb3ItbW9kYWwvZXJyb3ItbW9kYWwuY29udHJvbGxlci5qcyIsIi9ob21lL25vYmlsby9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9jb21wb25lbnRzL3VpL2Vycm9yLW1vZGFsL2Vycm9yLW1vZGFsLnNlcnZpY2UuanMiLCIvaG9tZS9ub2JpbG8vbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvY29tcG9uZW50cy91aS9uYXYtYmFyL25hdi1iYXIuY29udHJvbGxlci5qcyIsIi9ob21lL25vYmlsby9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9jb21wb25lbnRzL3VpL25hdi1iYXIvbmF2LWJhci5kaXJlY3RpdmUuanMiLCIvaG9tZS9ub2JpbG8vbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvY29tcG9uZW50cy91aS9vcGVuLWltYWdlLWRpcmVjdGl2ZS9vcGVuLWltYWdlLmRpcmVjdGl2ZS5qcyIsIi9ob21lL25vYmlsby9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9jb21wb25lbnRzL3VpL29wZW4taW1hZ2UtbW9kYWwvb3Blbi1pbWFnZS1tb2RhbC5jb250cm9sbGVyLmpzIiwiL2hvbWUvbm9iaWxvL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2NvbXBvbmVudHMvdWkvb3Blbi1pbWFnZS1tb2RhbC9vcGVuLWltYWdlLW1vZGFsLnNlcnZpY2UuanMiLCIvaG9tZS9ub2JpbG8vbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvY29tcG9uZW50cy91aS9wZGYtdmlldy9wZGYtdmlldy5kaXJlY3RpdmUuanMiLCIvaG9tZS9ub2JpbG8vbHVtYmFyZGluYS13ZWItcGFnZS9zcmMvY29tcG9uZW50cy91aS9zdWNjZXNzLW1vZGFsL3N1Y2Nlc3MtbW9kYWwuY29udHJvbGxlci5qcyIsIi9ob21lL25vYmlsby9sdW1iYXJkaW5hLXdlYi1wYWdlL3NyYy9jb21wb25lbnRzL3VpL3N1Y2Nlc3MtbW9kYWwvc3VjY2Vzcy1tb2RhbC5zZXJ2aWNlLmpzIiwiL2hvbWUvbm9iaWxvL2x1bWJhcmRpbmEtd2ViLXBhZ2Uvc3JjL2NvbXBvbmVudHMvdWkvdWkubW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFBQSxXQUFXLENBQUM7QUFBWixLQUFLLGlCQUFpQixBQUFDLENBQUMsT0FBTTtTQUE5QixFQUFDLEdBQUUsWUFBcUI7QUFBRSx1QkFBd0I7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K0RBQW1CLENBRDlELEFBQytELENBQUM7RUFTdkcsYUFBVyxFQVZsQixFQUFDLDZDQUFvQixDQUFBLE9BQU0sQUFBQywyQkFBa0IsQ0FDdEMsQ0FBQSw4Q0FBcUIsdURBQTJCLENBQUEsOENBQXFCLEdBQUssRUFBQyxPQUFNLDZDQUFtQixDQUQ5RCxBQUMrRCxDQUFDO0VBVXZHLHNCQUFvQixFQVgzQixFQUFDLGtFQUFvQixDQUFBLE9BQU0sQUFBQywrQ0FBa0IsQ0FDdEMsQ0FBQSxtRUFBcUIsNEVBQTJCLENBQUEsbUVBQXFCLEdBQUssRUFBQyxPQUFNLGtFQUFtQixDQUQ5RCxBQUMrRCxDQUFDO0FBWTlHLEFBQUksRUFBQSxDQUFBLFFBQU8sRUFBSyxDQUFBLE9BQU0sT0FBTyxBQUFDLENBQUMsWUFBVyxDQUFHLEVBQUMsWUFBVyxDQUM5QyxTQUFPLENBQ1AsZUFBYSxDQUNiLENBQUEsWUFBVyxLQUFLLENBQUMsQ0FBQyxRQUNsQixBQUFDLENBQUMscUJBQW9CLENBQUcsb0JBQWtCLENBQUMsUUFDNUMsQUFBQyxDQUFDLG1CQUFrQixDQUFHLGtCQUFnQixDQUFDLFFBQ3hDLEFBQUMsQ0FBQyx1QkFBc0IsQ0FBRyxzQkFBb0IsQ0FBQyxVQUM5QyxBQUFDLENBQUMsUUFBTyxDQUFHLGdCQUFjLENBQUMsVUFDM0IsQUFBQyxDQUFDLFNBQVEsQ0FBRyxpQkFBZSxDQUFDLFVBQzdCLEFBQUMsQ0FBQyxvQkFBbUIsQ0FBRyxtQkFBaUIsQ0FBQyxDQUFDO0FBdEJ4RCxBQUFJLEVBQUEsQ0FBQSxVQUFTLEVBd0JFLFNBQU8sQUF4QlcsQ0FBQTtBQXlCakMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuLyoganNoaW50IC1XMTA2ICovXG5cbmNsYXNzIEExQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IocGFnZSwgb3BlbkltYWdlTW9kYWxTZXJ2aWNlKSB7XG5cdCduZ0luamVjdCc7XG5cdHRoaXMucGFnZSA9IHBhZ2U7XG5cdHRoaXMub3BlbkltYWdlTW9kYWxTZXJ2aWNlID0gb3BlbkltYWdlTW9kYWxTZXJ2aWNlO1xuXG5cdHBhZ2Uuc2V0VGl0bGUoJ0ExJyk7XG5cblx0dGhpcy5tYWluU2xpZGVzID1bXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMS9wcm9maWxlLmpwZycsXG5cdFx0dGV4dDogJ0x1bWJhcmRpbmEgQTEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTAyMC5qcGcnLFxuXHRcdHRleHQ6ICdMdW1iYXJkaW5hIGFwYXJ0bWVudHMnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTAzMC5qcGcnLFxuXHRcdHRleHQ6ICdCYWxjb255J1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0ExLzEwNzAuanBnJyxcblx0XHR0ZXh0OiAnQWNjZXNzIHRvIHN0b25lIGhvdXNlLCBwYXJraW5nLCBzdG9uZSBob3VzZSBhbmQgZ2FyZGVuJ1xuXHQgICAgfSxcbiAgICAgICAgICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0ExLzEyNjAuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAxJ1xuXHQgICAgfSxcbiAgICAgICAgICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0ExLzEzMTAuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAzJ1xuXHQgICAgfVxuXHRdO1xuXG5cdHRoaXMuc2xpZGVzID0gW1xuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvcHJvZmlsZS5qcGcnLFxuXHRcdHRleHQ6ICdMdW1iYXJkaW5hIEExJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyLzEwMjAuanBnJyxcblx0XHR0ZXh0OiAnTHVtYmFyZGluYSBhcGFydG1lbnRzJ1xuXHQgICAgfSxcbiAgICAgICAgICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0ExLzEwMjUuanBnJyxcblx0XHR0ZXh0OiAnTHVtYmFyZGluYSBhcGFydG1lbnRzJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0ExLzEwMzAuanBnJyxcblx0XHR0ZXh0OiAnQmFsY29ueSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMS8xMDQwLmpwZycsXG5cdFx0dGV4dDogJ1N0b25lIGhvdXNlJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0ExLzEwNTAuanBnJyxcblx0XHR0ZXh0OiAnU3RvbmUgaG91c2UnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTA2MC5qcGcnLFxuXHRcdHRleHQ6ICdTdG9uZSBob3VzZSwgQTEgaXMgb24gZmlyc3QgZmxvb3IgYW5kIG93bmVyIG9uIHRoZSBncm91bmQgZmxvb3InXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTA3MC5qcGcnLFxuXHRcdHRleHQ6ICdBY2Nlc3MgdG8gc3RvbmUgaG91c2UsIHBhcmtpbmcsIHN0b25lIGhvdXNlIGFuZCBnYXJkZW4nXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTA4MC5qcGcnLFxuXHRcdHRleHQ6ICdQYXRoIHRvIHN0b25lIGhvdXNlIHdpdGggcGFya2luZydcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMS8xMDkwLmpwZycsXG5cdFx0dGV4dDogJ1ZpZXcgYW5kIHJvYWQgZnJvbSBzdG9uZSBob3NlIG9uIGdhcmRlbiwgc2VhIGFuZCBhcGFydG1lbnQgQTInXG5cdCAgICB9LFxuICAgICAgICAgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTA5NS5qcGcnLFxuXHRcdHRleHQ6ICdWaWV3IGZyb20gdGhlIGJhbGNvbnkgb2YgdGhlIGFwYXJ0bWVudCBBMSBhbmQgYWNjZXNzIHRvIHRoZSBzZWEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTEwMC5qcGcnLFxuXHRcdHRleHQ6ICdCYWxjb255J1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0ExLzExMjAuanBnJyxcblx0XHR0ZXh0OiAnVmlldyBmcm9tIGFwYXJ0bWVudCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMS8xMTQwLmpwZycsXG5cdFx0dGV4dDogJ1N0YWlyd2F5IHRvIHNlcGFyYXRlIGVudHJhbmNlIG9mIGFwYXJ0bWVudCBBMSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMS8xMTUwLmpwZycsXG5cdFx0dGV4dDogJ0ZpZyB0cmVlIG5leHQgdG8gc3RhaXJ3YXknXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTE2MC5qcGcnLFxuXHRcdHRleHQ6ICdTZXBhcmF0ZSBlbnRyYW5jZSB0byBhcGFydG1lbnQgYW5kIHRlcnJhY2UnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTE3MC5qcGcnLFxuXHRcdHRleHQ6ICdUZXJyYWNlJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0ExLzExODAuanBnJyxcblx0XHR0ZXh0OiAnVGVycmFjZSBhbmQgZ2FyZGVuJ1xuXHQgICAgfSAsXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMS8xMTkwLmpwZycsXG5cdFx0dGV4dDogJ1RlcnJhY2UnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTIwMC5qcGcnLFxuXHRcdHRleHQ6ICdUZXJyYWNlJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0ExLzEyMTAuanBnJyxcblx0XHR0ZXh0OiAnVGVycmFjZSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMS8xMjIwLmpwZycsXG5cdFx0dGV4dDogJ0tpdGNoZW4nXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTIzMC5qcGcnLFxuXHRcdHRleHQ6ICdLaXRjaGVuIGFuZCBkaW5pbmcgYXJlYSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMS8xMjQwLmpwZycsXG5cdFx0dGV4dDogJ0tpdGNoZW4nXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTI1MC5qcGcnLFxuXHRcdHRleHQ6ICcnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTI2MC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTI3MS5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDEnXG5cdCAgICB9LFxuICAgICAgICAgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTI4MC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTI5MC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDInXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTMwMC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDInXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTMxMC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDMnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTMyMC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDMnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTMzMC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDMnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTM0MC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDMnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvMTM1MC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDMgYW5kIGJhdGhyb29tJ1xuXHQgICAgfSxcbiAgICAgICAgICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0ExLzEzNjAuanBnJyxcblx0XHR0ZXh0OiAnUm9vbSAzIGFuZCBiYXRocm9vbSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMS8xNDMwLmpwZycsXG5cdFx0dGV4dDogJ0JhdGhyb29tIDIgYW5kIHNlcGFyYXRlIHRvaWxldCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMS8xNDQwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMS8xNDUwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMS8xNDYwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMS8xNDcwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMS8xNDgwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMS8xNDkwLmpwZycsXG5cdFx0dGV4dDogJ1N1bnNldCdcblx0ICAgIH1dO1xuICAgICAgICB0aGlzLm9wZW5JbWFnZU1vZGFsU2VydmljZS5zbGlkZXMgPSB0aGlzLnNsaWRlcztcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBBMUNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmltcG9ydCBBMUNvbnRyb2xsZXIgZnJvbSAnLi9BMS5jb250cm9sbGVyJztcblxudmFyIEExTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2x1bWJhcmRpbmEuQTEnLFxuXHRcdFx0ICAgICAgWyduZ1JvdXRlJ10pXG4gICAgLmNvbnRyb2xsZXIoJ0ExQ29udHJvbGxlcicsIEExQ29udHJvbGxlcilcbiAgICAuY29uZmlnKCgkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpID0+IHtcblx0J25nSW5qZWN0JztcblxuXHQkcm91dGVQcm92aWRlclxuXHQgICAgLndoZW4oJy9BMScsIHtcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9BMS9BMS50ZW1wbGF0ZS5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnQTFDb250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdBMUNvbnRyb2xsZXInLFxuXHRcdGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcblx0ICAgIH0pO1xuICAgICAgICAvLyB1c2UgdGhlIEhUTUw1IEhpc3RvcnkgQVBJXG4gICAgICAgIC8vICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcbiAgICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgQTFNb2R1bGU7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG4vKiBqc2hpbnQgLVcxMDYgKi9cblxuY2xhc3MgQTJDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYWdlLCBvcGVuSW1hZ2VNb2RhbFNlcnZpY2UpIHtcblx0J25nSW5qZWN0Jztcblx0dGhpcy5wYWdlID0gcGFnZTtcblx0dGhpcy5vcGVuSW1hZ2VNb2RhbFNlcnZpY2UgPSBvcGVuSW1hZ2VNb2RhbFNlcnZpY2U7XG5cblx0cGFnZS5zZXRUaXRsZSgnQTInKTtcblxuXHR0aGlzLm5vV3JhcFNsaWRlcyA9IGZhbHNlO1xuXHR0aGlzLm1haW5TbGlkZXMgPVtcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyL3Byb2ZpbGUuanBnJyxcblx0XHR0ZXh0OiAnJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyLzEwMjAuanBnJyxcblx0XHR0ZXh0OiAnTHVtYmFyZGluYSBhcGFydG1lbnRzJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyLzEwNTAuanBnJyxcblx0XHR0ZXh0OiAnTWF5J1xuXHQgICAgfSxcblxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTExMC5qcGcnLFxuXHRcdHRleHQ6ICcnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTA1Ni5qcGcnLFxuXHRcdHRleHQ6ICcnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTA1Ny5qcGcnLFxuXHRcdHRleHQ6ICcnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTA1OC5qcGcnLFxuXHRcdHRleHQ6ICcnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTA1OS5qcGcnLFxuXHRcdHRleHQ6ICcnXG5cdCAgICB9LHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyLzEwNzAuanBnJyxcblx0XHR0ZXh0OiAnJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyLzEzMjAuanBnJyxcblx0XHR0ZXh0OiAndmlldyBmcm9tIHRoZSBlbnRyYW5jZSBzaWRlJ1xuXHQgICAgfVxuXHRdO1xuXHR0aGlzLnNsaWRlcyA9IFtcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyL3Byb2ZpbGUuanBnJyxcblx0XHR0ZXh0OiAnJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyLzEwMjAuanBnJyxcblx0XHR0ZXh0OiAnTHVtYmFyZGluYSBhcGFydG1lbnRzJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyLzEwMzAuanBnJyxcblx0XHR0ZXh0OiAnQXByaWwnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTA0MC5qcGcnLFxuXHRcdHRleHQ6ICdBcHJpbCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMDUwLmpwZycsXG5cdFx0dGV4dDogJ01heSdcblx0ICAgIH0sXG5cblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyLzEwNTUuanBnJyxcblx0XHR0ZXh0OiAnVGhlIGJlc3QgYmFsY29ueSBpbiBMdW1iYXJkYSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMDU2LmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJhbGNvbnkgaW4gTHVtYmFyZGEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTA1Ny5qcGcnLFxuXHRcdHRleHQ6ICdUaGUgYmVzdCBiYWxjb255IGluIEx1bWJhcmRhJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyLzEwNTguanBnJyxcblx0XHR0ZXh0OiAnVGhlIGJlc3QgYmFsY29ueSBpbiBMdW1iYXJkYSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMDU5LmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJhbGNvbnkgaW4gTHVtYmFyZGEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTA2MC5qcGcnLFxuXHRcdHRleHQ6ICdUaGUgYmVzdCBiYWxjb255IGluIEx1bWJhcmRhJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyLzEwNzAuanBnJyxcblx0XHR0ZXh0OiAnVGhlIGJlc3QgYmFsY29ueSBpbiBMdW1iYXJkYSdcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMDc1LmpwZycsXG5cdFx0dGV4dDogJ0F3bmluZydcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMDc2LmpwZycsXG5cdFx0dGV4dDogJ0F3bmluZydcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMDc3LmpwZycsXG5cdFx0dGV4dDogJ0F3bmluZydcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMDc4LmpwZycsXG5cdFx0dGV4dDogJ0F3bmluZydcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMDgwLmpwZycsXG5cdFx0dGV4dDogJ05vdmVtYmVyJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyLzEwOTAuanBnJyxcblx0XHR0ZXh0OiAnTGl2aW5nIHJvb20nXG5cdCAgICB9LFxuICAgICAgICAgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTA5NS5qcGcnLFxuXHRcdHRleHQ6ICdMaXZpbmcgcm9vbSdcblx0ICAgIH0sXG4gICAgICAgICAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMDk3LmpwZycsXG5cdFx0dGV4dDogJ0xpdmluZyByb29tJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyLzExMDAuanBnJyxcblx0XHR0ZXh0OiAnTGl2aW5nIHJvb20nXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTExMC5qcGcnLFxuXHRcdHRleHQ6ICdMaXZpbmcgcm9vbSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMTIwLmpwZycsXG5cdFx0dGV4dDogJ0xpdmluZyByb29tJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyLzExMzAuanBnJyxcblx0XHR0ZXh0OiAnTGl2aW5nIHJvb20nXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTE0MC5qcGcnLFxuXHRcdHRleHQ6ICdFbnRyYW5jZSwgUm9vbSAxLCBLaXRjaGVuIGFuZCBEaW5pZyBhcmVhJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyLzExNTAuanBnJyxcblx0XHR0ZXh0OiAnS2l0Y2hlbidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMTYwLmpwZycsXG5cdFx0dGV4dDogJ0tpdGNoZW4nXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTE4MC5qcGcnLFxuXHRcdHRleHQ6ICdSb29tIDEgYW5kIEJhdGhyb29tMidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMTkwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMjAwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMjEwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMjIwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMjMwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMSwgQmF0aHJvb20gMiwgUm9vbSAyIGFuZCBkaW5pbmcgcm9vbSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMjQwLmpwZycsXG5cdFx0dGV4dDogJ0JhdGhyb29tIDIgYW5kIFJvb20gMidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMjUwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMjYwLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMjYxLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMjYyLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMjYzLmpwZycsXG5cdFx0dGV4dDogJ1Jvb20gMidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMjgwLmpwZycsXG5cdFx0dGV4dDogJ09saXZlJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyLzEyOTAuanBnJyxcblx0XHR0ZXh0OiAnQmF0aHJvb20gMSdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMzAwLmpwZycsXG5cdFx0dGV4dDogJ0JhdGhyb29tIDEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTMxMC5qcGcnLFxuXHRcdHRleHQ6ICd2aWV3IGZyb20gdGhlIGVudHJhbmNlIHNpZGUnXG5cdCAgICB9LFxuICAgICAgICAgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTMxNS5qcGcnLFxuXHRcdHRleHQ6ICd2aWV3IGZyb20gdGhlIGVudHJhbmNlIHNpZGUnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTMyMC5qcGcnLFxuXHRcdHRleHQ6ICd2aWV3IGZyb20gdGhlIGVudHJhbmNlIHNpZGUnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTMzMC5qcGcnLFxuXHRcdHRleHQ6ICdBcGFydG1lbnQgZnJvbSBzdHJlZXQnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTM0MC5qcGcnLFxuXHRcdHRleHQ6ICdOZWlnaGJvcmhvb2QnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTM1MC5qcGcnLFxuXHRcdHRleHQ6ICdOZWlnaGJvcmhvb2QnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTM2MC5qcGcnLFxuXHRcdHRleHQ6ICdOZWlnaGJvcmhvb2QgQXByaWwnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTIvMTM3MC5qcGcnLFxuXHRcdHRleHQ6ICdOZWlnaGJvcmhvb2QgSnVuJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyLzEzODAuanBnJyxcblx0XHR0ZXh0OiAnTmVpZ2hib3Job29kIEp1bCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xMzkwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xNDAwLmpwZycsXG5cdFx0dGV4dDogJ05laWdoYm9yaG9vZCdcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi8xNDEwLmpwZycsXG5cdFx0dGV4dDogJ1N1bnNldCdcblx0ICAgIH1dO1xuICAgICAgICB0aGlzLm9wZW5JbWFnZU1vZGFsU2VydmljZS5zbGlkZXMgPSB0aGlzLnNsaWRlcztcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBBMkNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmltcG9ydCBBMkNvbnRyb2xsZXIgZnJvbSAnLi9BMi5jb250cm9sbGVyJztcbmltcG9ydCB1aU1vZHVsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VpL3VpLm1vZHVsZSc7XG5cblxudmFyIEEyTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2x1bWJhcmRpbmEuQTInLFxuXHRcdFx0ICAgICAgWyduZ1JvdXRlJyxcblx0XHRcdCAgICAgICB1aU1vZHVsZS5uYW1lLF0pXG4gICAgLmNvbnRyb2xsZXIoJ0EyQ29udHJvbGxlcicsIEEyQ29udHJvbGxlcilcbiAgICAuY29uZmlnKCgkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpID0+IHtcblx0J25nSW5qZWN0JztcblxuXHQkcm91dGVQcm92aWRlclxuXHQgICAgLndoZW4oJy9BMicsIHtcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9BMi9BMi50ZW1wbGF0ZS5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnQTJDb250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdBMkNvbnRyb2xsZXInLFxuXHRcdGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcblx0ICAgIH0pO1xuICAgICAgICAvLyB1c2UgdGhlIEhUTUw1IEhpc3RvcnkgQVBJXG4gICAgICAgIC8vICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcbiAgICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgQTJNb2R1bGU7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmltcG9ydCB1aU1vZHVsZSBmcm9tICcuLi9jb21wb25lbnRzL3VpL3VpLm1vZHVsZSc7XG5pbXBvcnQgY29tbW9uTW9kdWxlIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL2NvbW1vbi5tb2R1bGUnO1xuXG5pbXBvcnQgaG9tZU1vZHVsZSBmcm9tICcuL2hvbWUvaG9tZS5tb2R1bGUnO1xuLy9pbXBvcnQgY29udGFjdE1vZHVsZSBmcm9tICcuL2NvbnRhY3QvY29udGFjdC5tb2R1bGUnO1xuaW1wb3J0IEExTW9kdWxlIGZyb20gJy4vQTEvQTEubW9kdWxlJztcbmltcG9ydCBBMk1vZHVsZSBmcm9tICcuL0EyL0EyLm1vZHVsZSc7XG5cbi8vYW5ndWxhci5tb2R1bGUoJ3RlbXBsYXRlcycsIFtdKTtcbnZhciBMdW1iYXJkaW5hTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ0x1bWJhcmRpbmFXZWInLFxuXHRcdFx0XHQgICAgICBbJ25nUm91dGUnLFxuXHRcdFx0XHQgICAgICAgdWlNb2R1bGUubmFtZSxcblx0XHRcdFx0ICAgICAgIGNvbW1vbk1vZHVsZS5uYW1lLFxuXHRcdFx0XHQgICAgICAgaG9tZU1vZHVsZS5uYW1lLFxuLy9cdFx0XHRcdCAgICAgICBjb250YWN0TW9kdWxlLm5hbWUsXG5cdFx0XHRcdCAgICAgICBBMU1vZHVsZS5uYW1lLFxuXHRcdFx0XHQgICAgICAgQTJNb2R1bGUubmFtZSxcblx0XHRcdFx0ICAgICAgICd1aS5ib290c3RyYXAnLFxuXHRcdFx0XHQgICAgICAgJ3d1Lm1hc29ucnknLFxuXHRcdFx0XHQgICAgICAgJ25nU2FuaXRpemUnLFxuXHRcdFx0XHQgICAgICAgJ25nQW5pbWF0ZScsXG5cdFx0XHRcdCAgICAgICAnYW5ndWxhcnRpY3MnLFxuXHRcdFx0XHQgICAgICAgJ2FuZ3VsYXJ0aWNzLmdvb2dsZS5hbmFseXRpY3MnLFxuXHRcdFx0XHQgICAgICAgJ2FuZ3VsYXJ0aWNzLnNjcm9sbCddIClcbiAgICAuY29uZmlnKCgkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpID0+IHtcblx0J25nSW5qZWN0Jztcblx0JHJvdXRlUHJvdmlkZXJcblx0ICAgIC5vdGhlcndpc2Uoe1xuXHRcdHJlZGlyZWN0VG86ICcvJ1xuXHQgICAgfSk7XG4gICAgICAgIC8vIHVzZSB0aGUgSFRNTDUgSGlzdG9yeSBBUElcbiAgICAgICAgLy8gJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuICAgIH0pXG4gICAgLmNvbnRyb2xsZXIoJ2NvbW1vbkN0cmwnLCBmdW5jdGlvbihwYWdlKSB7XG5cdCduZ0luamVjdCc7XG5cdHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IEx1bWJhcmRpbmFNb2R1bGU7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG4vKiBqc2hpbnQgLVcxMDYgKi9cblxuY2xhc3MgSG9tZUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCR3aW5kb3csIHBhZ2UpIHtcblx0J25nSW5qZWN0Jztcblx0dGhpcy5wYWdlID0gcGFnZTtcblx0dGhpcy5udW1iZXJPZlN0YXJzID0gMztcblx0dGhpcy5ub1dyYXBTbGlkZXMgPSBmYWxzZTtcblx0dGhpcy4kd2luZG93ID0gJHdpbmRvdztcblx0cGFnZS5zZXRUaXRsZSgnSG9tZScpO1xuXHR0aGlzLmFwYXJ0bWVudHMgPSBbXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMi9wcm9maWxlLmpwZycsXG5cdFx0dGV4dDogJ0x1bWJhcmRpbmEgQTInLFxuXHRcdGxpbms6ICcvQTInXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvQTEvcHJvZmlsZS5qcGcnLFxuXHRcdHRleHQ6ICdMdW1iYXJkaW5hIEExJyxcblx0XHRsaW5rOiAnL0ExJ1xuXHQgICAgfV07XG5cdFxuXHR0aGlzLnNsaWRlcyA9IFtcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0EyL3Byb2ZpbGUuanBnJyxcblx0XHR0ZXh0OiAnTHVtYmFyZGluYSBBMidcblx0ICAgIH0sXG5cdCAgICB7XG5cdFx0aW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9BMS9wcm9maWxlLmpwZycsXG5cdFx0dGV4dDogJ0x1bWJhcmRpbmEgQTEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvTHVtYmFyZGEvbHVtYmFyZGEuanBnJyxcblx0XHR0ZXh0OiAnTHVtYmFyZGEnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvTHVtYmFyZGEvYmlsaW4temFsLmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJlYWNoZXMgb2YgS29yY3VsYTogQmlsaW4gWmFsJ1xuXHQgICAgfSxcblx0ICAgIHtcblx0XHRpbWFnZTogJy9hc3NldHMvaW1hZ2VzL0x1bWJhcmRhL2JpbGluLXphbDEuanBnJyxcblx0XHR0ZXh0OiAnVGhlIGJlc3QgYmVhY2hlcyBvZiBLb3JjdWxhOiBCaWxpbiBaYWwnXG5cdCAgICB9LFxuXHQgICAge1xuXHRcdGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvTHVtYmFyZGEvcHJ6aW5hLmpwZycsXG5cdFx0dGV4dDogJ1RoZSBiZXN0IGJlYWNoZXMgb2YgS29yY3VsYTogUHJ6aW5hJ1xuXHQgICAgfV07XG5cdHRoaXMubWFwID0ge2NlbnRlcjoge2xhdGl0dWRlOiA0Mi45MjI2NzIsXG5cdFx0XHQgICAgIGxvbmdpdHVkZTogIDE3LjE3MTA1OSB9LFxuXHRcdCAgICB6b29tOiAxNSxcblx0XHQgICAgYm91bmRzOiB7fSxcblx0XHQgICAgb3B0aW9uczoge3Njcm9sbHdoZWVsOiBmYWxzZX19O1xuXHR0aGlzLm1hcmtlciA9IHtcblx0ICAgIGlkOiAwLFxuXHQgICAgY29vcmRzOiB7IFxuXHRcdGxhdGl0dWRlOiA0Mi45MjI2NzIsXG5cdFx0bG9uZ2l0dWRlOiAxNy4xNzEwNTlcblx0ICAgIH0sXG5cdCAgICBvcHRpb25zOiB7IGRyYWdnYWJsZTogdHJ1ZSB9XG5cdH07XG4gICAgfVxuXG4gICAgb3BlbkFpcigpIHtcblx0dGhpcy4kd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3LmFpcmJuYi5jb20vdXNlcnMvc2hvdy83MjYyMzIxJywgJ19ibGFuaycpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWVDb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5pbXBvcnQgSG9tZUNvbnRyb2xsZXIgZnJvbSAnLi9ob21lLmNvbnRyb2xsZXInO1xuXG52YXIgaG9tZU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdsdW1iYXJkaW5hLmhvbWUnLFxuXHRcdFx0XHRbJ25nUm91dGUnXSlcblx0LmNvbnRyb2xsZXIoJ2hvbWVDb250cm9sbGVyJywgSG9tZUNvbnRyb2xsZXIpXG4gICAgLmNvbmZpZygoJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSA9PiB7XG5cdCAgICAnbmdJbmplY3QnO1xuXG5cdCAgICAkcm91dGVQcm92aWRlclxuXHRcdC53aGVuKCcvJywge1xuXHRcdCAgICB0ZW1wbGF0ZVVybDogJ2FwcC9ob21lL2hvbWUudGVtcGxhdGUuaHRtbCcsXG5cdFx0ICAgIGNvbnRyb2xsZXI6ICdob21lQ29udHJvbGxlcicsXG5cdFx0ICAgIGNvbnRyb2xsZXJBczogJ2hvbWVDb250cm9sbGVyJyxcblx0XHQgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuXHRcdH0pO1xuICAgICAgICAgICAgLy8gdXNlIHRoZSBIVE1MNSBIaXN0b3J5IEFQSVxuICAgICAgICAgICAgLy8gJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuXHR9KTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZU1vZHVsZTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qanNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5pbXBvcnQgUGFnZVNlcnZpY2UgZnJvbSAnLi9wYWdlLnNlcnZpY2UnO1xuXG5jb25zdCBraWxvYnl0ZXMgPSAxMDI0O1xuY29uc3QgbWF4X3Byb2ZpbGVfcGljdHVyZV9zaXplID0gMTAwICoga2lsb2J5dGVzO1xuY29uc3QgbWF4X2FwcF9pY29uX3NpemUgPSAxMDAgKiBraWxvYnl0ZXM7XG5cbnZhciBjb21tb25Nb2R1bGUgPSAgYW5ndWxhci5tb2R1bGUoJ2NvbW1vbicsIFtdKVxuXHQuc2VydmljZSgncGFnZScsIFBhZ2VTZXJ2aWNlKVxuXHQuY29uc3RhbnQoJ2tpbG9ieXRlcycsIGtpbG9ieXRlcylcblx0LmNvbnN0YW50KCdtYXhfYXBwX2ljb25fc2l6ZScsIG1heF9hcHBfaWNvbl9zaXplKVxuXHQuY29uc3RhbnQoJ21heF9wcm9maWxlX3BpY3R1cmVfc2l6ZScsIG1heF9wcm9maWxlX3BpY3R1cmVfc2l6ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1vbk1vZHVsZTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cblxudmFyIGRhcmtCYWNrZ3JvdW5kID0geyBiYWNrZ3JvdW5kQ29sb3I6ICcjMmQzMjM1Jyxcblx0XHQgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3Zlcidcblx0XHQgICAgIH07XG5cbnZhciBsaWdodEJhY2tncm91bmQgPSB7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcblx0XHRcdGJhY2tncm91bmRTaXplOiAnY292ZXInXG5cdFx0ICAgICAgfTtcbnZhciBibHVlQmFja2dyb3VuZCA9IHsgYmFja2dyb3VuZENvbG9yOiAnIzAwMTgzQScsXG5cdFx0ICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInXG5cdFx0ICAgICB9O1xuXG52YXIgZGVmYXVsdEJhY2tncm91bmQgPSBsaWdodEJhY2tncm91bmQ7XG5cbmNsYXNzIFBhZ2VTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigkbG9jYXRpb24sICRyb290U2NvcGUpIHtcblx0J25nSW5qZWN0JztcblxuXHR0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcblx0dGhpcy4kcm9vdFNjb3BlID0gJHJvb3RTY29wZTtcblx0dGhpcy50aXRsZSA9ICdBcGFydG1lbnRzIEx1bWJhcmRpbmEnO1xuXG5cdHRoaXMuaGlzdG9yeSA9IFtdO1xuXG5cdC8vIGRpcmVjdGlvbiBvZiB0cmFuc2l0aW9uIHdoZW4gY2hhbmdpbmcgcm91dGUgKHVzZWQgYnkgbmctdmlldykgXG5cdHRoaXMudHJhbnNpdGlvbiA9ICdyaWdodCc7XG5cdHRoaXMuYmFja2dyb3VuZCA9IGxpZ2h0QmFja2dyb3VuZDtcblxuXHQkcm9vdFNjb3BlLiRvbignJGxvY2F0aW9uQ2hhbmdlU3RhcnQnLCAoKT0+IHtcblx0ICAgIHRoaXMuYmFja2dyb3VuZCA9IGRlZmF1bHRCYWNrZ3JvdW5kO1xuXHR9KTtcbiAgICB9XG5cbiAgICBzZXRUaXRsZShuZXdUaXRsZSkge1xuXHR0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgfVxuICAgIFxuICAgIHNldExpZ2h0QmFja2dyb3VuZCgpIHtcblx0dGhpcy5iYWNrZ3JvdW5kID0gbGlnaHRCYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIHNldERhcmtCYWNrZ3JvdW5kKCkge1xuXHR0aGlzLmJhY2tncm91bmQgPSBkYXJrQmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICBzZXRCbHVlQmFja2dyb3VuZCgpIHtcblx0dGhpcy5iYWNrZ3JvdW5kID0gYmx1ZUJhY2tncm91bmQ7XG4gICAgfSBcblxuICAgIGdvKHBhdGgpIHtcblx0aWYocGF0aCA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICB0aGlzLmdvKCcvJyk7XG5cdCAgICByZXR1cm47XG5cdH1cblx0dGhpcy5oaXN0b3J5LnB1c2gocGF0aCk7XG5cdHRoaXMudHJhbnNpdGlvbiA9IHRoaXMudHJhbnNpdGlvbiA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICdyaWdodCc7XG5cdHRoaXMuJGxvY2F0aW9uLnBhdGgocGF0aCk7XG4gICAgfVxuXG4gICAgZ29CYWNrKCkge1xuXHR0aGlzLmhpc3RvcnkucG9wKCk7XG5cdHRoaXMuZ28odGhpcy5oaXN0b3J5LnBvcCgpKTtcbiAgICB9XG5cbiAgICBkZWxldGVIaXN0b3J5KCkge1xuXHR0aGlzLmhpc3RvcnkgPSBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VTZXJ2aWNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5jbGFzcyBFcnJvck1vZGFsQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoJG1vZGFsLCAkbW9kYWxJbnN0YW5jZSwgZXJyb3JNZXNzYWdlLCBlcnJvckhlYWRlcikge1xuXHQnbmdJbmplY3QnO1xuXG5cdHRoaXMuJG1vZGFsID0gJG1vZGFsO1xuXHR0aGlzLiRtb2RhbEluc3RhbmNlID0gJG1vZGFsSW5zdGFuY2U7IFxuXHR0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZTtcblx0dGhpcy5lcnJvckhlYWRlciA9IGVycm9ySGVhZGVyO1xuICAgIH1cblxuICAgIGNhbmNlbCgpIHtcblx0dGhpcy4kbW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JNb2RhbENvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmltcG9ydCBFcnJvck1vZGFsQ29udHJvbGxlciBmcm9tICcuL2Vycm9yLW1vZGFsLmNvbnRyb2xsZXInO1xuXG5jbGFzcyBFcnJvck1vZGFsU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoJG1vZGFsKSB7XG5cdCduZ0luamVjdCc7XG5cblx0dGhpcy4kbW9kYWwgPSAkbW9kYWw7XG4gICAgfVxuXG4gICAgb3BlbihtZXNzYWdlLCBoZWFkZXIpIHtcblx0dGhpcy4kbW9kYWwub3Blbih7XG5cdCAgICBiYWNrZHJvcDogZmFsc2UsXG5cdCAgICB0ZW1wbGF0ZVVybDonY29tcG9uZW50cy91aS9lcnJvci1tb2RhbC9lcnJvci1tb2RhbC50ZW1wbGF0ZS5odG1sJyxcblx0ICAgIGNvbnRyb2xsZXI6IEVycm9yTW9kYWxDb250cm9sbGVyLFxuXHQgICAgY29udHJvbGxlckFzOiAnZXJyb3JNb2RhbCcsXG5cdCAgICByZXNvbHZlOiB7XG5cdFx0ZXJyb3JNZXNzYWdlIDogKCkgPT4gbWVzc2FnZSxcblx0XHRlcnJvckhlYWRlciA6ICgpID0+IGhlYWRlclxuXHQgICAgfVxuXHR9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yTW9kYWxTZXJ2aWNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLypqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmNsYXNzIE5hdkJhckNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhZ2UpIHtcblx0J25nSW5qZWN0JztcblxuXHR0aGlzLnBhZ2UgPSBwYWdlO1x0XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXJDb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLypqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmltcG9ydCBOYXZCYXJDb250cm9sbGVyIGZyb20gJy4vbmF2LWJhci5jb250cm9sbGVyJztcblxudmFyIG5hdkJhckRpcmVjdGl2ZSA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuXHRyZXN0cmljdDogJ0UnLFxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuXHR0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvdWkvbmF2LWJhci9uYXYtYmFyLnRlbXBsYXRlLmh0bWwnLFxuXHRzY29wZToge30sXG5cdGNvbnRyb2xsZXI6IE5hdkJhckNvbnRyb2xsZXIsXG5cdGNvbnRyb2xsZXJBczogJ25hdkJhcidcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2QmFyRGlyZWN0aXZlO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbWFnZVZpZXdEaXJlY3RpdmUgPSAoJHdpbmRvdykgPT4ge1xuICAgICduZ0luamVjdCc7XG4gICAgcmV0dXJuIHtcblx0cmVzdHJpY3Q6ICdBJyxcblx0bGluazogKCRzY29wZSwgZWxlbSwgYXR0cikgPT4ge1xuICAgICAgICAgICAgZWxlbS5vbignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNpcmluYSBzbGlrZSBqZVwiLCBlbGVtLmlubmVyV2lkdGgoKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaXJpbmEgZWtyYW5hIGplXCIsICR3aW5kb3cuaW5uZXJXaWR0aCk7XG5cblx0XHRsZXQgd2lkdGggPSBlbGVtLmlubmVyV2lkdGgoKSA8ICR3aW5kb3cuaW5uZXJXaWR0aCowLjg5ID8gZWxlbS5pbm5lcldpZHRoKCkgOiAkd2luZG93LmlubmVyV2lkdGgqMC44OTtcblx0XHRsZXQgaGVpZ2h0ID0gZWxlbS5pbm5lckhlaWdodCgpIDwgJHdpbmRvdy5pbm5lckhlaWdodCowLjcwID8gZWxlbS5pbm5lckhlaWdodCgpIDogJHdpbmRvdy5pbm5lckhlaWdodCAqMC43MDtcblx0XHRlbGVtLmF0dHIoJ3N0eWxlJywgJ21heC13aWR0aDogJyArIHdpZHRoICsgJ3B4OycgKyAnbWF4LWhlaWdodDogJyArIGhlaWdodCArICdweDsnKTtcblx0ICAgIH0pO1xuXHR9XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGltYWdlVmlld0RpcmVjdGl2ZTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cblxuY2xhc3MgT3BlbkltYWdlTW9kYWxDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigkdWliTW9kYWxJbnN0YW5jZSwgb3BlbkltYWdlTW9kYWxTZXJ2aWNlLCBwYWdlLCBpbWFnZUluZm8pIHtcblx0J25nSW5qZWN0Jztcblx0dGhpcy4kdWliTW9kYWxJbnN0YW5jZSA9ICR1aWJNb2RhbEluc3RhbmNlO1xuXHR0aGlzLnBhZ2UgPSBwYWdlO1xuXHR0aGlzLmltYWdlSW5mbyA9IGltYWdlSW5mbztcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSBpbWFnZUluZm87XG4gICAgICAgIHRoaXMub3BlbkltYWdlTW9kYWxTZXJ2aWNlID0gb3BlbkltYWdlTW9kYWxTZXJ2aWNlO1xuICAgIH1cblxuICAgIHVwZGF0ZUltYWdlKGRpcmVjdGlvbikge1xuICAgICAgICAvKlxuICAgICAgICAgIFdpbGwgc2hvdyBuZXh0IGltYWdlIGlmIGRpcmVjdGlvbiBpcyAxLFxuICAgICAgICAgIGlmIGRpcmVjdGlvbiBpcyAtMSBzaG93cywgcHJldmlvdXNcbiAgICAgICAgKi9cbiAgICAgICAgbGV0IGN1cnJlbnRJbWFnZUluZGV4ID1cbiAgICAgICAgICAgIHRoaXMub3BlbkltYWdlTW9kYWxTZXJ2aWNlLnNsaWRlcy5pbmRleE9mKHRoaXMuY3VycmVudEltYWdlKTtcbiAgICAgICAgbGV0IG5ld0luZGV4ID0gY3VycmVudEltYWdlSW5kZXggKyBkaXJlY3Rpb247XG4gICAgICAgIGlmIChuZXdJbmRleCA+PSAwICYmIG5ld0luZGV4IDwgdGhpcy5vcGVuSW1hZ2VNb2RhbFNlcnZpY2Uuc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPVxuICAgICAgICAgICAgICAgIHRoaXMub3BlbkltYWdlTW9kYWxTZXJ2aWNlLnNsaWRlc1tuZXdJbmRleF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlQcmVzcygkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC5rZXlDb2RlID09IDM5KSB7XG4gICAgICAgICAgICAvL3JpZ2h0IGFycm93XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUltYWdlKDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCRldmVudC5rZXlDb2RlID09IDM3KSB7XG4gICAgICAgICAgICAvL2xlZnQgYXJyb3dcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW1hZ2UoLTEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuXHR0aGlzLiR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcGVuSW1hZ2VNb2RhbENvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbmltcG9ydCBPcGVuSW1hZ2VNb2RhbENvbnRyb2xsZXIgZnJvbSAnLi9vcGVuLWltYWdlLW1vZGFsLmNvbnRyb2xsZXInO1xuXG5jbGFzcyBPcGVuSW1hZ2VNb2RhbFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCR1aWJNb2RhbCkge1xuXHQnbmdJbmplY3QnO1xuXHR0aGlzLiR1aWJNb2RhbCA9ICR1aWJNb2RhbDtcbiAgICAgICAgdGhpcy5zbGlkZXMgPSBbXTtcbiAgICB9XG5cbiAgICBvcGVuKGltYWdlSW5mbykge1xuXHR0aGlzLiR1aWJNb2RhbC5vcGVuKHtcblx0ICAgIGJhY2tkcm9wOiB0cnVlLFxuXHQgICAgd2luZG93Q2xhc3M6ICdmdWxsLXNjcmVlbi1tb2RhbCcsXG5cdCAgICB0ZW1wbGF0ZVVybDonY29tcG9uZW50cy91aS9vcGVuLWltYWdlLW1vZGFsL29wZW4taW1hZ2UtbW9kYWwudGVtcGxhdGUuaHRtbCcsXG5cdCAgICBjb250cm9sbGVyOiBPcGVuSW1hZ2VNb2RhbENvbnRyb2xsZXIsXG5cdCAgICBjb250cm9sbGVyQXM6ICdvcGVuSW1hZ2VNb2RhbENvbnRyb2xsZXInLFxuXHQgICAgcmVzb2x2ZToge1xuXHRcdGltYWdlSW5mbzogKCkgPT4gaW1hZ2VJbmZvXG5cdCAgICB9XG5cdH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3BlbkltYWdlTW9kYWxTZXJ2aWNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLypqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbnZhciBwZGZWaWV3RGlyZWN0aXZlID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG5cdHJlc3RyaWN0OiAnRScsXG5cdHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy91aS9wZGYtdmlldy9wZGYtdmlldy50ZW1wbGF0ZS5odG1sJyxcblx0c2NvcGU6IHsgcGRmICAgICA6ICc9J1xuXHQgICAgICAgfVxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwZGZWaWV3RGlyZWN0aXZlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5jbGFzcyBTdWNjZXNzTW9kYWxDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigkbW9kYWwsIHBhZ2UsICRtb2RhbEluc3RhbmNlLCBzdWNjZXNzTWVzc2FnZSwgc3VjY2Vzc0hlYWRlciwgc3VjY2Vzc0xpbmspIHtcblx0J25nSW5qZWN0JztcblxuXHR0aGlzLiRtb2RhbEluc3RhbmNlID0gJG1vZGFsSW5zdGFuY2U7IFxuXHR0aGlzLnBhZ2UgPSBwYWdlO1xuXHR0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gc3VjY2Vzc01lc3NhZ2U7XG5cdHRoaXMuc3VjY2Vzc0hlYWRlciA9IHN1Y2Nlc3NIZWFkZXI7XG5cdHRoaXMuc3VjY2Vzc0xpbmsgPSBzdWNjZXNzTGluaztcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG5cdHRoaXMuJG1vZGFsSW5zdGFuY2UuY2xvc2UoKTtcblx0dGhpcy5wYWdlLmdvKHRoaXMuc3VjY2Vzc0xpbmspO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VjY2Vzc01vZGFsQ29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cblxuaW1wb3J0IFN1Y2Nlc3NNb2RhbENvbnRyb2xsZXIgZnJvbSAnLi9zdWNjZXNzLW1vZGFsLmNvbnRyb2xsZXInO1xuXG5jbGFzcyBTdWNjZXNzTW9kYWxTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigkbW9kYWwpIHtcblx0J25nSW5qZWN0JztcblxuXHR0aGlzLiRtb2RhbCA9ICRtb2RhbDtcbiAgICB9XG5cbiAgICBvcGVuKG1lc3NhZ2UsIGhlYWRlciwgbGluaykge1xuXHR0aGlzLiRtb2RhbC5vcGVuKHtcblx0ICAgIGJhY2tkcm9wOiBmYWxzZSxcblx0ICAgIHRlbXBsYXRlVXJsOidjb21wb25lbnRzL3VpL3N1Y2Nlc3MtbW9kYWwvc3VjY2Vzcy1tb2RhbC50ZW1wbGF0ZS5odG1sJyxcblx0ICAgIGNvbnRyb2xsZXI6IFN1Y2Nlc3NNb2RhbENvbnRyb2xsZXIsXG5cdCAgICBjb250cm9sbGVyQXM6ICdzdWNjZXNzTW9kYWwnLFxuXHQgICAgcmVzb2x2ZToge1xuXHRcdHN1Y2Nlc3NNZXNzYWdlOiAoKSA9PiAgbWVzc2FnZSxcblx0XHRzdWNjZXNzSGVhZGVyOiAoKSA9PiBoZWFkZXIsXG5cdFx0c3VjY2Vzc0xpbms6ICgpID0+IGxpbmtcblx0ICAgIH1cblx0fSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWNjZXNzTW9kYWxTZXJ2aWNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5pbXBvcnQgbmF2QmFyRGlyZWN0aXZlIGZyb20gJy4vbmF2LWJhci9uYXYtYmFyLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCBzdWNjZXNzTW9kYWxTZXJ2aWNlIGZyb20gJy4vc3VjY2Vzcy1tb2RhbC9zdWNjZXNzLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IGVycm9yTW9kYWxTZXJ2aWNlIGZyb20gJy4vZXJyb3ItbW9kYWwvZXJyb3ItbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgcGRmVmlld0RpcmVjdGl2ZSBmcm9tICcuL3BkZi12aWV3L3BkZi12aWV3LmRpcmVjdGl2ZSc7XG5pbXBvcnQgaW1hZ2VWaWV3RGlyZWN0aXZlIGZyb20gJy4vb3Blbi1pbWFnZS1kaXJlY3RpdmUvb3Blbi1pbWFnZS5kaXJlY3RpdmUnO1xuXG5pbXBvcnQgY29tbW9uTW9kdWxlIGZyb20gJy4uL2NvbW1vbi9jb21tb24ubW9kdWxlJztcbmltcG9ydCBPcGVuSW1hZ2VNb2RhbFNlcnZpY2UgZnJvbSAnLi9vcGVuLWltYWdlLW1vZGFsL29wZW4taW1hZ2UtbW9kYWwuc2VydmljZSc7XG5cbnZhciB1aU1vZHVsZSA9ICBhbmd1bGFyLm1vZHVsZSgnbWF4ZWxlci51aScsIFsnbmdTYW5pdGl6ZScsXG5cdFx0XHRcdFx0ICAgICAgJ25nR3JpZCcsIFxuXHRcdFx0XHRcdCAgICAgICd1aS5ib290c3RyYXAnLFxuXHRcdFx0XHRcdCAgICAgIGNvbW1vbk1vZHVsZS5uYW1lXSlcbiAgICAuc2VydmljZSgnc3VjY2Vzc01vZGFsU2VydmljZScsIHN1Y2Nlc3NNb2RhbFNlcnZpY2UpXG4gICAgLnNlcnZpY2UoJ2Vycm9yTW9kYWxTZXJ2aWNlJywgZXJyb3JNb2RhbFNlcnZpY2UpXG4gICAgLnNlcnZpY2UoJ29wZW5JbWFnZU1vZGFsU2VydmljZScsIE9wZW5JbWFnZU1vZGFsU2VydmljZSlcbiAgICAuZGlyZWN0aXZlKCduYXZCYXInLCBuYXZCYXJEaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZSgncGRmVmlldycsIHBkZlZpZXdEaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZSgnaW1hZ2VWaWV3RGlyZWN0aXZlJywgaW1hZ2VWaWV3RGlyZWN0aXZlKTtcblxuZXhwb3J0IGRlZmF1bHQgdWlNb2R1bGU7XG4iXX0=

angular.module('LumbardinaWeb').run(['$templateCache', function($templateCache) {$templateCache.put('app/A1/A1.template.html','<base href="/A1"><nav-bar></nav-bar><h5 style="text-align:center;">Lumbardina A1 (A3 + Room)</h5><div style="text-align: center;"><a href="//www.homeaway.co.uk/p1187894?uni_id=1452832" rel="nofollow"><img src="//www.homeaway.co.uk/haow/api/image/homeaway_uk/trips/1187894/reviews?unitId=1452832" alt="HomeAway Property" style="border:none;" rel="nofollow"></a><div style="text-align:center;"><a href="//www.homeaway.co.uk/reviews/p1187894?uni_id=1452832" rel="nofollow">Read</a> or <a href="//www.homeaway.co.uk/reviews/write/p1187894?uni_id=1452832" rel="nofollow">Write</a> Reviews</div></div><uib-carousel interval="5000" no-wrap="A1Controller.noWrapSlides"><uib-slide ng-repeat="slide in A1Controller.mainSlides" style=""><center><div ng-style="{\'background\': \'url(\\\'\' + slide.image + \'\\\')\', \'height\':\'528px\',\'background-size\': \'contain\',\'background-position\':\'center\', \'background-repeat\': \'no-repeat\'}" title="{{slide.text}}"></div></center><div class="carousel-caption"><p>{{slide.text}}</p></div></uib-slide></uib-carousel><div class="checkbox"><label><input type="checkbox" ng-model="A1Controller.noWrapSlides"> Disable Slide Looping</label></div><hr><div class="container"><p>&nbsp; &nbsp; Our relaxing Lumbardina A1 apartment is situated in TOP location, in the heart of the small, picturesque fishing village Lumbarda. The apartment is in the center of <b>Lumbarda</b>, only 60m from the sea, separated from seafront with owner\'s yard, fully equipped, spacious with provided parking space.</p><p>&nbsp; &nbsp; Apartment A1 (7 people max) is on the same piece of land, behind Apartment A2 in a traditional dalmatian house. Owner lives on the ground floor and apartment is on the top floor and has a separate entrance and big terrace (20 square meters). There are 3 rooms, each with a double bed. One room has an additional single bed, and in there is an additional fridge. Apartment has 2 bathrooms with bathtub (one has a washing machine in it), kitchen and dining table in it.</p><p>If you wish to stay in a central location where everything is at hand, whilst enjoying total privacy, then this apartment is ideal for you with its private terrace and a beautiful Mediterranean garden with its lemon, orange, fig, pomegranate, kiwi and olive trees. Guests are also welcome to use the barbecue. For full enjoyment the apartment has a balcony with a splendid sea view, ideal to relax with a morning coffee or an evening glass of wine.</p><p>&nbsp; &nbsp; *Apartment A1 is rented in high season (July and August) as whole, and in other months it can be divided into 2 units: Apartment A3 for 4 persons and Room for 2-3 persons.</p><hr><p>&nbsp; &nbsp; Apartment is equipped with air conditioner, wireless internet access, fully equipped kitchen, washing machine, dining room and TV. A parking spot is also provided.</p><button class="btn btn-success" ng-click="A1Controller.page.go(\'contact\')" style="width:100%;">Contact us</button><br><br><button type="button" class="btn btn-default" ng-init="A1Controller.isCollapsed = false;" uib-tooltip="Click here to see more pictures of this wonderful apartment" ng-click="A1Controller.isCollapsed = !A1Controller.isCollapsed"><span ng-show="A1Controller.isCollapsed">Show</span> <span ng-hide="A1Controller.isCollapsed">Hide</span> images of apartment Lumbardina A1</button><hr><div uib-collapse="A1Controller.isCollapsed"><div class="well well-lg">Click on the image to enlarge it.<masonry masonry-options="{ isFitWidth: true, gutter: 36, transitionDuration: \'1.2s\'}" reload-on-show="" preserve-order="" style="margin: 20px auto 20px auto; display: block; cursor:pointer;" item-selector=".image-brick" column-width="20"><img masonry-brick="" ng-repeat="slide in A1Controller.slides" alt="{{slide.text}}" ng-src="{{slide.image}}" class="image-brick" ng-click="A1Controller.openImageModalService.open(slide)" uib-tooltip="{{slide.text}}"><masonry></masonry></masonry></div></div><div style="text-align: center;"><iframe scrolling="no" width="518" height="770" frameborder="0" style="overflow:hidden;border:none" src="//www.homeaway.co.uk/haow/widgets/calendar.html?propertyId=1187894&unitId=1452832&monthCount=12&orientation=full&site=homeaway_uk"></iframe><a href="//www.homeaway.co.uk/p1187894?uni_id=1452832" style="display:block;text-align:center;margin-top:-30px; font-size:12px;" rel="nofollow">HomeAway.co.uk #1187894</a></div></div>');
$templateCache.put('app/A2/A2.template.html','<nav-bar></nav-bar><h5 style="text-align:center;">Lumbardina A2</h5><div style="max-width:1200px; display:block; margin:10px auto;"><uib-carousel interval="5000" no-wrap="A2Controller.noWrapSlides"><uib-slide ng-repeat="slide in A2Controller.mainSlides"><center><div ng-style="{\'background\': \'url(\\\'\' + slide.image + \'\\\')\', \'height\':\'528px\',\'background-size\': \'contain\',\'background-position\':\'center\', \'background-repeat\': \'no-repeat\'}" title="{{slide.text}}"></div></center><div class="carousel-caption"><p>{{slide.text}}</p></div></uib-slide></uib-carousel><div class="checkbox"><label><input type="checkbox" ng-model="A2Controller.noWrapSlides"> Disable Picture Looping</label><p>&nbsp; &nbsp; Apartment A2 has astonishing terrace with view on the sea where our guests can fully enjoy meals or morning coffee.</p></div></div><hr><div class="container"><p>&nbsp; &nbsp; Our relaxing Lumbardina A2 apartment is situated in TOP location, in the heart of the small, picturesque fishing village Lumbarda.The apartment is in the center,the seafront only 30m from the sea, new, fully equipped, spacious with provided parking space</p><center><h5>Great Apartment In The Heart Of The Small, Picturesque Fishing Village Lumbarda</h5></center><p>&nbsp; &nbsp; The apartment is ideal for families and friends who want to stay in a central place close to many rural attractions, local restaurants (all styles such as traditional Croatian and Pizza), cafes, shops, bakeries, post office, local produce market, and the marina where you can rent boats, kayaks and snorkeling equipment. You can also rent bicycles or scooters and you are only a on 5-15 minute walk away from beautiful beaches.</p><p>&nbsp; &nbsp; The apartment is an ideal location to use as a base for all kind of activities like walking, cycling, fishing, diving, and sailing. Their location is also suitable for seniors, especially before and after peak holiday season when the sky and the sea are in perfect harmony and you have the beaches to yourself, walking, socializing and enjoying on the terrace, while all service activities are at hand.</p><p>&nbsp; &nbsp; Apartment A2 (4+2) is positioned on the first floor of a house on the seashore. There are 2 bedrooms, 2 bathrooms (one with washing machine), fully equipped kitchen, dining room with dining table for 6 persons, living room with TV and 2 sofa beds for extra people. The kitchen, dining room and living room are open plan, and are tastefully decorated, giving a pleasant and relaxed atmosphere. From the spacious living area, the balcony opens up to a large 20m2 terrace with unbelievable views of the sea, an ideal place to rest and enjoy the magic of summer and its nights.</p><hr><button class="btn btn-success" ng-click="A2Controller.page.go(\'contact\')" style="width:100%;">Contact us</button><br><br><button type="button" class="btn btn-default" ng-init="A2Controller.isCollapsed = false;" uib-tooltip="Click here to see more pictures of this wonderful apartment" ng-click="A2Controller.isCollapsed = !A2Controller.isCollapsed"><span ng-show="A2Controller.isCollapsed">Show</span> <span ng-hide="A2Controller.isCollapsed">Hide</span> images of apartment Lumbardina A2</button><hr><div uib-collapse="A2Controller.isCollapsed"><div class="well well-lg">Click on the image to enlarge it.<masonry masonry-options="{ isFitWidth: true, gutter: 36, transitionDuration: \'1.2s\'}" reload-on-show="" preserve-order="" style="margin: 20px auto 20px auto; display: block; cursor:pointer;" item-selector=".image-brick" column-width="20"><img masonry-brick="" ng-repeat="slide in A2Controller.slides" alt="{{slide.text}}" ng-src="{{slide.image}}" class="image-brick" ng-click="A2Controller.openImageModalService.open(slide)" uib-tooltip="{{slide.text}}"><masonry></masonry></masonry></div></div><div style="text-align: center;"><iframe scrolling="no" width="518" height="770" frameborder="0" style="overflow:hidden;border:none" src="//www.homeaway.co.uk/haow/widgets/calendar.html?propertyId=1187894&unitId=1449510&monthCount=12&orientation=full&site=homeaway_uk"></iframe><a href="//www.homeaway.co.uk/p1187894?uni_id=1449510" style="display:block;text-align:center;margin-top:-30px; font-size:12px;" rel="nofollow">HomeAway.co.uk #1187894</a></div></div>');
$templateCache.put('app/contact/contact.template.html','<nav-bar></nav-bar><div class="container"><center><h5>Contact information</h5></center><hr><p>You can contact us on:</p><div class="row"><div class="col-md-6 col-sm-6 col-xs-12"><span style="font-size: 15px">our email:</span> <i class="fa fa-envelope-o" style="margin-right:10px; margin-left:20px;"></i> <a href="mailto:nobilopetar@yahoo.com">nobilopetar@yahoo.com</a></div><div class="col-md-6 col-sm-6 col-xs-12"><span style="font-size: 15px">or via phone:</span> <i class="fa fa-mobile" style="margin-right:10px; margin-left:20px;"></i>+385 915706774</div></div><br><p>&nbsp; &nbsp; In case you have any questions or concerns please contact us using the form below. After filling in the following fields with your contact details and your query we will contact you to resolve any issues or queries:</p><center><iframe src="https://docs.google.com/forms/d/1OWYji9ioDg_itbKRtOwodp82dJnGgLvco6UP1hit7bY/viewform?embedded=true" style="max-width:700px; min-height:1300px; width:100%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe></center></div><br><ui-gmap-google-map center="contactController.map.center" draggable="true" zoom="contactController.map.zoom" options="contactController.map.options" bounds="contactController.map.bounds"><ui-gmap-marker coords="contactController.marker.coords" options="contactController.marker.options" idkey="contactController.marker.id"></ui-gmap-marker></ui-gmap-google-map>');
$templateCache.put('app/home/home.template.html','<nav-bar></nav-bar><div class="container"><br><center><h5>Welcome to apartments Lumbardina official webpage</h5></center><hr><p>&nbsp; &nbsp;Our delight apartments <b ng-click="homeController.page.go(\'/A1\')" class="underline-on-hover" style="cursor:pointer;">Lumbardina A1</b> and <b ng-click="homeController.page.go(\'/A2\')" class="underline-on-hover" style="cursor:pointer;">Lumbardina A2</b> are situated in <b>TOP</b> location, in <b>center</b>, the heart of the small, picturesque fishing village <b>Lumbarda</b> on island <b itemprop="addressLocality">Korcula</b> in <b itemprop="addressRegion">Dubrovacko-Neretvanska Zupanija</b> in <b itemprop="addressCountry">Croatia</b>. If you wish to stay on top location, close to all local amenities like: restaurants, wineries, shops, in an apartments with the <b>view on the sea</b> you have come to the right place !</p><p>To see more details about our apartments click on following images:</p><masonry masonry-options="{ isFitWidth: true, gutter: 36, transitionDuration: \'1.2s\'}" reload-on-show="" preserve-order="" style="margin: 20px auto 20px auto; display: block; cursor:pointer;" item-selector=".lumbardina-masonry-brick" column-width="150"><div masonry-brick="" class="lumbardina-masonry-brick" ng-click="homeController.page.go(apartment.link)" ng-repeat="apartment in homeController.apartments" tooltip="Click to see more info about {{apartment.text}}"><center><uib-rating data-readonly="true" ng-model="homeController.numberOfStars" max="3"></uib-rating></center><div><div ng-style="{\'background\': \'url(\\\'\' + apartment.image + \'\\\')\', \'height\':\'150px\',\'width\':\'150px\', \'background-size\': \'cover\',\'background-position\':\'center\', \'background-repeat\': \'no-repeat\'}"></div>{{apartment.text}}</div></div></masonry><p>&nbsp; &nbsp;Both apartments are equipped with an air conditioner, wireless internet access, a parking spot is also provided.</p><p>&nbsp; &nbsp; Apartments lumbardina A1 and A2 are situated in 2 separate houses, on the same property in the heart of the small, picturesque fishing village lumbarda. Apartment A2 is in the front of the property overlooking the seaside, and apartment a1 is 70 meters behind it on the same piece of land(10 ares). The apartments are ideal for families and friends who want to stay in a central place close to many village attractions, local restaurants (including traditional croatian and pizza restaurants), cafes, shops, bakeries, post office, a local green market, and the marina where you can rent boats, kayaks and snorkeling equipment. You can also rent bicycles or scooters as the apartments are only a 5-15 minute walk away from the most beautiful beaches.</p><div class="row"><div class="col-md-6" style="text-align:center;"><div style="display:inline-block"><a href="http://www.homeaway.co.uk/p1187894" rel="nofollow"><img src="http://www.homeaway.co.uk/haow/api/image/homeaway_uk/trips/1187894/reviews?unitId=1449510" alt="HomeAway Property" style="border:none;" rel="nofollow"></a><div style="text-align:center;"><a href="http://www.homeaway.co.uk/reviews/p1187894" rel="nofollow">Read</a> or <a href="http://www.homeaway.co.uk/reviews/write/p1187894" rel="nofollow">Write</a> Reviews</div></div></div><div class="col-md-6" style="text-align:center;"><a href="http://www.homeaway.co.uk/p1187894" rel="nofollow"><img src="http://www.homeaway.co.uk/haow/api/image/homeaway_uk/trips/1187894/tenure" alt="HomeAway Property" style="border:none;"></a></div></div><h5><i>Lumbarda and environment</i></h5><script src="https://www.jscache.com/wejs?wtype=linkingWidgetRedesign&amp;uniq=902&amp;locationId=1069851&amp;lang=en_US&amp;border=true&amp;display_version=2"></script><uib-carousel interval="5000" no-wrap="homeController.noWrapSlides"><uib-slide ng-repeat="slide in homeController.slides" style="max-height:532px;"><center><div ng-style="{\'background\': \'url(\\\'\' + slide.image + \'\\\')\', \'height\':\'528px\', \'background-size\': \'contain\',\'background-position\':\'center\', \'background-repeat\': \'no-repeat\'}" title="{{slide.text}}"></div></center><div class="carousel-caption"><p>{{slide.text}}</p></div></uib-slide></uib-carousel><div class="checkbox"><label><input type="checkbox" ng-model="homeController.noWrapSlides"> Disable Picture Looping</label></div><h5><i>How to get to us ?</i></h5><p>Our address is: <span itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">Lumbarda 376, Lumbarda, Croatia. <span>&nbsp; <span style="font-size: 15px">Our phone number is:</span> <i class="fa fa-mobile" style="margin-right:10px; margin-left:20px;"></i> <span itemprop="telephone">+385 915706774</span></span></span></p><p>&nbsp; &nbsp; You can get to Korcula on multiple ways. Here are useful links on which you can find informations about transport to Korcula island:</p><ul>From <b>Dubrovnik<b>:<li><a href="http://www.krilo.hr/en/" target="_blank">Krilo Jet</a><br><a href="http://www.jadrolinija.hr/en" target="_blank">Ferry and speedboats lines around the Dalmatian coast</a></li><li><a href="http://www.buscroatia.com/dubrovnik-korcula/" target="_blank">with bus</a>, <a href="https://www.autotrans.hr/en-us/home" target="_blank">here</a> you can book bus tickets.</li></b></b></ul><ul>From <b>Split<b>:<li>By catamaran:<br><a href="http://www.krilo.hr/en/" target="_blank">Krilo Jet</a><br><a href="http://www.jadrolinija.hr/en" target="_blank">Ferry and speedboats lines around the Dalmatian coast</a></li><li>By ferry boat from Split:<br>Take a ferry from Split to town Vela Luka (Kor\u010Dula), and then take bus to the town of Kor\u010Dula and then Lumbarda.</li><li><a href="http://www.buscroatia.com/split-korcula/" target="_blank">with bus</a>, <a href="https://www.autotrans.hr/en-us/home" target="_blank">here</a> you can book bus tickets.</li></b></b></ul><ui-gmap-google-map center="homeController.map.center" draggable="true" zoom="homeController.map.zoom" options="homeController.map.options" bounds="homeController.map.bounds"><ui-gmap-marker coords="homeController.marker.coords" options="homeController.marker.options" idkey="homeController.marker.id"></ui-gmap-marker></ui-gmap-google-map></div>');
$templateCache.put('components/ui/error-modal/error-modal.template.html','<div class="modal-header modal-header-error"><h4>{{ errorModal.errorHeader }}</h4></div><div class="modal-body modal-body-error"><pre>{{ errorModal.errorMessage }}</pre></div><div class="modal-footer"><button class="btn btn-primary" ng-click="errorModal.cancel()">Close</button></div>');
$templateCache.put('components/ui/nav-bar/nav-bar.template.html','<nav class="navbar navbar-inverse navbar-fixed-top navbar-home-page" role="navigation"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#action-bar" aria-expanded="false"></button><a class="navbar-brand" style="padding-right: 25px; height: 68px; cursor:pointer;" ng-click="navBar.page.go(\'/\')"></a></div><div class="collapse navbar-collapse navbar-left" id="action-bar"><ul class="nav navbar-nav"><li><a class="navbar_link" ng-click="navBar.page.go(\'/\')">Apartments:<meta itemprop="image" content="http://apartmentslumbardina.com/assets/images/Logo.svg"></a></li><li><a class="navbar_link" ng-click="navBar.page.go(\'/A2\')" analytics-on="click" analytics-event="Click on appartment A2">A2</a></li><li><a class="navbar_link" ng-click="navBar.page.go(\'/A1\')" analytics-on="click" analytics-event="Click on appartment A1">A1</a></li><li class="hidden-lg"><a class="navbar_link" ng-click="navBar.page.go(\'/contact\')" analytics-on="click" analytics-event="Click on contact us"><i class="fa fa-tty"></i> Contact Us</a></li></ul></div><div class="navbar-text navbar-right visible-lg" style="margin-right: 10px;"><a class="navbar_link" ng-click="navBar.page.go(\'/contact\')" analytics-on="click" analytics-event="Click on contact us"><i class="fa fa-tty"></i> Contact Us</a></div></nav>');
$templateCache.put('components/ui/open-image-modal/open-image-modal.template.html','<div class="modal-header modal-header-info" style="border-bottom-width: 0px;">{{openImageModalController.currentImage.text}} <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: white;" ng-click="openImageModalController.cancel()"><i class="fa fa-times-circle"></i></button></div><div style="display: table; width: 100%; height: 100%; background-color: grey; opacity: 0.97; padding-bottom: 20px;" tabindex="0" autofocus="" ng-keydown="openImageModalController.keyPress($event)"><div style="display: table-cell; vertical-align: middle; text-align: center; width: 10px; cursor: pointer;" ng-click="openImageModalController.updateImage(-1)"><i class="fa fa-chevron-left" style="cursor: pointer;" aria-hidden="true"></i></div><div style="display: table-cell; vertical-align: middle; text-align: center; width: 100% - 20px; height: 100%;" ng-style="{\'background\': \'url(\'+ openImageModalController.currentImage.image +\') no-repeat center center fixed\', \'background-size\': \'contain\'}"></div><div style="display: table-cell; vertical-align: middle; text-align: center; cursor: pointer; width: 10px;" ng-click="openImageModalController.updateImage(1)"><i class="fa fa-chevron-right" aria-hidden="true"></i></div></div>');
$templateCache.put('components/ui/pdf-view/pdf-view.template.html','<iframe ng-src="{{\'bower_components/pdfjs-1.0.473-dist/web/viewer.html?file=\' + pdf}}" ng-style="{ position: \'absolute\', height: \'100%\', width: \'100%\'}"></iframe>');
$templateCache.put('components/ui/success-modal/success-modal.template.html','<div class="modal-header modal-header-info"><h4>{{ successModal.successHeader }}</h4></div><div class="modal-body"><p class="small">{{ successModal.successMessage }}</p></div><div class="modal-footer"><button class="btn btn-primary" ng-click="successModal.cancel()">OK</button></div>');}]);