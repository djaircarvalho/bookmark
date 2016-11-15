app.service('bookmarkService', function($http, TokenFactory) {

    var baseUrl = 'http://localhost:3000/bookmarks/';
    var config = {
      headers: {"Content-Type": "application/json", "Accept": "application/json",
      "Authorization":TokenFactory.getToken()
      }
    };

    this.getAll = function () {
        return $http.get(baseUrl, config);
    };

    this.post = function (data){
      return $http.post(baseUrl, data, config);
    };

    this.delete = function(id) {
      var url = baseUrl + id;
      return $http.delete(url, config);
    };
});
