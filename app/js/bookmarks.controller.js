app.controller('bookmarksController', function ($http, $scope) {
  $scope.bookmarks = [];
  var baseUrl = 'http://localhost:3000/bookmarks';
  var config = {
      headers: {"Content-Type": "application/json", "Accept": "application/json",
      "Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE0NzkxNDc0Nzh9.NjnorgFvNX8gQP2lWgikB8hgT3f0_FC9Mmb2ix0oukM"
      }
    }
  $http.get(baseUrl, config)
    .then(function(response) {
      $scope.bookmarks = response.data;
    }, function(err) {
      console.log(err);
    });
  $scope.addBookmark = function () {
    data = { bookmark:  $scope.bookmark   }
    console.log(data);

    $http.post(baseUrl, data, config)
          .success(function (data, status, headers, config) {
            $scope.success = true
          })
          .error(function (data, status, header, config) {
            $scope.error = data.error;
          });

      console.log($scope.bookmarks);
  };

});
