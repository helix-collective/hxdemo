var KioskListCtrl = require('./people-list');

var css = require("./app.scss");
// TODO: use loaders config in webpack.config.js to streamline this
require('ng-cache!./app.html');

module.exports = function AppCtrl(createUi, route, make/*, restService*/) {

  this.ui = createUi('app.html', {
    go: route.go,
    route: route
  });


  var helpCtrl = make(HelpCtrl);

  var peopleRoute = route.child('people');
  //var peopleService = restService('people');
  var peopleCtrl = make(KioskListCtrl, {
        //service: peopleService,
        route: peopleRoute
      });

  //var jobsRoute = route.child('jobs');
  //var jobsCtrl = make(JobListCtrl, {
  //      service: restService('jobs'),
  //      workflowService: workflowService,
  //      route: jobsRoute
  //    });

  route([
    ['people', function(setCurrent) {
      setCurrent(peopleCtrl);
      return peopleRoute;
    }],

  //  ['jobs', function(setCurrent, x) {
  //    setCurrent(jobsCtrl);
  //    return jobsRoute;
  //  }],

    ['help', function(setCurrent) {
      setCurrent(helpCtrl);
      return null;
    }]
  ]);
};

function HelpCtrl(createUi) {
  this.ui = createUi('help.html');
}

