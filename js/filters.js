'use strict';

/* Filters */
// need load the moment.js to use this filter. 
angular.module('app.filters', [])
  .filter('fromNow', function() {
    return function(date) {
      return moment(date).fromNow();
    }
  });
  
  angular.module('app.filters', []).filter('companyFilter', [function () {
    return function (clients, selectedCompany) {
        if (!angular.isUndefined(clients) && !angular.isUndefined(selectedCompany) && selectedCompany.length > 0) {
            var tempClients = [];
            angular.forEach(selectedCompany, function (id) {
                angular.forEach(clients, function (client) {
                    if (angular.equals(client.company.id, id)) {
                        tempClients.push(client);
                    }
                });
            });
            return tempClients;
        } else {
            return clients;
        }
    };
}]);


app.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(x) {
          var key = x[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(x);
          }
      });
      return output;
   };
});



app.filter('count', function() {
    return function(collection, key) {
      var out = "test";
      for (var i = 0; i < collection.length; i++) {
          //console.log(collection[i].pants);
          //var out = myApp.filter('filter')(collection[i].pants, "42", true);
      }
      return out;
    }
});


app.filter('groupBy',
            function () {
                return function (collection, key) {
                    if (collection === null) return;
                    return uniqueItems(collection, key);
        };
    });
app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
		
        return input.slice(start);
    }
});	
app.filter('sumOfValue', function () {
    return function (data, key) {

	
        if (typeof (data) === 'undefined' && typeof (key) === 'undefined') {
            return 0;
        }
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            sum = sum + data[i][key];
        }
        return sum;
    }
});
app.filter('totalSumPriceQty', function () {
    return function (data, key1, key2) {
		

        if (typeof (data) === 'undefined' && typeof (key1) === 'undefined' && typeof (key2) === 'undefined') {
            return 0;
        }
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            sum = sum + (data[i][key1] + data[i][key2]);
			
        }
        return sum;
    }
});
app.filter('totaldiffPriceQty', function () {
    return function (data, key1, key2) {
		

        if (typeof (data) === 'undefined' && typeof (key1) === 'undefined' && typeof (key2) === 'undefined') {
            return 0;
        }
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            sum = sum + (data[i][key1] + data[i][key2]);
			
        }
        return sum;
    }
});