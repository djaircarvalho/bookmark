app.controller('userController', function ( $scope, $http, userService  ) {

  $scope.signup = function () {
    var data = { user:$scope.user};

    userService.signup(data)
          .success(function (data, status, headers, config) {
            $scope.user.error = "";
            console.log(data);
          })
          .error(function (data, status, header, config) {
            $scope.user.error = data;
            console.log(data);
          });

      console.log($scope.user.error);
      console.log("up");
  };

  $scope.signin = function () {
    var data = $scope.user;
    userService.signin(data)
          .success(function (data, status, headers, config) {
            var token = data.auth_token;
            console.log(token);
          })
          .error(function (data, status, header, config) {
            $scope.user.error = data.error;
            console.log(data.error);
          });

      console.log("in");
  };

  $scope.logout = function () {
      console.log("out");
  };

});
