app.controller('userController', function ( $rootScope, $scope, $http) {

  var baseUrl = 'http://localhost:3000/';
  var config = {
      headers: {"Content-Type": "application/json", "Accept": "application/json"
      }
    }

  $scope.signup = function () {
    var data = { user:$scope.user};

    var url = baseUrl + "signup";
    $http.post(url, data, config)
          .success(function (data, status, headers, config) {
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
    var url = baseUrl + "authenticate";
    $http.post(url, data, config)
          .success(function (data, status, headers, config) {
            $rootScope.token = data.auth_token;
            console.log(data);
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
