!function e(t, a, o) {
    function i(n, r) {
        if (!a[n]) {
            if (!t[n]) {
                var l = "function" == typeof require && require;
                if (!r && l) return l(n, !0);
                if (s) return s(n, !0);
                throw new Error("Cannot find module '" + n + "'");
            }
            var c = a[n] = {
                exports: {}
            };
            t[n][0].call(c.exports, function(e) {
                var a = t[n][1][e];
                return i(a || e);
            }, c, c.exports, e, t, a, o);
        }
        return a[n].exports;
    }
    for (var s = "function" == typeof require && require, n = 0; n < o.length; n++) i(o[n]);
    return i;
}({
    1: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return i;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o = function(e, t) {
            "ngInject";
            this.page = e, this.openImageModalService = t, e.setTitle("A1"), this.mainSlides = [ {
                image: "/assets/images/A1/profile.jpg",
                text: "Lumbardina A1"
            }, {
                image: "/assets/images/A2/1020.jpg",
                text: "Lumbardina apartments"
            }, {
                image: "/assets/images/A1/1030.jpg",
                text: "Balcony"
            }, {
                image: "/assets/images/A1/1070.jpg",
                text: "Access to stone house, parking, stone house and garden"
            }, {
                image: "/assets/images/A1/1260.jpg",
                text: "Room 1"
            }, {
                image: "/assets/images/A1/1310.jpg",
                text: "Room 3"
            } ], this.slides = [ {
                image: "/assets/images/A1/profile.jpg",
                text: "Lumbardina A1"
            }, {
                image: "/assets/images/A2/1020.jpg",
                text: "Lumbardina apartments"
            }, {
                image: "/assets/images/A1/1025.jpg",
                text: "Lumbardina apartments"
            }, {
                image: "/assets/images/A1/1030.jpg",
                text: "Balcony"
            }, {
                image: "/assets/images/A1/1040.jpg",
                text: "Stone house"
            }, {
                image: "/assets/images/A1/1050.jpg",
                text: "Stone house"
            }, {
                image: "/assets/images/A1/1060.jpg",
                text: "Stone house, A1 is on first floor and owner on the ground floor"
            }, {
                image: "/assets/images/A1/1070.jpg",
                text: "Access to stone house, parking, stone house and garden"
            }, {
                image: "/assets/images/A1/1080.jpg",
                text: "Path to stone house with parking"
            }, {
                image: "/assets/images/A1/1090.jpg",
                text: "View and road from stone hose on garden, sea and apartment A2"
            }, {
                image: "/assets/images/A1/1095.jpg",
                text: "View from the balcony of the apartment A1 and access to the sea"
            }, {
                image: "/assets/images/A1/1100.jpg",
                text: "Balcony"
            }, {
                image: "/assets/images/A1/1120.jpg",
                text: "View from apartment"
            }, {
                image: "/assets/images/A1/1140.jpg",
                text: "Stairway to separate entrance of apartment A1"
            }, {
                image: "/assets/images/A1/1150.jpg",
                text: "Fig tree next to stairway"
            }, {
                image: "/assets/images/A1/1160.jpg",
                text: "Separate entrance to apartment and terrace"
            }, {
                image: "/assets/images/A1/1170.jpg",
                text: "Terrace"
            }, {
                image: "/assets/images/A1/1180.jpg",
                text: "Terrace and garden"
            }, {
                image: "/assets/images/A1/1190.jpg",
                text: "Terrace"
            }, {
                image: "/assets/images/A1/1200.jpg",
                text: "Terrace"
            }, {
                image: "/assets/images/A1/1210.jpg",
                text: "Terrace"
            }, {
                image: "/assets/images/A1/1220.jpg",
                text: "Kitchen"
            }, {
                image: "/assets/images/A1/1230.jpg",
                text: "Kitchen and dining area"
            }, {
                image: "/assets/images/A1/1240.jpg",
                text: "Kitchen"
            }, {
                image: "/assets/images/A1/1250.jpg",
                text: ""
            }, {
                image: "/assets/images/A1/1260.jpg",
                text: "Room 1"
            }, {
                image: "/assets/images/A1/1271.jpg",
                text: "Room 1"
            }, {
                image: "/assets/images/A1/1280.jpg",
                text: "Room 1"
            }, {
                image: "/assets/images/A1/1290.jpg",
                text: "Room 2"
            }, {
                image: "/assets/images/A1/1300.jpg",
                text: "Room 2"
            }, {
                image: "/assets/images/A1/1310.jpg",
                text: "Room 3"
            }, {
                image: "/assets/images/A1/1320.jpg",
                text: "Room 3"
            }, {
                image: "/assets/images/A1/1330.jpg",
                text: "Room 3"
            }, {
                image: "/assets/images/A1/1340.jpg",
                text: "Room 3"
            }, {
                image: "/assets/images/A1/1350.jpg",
                text: "Room 3 and bathroom"
            }, {
                image: "/assets/images/A1/1360.jpg",
                text: "Room 3 and bathroom"
            }, {
                image: "/assets/images/A1/1430.jpg",
                text: "Bathroom 2 and separate toilet"
            }, {
                image: "/assets/images/A1/1440.jpg",
                text: "Neighborhood"
            }, {
                image: "/assets/images/A1/1450.jpg",
                text: "Neighborhood"
            }, {
                image: "/assets/images/A1/1460.jpg",
                text: "Neighborhood"
            }, {
                image: "/assets/images/A1/1470.jpg",
                text: "Neighborhood"
            }, {
                image: "/assets/images/A1/1480.jpg",
                text: "Neighborhood"
            }, {
                image: "/assets/images/A1/1490.jpg",
                text: "Sunset"
            } ], this.openImageModalService.slides = this.slides;
        };
        o.$inject = [ "page", "openImageModalService" ], $traceurRuntime.createClass(o, {}, {});
        var i = o;
    }, {} ],
    2: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return s;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o, i = ((o = e("./A1.controller")) && o.__esModule && o || {
            default: o
        }).default, s = angular.module("lumbardina.A1", [ "ngRoute" ]).controller("A1Controller", i).config([ "$routeProvider", "$locationProvider", function(e, t) {
            "ngInject";
            e.when("/A1", {
                templateUrl: "app/A1/A1.template.html",
                controller: "A1Controller",
                controllerAs: "A1Controller",
                bindToController: !0
            });
        } ]);
    }, {
        "./A1.controller": 1
    } ],
    3: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return i;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o = function(e, t) {
            "ngInject";
            this.page = e, this.openImageModalService = t, e.setTitle("A2"), this.noWrapSlides = !1, 
            this.mainSlides = [ {
                image: "/assets/images/A2/profile.jpg",
                text: ""
            }, {
                image: "/assets/images/A2/1020.jpg",
                text: "Lumbardina apartments"
            }, {
                image: "/assets/images/A2/1050.jpg",
                text: "May"
            }, {
                image: "/assets/images/A2/1110.jpg",
                text: ""
            }, {
                image: "/assets/images/A2/1056.jpg",
                text: ""
            }, {
                image: "/assets/images/A2/1057.jpg",
                text: ""
            }, {
                image: "/assets/images/A2/1058.jpg",
                text: ""
            }, {
                image: "/assets/images/A2/1059.jpg",
                text: ""
            }, {
                image: "/assets/images/A2/1070.jpg",
                text: ""
            }, {
                image: "/assets/images/A2/1320.jpg",
                text: "view from the entrance side"
            } ], this.slides = [ {
                image: "/assets/images/A2/profile.jpg",
                text: ""
            }, {
                image: "/assets/images/A2/1020.jpg",
                text: "Lumbardina apartments"
            }, {
                image: "/assets/images/A2/1030.jpg",
                text: "April"
            }, {
                image: "/assets/images/A2/1040.jpg",
                text: "April"
            }, {
                image: "/assets/images/A2/1050.jpg",
                text: "May"
            }, {
                image: "/assets/images/A2/1055.jpg",
                text: "The best balcony in Lumbarda"
            }, {
                image: "/assets/images/A2/1056.jpg",
                text: "The best balcony in Lumbarda"
            }, {
                image: "/assets/images/A2/1057.jpg",
                text: "The best balcony in Lumbarda"
            }, {
                image: "/assets/images/A2/1058.jpg",
                text: "The best balcony in Lumbarda"
            }, {
                image: "/assets/images/A2/1059.jpg",
                text: "The best balcony in Lumbarda"
            }, {
                image: "/assets/images/A2/1060.jpg",
                text: "The best balcony in Lumbarda"
            }, {
                image: "/assets/images/A2/1070.jpg",
                text: "The best balcony in Lumbarda"
            }, {
                image: "/assets/images/A2/1075.jpg",
                text: "Awning"
            }, {
                image: "/assets/images/A2/1076.jpg",
                text: "Awning"
            }, {
                image: "/assets/images/A2/1077.jpg",
                text: "Awning"
            }, {
                image: "/assets/images/A2/1078.jpg",
                text: "Awning"
            }, {
                image: "/assets/images/A2/1080.jpg",
                text: "November"
            }, {
                image: "/assets/images/A2/1090.jpg",
                text: "Living room"
            }, {
                image: "/assets/images/A2/1095.jpg",
                text: "Living room"
            }, {
                image: "/assets/images/A2/1097.jpg",
                text: "Living room"
            }, {
                image: "/assets/images/A2/1100.jpg",
                text: "Living room"
            }, {
                image: "/assets/images/A2/1110.jpg",
                text: "Living room"
            }, {
                image: "/assets/images/A2/1120.jpg",
                text: "Living room"
            }, {
                image: "/assets/images/A2/1130.jpg",
                text: "Living room"
            }, {
                image: "/assets/images/A2/1140.jpg",
                text: "Entrance, Room 1, Kitchen and Dinig area"
            }, {
                image: "/assets/images/A2/1150.jpg",
                text: "Kitchen"
            }, {
                image: "/assets/images/A2/1160.jpg",
                text: "Kitchen"
            }, {
                image: "/assets/images/A2/1180.jpg",
                text: "Room 1 and Bathroom2"
            }, {
                image: "/assets/images/A2/1190.jpg",
                text: "Room 1"
            }, {
                image: "/assets/images/A2/1200.jpg",
                text: "Room 1"
            }, {
                image: "/assets/images/A2/1210.jpg",
                text: "Room 1"
            }, {
                image: "/assets/images/A2/1220.jpg",
                text: "Room 1"
            }, {
                image: "/assets/images/A2/1230.jpg",
                text: "Room 1, Bathroom 2, Room 2 and dining room"
            }, {
                image: "/assets/images/A2/1240.jpg",
                text: "Bathroom 2 and Room 2"
            }, {
                image: "/assets/images/A2/1250.jpg",
                text: "Room 2"
            }, {
                image: "/assets/images/A2/1260.jpg",
                text: "Room 2"
            }, {
                image: "/assets/images/A2/1261.jpg",
                text: "Room 2"
            }, {
                image: "/assets/images/A2/1262.jpg",
                text: "Room 2"
            }, {
                image: "/assets/images/A2/1263.jpg",
                text: "Room 2"
            }, {
                image: "/assets/images/A2/1280.jpg",
                text: "Olive"
            }, {
                image: "/assets/images/A2/1290.jpg",
                text: "Bathroom 1"
            }, {
                image: "/assets/images/A2/1300.jpg",
                text: "Bathroom 1"
            }, {
                image: "/assets/images/A2/1310.jpg",
                text: "view from the entrance side"
            }, {
                image: "/assets/images/A2/1315.jpg",
                text: "view from the entrance side"
            }, {
                image: "/assets/images/A2/1320.jpg",
                text: "view from the entrance side"
            }, {
                image: "/assets/images/A2/1330.jpg",
                text: "Apartment from street"
            }, {
                image: "/assets/images/A2/1340.jpg",
                text: "Neighborhood"
            }, {
                image: "/assets/images/A2/1350.jpg",
                text: "Neighborhood"
            }, {
                image: "/assets/images/A2/1360.jpg",
                text: "Neighborhood April"
            }, {
                image: "/assets/images/A2/1370.jpg",
                text: "Neighborhood Jun"
            }, {
                image: "/assets/images/A2/1380.jpg",
                text: "Neighborhood Jul"
            }, {
                image: "/assets/images/A2/1390.jpg",
                text: "Neighborhood"
            }, {
                image: "/assets/images/A2/1400.jpg",
                text: "Neighborhood"
            }, {
                image: "/assets/images/A2/1410.jpg",
                text: "Sunset"
            } ], this.openImageModalService.slides = this.slides;
        };
        o.$inject = [ "page", "openImageModalService" ], $traceurRuntime.createClass(o, {}, {});
        var i = o;
    }, {} ],
    4: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return r;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o, i, s = ((o = e("./A2.controller")) && o.__esModule && o || {
            default: o
        }).default, n = ((i = e("../../components/ui/ui.module")) && i.__esModule && i || {
            default: i
        }).default, r = angular.module("lumbardina.A2", [ "ngRoute", n.name ]).controller("A2Controller", s).config([ "$routeProvider", "$locationProvider", function(e, t) {
            "ngInject";
            e.when("/A2", {
                templateUrl: "app/A2/A2.template.html",
                controller: "A2Controller",
                controllerAs: "A2Controller",
                bindToController: !0
            });
        } ]);
    }, {
        "../../components/ui/ui.module": 22,
        "./A2.controller": 3
    } ],
    5: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return i;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o = function(e) {
            "ngInject";
            this.page = e, e.setTitle("Contact"), this.map = {
                center: {
                    latitude: 42.922672,
                    longitude: 17.171059
                },
                zoom: 15,
                bounds: {},
                options: {
                    scrollwheel: !1
                }
            }, this.marker = {
                id: 0,
                coords: {
                    latitude: 42.922672,
                    longitude: 17.171059
                },
                options: {
                    draggable: !0
                }
            }, this.slides = [ {
                image: "/assets/images/A2/profile.jpg",
                text: "Lumbardina A2"
            }, {
                image: "/assets/images/A2/livingroom.jpg",
                text: "Living room"
            }, {
                image: "/assets/images/A2/kitchen.jpg",
                text: "Kitchen"
            }, {
                image: "/assets/images/A2/room2.jpg",
                text: "Room"
            }, {
                image: "/assets/images/A2/facade.jpg",
                text: "Apartment from street"
            } ];
        };
        o.$inject = [ "page" ], $traceurRuntime.createClass(o, {}, {});
        var i = o;
    }, {} ],
    6: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return s;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o, i = ((o = e("./contact.controller")) && o.__esModule && o || {
            default: o
        }).default, s = angular.module("lumbardina.contact", [ "ngRoute", "uiGmapgoogle-maps" ]).controller("contactController", i).config([ "$routeProvider", "$locationProvider", function(e, t) {
            "ngInject";
            e.when("/contact", {
                templateUrl: "app/contact/contact.template.html",
                controller: "contactController",
                controllerAs: "contactController",
                bindToController: !0
            });
        } ]);
    }, {
        "./contact.controller": 5
    } ],
    7: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return h;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o, i, s, n, r, l, c = ((o = e("../components/ui/ui.module")) && o.__esModule && o || {
            default: o
        }).default, m = ((i = e("../components/common/common.module")) && i.__esModule && i || {
            default: i
        }).default, d = ((s = e("./home/home.module")) && s.__esModule && s || {
            default: s
        }).default, g = ((n = e("./contact/contact.module")) && n.__esModule && n || {
            default: n
        }).default, u = ((r = e("./A1/A1.module")) && r.__esModule && r || {
            default: r
        }).default, p = ((l = e("./A2/A2.module")) && l.__esModule && l || {
            default: l
        }).default, h = angular.module("LumbardinaWeb", [ "ngRoute", c.name, m.name, d.name, g.name, u.name, p.name, "ui.bootstrap", "wu.masonry", "ngSanitize", "ngAnimate", "angulartics", "angulartics.google.analytics", "angulartics.scroll" ]).config([ "$routeProvider", "$locationProvider", function(e, t) {
            "ngInject";
            e.otherwise({
                redirectTo: "/"
            });
        } ]).controller("commonCtrl", [ "page", function(e) {
            "ngInject";
            this.page = e;
        } ]);
    }, {
        "../components/common/common.module": 10,
        "../components/ui/ui.module": 22,
        "./A1/A1.module": 2,
        "./A2/A2.module": 4,
        "./contact/contact.module": 6,
        "./home/home.module": 9
    } ],
    8: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return i;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o = function(e, t) {
            "ngInject";
            this.page = t, this.numberOfStars = 3, this.noWrapSlides = !1, this.$window = e, 
            t.setTitle("Home"), this.apartments = [ {
                image: "/assets/images/A2/profile.jpg",
                text: "Lumbardina A2",
                link: "/A2"
            }, {
                image: "/assets/images/A1/profile.jpg",
                text: "Lumbardina A1",
                link: "/A1"
            } ], this.slides = [ {
                image: "/assets/images/A2/profile.jpg",
                text: "Lumbardina A2"
            }, {
                image: "/assets/images/A1/profile.jpg",
                text: "Lumbardina A1"
            }, {
                image: "/assets/images/Lumbarda/lumbarda.jpg",
                text: "Lumbarda"
            }, {
                image: "/assets/images/Lumbarda/bilin-zal.jpg",
                text: "The best beaches of Korcula: Bilin Zal"
            }, {
                image: "/assets/images/Lumbarda/bilin-zal1.jpg",
                text: "The best beaches of Korcula: Bilin Zal"
            }, {
                image: "/assets/images/Lumbarda/przina.jpg",
                text: "The best beaches of Korcula: Przina"
            } ], this.map = {
                center: {
                    latitude: 42.922672,
                    longitude: 17.171059
                },
                zoom: 15,
                bounds: {},
                options: {
                    scrollwheel: !1
                }
            }, this.marker = {
                id: 0,
                coords: {
                    latitude: 42.922672,
                    longitude: 17.171059
                },
                options: {
                    draggable: !0
                }
            };
        };
        o.$inject = [ "$window", "page" ], $traceurRuntime.createClass(o, {
            openAir: function() {
                this.$window.open("https://www.airbnb.com/users/show/7262321", "_blank");
            }
        }, {});
        var i = o;
    }, {} ],
    9: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return s;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o, i = ((o = e("./home.controller")) && o.__esModule && o || {
            default: o
        }).default, s = angular.module("lumbardina.home", [ "ngRoute" ]).controller("homeController", i).config([ "$routeProvider", "$locationProvider", function(e, t) {
            "ngInject";
            e.when("/", {
                templateUrl: "app/home/home.template.html",
                controller: "homeController",
                controllerAs: "homeController",
                bindToController: !0
            });
        } ]);
    }, {
        "./home.controller": 8
    } ],
    10: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return s;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o, i = ((o = e("./page.service")) && o.__esModule && o || {
            default: o
        }).default, s = angular.module("common", []).service("page", i).constant("kilobytes", 1024).constant("max_app_icon_size", 102400).constant("max_profile_picture_size", 102400);
    }, {
        "./page.service": 11
    } ],
    11: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return l;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o = {
            backgroundColor: "#2d3235",
            backgroundSize: "cover"
        }, i = {
            backgroundColor: "white",
            backgroundSize: "cover"
        }, s = {
            backgroundColor: "#00183A",
            backgroundSize: "cover"
        }, n = i, r = function(e, t) {
            "ngInject";
            var a = this;
            this.$location = e, this.$rootScope = t, this.title = "Apartments Lumbardina", this.history = [], 
            this.transition = "right", this.background = i, t.$on("$locationChangeStart", function() {
                a.background = n;
            });
        };
        r.$inject = [ "$location", "$rootScope" ], $traceurRuntime.createClass(r, {
            setTitle: function(e) {
                this.title = e;
            },
            setLightBackground: function() {
                this.background = i;
            },
            setDarkBackground: function() {
                this.background = o;
            },
            setBlueBackground: function() {
                this.background = s;
            },
            go: function(e) {
                void 0 !== e ? (this.history.push(e), this.transition = "right" === this.transition ? "left" : "right", 
                this.$location.path(e)) : this.go("/");
            },
            goBack: function() {
                this.history.pop(), this.go(this.history.pop());
            },
            deleteHistory: function() {
                this.history = [];
            }
        }, {});
        var l = r;
    }, {} ],
    12: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return i;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o = function(e, t, a, o) {
            "ngInject";
            this.$modal = e, this.$modalInstance = t, this.errorMessage = a, this.errorHeader = o;
        };
        o.$inject = [ "$modal", "$modalInstance", "errorMessage", "errorHeader" ], $traceurRuntime.createClass(o, {
            cancel: function() {
                this.$modalInstance.close();
            }
        }, {});
        var i = o;
    }, {} ],
    13: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return n;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o, i = ((o = e("./error-modal.controller")) && o.__esModule && o || {
            default: o
        }).default, s = function(e) {
            "ngInject";
            this.$modal = e;
        };
        s.$inject = [ "$modal" ], $traceurRuntime.createClass(s, {
            open: function(e, t) {
                this.$modal.open({
                    backdrop: !1,
                    templateUrl: "components/ui/error-modal/error-modal.template.html",
                    controller: i,
                    controllerAs: "errorModal",
                    resolve: {
                        errorMessage: function() {
                            return e;
                        },
                        errorHeader: function() {
                            return t;
                        }
                    }
                });
            }
        }, {});
        var n = s;
    }, {
        "./error-modal.controller": 12
    } ],
    14: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return i;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o = function(e) {
            "ngInject";
            this.page = e;
        };
        o.$inject = [ "page" ], $traceurRuntime.createClass(o, {}, {});
        var i = o;
    }, {} ],
    15: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return s;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o, i = ((o = e("./nav-bar.controller")) && o.__esModule && o || {
            default: o
        }).default, s = function() {
            return {
                restrict: "E",
                transclude: !0,
                templateUrl: "components/ui/nav-bar/nav-bar.template.html",
                scope: {},
                controller: i,
                controllerAs: "navBar"
            };
        };
    }, {
        "./nav-bar.controller": 14
    } ],
    16: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return i;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o = function(e) {
            "ngInject";
            return {
                restrict: "A",
                link: function(t, a, o) {
                    a.on("load", function() {
                        console.log("sirina slike je", a.innerWidth()), console.log("sirina ekrana je", e.innerWidth);
                        var t = a.innerWidth() < .89 * e.innerWidth ? a.innerWidth() : .89 * e.innerWidth, o = a.innerHeight() < .7 * e.innerHeight ? a.innerHeight() : .7 * e.innerHeight;
                        a.attr("style", "max-width: " + t + "px;max-height: " + o + "px;");
                    });
                }
            };
        };
        o.$inject = [ "$window" ];
        var i = o;
    }, {} ],
    17: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return i;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o = function(e, t, a, o) {
            "ngInject";
            this.$uibModalInstance = e, this.page = a, this.imageInfo = o, this.currentImage = o, 
            this.openImageModalService = t;
        };
        o.$inject = [ "$uibModalInstance", "openImageModalService", "page", "imageInfo" ], 
        $traceurRuntime.createClass(o, {
            updateImage: function(e) {
                var t = this.openImageModalService.slides.indexOf(this.currentImage) + e;
                t >= 0 && t < this.openImageModalService.slides.length && (this.currentImage = this.openImageModalService.slides[t]);
            },
            keyPress: function(e) {
                39 == e.keyCode ? this.updateImage(1) : 37 == e.keyCode && this.updateImage(-1);
            },
            cancel: function() {
                this.$uibModalInstance.close();
            }
        }, {});
        var i = o;
    }, {} ],
    18: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return n;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o, i = ((o = e("./open-image-modal.controller")) && o.__esModule && o || {
            default: o
        }).default, s = function(e) {
            "ngInject";
            this.$uibModal = e, this.slides = [];
        };
        s.$inject = [ "$uibModal" ], $traceurRuntime.createClass(s, {
            open: function(e) {
                this.$uibModal.open({
                    backdrop: !0,
                    windowClass: "full-screen-modal",
                    templateUrl: "components/ui/open-image-modal/open-image-modal.template.html",
                    controller: i,
                    controllerAs: "openImageModalController",
                    resolve: {
                        imageInfo: function() {
                            return e;
                        }
                    }
                });
            }
        }, {});
        var n = s;
    }, {
        "./open-image-modal.controller": 17
    } ],
    19: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return o;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o = function() {
            return {
                restrict: "E",
                templateUrl: "components/ui/pdf-view/pdf-view.template.html",
                scope: {
                    pdf: "="
                }
            };
        };
    }, {} ],
    20: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return i;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o = function(e, t, a, o, i, s) {
            "ngInject";
            this.$modalInstance = a, this.page = t, this.successMessage = o, this.successHeader = i, 
            this.successLink = s;
        };
        o.$inject = [ "$modal", "page", "$modalInstance", "successMessage", "successHeader", "successLink" ], 
        $traceurRuntime.createClass(o, {
            cancel: function() {
                this.$modalInstance.close(), this.page.go(this.successLink);
            }
        }, {});
        var i = o;
    }, {} ],
    21: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return n;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o, i = ((o = e("./success-modal.controller")) && o.__esModule && o || {
            default: o
        }).default, s = function(e) {
            "ngInject";
            this.$modal = e;
        };
        s.$inject = [ "$modal" ], $traceurRuntime.createClass(s, {
            open: function(e, t, a) {
                this.$modal.open({
                    backdrop: !1,
                    templateUrl: "components/ui/success-modal/success-modal.template.html",
                    controller: i,
                    controllerAs: "successModal",
                    resolve: {
                        successMessage: function() {
                            return e;
                        },
                        successHeader: function() {
                            return t;
                        },
                        successLink: function() {
                            return a;
                        }
                    }
                });
            }
        }, {});
        var n = s;
    }, {
        "./success-modal.controller": 20
    } ],
    22: [ function(e, t, a) {
        "use strict";
        Object.defineProperties(a, {
            default: {
                get: function() {
                    return f;
                }
            },
            __esModule: {
                value: !0
            }
        });
        var o, i, s, n, r, l, c, m = ((o = e("./nav-bar/nav-bar.directive")) && o.__esModule && o || {
            default: o
        }).default, d = ((i = e("./success-modal/success-modal.service")) && i.__esModule && i || {
            default: i
        }).default, g = ((s = e("./error-modal/error-modal.service")) && s.__esModule && s || {
            default: s
        }).default, u = ((n = e("./pdf-view/pdf-view.directive")) && n.__esModule && n || {
            default: n
        }).default, p = ((r = e("./open-image-directive/open-image.directive")) && r.__esModule && r || {
            default: r
        }).default, h = ((l = e("../common/common.module")) && l.__esModule && l || {
            default: l
        }).default, b = ((c = e("./open-image-modal/open-image-modal.service")) && c.__esModule && c || {
            default: c
        }).default, f = angular.module("maxeler.ui", [ "ngSanitize", "ngGrid", "ui.bootstrap", h.name ]).service("successModalService", d).service("errorModalService", g).service("openImageModalService", b).directive("navBar", m).directive("pdfView", u).directive("imageViewDirective", p);
    }, {
        "../common/common.module": 10,
        "./error-modal/error-modal.service": 13,
        "./nav-bar/nav-bar.directive": 15,
        "./open-image-directive/open-image.directive": 16,
        "./open-image-modal/open-image-modal.service": 18,
        "./pdf-view/pdf-view.directive": 19,
        "./success-modal/success-modal.service": 21
    } ]
}, {}, [ 7 ]), angular.module("LumbardinaWeb").run([ "$templateCache", function(e) {
    e.put("app/A1/A1.template.html", '<base href="/A1"><nav-bar></nav-bar><h5 style="text-align:center;">Lumbardina A1 (A3 + Room)</h5><div style="text-align: center;"><a href="//www.homeaway.co.uk/p1187894?uni_id=1452832" rel="nofollow"><img src="//www.homeaway.co.uk/haow/api/image/homeaway_uk/trips/1187894/reviews?unitId=1452832" alt="HomeAway Property" style="border:none;" rel="nofollow"></a><div style="text-align:center;"><a href="//www.homeaway.co.uk/reviews/p1187894?uni_id=1452832" rel="nofollow">Read</a> or <a href="//www.homeaway.co.uk/reviews/write/p1187894?uni_id=1452832" rel="nofollow">Write</a> Reviews</div></div><uib-carousel interval="5000" no-wrap="A1Controller.noWrapSlides"><uib-slide ng-repeat="slide in A1Controller.mainSlides" style=""><center><div ng-style="{\'background\': \'url(\\\'\' + slide.image + \'\\\')\', \'height\':\'528px\',\'background-size\': \'contain\',\'background-position\':\'center\', \'background-repeat\': \'no-repeat\'}" title="{{slide.text}}"></div></center><div class="carousel-caption"><p>{{slide.text}}</p></div></uib-slide></uib-carousel><div class="checkbox"><label><input type="checkbox" ng-model="A1Controller.noWrapSlides"> Disable Slide Looping</label></div><hr><div class="container"><p>&nbsp; &nbsp; Our relaxing Lumbardina A1 apartment is situated in TOP location, in the heart of the small, picturesque fishing village Lumbarda. The apartment is in the center of <b>Lumbarda</b>, only 60m from the sea, separated from seafront with owner\'s yard, fully equipped, spacious with provided parking space.</p><p>&nbsp; &nbsp; Apartment A1 (7 people max) is on the same piece of land, behind Apartment A2 in a traditional dalmatian house. Owner lives on the ground floor and apartment is on the top floor and has a separate entrance and big terrace (20 square meters). There are 3 rooms, each with a double bed. One room has an additional single bed, and in there is an additional fridge. Apartment has 2 bathrooms with bathtub (one has a washing machine in it), kitchen and dining table in it.</p><p>If you wish to stay in a central location where everything is at hand, whilst enjoying total privacy, then this apartment is ideal for you with its private terrace and a beautiful Mediterranean garden with its lemon, orange, fig, pomegranate, kiwi and olive trees. Guests are also welcome to use the barbecue. For full enjoyment the apartment has a balcony with a splendid sea view, ideal to relax with a morning coffee or an evening glass of wine.</p><p>&nbsp; &nbsp; *Apartment A1 is rented in high season (July and August) as whole, and in other months it can be divided into 2 units: Apartment A3 for 4 persons and Room for 2-3 persons.</p><hr><p>&nbsp; &nbsp; Apartment is equipped with air conditioner, wireless internet access, fully equipped kitchen, washing machine, dining room and TV. A parking spot is also provided.</p><button class="btn btn-success" ng-click="A1Controller.page.go(\'contact\')" style="width:100%;">Contact us</button><br><br><button type="button" class="btn btn-default" ng-init="A1Controller.isCollapsed = false;" uib-tooltip="Click here to see more pictures of this wonderful apartment" ng-click="A1Controller.isCollapsed = !A1Controller.isCollapsed"><span ng-show="A1Controller.isCollapsed">Show</span> <span ng-hide="A1Controller.isCollapsed">Hide</span> images of apartment Lumbardina A1</button><hr><div uib-collapse="A1Controller.isCollapsed"><div class="well well-lg">Click on the image to enlarge it.<masonry masonry-options="{ isFitWidth: true, gutter: 36, transitionDuration: \'1.2s\'}" reload-on-show="" preserve-order="" style="margin: 20px auto 20px auto; display: block; cursor:pointer;" item-selector=".image-brick" column-width="20"><img masonry-brick="" ng-repeat="slide in A1Controller.slides" alt="{{slide.text}}" ng-src="{{slide.image}}" class="image-brick" ng-click="A1Controller.openImageModalService.open(slide)" uib-tooltip="{{slide.text}}"><masonry></masonry></masonry></div></div><div style="text-align: center;"><iframe scrolling="no" width="518" height="770" frameborder="0" style="overflow:hidden;border:none" src="//www.homeaway.co.uk/haow/widgets/calendar.html?propertyId=1187894&unitId=1452832&monthCount=12&orientation=full&site=homeaway_uk"></iframe><a href="//www.homeaway.co.uk/p1187894?uni_id=1452832" style="display:block;text-align:center;margin-top:-30px; font-size:12px;" rel="nofollow">HomeAway.co.uk #1187894</a></div></div>'), 
    e.put("app/A2/A2.template.html", '<nav-bar></nav-bar><h5 style="text-align:center;">Lumbardina A2</h5><div style="max-width:1200px; display:block; margin:10px auto;"><uib-carousel interval="5000" no-wrap="A2Controller.noWrapSlides"><uib-slide ng-repeat="slide in A2Controller.mainSlides"><center><div ng-style="{\'background\': \'url(\\\'\' + slide.image + \'\\\')\', \'height\':\'528px\',\'background-size\': \'contain\',\'background-position\':\'center\', \'background-repeat\': \'no-repeat\'}" title="{{slide.text}}"></div></center><div class="carousel-caption"><p>{{slide.text}}</p></div></uib-slide></uib-carousel><div class="checkbox"><label><input type="checkbox" ng-model="A2Controller.noWrapSlides"> Disable Picture Looping</label><p>&nbsp; &nbsp; Apartment A2 has astonishing terrace with view on the sea where our guests can fully enjoy meals or morning coffee.</p></div></div><hr><div class="container"><p>&nbsp; &nbsp; Our relaxing Lumbardina A2 apartment is situated in TOP location, in the heart of the small, picturesque fishing village Lumbarda.The apartment is in the center,the seafront only 30m from the sea, new, fully equipped, spacious with provided parking space</p><center><h5>Great Apartment In The Heart Of The Small, Picturesque Fishing Village Lumbarda</h5></center><p>&nbsp; &nbsp; The apartment is ideal for families and friends who want to stay in a central place close to many rural attractions, local restaurants (all styles such as traditional Croatian and Pizza), cafes, shops, bakeries, post office, local produce market, and the marina where you can rent boats, kayaks and snorkeling equipment. You can also rent bicycles or scooters and you are only a on 5-15 minute walk away from beautiful beaches.</p><p>&nbsp; &nbsp; The apartment is an ideal location to use as a base for all kind of activities like walking, cycling, fishing, diving, and sailing. Their location is also suitable for seniors, especially before and after peak holiday season when the sky and the sea are in perfect harmony and you have the beaches to yourself, walking, socializing and enjoying on the terrace, while all service activities are at hand.</p><p>&nbsp; &nbsp; Apartment A2 (4+2) is positioned on the first floor of a house on the seashore. There are 2 bedrooms, 2 bathrooms (one with washing machine), fully equipped kitchen, dining room with dining table for 6 persons, living room with TV and 2 sofa beds for extra people. The kitchen, dining room and living room are open plan, and are tastefully decorated, giving a pleasant and relaxed atmosphere. From the spacious living area, the balcony opens up to a large 20m2 terrace with unbelievable views of the sea, an ideal place to rest and enjoy the magic of summer and its nights.</p><hr><button class="btn btn-success" ng-click="A2Controller.page.go(\'contact\')" style="width:100%;">Contact us</button><br><br><button type="button" class="btn btn-default" ng-init="A2Controller.isCollapsed = false;" uib-tooltip="Click here to see more pictures of this wonderful apartment" ng-click="A2Controller.isCollapsed = !A2Controller.isCollapsed"><span ng-show="A2Controller.isCollapsed">Show</span> <span ng-hide="A2Controller.isCollapsed">Hide</span> images of apartment Lumbardina A2</button><hr><div uib-collapse="A2Controller.isCollapsed"><div class="well well-lg">Click on the image to enlarge it.<masonry masonry-options="{ isFitWidth: true, gutter: 36, transitionDuration: \'1.2s\'}" reload-on-show="" preserve-order="" style="margin: 20px auto 20px auto; display: block; cursor:pointer;" item-selector=".image-brick" column-width="20"><img masonry-brick="" ng-repeat="slide in A2Controller.slides" alt="{{slide.text}}" ng-src="{{slide.image}}" class="image-brick" ng-click="A2Controller.openImageModalService.open(slide)" uib-tooltip="{{slide.text}}"><masonry></masonry></masonry></div></div><div style="text-align: center;"><iframe scrolling="no" width="518" height="770" frameborder="0" style="overflow:hidden;border:none" src="//www.homeaway.co.uk/haow/widgets/calendar.html?propertyId=1187894&unitId=1449510&monthCount=12&orientation=full&site=homeaway_uk"></iframe><a href="//www.homeaway.co.uk/p1187894?uni_id=1449510" style="display:block;text-align:center;margin-top:-30px; font-size:12px;" rel="nofollow">HomeAway.co.uk #1187894</a></div></div>'), 
    e.put("app/home/home.template.html", '<nav-bar></nav-bar><div class="container"><br><center><h5>Welcome to apartments Lumbardina official webpage</h5></center><hr><p>&nbsp; &nbsp;Our delight apartments <b ng-click="homeController.page.go(\'/A1\')" class="underline-on-hover" style="cursor:pointer;">Lumbardina A1</b> and <b ng-click="homeController.page.go(\'/A2\')" class="underline-on-hover" style="cursor:pointer;">Lumbardina A2</b> are situated in <b>TOP</b> location, in <b>center</b>, the heart of the small, picturesque fishing village <b>Lumbarda</b> on island <b itemprop="addressLocality">Korcula</b> in <b itemprop="addressRegion">Dubrovacko-Neretvanska Zupanija</b> in <b itemprop="addressCountry">Croatia</b>. If you wish to stay on top location, close to all local amenities like: restaurants, wineries, shops, in an apartments with the <b>view on the sea</b> you have come to the right place !</p><p>To see more details about our apartments click on following images:</p><masonry masonry-options="{ isFitWidth: true, gutter: 36, transitionDuration: \'1.2s\'}" reload-on-show="" preserve-order="" style="margin: 20px auto 20px auto; display: block; cursor:pointer;" item-selector=".lumbardina-masonry-brick" column-width="150"><div masonry-brick="" class="lumbardina-masonry-brick" ng-click="homeController.page.go(apartment.link)" ng-repeat="apartment in homeController.apartments" tooltip="Click to see more info about {{apartment.text}}"><center><uib-rating data-readonly="true" ng-model="homeController.numberOfStars" max="3"></uib-rating></center><div><div ng-style="{\'background\': \'url(\\\'\' + apartment.image + \'\\\')\', \'height\':\'150px\',\'width\':\'150px\', \'background-size\': \'cover\',\'background-position\':\'center\', \'background-repeat\': \'no-repeat\'}"></div>{{apartment.text}}</div></div></masonry><p>&nbsp; &nbsp;Both apartments are equipped with an air conditioner, wireless internet access, a parking spot is also provided.</p><p>&nbsp; &nbsp; Apartments lumbardina A1 and A2 are situated in 2 separate houses, on the same property in the heart of the small, picturesque fishing village lumbarda. Apartment A2 is in the front of the property overlooking the seaside, and apartment a1 is 70 meters behind it on the same piece of land(10 ares). The apartments are ideal for families and friends who want to stay in a central place close to many village attractions, local restaurants (including traditional croatian and pizza restaurants), cafes, shops, bakeries, post office, a local green market, and the marina where you can rent boats, kayaks and snorkeling equipment. You can also rent bicycles or scooters as the apartments are only a 5-15 minute walk away from the most beautiful beaches.</p><div class="row"><div class="col-md-6" style="text-align:center;"><div style="display:inline-block"><a href="http://www.homeaway.co.uk/p1187894" rel="nofollow"><img src="http://www.homeaway.co.uk/haow/api/image/homeaway_uk/trips/1187894/reviews?unitId=1449510" alt="HomeAway Property" style="border:none;" rel="nofollow"></a><div style="text-align:center;"><a href="http://www.homeaway.co.uk/reviews/p1187894" rel="nofollow">Read</a> or <a href="http://www.homeaway.co.uk/reviews/write/p1187894" rel="nofollow">Write</a> Reviews</div></div></div><div class="col-md-6" style="text-align:center;"><a href="http://www.homeaway.co.uk/p1187894" rel="nofollow"><img src="http://www.homeaway.co.uk/haow/api/image/homeaway_uk/trips/1187894/tenure" alt="HomeAway Property" style="border:none;"></a></div></div><h5><i>Lumbarda and environment</i></h5><script src="https://www.jscache.com/wejs?wtype=linkingWidgetRedesign&amp;uniq=902&amp;locationId=1069851&amp;lang=en_US&amp;border=true&amp;display_version=2"><\/script><uib-carousel interval="5000" no-wrap="homeController.noWrapSlides"><uib-slide ng-repeat="slide in homeController.slides" style="max-height:532px;"><center><div ng-style="{\'background\': \'url(\\\'\' + slide.image + \'\\\')\', \'height\':\'528px\', \'background-size\': \'contain\',\'background-position\':\'center\', \'background-repeat\': \'no-repeat\'}" title="{{slide.text}}"></div></center><div class="carousel-caption"><p>{{slide.text}}</p></div></uib-slide></uib-carousel><div class="checkbox"><label><input type="checkbox" ng-model="homeController.noWrapSlides"> Disable Picture Looping</label></div><h5><i>How to get to us ?</i></h5><p>Our address is: <span itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">Lumbarda 376, Lumbarda, Croatia. <span>&nbsp; <span style="font-size: 15px">Our phone number is:</span> <i class="fa fa-mobile" style="margin-right:10px; margin-left:20px;"></i> <span itemprop="telephone">+385 915706774</span></span></span></p><p>&nbsp; &nbsp; You can get to Korcula on multiple ways. Here are useful links on which you can find informations about transport to Korcula island:</p><ul>From <b>Dubrovnik<b>:<li><a href="http://www.krilo.hr/en/" target="_blank">Krilo Jet</a><br><a href="http://www.jadrolinija.hr/en" target="_blank">Ferry and speedboats lines around the Dalmatian coast</a></li><li><a href="http://www.buscroatia.com/dubrovnik-korcula/" target="_blank">with bus</a>, <a href="https://www.autotrans.hr/en-us/home" target="_blank">here</a> you can book bus tickets.</li></b></b></ul><ul>From <b>Split<b>:<li>By catamaran:<br><a href="http://www.krilo.hr/en/" target="_blank">Krilo Jet</a><br><a href="http://www.jadrolinija.hr/en" target="_blank">Ferry and speedboats lines around the Dalmatian coast</a></li><li>By ferry boat from Split:<br>Take a ferry from Split to town Vela Luka (Korčula), and then take bus to the town of Korčula and then Lumbarda.</li><li><a href="http://www.buscroatia.com/split-korcula/" target="_blank">with bus</a>, <a href="https://www.autotrans.hr/en-us/home" target="_blank">here</a> you can book bus tickets.</li></b></b></ul><ui-gmap-google-map center="homeController.map.center" draggable="true" zoom="homeController.map.zoom" options="homeController.map.options" bounds="homeController.map.bounds"><ui-gmap-marker coords="homeController.marker.coords" options="homeController.marker.options" idkey="homeController.marker.id"></ui-gmap-marker></ui-gmap-google-map></div>'), 
    e.put("app/contact/contact.template.html", '<nav-bar></nav-bar><div class="container"><center><h5>Contact information</h5></center><hr><p>You can contact us on:</p><div class="row"><div class="col-md-6 col-sm-6 col-xs-12"><span style="font-size: 15px">our email:</span> <i class="fa fa-envelope-o" style="margin-right:10px; margin-left:20px;"></i> <a href="mailto:nobilopetar@yahoo.com">nobilopetar@yahoo.com</a></div><div class="col-md-6 col-sm-6 col-xs-12"><span style="font-size: 15px">or via phone:</span> <i class="fa fa-mobile" style="margin-right:10px; margin-left:20px;"></i>+385 915706774</div></div><br><p>&nbsp; &nbsp; In case you have any questions or concerns please contact us using the form below. After filling in the following fields with your contact details and your query we will contact you to resolve any issues or queries:</p><center><iframe src="https://docs.google.com/forms/d/1OWYji9ioDg_itbKRtOwodp82dJnGgLvco6UP1hit7bY/viewform?embedded=true" style="max-width:700px; min-height:1300px; width:100%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe></center></div><br><ui-gmap-google-map center="contactController.map.center" draggable="true" zoom="contactController.map.zoom" options="contactController.map.options" bounds="contactController.map.bounds"><ui-gmap-marker coords="contactController.marker.coords" options="contactController.marker.options" idkey="contactController.marker.id"></ui-gmap-marker></ui-gmap-google-map>'), 
    e.put("components/ui/error-modal/error-modal.template.html", '<div class="modal-header modal-header-error"><h4>{{ errorModal.errorHeader }}</h4></div><div class="modal-body modal-body-error"><pre>{{ errorModal.errorMessage }}</pre></div><div class="modal-footer"><button class="btn btn-primary" ng-click="errorModal.cancel()">Close</button></div>'), 
    e.put("components/ui/nav-bar/nav-bar.template.html", '<nav class="navbar navbar-inverse navbar-fixed-top navbar-home-page" role="navigation"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#action-bar" aria-expanded="false"></button><a class="navbar-brand" style="padding-right: 25px; height: 68px; cursor:pointer;" ng-click="navBar.page.go(\'/\')"></a></div><div class="collapse navbar-collapse navbar-left" id="action-bar"><ul class="nav navbar-nav"><li><a class="navbar_link" ng-click="navBar.page.go(\'/\')">Apartments:<meta itemprop="image" content="http://apartmentslumbardina.com/assets/images/Logo.svg"></a></li><li><a class="navbar_link" ng-click="navBar.page.go(\'/A2\')" analytics-on="click" analytics-event="Click on appartment A2">A2</a></li><li><a class="navbar_link" ng-click="navBar.page.go(\'/A1\')" analytics-on="click" analytics-event="Click on appartment A1">A1</a></li><li class="hidden-lg"><a class="navbar_link" ng-click="navBar.page.go(\'/contact\')" analytics-on="click" analytics-event="Click on contact us"><i class="fa fa-tty"></i> Contact Us</a></li></ul></div><div class="navbar-text navbar-right visible-lg" style="margin-right: 10px;"><a class="navbar_link" ng-click="navBar.page.go(\'/contact\')" analytics-on="click" analytics-event="Click on contact us"><i class="fa fa-tty"></i> Contact Us</a></div></nav>'), 
    e.put("components/ui/open-image-modal/open-image-modal.template.html", '<div class="modal-header modal-header-info" style="border-bottom-width: 0px;">{{openImageModalController.currentImage.text}} <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: white;" ng-click="openImageModalController.cancel()"><i class="fa fa-times-circle"></i></button></div><div style="display: table; width: 100%; height: 100%; background-color: grey; opacity: 0.97; padding-bottom: 20px;" tabindex="0" autofocus="" ng-keydown="openImageModalController.keyPress($event)"><div style="display: table-cell; vertical-align: middle; text-align: center; width: 10px; cursor: pointer;" ng-click="openImageModalController.updateImage(-1)"><i class="fa fa-chevron-left" style="cursor: pointer;" aria-hidden="true"></i></div><div style="display: table-cell; vertical-align: middle; text-align: center; width: 100% - 20px; height: 100%;" ng-style="{\'background\': \'url(\'+ openImageModalController.currentImage.image +\') no-repeat center center fixed\', \'background-size\': \'contain\'}"></div><div style="display: table-cell; vertical-align: middle; text-align: center; cursor: pointer; width: 10px;" ng-click="openImageModalController.updateImage(1)"><i class="fa fa-chevron-right" aria-hidden="true"></i></div></div>'), 
    e.put("components/ui/success-modal/success-modal.template.html", '<div class="modal-header modal-header-info"><h4>{{ successModal.successHeader }}</h4></div><div class="modal-body"><p class="small">{{ successModal.successMessage }}</p></div><div class="modal-footer"><button class="btn btn-primary" ng-click="successModal.cancel()">OK</button></div>'), 
    e.put("components/ui/pdf-view/pdf-view.template.html", "<iframe ng-src=\"{{'bower_components/pdfjs-1.0.473-dist/web/viewer.html?file=' + pdf}}\" ng-style=\"{ position: 'absolute', height: '100%', width: '100%'}\"></iframe>");
} ]);