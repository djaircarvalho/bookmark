app.controller('userController', function ( $rootScope, $scope, $http, userService, TokenFactory, $location  ) {
  console.log(TokenFactory.getToken());
  $scope.signup = function () {
    var data = { user:$scope.user};
    $rootScope.showLoader();
    userService.signup(data)
          .success(function (data, status, headers, config) {
            $rootScope.hideLoader();
            $scope.user.error = "";
            $location.path('/signin');
            console.log(data);
          })
          .error(function (data, status, header, config) {
            $rootScope.hideLoader();
            $scope.user.error = data;
            $scope.user.password = "";
            $scope.user.password_confirmation = "";
            console.log(data);
          });

      console.log($scope.user.error);
      console.log("up");
  };

  $scope.signin = function () {
    var data = $scope.user;
    $rootScope.showLoader();
    userService.signin(data)
          .success(function (data, status, headers, config) {
            $rootScope.hideLoader();
            var token = data.auth_token;
            TokenFactory.setToken(token);
            $location.path('/bookmarks');
          })
          .error(function (data, status, header, config) {
              $rootScope.hideLoader();
            $scope.user.error = data.error;
            $scope.user.password = "";
            console.log(data.error);
          });

      console.log("in");
  };

  $scope.logout = function () {
      console.log("out");
  };

});
