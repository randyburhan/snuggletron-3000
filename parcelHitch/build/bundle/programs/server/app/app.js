var require = meteorInstall({"lib":{"controllers":{"home_controller.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/controllers/home_controller.js                                               //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
HomeController = RouteController.extend({                                           // 1
                                                                                    //
  // A place to put your subscriptions                                              // 3
  // this.subscribe('items');                                                       // 4
  // // add the subscription to the waitlist                                        // 5
  // this.subscribe('item', this.params._id).wait();                                // 6
                                                                                    //
  subscriptions: function () {                                                      // 8
    function subscriptions() {}                                                     // 8
                                                                                    //
    return subscriptions;                                                           // 8
  }(),                                                                              // 8
                                                                                    //
  // Subscriptions or other things we want to "wait" on. This also                  // 11
  // automatically uses the loading hook. That's the only difference between        // 12
  // this option and the subscriptions option above.                                // 13
  // return Meteor.subscribe('post', this.params._id);                              // 14
                                                                                    //
  waitOn: function () {                                                             // 16
    function waitOn() {}                                                            // 16
                                                                                    //
    return waitOn;                                                                  // 16
  }(),                                                                              // 16
                                                                                    //
  // A data function that can be used to automatically set the data context for     // 19
  // our layout. This function can also be used by hooks and plugins. For           // 20
  // example, the "dataNotFound" plugin calls this function to see if it            // 21
  // returns a null value, and if so, renders the not found template.               // 22
  // return Posts.findOne({_id: this.params._id});                                  // 23
                                                                                    //
  data: function () {                                                               // 25
    function data() {}                                                              // 25
                                                                                    //
    return data;                                                                    // 25
  }(),                                                                              // 25
                                                                                    //
  // You can provide any of the hook options                                        // 28
                                                                                    //
  onRun: function () {                                                              // 30
    function onRun() {                                                              // 30
      this.next();                                                                  // 31
    }                                                                               // 32
                                                                                    //
    return onRun;                                                                   // 30
  }(),                                                                              // 30
  onRerun: function () {                                                            // 33
    function onRerun() {                                                            // 33
      this.next();                                                                  // 34
    }                                                                               // 35
                                                                                    //
    return onRerun;                                                                 // 33
  }(),                                                                              // 33
  onBeforeAction: function () {                                                     // 36
    function onBeforeAction() {                                                     // 36
      this.next();                                                                  // 37
    }                                                                               // 38
                                                                                    //
    return onBeforeAction;                                                          // 36
  }(),                                                                              // 36
                                                                                    //
  // The same thing as providing a function as the second parameter. You can        // 40
  // also provide a string action name here which will be looked up on a Controller
  // when the route runs. More on Controllers later. Note, the action function      // 42
  // is optional. By default a route will render its template, layout and           // 43
  // regions automatically.                                                         // 44
  // Example:                                                                       // 45
  //  action: 'myActionFunction'                                                    // 46
                                                                                    //
  action: function () {                                                             // 48
    function action() {                                                             // 48
      this.render();                                                                // 49
    }                                                                               // 50
                                                                                    //
    return action;                                                                  // 48
  }(),                                                                              // 48
  onAfterAction: function () {                                                      // 51
    function onAfterAction() {}                                                     // 51
                                                                                    //
    return onAfterAction;                                                           // 51
  }(),                                                                              // 51
  onStop: function () {                                                             // 53
    function onStop() {}                                                            // 53
                                                                                    //
    return onStop;                                                                  // 53
  }()                                                                               // 53
});                                                                                 // 1
//////////////////////////////////////////////////////////////////////////////////////

}},"methods.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/methods.js                                                                   //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
/*****************************************************************************/     // 1
/*  Client and Server Methods */                                                    // 2
/*****************************************************************************/     // 3
                                                                                    //
Meteor.methods({                                                                    // 5
  'lib/method_name': function () {                                                  // 6
    function libMethod_name() {                                                     // 6
                                                                                    //
      if (this.isSimulation) {}                                                     // 8
      //   // do some client stuff while waiting for                                // 9
      //   // result from server.                                                   // 10
      //   return;                                                                  // 11
                                                                                    //
      // server method logic                                                        // 13
    }                                                                               // 14
                                                                                    //
    return libMethod_name;                                                          // 6
  }()                                                                               // 6
});                                                                                 // 5
//////////////////////////////////////////////////////////////////////////////////////

},"routes.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// lib/routes.js                                                                    //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
Router.configure({                                                                  // 1
  layoutTemplate: 'MasterLayout',                                                   // 2
  loadingTemplate: 'Loading',                                                       // 3
  notFoundTemplate: 'NotFound'                                                      // 4
});                                                                                 // 1
                                                                                    //
Router.route('/', {                                                                 // 8
  name: 'home',                                                                     // 9
  controller: 'HomeController',                                                     // 10
  where: 'client'                                                                   // 11
});                                                                                 // 8
//////////////////////////////////////////////////////////////////////////////////////

}},"server":{"bootstrap.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// server/bootstrap.js                                                              //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
Meteor.startup(function () {});                                                     // 1
//////////////////////////////////////////////////////////////////////////////////////

},"methods.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// server/methods.js                                                                //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
/*****************************************************************************/     // 1
/*  Server Methods */                                                               // 2
/*****************************************************************************/     // 3
                                                                                    //
Meteor.methods({                                                                    // 5
  'server/method_name': function () {                                               // 6
    function serverMethod_name() {                                                  // 6
      // server method logic                                                        // 7
    }                                                                               // 8
                                                                                    //
    return serverMethod_name;                                                       // 6
  }()                                                                               // 6
});                                                                                 // 5
//////////////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// server/publish.js                                                                //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
                                                                                    //
//////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json"]});
require("./lib/controllers/home_controller.js");
require("./lib/methods.js");
require("./lib/routes.js");
require("./server/bootstrap.js");
require("./server/methods.js");
require("./server/publish.js");
//# sourceMappingURL=app.js.map
