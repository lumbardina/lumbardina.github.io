!function e(t,o,r){function n(s,i){if(!o[s]){if(!t[s]){var l="function"==typeof require&&require;if(!i&&l)return l(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=o[s]={exports:{}};t[s][0].call(c.exports,function(e){var o=t[s][1][e];return n(o?o:e)},c,c.exports,e,t,o,r)}return o[s].exports}for(var a="function"==typeof require&&require,s=0;s<r.length;s++)n(r[s]);return n}({1:[function(e,t,o){"use strict";Object.defineProperties(o,{"default":{get:function(){return c}},__esModule:{value:!0}});var r,n,a,s=(r=e("../components/ui/ui.module"),r&&r.__esModule&&r||{"default":r})["default"],i=((n=e("../components/common/common.module"),n&&n.__esModule&&n||{"default":n})["default"],(a=e("./home/home.module"),a&&a.__esModule&&a||{"default":a})["default"]),l=angular.module("Lumbardina",["ngRoute",s.name,i.name,"ui.bootstrap","wu.masonry","ngSanitize","ngAnimate","angulartics","angulartics.google.analytics"]).config(["$routeProvider",function(e){"ngInject";e.otherwise({redirectTo:"/"})}]).controller("commonCtrl",["page",function(e){"ngInject";this.page=e}]),c=l},{"../components/common/common.module":4,"../components/ui/ui.module":13,"./home/home.module":3}],2:[function(e,t,o){"use strict";Object.defineProperties(o,{"default":{get:function(){return n}},__esModule:{value:!0}});var r=function(e){"ngInject";this.page=e,e.setTitle("Home"),this.spinner=!1};r.$inject=["page"],$traceurRuntime.createClass(r,{},{});var n=r},{}],3:[function(e,t,o){"use strict";Object.defineProperties(o,{"default":{get:function(){return s}},__esModule:{value:!0}});var r,n=(r=e("./home.controller"),r&&r.__esModule&&r||{"default":r})["default"],a=angular.module("maxeler.home",["ngRoute"]).controller("homeController",n).config(["$routeProvider",function(e){"ngInject";e.when("/",{templateUrl:"app/home/home.template.html",controller:"homeController",controllerAs:"homeController",bindToController:!0})}]),s=a},{"./home.controller":2}],4:[function(e,t,o){"use strict";Object.defineProperties(o,{"default":{get:function(){return c}},__esModule:{value:!0}});var r,n=(r=e("./page.service"),r&&r.__esModule&&r||{"default":r})["default"],a=1024,s=100*a,i=100*a,l=angular.module("common",[]).service("page",n).constant("kilobytes",a).constant("max_app_icon_size",i).constant("max_profile_picture_size",s),c=l},{"./page.service":5}],5:[function(e,t,o){"use strict";Object.defineProperties(o,{"default":{get:function(){return l}},__esModule:{value:!0}});var r={backgroundColor:"#2d3235",backgroundSize:"cover"},n={backgroundColor:"white",backgroundSize:"cover"},a={backgroundColor:"#00183A",backgroundSize:"cover"},s=n,i=function(e,t){"ngInject";var o=this;this.$location=e,this.$rootScope=t,this.title="Apartments Lumbardina",this.history=[],this.transition="right",this.background=n,t.$on("$locationChangeStart",function(){o.background=s})};i.$inject=["$location","$rootScope"],$traceurRuntime.createClass(i,{setTitle:function(e){this.title=e},setLightBackground:function(){this.background=n},setDarkBackground:function(){this.background=r},setBlueBackground:function(){this.background=a},go:function(e){return void 0===e?void this.go("/"):(this.history.push(e),this.transition="right"===this.transition?"left":"right",void this.$location.path(e))},goBack:function(){this.history.pop(),this.go(this.history.pop())},deleteHistory:function(){this.history=[]}},{});var l=i},{}],6:[function(e,t,o){"use strict";Object.defineProperties(o,{"default":{get:function(){return n}},__esModule:{value:!0}});var r=function(e,t,o,r){"ngInject";this.$modal=e,this.$modalInstance=t,this.errorMessage=o,this.errorHeader=r};r.$inject=["$modal","$modalInstance","errorMessage","errorHeader"],$traceurRuntime.createClass(r,{cancel:function(){this.$modalInstance.close()}},{});var n=r},{}],7:[function(e,t,o){"use strict";Object.defineProperties(o,{"default":{get:function(){return s}},__esModule:{value:!0}});var r,n=(r=e("./error-modal.controller"),r&&r.__esModule&&r||{"default":r})["default"],a=function(e){"ngInject";this.$modal=e};a.$inject=["$modal"],$traceurRuntime.createClass(a,{open:function(e,t){this.$modal.open({backdrop:!1,templateUrl:"components/ui/error-modal/error-modal.template.html",controller:n,controllerAs:"errorModal",resolve:{errorMessage:function(){return e},errorHeader:function(){return t}}})}},{});var s=a},{"./error-modal.controller":6}],8:[function(e,t,o){"use strict";Object.defineProperties(o,{"default":{get:function(){return n}},__esModule:{value:!0}});var r=function(e){"ngInject";this.page=e};r.$inject=["page"],$traceurRuntime.createClass(r,{},{});var n=r},{}],9:[function(e,t,o){"use strict";Object.defineProperties(o,{"default":{get:function(){return s}},__esModule:{value:!0}});var r,n=(r=e("./nav-bar.controller"),r&&r.__esModule&&r||{"default":r})["default"],a=function(){return{restrict:"E",transclude:!0,templateUrl:"components/ui/nav-bar/nav-bar.template.html",scope:{},controller:n,controllerAs:"navBar"}},s=a},{"./nav-bar.controller":8}],10:[function(e,t,o){"use strict";Object.defineProperties(o,{"default":{get:function(){return n}},__esModule:{value:!0}});var r=function(){return{restrict:"E",templateUrl:"components/ui/pdf-view/pdf-view.template.html",scope:{pdf:"="}}},n=r},{}],11:[function(e,t,o){"use strict";Object.defineProperties(o,{"default":{get:function(){return n}},__esModule:{value:!0}});var r=function(e,t,o,r,n,a){"ngInject";this.$modalInstance=o,this.page=t,this.successMessage=r,this.successHeader=n,this.successLink=a};r.$inject=["$modal","page","$modalInstance","successMessage","successHeader","successLink"],$traceurRuntime.createClass(r,{cancel:function(){this.$modalInstance.close(),this.page.go(this.successLink)}},{});var n=r},{}],12:[function(e,t,o){"use strict";Object.defineProperties(o,{"default":{get:function(){return s}},__esModule:{value:!0}});var r,n=(r=e("./success-modal.controller"),r&&r.__esModule&&r||{"default":r})["default"],a=function(e){"ngInject";this.$modal=e};a.$inject=["$modal"],$traceurRuntime.createClass(a,{open:function(e,t,o){this.$modal.open({backdrop:!1,templateUrl:"components/ui/success-modal/success-modal.template.html",controller:n,controllerAs:"successModal",resolve:{successMessage:function(){return e},successHeader:function(){return t},successLink:function(){return o}}})}},{});var s=a},{"./success-modal.controller":11}],13:[function(e,t,o){"use strict";Object.defineProperties(o,{"default":{get:function(){return p}},__esModule:{value:!0}});var r,n,a,s,i,l=(r=e("./nav-bar/nav-bar.directive"),r&&r.__esModule&&r||{"default":r})["default"],c=(n=e("./success-modal/success-modal.service"),n&&n.__esModule&&n||{"default":n})["default"],u=(a=e("./error-modal/error-modal.service"),a&&a.__esModule&&a||{"default":a})["default"],d=(s=e("./pdf-view/pdf-view.directive"),s&&s.__esModule&&s||{"default":s})["default"],m=(i=e("../common/common.module"),i&&i.__esModule&&i||{"default":i})["default"],f=angular.module("maxeler.ui",["ngSanitize","ngGrid","ui.bootstrap",m.name]).service("successModalService",c).service("errorModalService",u).directive("navBar",l).directive("pdfView",d),p=f},{"../common/common.module":4,"./error-modal/error-modal.service":7,"./nav-bar/nav-bar.directive":9,"./pdf-view/pdf-view.directive":10,"./success-modal/success-modal.service":12}]},{},[1]),angular.module("AppGallery").run(["$templateCache",function(e){e.put("app/home/home.template.html",'<div ng-show="homeController.spinner" style="top: 350px; left: 50%; margin-left: -250px; position: fixed; width: 500px; text-align: center;"><h3>Loading applications...<br><br><i class="fa fa-spinner fa-spin fa-4x" style="color:#e74c3c"></i></h3></div><div class="container"><h1>Wellcome to apartments Lumbardina official wepage</h1></div>'),e.put("components/ui/error-modal/error-modal.template.html",'<div class="modal-header modal-header-error"><h4>{{ errorModal.errorHeader }}</h4></div><div class="modal-body modal-body-error"><pre>{{ errorModal.errorMessage }}</pre></div><div class="modal-footer"><button class="btn btn-primary" ng-click="errorModal.cancel()">Close</button></div>'),e.put("components/ui/nav-bar/nav-bar.template.html",'<nav class="navbar navbar-inverse navbar-fixed-top navbar-home-page" role="navigation"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#action-bar"></button><a class="navbar-brand" style="padding-right: 20px; height: 68px;" href="http://www.maxeler.com"></a></div><div class="navbar-left" style="padding-left: 21px;" ng-transclude=""></div><div class="navbar-text navbar-right apps_link" style="padding-right: 10px; padding-top: 20px; height:60px;" ng-show="!navBar.user.loggedIn()" ng-click="navBar.page.go(\'/login\')"><span>Log In</span></div><div class="navbar-text navbar-right" style="padding-right: 10px; padding-top: 20px; height:60px;" ng-if="navBar.user.loggedIn()"><div dropdown="" class="dropdown"><div class="dropdown-toggle" dropdown-toggle=""><i class="fa fa-lg fa-user" style="margin-right: 5px;"></i> {{ navBar.user.firstName }}</div><ul class="dropdown-menu"><li><a ng-click="navBar.logout()"><i class="fa fa-sign-out"></i> Logout</a></li></ul></div></div></nav>'),e.put("components/ui/pdf-view/pdf-view.template.html","<iframe ng-src=\"{{'bower_components/pdfjs-1.0.473-dist/web/viewer.html?file=' + pdf}}\" ng-style=\"{ position: 'absolute', height: '100%', width: '100%'}\"></iframe>"),e.put("components/ui/success-modal/success-modal.template.html",'<div class="modal-header modal-header-info"><h4>{{ successModal.successHeader }}</h4></div><div class="modal-body"><p class="small">{{ successModal.successMessage }}</p></div><div class="modal-footer"><button class="btn btn-primary" ng-click="successModal.cancel()">OK</button></div>')}]);