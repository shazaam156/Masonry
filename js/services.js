'use strict';

/* Services */


// Demonstrate how to register services
angular.module('app.services', []).service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
       
	   console.log("ser",fd)
/*	   $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        }); */
    }
}]);

