// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js test
var rescue = angular.module('rescue', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html",
        controller: 'MissingCtrl'
      }
    }
  })
  .state('app.missing', {
    url: "/missing",
    views: {
      'menuContent': {
        templateUrl: "templates/missing.html",
        controller: 'MissingCtrl'
      }
    }
  })

  .state('app.missingDetails', {
    url: "/details/:personId",
    views: {
      'menuContent': {
        templateUrl: "templates/missingDetails.html",
        controller: 'MissingDetailstCtrl'
      }
    }
  })
  .state('app.volunteer', {
    url: "/volunteer",
    views: {
      'menuContent': {
        templateUrl: "templates/volunteer.html",
        controller: 'VolunteerCtrl'
      }
    }
  })
  .state('app.volunteerdetails', {
    url: "/volunteerdetails/:volunteerId",
    views: {
      'menuContent': {
        templateUrl: "templates/missing.html",
        controller: 'VolunteerDetailsCtrl'
      }
    }
  })
  .state('app.createVolunteer', {
    url: "/volunteer/create",
    views: {
      'menuContent': {
        templateUrl: "templates/createVolunteer.html",
        controller: 'CreateVolunteerCtrl'
      }
    }
  })
  .state('app.createMissing', {
    url: "/missing/create",
    views: {
      'menuContent': {
        templateUrl: "templates/createMissing.html",
        controller: 'CreateMissingCtrl'
      }
    }
  })
  .state('app.governmentcontacts', {
    url: "/governmentcontacts",
    views: {
      'menuContent': {
        templateUrl: "templates/commonlist.html",
        controller: 'GovernmentContactsCtrl'
      }
    }
  })
  .state('app.medicalsites', {
    url: "/medicalsites",
    views: {
      'menuContent': {
        templateUrl: "templates/commonlist.html",
        controller: 'MedicalSitesCtrl'
      }
    }
  })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})

.controller('AppCtrl', ['$scope', '$ionicSideMenuDelegate',function($scope, $ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
}]);
