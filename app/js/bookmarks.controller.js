app.controller('bookmarksController', function ( $rootScope,$http, $scope, bookmarkService) {

  $scope.bookmarks = [];

  var load = function () {
    $rootScope.showLoader();
    bookmarkService.getAll()
      .then(function(response) {
        $scope.bookmarks = response.data;
        $rootScope.hideLoader();
      }, function(err) {
        console.log(err);
        $rootScope.hideLoader();
      });
  } ;

  $scope.addBookmark = function () {
    data = { bookmark:  $scope.bookmark   };
    $rootScope.showLoader();
      bookmarkService.post(data)
          .success(function (data, status, headers, config) {
            $rootScope.hideLoader();
            $scope.success = true;
            $scope.bookmark = {};
          })
          .error(function (data, status, header, config) {
            $rootScope.hideLoader();
            $scope.error = data.error;
          });
  };
  $scope.removeBookmark = function (id) {
    $rootScope.showLoader();
    bookmarkService.delete(id)
     .then(
         function(response){
         load();
         },
         function(response){
           $rootScope.hideLoader();
           console.log("fail");
         }
      );
  };

  load();

});
