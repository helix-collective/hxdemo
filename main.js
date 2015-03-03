var AppCtrl = require('./app');

// bootstrap out of angular's clutches
angular.module('demo')
.controller('MainCtrl', function ($scope, $injector) {
  di = heroin.Injector.wrapAngular($injector);
  di.load(AppModule);

  var app = di.make(AppCtrl);

  $scope.app = app.ui;
});


var AppModule = {
  API: '/v1',
  route: hx.route.createNgRouter,
  alert: function() {
    // TODO: do a nice popup or error message flash

    // return window.alert
    return function(arg) {
      console.error('ALERT:', arg);
    };
  },
  //restService: restServiceFactory
};

