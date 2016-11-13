app.controller('bookmarksController', function ($scope) {

  var bookmarks = [{
    url:"http://google.com",
    name:"Google"
  },
  {
    url:"http://gmail.com",
    name:"Gmail"
  }];

  $scope.bookmarks = bookmarks;

  $scope.addBookmark = function () {
      $scope.bookmarks.push(angular.copy($scope.bookmark));
      console.log($scope.bookmarks);
  };

});
