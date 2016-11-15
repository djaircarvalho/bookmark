app.service('bookmarkService', function($http) {

    var baseUrl = 'http://localhost:3000/bookmarks/';
    var config = {
      headers: {"Content-Type": "application/json", "Accept": "application/json",
      "Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE0NzkyNTc2NjR9.WnL2Eo8Al4iqb_J59SXphwXrekHbna0TVc45N3v2Kak"
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
