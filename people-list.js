var people = [
  {
    id: 'aaa',
    name: 'Jade'
  },
  {
    id: 'bbb',
    name: 'Dan'
  },
  {
    id: 'ccc',
    name: 'Jeeva'
  },
];

function getPerson(id) {
  for (var i = 0; i < people.length; i++) {
    if (people[i].id == id) {
      return people[i];
    }
  }
  throw new Error('Invalid id: ' + id);
}

function PersonCtrl(createUi, /*route,*/ person/*, service */) {
  var me = this;
  //me.ui = createUi('people.html', {
  //  loading: true,
  //  people: null,
  //  createJob: function() {
  //    route.go('/jobs/!create:people=' + personId);
  //  }
  //});

  //service.get(personId).then(function(person) {
  //  me.ui.person = person;
  //  person.defJson = JSON.stringify(person.definition, null, 4);
  //  console.log(person);
  //}).finally(function() {
  //  me.ui.loading = false;
  //});


  me.ui = createUi('person.html', {
    person: person
  });

}


module.exports = function PeopleListCtrl(createUi, route, make) {
  var me = this;
  
//  var createPeopleRoute = route.child('!create');
//  var createPeopleCtrl = make(CreatePeopleCtrl, {route:createPeopleRoute});

  route([
//    [createPeopleRoute.basename(), function(setCurrent) {
//      setCurrent(createPeopleCtrl);
//      return createPeopleRoute;
//    }],
    [/(.+)/, function(setCurrent, id) {
      setCurrent(make(PersonCtrl, {
        person: getPerson(id)
      }));
      return route.child(id);
    }]
  ]);

  me.ui = createUi('people-list.html', {
    route: route,
    items: people,
    go: route.go,
  });

}
