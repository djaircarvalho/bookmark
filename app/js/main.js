var app = angular.module('app', ['ngRoute']);

    // configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'view/main.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'viw/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            // .when('/contact', {
            //     templateUrl : 'pages/contact.html',
            //     controller  : 'contactController'
            // })
            .when('/bookmarks',{
              templateUrl:'view/bookmarks/main.html',
              controller:'bookmarksController'
            })
          	.when('/bookmarks/new',{
              templateUrl:'view/bookmarks/new.html',
              controller:'bookmarksController'
            })

            .when('/signup',{
              templateUrl:'view/user/signup.html',
              controller:'userController'
            })

            .when('/signin',{
              templateUrl:'view/user/signin.html',
              controller:'userController'
            })
          	.otherwise({redirectTo:'/'});
    });

    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.logout = function () {
          console.log('Everyone come and see how good I look!');
        };
    });
