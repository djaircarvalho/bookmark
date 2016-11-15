app.controller('bookmarksController', function ($http, $scope) {
  $scope.bookmarks = [];
  var baseUrl = 'http://localhost:3000/bookmarks/';
  var config = {
      headers: {"Content-Type": "application/json", "Accept": "application/json",
      "Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE0NzkyNTc2NjR9.WnL2Eo8Al4iqb_J59SXphwXrekHbna0TVc45N3v2Kak"
      }
    };


  var load = function () {
    $http.get(baseUrl, config)
      .then(function(response) {
        $scope.bookmarks = response.data;
      }, function(err) {
        console.log(err);
      });
  } ;



  $scope.addBookmark = function () {
    data = { bookmark:  $scope.bookmark   };
    console.log(data);

    $http.post(baseUrl, data, config)
          .success(function (data, status, headers, config) {
            $scope.success = true;
            $scope.bookmark = {};
          })
          .error(function (data, status, header, config) {
            $scope.error = data.error;
          });
  };
  $scope.removeBookmark = function (id) {
    var url= baseUrl + id;
    $http.delete(url, config)
     .then(
         function(response){
         load();
         },
         function(response){
           console.log("fail");
         }
      );
  };

  load();

});
