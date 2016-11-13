app.controller('userController', function ($scope) {

  $scope.user = {}
  $scope.user.nane = "";
  $scope.user.email = "";
  $scope.user.password = "";
  $scope.user.password_confirmation = "";

  $scope.signup = function () {
      console.log("up");
  };

  $scope.signin = function () {
      console.log("in");
  };

  $scope.logout = function () {
      console.log("out");
  };

});
