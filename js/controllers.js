'use strict';

/* Controllers */


angular.module('app.controllers', ['pascalprecht.translate', 'ngCookies','ImageCropper'])
  .controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window', 
    function(              $scope,   $translate,   $localStorage,   $window ) {
      // add 'ie' classes to html
      var isIE = !!navigator.userAgent.match(/MSIE/i);
      isIE && angular.element($window.document.body).addClass('ie');
      isSmartDevice( $window ) && angular.element($window.document.body).addClass('smart');

      // config
      $scope.app = {
        name: 'LIMS',
      
        // for chart colors
        color: {
          primary: '#7266ba',
          info:    '#23b7e5',
          success: '#27c24c',
          warning: '#fad733',
          danger:  '#f05050',
          light:   '#e8eff0',
          dark:    '#3a3f51',
          black:   '#1c2b36'
        },
        settings: {
          themeID: 1,
          navbarHeaderColor: 'bg-black',
          navbarCollapseColor: 'bg-white-only',
          asideColor: 'bg-black',
          headerFixed: true,
          asideFixed: false,
          asideFolded: false
        }
      }

      // save settings to local storage
      if ( angular.isDefined($localStorage.settings) ) {
        $scope.app.settings = $localStorage.settings;
      } else {
        $localStorage.settings = $scope.app.settings;
      }
      $scope.$watch('app.settings', function(){ $localStorage.settings = $scope.app.settings; }, true);

      // angular translate
      $scope.lang = { isopen: false };
      $scope.langs = {en:'English', de_DE:'German', it_IT:'Italian'};
      $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";
      $scope.setLang = function(langKey, $event) {
        // set the current lang
        $scope.selectLang = $scope.langs[langKey];
        // You can change the language during runtime
        $translate.use(langKey);
        $scope.lang.isopen = !$scope.lang.isopen;
      };

      function isSmartDevice( $window )
      {
          // Adapted from http://www.detectmobilebrowsers.com
          var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
          // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
          return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      }

	  
	  
  }])


    // signin controller
  /*.controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login_to_mainpage = function(user) {
		
		
      $scope.authError = null;
      // Try to login
      $http.post('api/login', {email: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
        if (!response.data.user ) {
         
		  $state.go('app.Indexpage');
        }else{
           $scope.authError = 'Email or Password not right';
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])  */
  
    // signin controller
  .controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
	    console.log($scope.user)
      // Try to login
      $http.post('api/login', {email: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
		  
		  console.log(response)
        if ( !response.data.user ) {
          $scope.authError = 'Email or Password not right';
        }else{
          $state.go('app.ui1.user_emplist');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])
    .controller('ForgotpasswordController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.frgtpaswrd = {};
    $scope.authError = null;
    $scope.Forgot_password = function(frgtpaswrd) {
		
	
      $scope.authError = null;
      // Try to login
      $http.post('api/login', {email: $scope.frgtpaswrd.email})
      .then(function(response) {
        if (!response.data.user ) {
         
		  $state.go('app.Indexpage');
        }else{
           $scope.authError = 'Email or Password not right';
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
	  
	  
    };
  }])
  
      // signup controller
  .controller('SignupFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.signup = {};
    $scope.authError = null;
    $scope.create_account = function(signup) {
      $scope.authError = null;
	  
	  console.log(signup);
	  console.log($scope.signup);
	  
      // Try to create
   $http.post('api/signup', {})
      .then(function(response) {
        if ( !response.data.user ) {
          $scope.authError = response;
        }else{
          $state.go('app.dashboard');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])
  
    /**
	**
	*******Form controllers ******
	**
	**/
	

	


.controller('subadmincompany',['$scope','$http',function($scope,$http){
	
	
$scope.adduser=[{firstname:"Lab 1",imagepath:"img/build3.png",status:"In the Office"},
				{firstname:"Lab 3",imagepath:"img/build2.png",status:"In the Office"}]

}])	


.controller('pagenavigation',['$scope','$http',function($scope,$http){
	
	
	$scope.username="Nithya";
	$scope.user_id=2;
	$scope.Company_Name="Fractals";
	$scope.permission_level=2;
}])	
	

	
	  .controller('TypeaheadDemoCtrl', ['$scope', '$http','$state', function($scope, $http,$state) {

  
		
		$scope.projects=[
    {
        "id": "5576ecd60cdcf5000ab4f9bf", 
        "project_name": "dsdsdsd", 
        "imagepath": "static/angular1/img/b4.jpg", 
        "client_name": "sssss", 
        "clientid": "5576eced0cdcf500098e776d", 
        "project_code": "fff", 
        "project_type": "Internal", 
        "startdate": "2015-06-02T00:00:00", 
        "enddate": "2015-06-23T00:00:00", 
        "duration": 21, 
        "lock_duration": true, 
        "time_budget": "donot_specify_timebudget", 
        "specify_time_budget": "bugdet_in_hour", 
        "time_budget_cat": [
            {
                "timedays": "", 
                "timehour": "", 
                "timecategory": "", 
                "inline": true, 
                "id": 0
            }
        ], 
        "fee_budget": "donot_specify_fee_budget", 
        "fee_budget_cat": [
            {
                "feeamount": "", 
                "feecategory": "", 
                "inline": true, 
                "id": 0
            }
        ], 
        "expense_budget": "non_labaour_related_budget", 
        "expense_budget_cat": [
            {
                "expenseamount": "", 
                "expensecategory": "", 
                "inline": true, 
                "id": 0
            }
        ], 
        "time_entry_loacking": "do_not_lock", 
        "calendar_day": "0", 
        "description": "null", 
        "roleslistfield": [
            {
                "name": "Default"
            }
        ], 
        "disciplinelistfield": [
            {
                "Default": "1"
            }
        ], 
        "total_expense_budget": "0", 
        "total_fee_budget": "0", 
        "total_timehour_budget": "0", 
        "total_time_budget": "0", 
        "total_timeday_budget": "0", 
        "time_incurred": "0", 
        "time_future_sheduled": "0", 
        "time_forcast_overbudget": "0", 
        "fee_incurred": "64", 
        "fee_future_sheduled": "112", 
        "fee_forcast_overbudget": "0", 
        "expensed": "0", 
        "expenses_remaining": "0", 
        "project_state": "Active", 
        "tags": "null", 
        "userip": "none", 
        "userid": "5576e4f069299e0009662557", 
        "company_id": "5576e4f069299e0009662557", 
        "date": "2015-06-09T19:10:38.325000"
    }, 
    {
        "id": "5576f83b282e24000a2ab811", 
        "project_name": "dffdgdf", 
        "imagepath": "static/angular1/img/b4.jpg", 
        "client_name": "kanagaraj", 
        "clientid": "5576e63269299e000966255d", 
        "project_code": "null", 
        "project_type": "Confirmed", 
        "startdate": "2015-06-09T19:59:15.772000", 
        "enddate": "2015-06-09T19:59:15.772000", 
        "duration": 1, 
        "lock_duration": false, 
        "time_budget": "donot_specify_timebudget", 
        "specify_time_budget": "bugdet_in_hour", 
        "time_budget_cat": [
            {
                "timedays": "", 
                "timehour": "", 
                "timecategory": "", 
                "inline": true, 
                "id": 0
            }
        ], 
        "fee_budget": "donot_specify_fee_budget", 
        "fee_budget_cat": [
            {
                "feeamount": "", 
                "feecategory": "", 
                "inline": true, 
                "id": 0
            }
        ], 
        "expense_budget": "non_labaour_related_budget", 
        "expense_budget_cat": [
            {
                "expenseamount": "", 
                "expensecategory": "", 
                "inline": true, 
                "id": 0
            }
        ], 
        "time_entry_loacking": "do_not_lock", 
        "calendar_day": "0", 
        "description": "null", 
        "roleslistfield": [
            {
                "name": "Default"
            }, 
            {
                "name": "sddd"
            }
        ], 
        "disciplinelistfield": [
            {
                "Default": "1", 
                "ddfg": "1"
            }, 
            {
                "Default": "1", 
                "ddfg": "1"
            }
        ], 
        "total_expense_budget": "0", 
        "total_fee_budget": "0", 
        "total_timehour_budget": "0", 
        "total_time_budget": "0", 
        "total_timeday_budget": "0", 
        "time_incurred": "0", 
        "time_future_sheduled": "0", 
        "time_forcast_overbudget": "0", 
        "fee_incurred": "16", 
        "fee_future_sheduled": "0", 
        "fee_forcast_overbudget": "0", 
        "expensed": "0", 
        "expenses_remaining": "0", 
        "project_state": "Non active", 
        "tags": "null", 
        "userip": "none", 
        "userid": "5576e4f069299e0009662557", 
        "company_id": "5576e4f069299e0009662557", 
        "date": "2015-06-09T19:59:15.772000"
    }, 
    {
        "id": "5577fef2eba9fa000adb0cba", 
        "project_name": "ggggggg", 
        "imagepath": "static/angular1/img/b4.jpg", 
        "client_name": "dfg", 
        "clientid": "5577feeaeba9fa000915f7b6", 
        "project_code": "null", 
        "project_type": "Confirmed", 
        "startdate": "2015-06-10T14:40:10.073000", 
        "enddate": "2015-06-10T14:40:10.073000", 
        "duration": 1, 
        "lock_duration": true, 
        "time_budget": "donot_specify_timebudget", 
        "specify_time_budget": "bugdet_in_hour", 
        "time_budget_cat": [
            {
                "timedays": "", 
                "timehour": "", 
                "timecategory": "", 
                "inline": true, 
                "id": 0
            }
        ], 
        "fee_budget": "donot_specify_fee_budget", 
        "fee_budget_cat": [
            {
                "feeamount": "", 
                "feecategory": "", 
                "inline": true, 
                "id": 0
            }
        ], 
        "expense_budget": "non_labaour_related_budget", 
        "expense_budget_cat": [
            {
                "expenseamount": "", 
                "expensecategory": "", 
                "inline": true, 
                "id": 0
            }
        ], 
        "time_entry_loacking": "do_not_lock", 
        "calendar_day": "0", 
        "description": "dfffffffffffffffff", 
        "roleslistfield": [
            {
                "name": "Default"
            }
        ], 
        "disciplinelistfield": [
            {
                "Default": "1"
            }
        ], 
        "total_expense_budget": "0", 
        "total_fee_budget": "0", 
        "total_timehour_budget": "0", 
        "total_time_budget": "0", 
        "total_timeday_budget": "0", 
        "time_incurred": "0", 
        "time_future_sheduled": "0", 
        "time_forcast_overbudget": "0", 
        "fee_incurred": "8", 
        "fee_future_sheduled": "0", 
        "fee_forcast_overbudget": "0", 
        "expensed": "0", 
        "expenses_remaining": "0", 
        "project_state": "Non active", 
        "tags": "sdfs,sdf,sdfsdfs", 
        "userip": "none", 
        "userid": "5577fb8bbec647000a758eb2", 
        "company_id": "5577fb8bbec647000a758eb2", 
        "date": "2015-06-10T14:40:10.073000"
    }, 
    {
        "id": "55770984be71270009cc57d7", 
        "project_name": "sfd", 
        "imagepath": "/media/img2015_06_10_02_28_57image.png", 
        "client_name": "india", 
        "clientid": "55770886be71270009cc57d6", 
        "project_code": "134", 
        "project_type": "Confirmed", 
        "startdate": "2015-06-04T00:00:00", 
        "enddate": "2015-06-26T00:00:00", 
        "duration": 22, 
        "lock_duration": false, 
        "time_budget": "donot_specify_timebudget", 
        "specify_time_budget": "bugdet_in_hour", 
        "time_budget_cat": [
            {
                "timedays": "", 
                "timehour": "", 
                "timecategory": "", 
                "inline": true, 
                "id": 0
            }
        ], 
        "fee_budget": "donot_specify_fee_budget", 
        "fee_budget_cat": [
            {
                "feeamount": "", 
                "feecategory": "", 
                "inline": true, 
                "id": 0
            }
        ], 
        "expense_budget": "non_labaour_related_budget", 
        "expense_budget_cat": [
            {
                "expenseamount": "", 
                "expensecategory": "", 
                "inline": true, 
                "id": 0
            }
        ], 
        "time_entry_loacking": "do_not_lock", 
        "calendar_day": "0", 
        "description": "null", 
        "roleslistfield": [
            {
                "name": "Default"
            }
        ], 
        "disciplinelistfield": [
            {
                "Default": "1"
            }
        ], 
        "total_expense_budget": "0", 
        "total_fee_budget": "0", 
        "total_timehour_budget": "0", 
        "total_time_budget": "0", 
        "total_timeday_budget": "0", 
        "time_incurred": "0", 
        "time_future_sheduled": "0", 
        "time_forcast_overbudget": "0", 
        "fee_incurred": "91", 
        "fee_future_sheduled": "176", 
        "fee_forcast_overbudget": "0", 
        "expensed": "0", 
        "expenses_remaining": "0", 
        "project_state": "Active", 
        "tags": "null", 
        "userip": "none", 
        "userid": "55770807be7127000a1e0927", 
        "company_id": "55770807be7127000a1e0927", 
        "date": "2015-06-09T21:13:00.673000"
    }, 
    {
        "id": "55779bbd1816b00009776315", 
        "project_name": "Website", 
        "imagepath": "/media/img2015_06_10_07_37_32image.png", 
        "client_name": "Facebook", 
        "clientid": "55779b9d1816b0000ae1bf90", 
        "project_code": "null", 
        "project_type": "Confirmed", 
        "startdate": "2015-06-02T00:00:00", 
        "enddate": "2015-06-28T00:00:00", 
        "duration": 27, 
        "lock_duration": false, 
        "time_budget": "donot_specify_timebudget", 
        "specify_time_budget": "bugdet_in_hour", 
        "time_budget_cat": [
            {
                "timedays": "", 
                "timehour": "", 
                "timecategory": "", 
                "inline": true, 
                "id": 0
            }
        ], 
        "fee_budget": "donot_specify_fee_budget", 
        "fee_budget_cat": [
            {
                "feeamount": "", 
                "feecategory": "", 
                "inline": true, 
                "id": 0
            }
        ], 
        "expense_budget": "non_labaour_related_budget", 
        "expense_budget_cat": [
            {
                "expenseamount": "", 
                "expensecategory": "", 
                "inline": true, 
                "id": 0
            }
        ], 
        "time_entry_loacking": "do_not_lock", 
        "calendar_day": "0", 
        "description": "null", 
        "roleslistfield": [
            {
                "name": "Default"
            }
        ], 
        "disciplinelistfield": [
            {
                "Default": "1"
            }
        ], 
        "total_expense_budget": "0", 
        "total_fee_budget": "0", 
        "total_timehour_budget": "0", 
        "total_time_budget": "0", 
        "total_timeday_budget": "0", 
        "time_incurred": "0", 
        "time_future_sheduled": "0", 
        "time_forcast_overbudget": "0", 
        "fee_incurred": "72", 
        "fee_future_sheduled": "392", 
        "fee_forcast_overbudget": "0", 
        "expensed": "0", 
        "expenses_remaining": "0", 
        "project_state": "Active", 
        "tags": "null", 
        "userip": "none", 
        "userid": "557795701816b0000ae1bf8c", 
        "company_id": "557795701816b0000ae1bf8c", 
        "date": "2015-06-10T07:36:53.831000"
    }
];

$scope.persons=[
    {
        "id": "5576f95b885e5900099d64e5", 
        "email": "selva@fractals.in", 
        "password": "225d1a825c6f27b675f06a56295b33ea8ed2e724", 
        "first_name": "selva", 
        "last_name": "s", 
        "is_staff": true, 
        "is_active": true, 
        "is_superuser": true, 
        "email_resend": false, 
        "company_id": "5576f95b885e5900099d64e5", 
        "companyname": "sdf", 
        "created_date": "2015-06-09T20:04:03.732000", 
        "login_date": "2015-06-09T20:04:03.732000", 
        "userip": "none", 
        "imagepath": "/static/angular1/img/b4.jpg", 
        "selectedbillrate": "1", 
        "permissionlevel": "10", 
        "address": "none", 
        "invoice_mail": "none", 
        "invoice_address": "none", 
        "invoice_ownername": "none", 
        "owner_account": true, 
        "emailmsg": "none", 
        "invited": "1", 
        "officephone": "none", 
        "mobilenumber": "none", 
        "location": "none", 
        "employeenumber": "none", 
        "tags": "none", 
        "firstdaywork": "2015-06-09T20:04:03.732000", 
        "lastdaywork": "2015-06-09T20:04:03.732000", 
        "utilizationtarget": "none", 
        "billrate": "1", 
        "discipline": "none", 
        "role": "none", 
        "displaystatus": "In the Office", 
        "displaydescription": " ", 
        "displayworkingproject": " ", 
        "displaystatusupdatetime": "2015-06-09T20:04:03.732000", 
        "lastupdateddate": "2015-06-09T20:04:03.732000", 
        "date": "2015-06-09T20:04:03.732000"
    }, 
    {
        "id": "5576f9c8885e59000a674255", 
        "email": "nithira23@gmail.com", 
        "password": "326b718cc2b74a2ff58e399d1c20aaa321c526cb", 
        "first_name": "Nithya", 
        "last_name": "T", 
        "is_staff": true, 
        "is_active": true, 
        "is_superuser": true, 
        "email_resend": false, 
        "company_id": "5576f95b885e5900099d64e5", 
        "companyname": "sdf", 
        "created_date": "2015-06-09T14:34:54.948000", 
        "login_date": "2015-06-09T20:05:52.787000", 
        "userip": "none", 
        "imagepath": "/static/angular1/img/b4.jpg", 
        "selectedbillrate": "1", 
        "permissionlevel": "11", 
        "address": "none", 
        "invoice_mail": "none", 
        "invoice_address": "none", 
        "invoice_ownername": "none", 
        "owner_account": false, 
        "emailmsg": "none", 
        "invited": "1", 
        "officephone": "4444444444", 
        "mobilenumber": "4444444444", 
        "location": "chennai", 
        "employeenumber": "none", 
        "tags": "none", 
        "firstdaywork": "2015-06-09T20:05:52.788000", 
        "lastdaywork": "2015-06-09T20:05:52.788000", 
        "utilizationtarget": "none", 
        "billrate": "1", 
        "discipline": "none", 
        "role": "none", 
        "displaystatus": "In the Office", 
        "displaydescription": " ", 
        "displayworkingproject": " ", 
        "displaystatusupdatetime": "2015-06-09T20:05:52.788000", 
        "lastupdateddate": "2015-06-09T20:05:52.788000", 
        "date": "2015-06-09T20:05:52.788000"
    }, 
    {
        "id": "55770807be7127000a1e0927", 
        "email": "ankit@fractals.in", 
        "password": "4ddc8738fb886497e37a64a49d3d3e09df248ae6", 
        "first_name": "ankit", 
        "last_name": "sharma", 
        "is_staff": true, 
        "is_active": true, 
        "is_superuser": false, 
        "email_resend": false, 
        "company_id": "55770807be7127000a1e0927", 
        "companyname": "fractals", 
        "created_date": "2015-06-09T21:06:39.195000", 
        "login_date": "2015-06-09T21:06:39.195000", 
        "userip": "none", 
        "imagepath": "/static/angular1/img/b4.jpg", 
        "selectedbillrate": "1", 
        "permissionlevel": "1", 
        "address": "none", 
        "invoice_mail": "none", 
        "invoice_address": "none", 
        "invoice_ownername": "55770807be7127000a1e0927", 
        "owner_account": true, 
        "emailmsg": "none", 
        "invited": "1", 
        "officephone": "1234567890", 
        "mobilenumber": "1234567890", 
        "location": "none", 
        "employeenumber": "123", 
        "tags": "ok fine", 
        "firstdaywork": "2015-06-09T00:00:00", 
        "lastdaywork": "2015-06-09T00:00:00", 
        "utilizationtarget": "100", 
        "billrate": "1", 
        "discipline": "none", 
        "role": "none", 
        "displaystatus": "In the Office", 
        "displaydescription": " ", 
        "displayworkingproject": " ", 
        "displaystatusupdatetime": "2015-06-09T21:06:39.195000", 
        "lastupdateddate": "2015-06-09T21:06:39.195000", 
        "date": "2015-06-09T21:06:39.195000"
    }, 
    {
        "id": "5577323f9037920009dd03ff", 
        "email": "ankitsharma7978@gmail.com", 
        "password": "4ddc8738fb886497e37a64a49d3d3e09df248ae6", 
        "first_name": "ankit", 
        "last_name": "sharma", 
        "is_staff": true, 
        "is_active": true, 
        "is_superuser": true, 
        "email_resend": false, 
        "company_id": "5577323f9037920009dd03ff", 
        "companyname": "messi", 
        "created_date": "2015-06-10T00:06:47.833000", 
        "login_date": "2015-06-10T00:06:47.833000", 
        "userip": "none", 
        "imagepath": "/static/angular1/img/b4.jpg", 
        "selectedbillrate": "1", 
        "permissionlevel": "10", 
        "address": "none", 
        "invoice_mail": "none", 
        "invoice_address": "none", 
        "invoice_ownername": "none", 
        "owner_account": true, 
        "emailmsg": "none", 
        "invited": "1", 
        "officephone": "none", 
        "mobilenumber": "none", 
        "location": "none", 
        "employeenumber": "none", 
        "tags": "none", 
        "firstdaywork": "2015-06-10T00:06:47.834000", 
        "lastdaywork": "2015-06-10T00:06:47.834000", 
        "utilizationtarget": "none", 
        "billrate": "1", 
        "discipline": "none", 
        "role": "none", 
        "displaystatus": "In the Office", 
        "displaydescription": " ", 
        "displayworkingproject": " ", 
        "displaystatusupdatetime": "2015-06-10T00:06:47.834000", 
        "lastupdateddate": "2015-06-10T00:06:47.834000", 
        "date": "2015-06-10T00:06:47.834000"
    }, 
    {
        "id": "557743bd4df5a10009bdcd4a", 
        "email": "fractals@outlook.com", 
        "password": "05028ba82eafef37a621f2eac1c153af20e1674b", 
        "first_name": "ankit", 
        "last_name": "sharma", 
        "is_staff": true, 
        "is_active": true, 
        "is_superuser": true, 
        "email_resend": false, 
        "company_id": "5577323f9037920009dd03ff", 
        "companyname": "messi", 
        "created_date": "2015-06-09T19:50:39.174000", 
        "login_date": "2015-06-10T01:21:25.167000", 
        "userip": "none", 
        "imagepath": "/static/angular1/img/b4.jpg", 
        "selectedbillrate": "1", 
        "permissionlevel": "11", 
        "address": "none", 
        "invoice_mail": "none", 
        "invoice_address": "none", 
        "invoice_ownername": "none", 
        "owner_account": false, 
        "emailmsg": "none", 
        "invited": "1", 
        "officephone": "1234567890", 
        "mobilenumber": "1234567890", 
        "location": "india", 
        "employeenumber": "none", 
        "tags": "none", 
        "firstdaywork": "2015-06-10T01:21:25.167000", 
        "lastdaywork": "2015-06-10T01:21:25.167000", 
        "utilizationtarget": "none", 
        "billrate": "1", 
        "discipline": "none", 
        "role": "none", 
        "displaystatus": "In the Office", 
        "displaydescription": " ", 
        "displayworkingproject": " ", 
        "displaystatusupdatetime": "2015-06-10T01:21:25.167000", 
        "lastupdateddate": "2015-06-10T01:21:25.167000", 
        "date": "2015-06-10T01:21:25.167000"
    }, 
    {
        "id": "557746e5edffe50009a5da8e", 
        "email": "sharmask1@gmail.com", 
        "password": "9d4480509eb968c69e0d2929cc152033d538e3ac", 
        "first_name": "ankit", 
        "last_name": "sharma", 
        "is_staff": true, 
        "is_active": true, 
        "is_superuser": true, 
        "email_resend": false, 
        "company_id": "5577323f9037920009dd03ff", 
        "companyname": "messi", 
        "created_date": "2015-06-09T20:04:23.825000", 
        "login_date": "2015-06-10T01:34:53.286000", 
        "userip": "none", 
        "imagepath": "/static/angular1/img/b4.jpg", 
        "selectedbillrate": "1", 
        "permissionlevel": "11", 
        "address": "none", 
        "invoice_mail": "none", 
        "invoice_address": "none", 
        "invoice_ownername": "none", 
        "owner_account": false, 
        "emailmsg": "none", 
        "invited": "1", 
        "officephone": "1234567890", 
        "mobilenumber": "1234567890", 
        "location": "india", 
        "employeenumber": "none", 
        "tags": "none", 
        "firstdaywork": "2015-06-10T01:34:53.286000", 
        "lastdaywork": "2015-06-10T01:34:53.286000", 
        "utilizationtarget": "none", 
        "billrate": "1", 
        "discipline": "none", 
        "role": "none", 
        "displaystatus": "In the Office", 
        "displaydescription": " ", 
        "displayworkingproject": " ", 
        "displaystatusupdatetime": "2015-06-10T01:34:53.287000", 
        "lastupdateddate": "2015-06-10T01:34:53.287000", 
        "date": "2015-06-10T01:34:53.287000"
    }, 
    {
        "id": "5577fb8bbec647000a758eb2", 
        "email": "kanagaraj@fractals.in", 
        "password": "225d1a825c6f27b675f06a56295b33ea8ed2e724", 
        "first_name": "Nithya", 
        "last_name": "T", 
        "is_staff": true, 
        "is_active": true, 
        "is_superuser": false, 
        "email_resend": false, 
        "company_id": "5577fb8bbec647000a758eb2", 
        "companyname": "dodle", 
        "created_date": "2015-06-10T14:25:39.559000", 
        "login_date": "2015-06-10T14:25:39.560000", 
        "userip": "none", 
        "imagepath": "/static/angular1/img/b4.jpg", 
        "selectedbillrate": "1", 
        "permissionlevel": "1", 
        "address": "none", 
        "invoice_mail": "none", 
        "invoice_address": "none", 
        "invoice_ownername": "none", 
        "owner_account": true, 
        "emailmsg": "none", 
        "invited": "1", 
        "officephone": "5555555555", 
        "mobilenumber": "5555555555", 
        "location": "none", 
        "employeenumber": "none", 
        "tags": "none", 
        "firstdaywork": "2015-06-10T00:00:00", 
        "lastdaywork": "2015-06-10T00:00:00", 
        "utilizationtarget": "none", 
        "billrate": "1", 
        "discipline": "none", 
        "role": "none", 
        "displaystatus": "In the Office", 
        "displaydescription": " ", 
        "displayworkingproject": " ", 
        "displaystatusupdatetime": "2015-06-10T14:25:39.560000", 
        "lastupdateddate": "2015-06-10T14:25:39.560000", 
        "date": "2015-06-10T14:25:39.560000"
    },
    {
        "id": "55774ac6c31925000aac39cd", 
        "email": "lakshmi@ipcn.in", 
        "password": "c34273eefec393151089721d09b074521cb09e06", 
        "first_name": "ankit", 
        "last_name": "sharma", 
        "is_staff": true, 
        "is_active": true, 
        "is_superuser": false, 
        "email_resend": false, 
        "company_id": "55770807be7127000a1e0927", 
        "companyname": "fractals", 
        "created_date": "2015-06-09T20:21:00", 
        "login_date": "2015-06-10T01:51:26.327000", 
        "userip": "none", 
        "imagepath": "/static/angular1/img/b4.jpg", 
        "selectedbillrate": "1", 
        "permissionlevel": "2", 
        "address": "none", 
        "invoice_mail": "none", 
        "invoice_address": "none", 
        "invoice_ownername": "none", 
        "owner_account": false, 
        "emailmsg": "hello there", 
        "invited": "1", 
        "officephone": "0", 
        "mobilenumber": "0", 
        "location": "none", 
        "employeenumber": "none", 
        "tags": "none", 
        "firstdaywork": "2015-06-10T01:51:26.327000", 
        "lastdaywork": "2015-06-10T01:51:26.327000", 
        "utilizationtarget": "none", 
        "billrate": "1", 
        "discipline": "none", 
        "role": "none", 
        "displaystatus": "In the Office", 
        "displaydescription": " ", 
        "displayworkingproject": " ", 
        "displaystatusupdatetime": "2015-06-10T01:51:26.327000", 
        "lastupdateddate": "2015-06-10T01:51:26.327000", 
        "date": "2015-06-10T01:51:26.327000"
    }, 
    {
        "id": "55776403aa709a0009a5347d", 
        "email": "ankitlakko@gmail.com", 
        "password": "4ddc8738fb886497e37a64a49d3d3e09df248ae6", 
        "first_name": "ankit", 
        "last_name": "lakko", 
        "is_staff": true, 
        "is_active": true, 
        "is_superuser": false, 
        "email_resend": false, 
        "company_id": "55776403aa709a0009a5347d", 
        "companyname": "lakko", 
        "created_date": "2015-06-10T03:39:07.501000", 
        "login_date": "2015-06-10T03:39:07.501000", 
        "userip": "none", 
        "imagepath": "/static/angular1/img/b4.jpg", 
        "selectedbillrate": "1", 
        "permissionlevel": "1", 
        "address": "none", 
        "invoice_mail": "none", 
        "invoice_address": "none", 
        "invoice_ownername": "none", 
        "owner_account": true, 
        "emailmsg": "none", 
        "invited": "1", 
        "officephone": "0", 
        "mobilenumber": "0", 
        "location": "none", 
        "employeenumber": "none", 
        "tags": "none", 
        "firstdaywork": "2015-06-10T03:39:07.501000", 
        "lastdaywork": "2015-06-10T03:39:07.501000", 
        "utilizationtarget": "none", 
        "billrate": "1", 
        "discipline": "none", 
        "role": "none", 
        "displaystatus": "In the Office", 
        "displaydescription": " ", 
        "displayworkingproject": " ", 
        "displaystatusupdatetime": "2015-06-10T03:39:07.501000", 
        "lastupdateddate": "2015-06-10T03:39:07.501000", 
        "date": "2015-06-10T03:39:07.501000"
    }, 
    {
        "id": "557795701816b0000ae1bf8c", 
        "email": "jmadrid@wearebarometer.com", 
        "password": "04932a9327e1aa13950b307061a9dffc58399bb6", 
        "first_name": "Jeremy", 
        "last_name": "Madrid", 
        "is_staff": true, 
        "is_active": true, 
        "is_superuser": false, 
        "email_resend": false, 
        "company_id": "557795701816b0000ae1bf8c", 
        "companyname": "Barometer", 
        "created_date": "2015-06-10T07:10:00.988000", 
        "login_date": "2015-06-10T07:10:00.988000", 
        "userip": "none", 
        "imagepath": "/media/img2015_06_10_09_47_32image.png", 
        "selectedbillrate": "1", 
        "permissionlevel": "1", 
        "address": "none", 
        "invoice_mail": "none", 
        "invoice_address": "none", 
        "invoice_ownername": "557795701816b0000ae1bf8c", 
        "owner_account": true, 
        "emailmsg": "none", 
        "invited": "1", 
        "officephone": "1234567890", 
        "mobilenumber": "1234567890", 
        "location": "557797b61816b0000ae1bf8d", 
        "employeenumber": "1", 
        "tags": "none", 
        "firstdaywork": "2015-06-10T00:00:00", 
        "lastdaywork": "2015-06-10T00:00:00", 
        "utilizationtarget": "none", 
        "billrate": "1", 
        "discipline": "none", 
        "role": "none", 
        "displaystatus": "In the Office", 
        "displaydescription": " ", 
        "displayworkingproject": " ", 
        "displaystatusupdatetime": "2015-06-10T07:10:00.988000", 
        "lastupdateddate": "2015-06-10T07:10:00.988000", 
        "date": "2015-06-10T07:10:00.988000"
    }, 
    {
        "id": "55779c921816b00009776318", 
        "email": "spyder0215@gmail.com", 
        "password": "5c69a058c60dfa9054eaba50f9660f9883208e9b", 
        "first_name": "Test", 
        "last_name": "User", 
        "is_staff": true, 
        "is_active": true, 
        "is_superuser": false, 
        "email_resend": false, 
        "company_id": "557795701816b0000ae1bf8c", 
        "companyname": "Barometer", 
        "created_date": "2015-06-10T02:09:43", 
        "login_date": "2015-06-10T07:40:26.392000", 
        "userip": "none", 
        "imagepath": "/static/angular1/img/b4.jpg", 
        "selectedbillrate": "1", 
        "permissionlevel": "4", 
        "address": "none", 
        "invoice_mail": "none", 
        "invoice_address": "none", 
        "invoice_ownername": "none", 
        "owner_account": false, 
        "emailmsg": "none", 
        "invited": "1", 
        "officephone": "1234567890", 
        "mobilenumber": "1234567890", 
        "location": "none", 
        "employeenumber": "none", 
        "tags": "none", 
        "firstdaywork": "2015-06-10T00:00:00", 
        "lastdaywork": "2015-06-10T00:00:00", 
        "utilizationtarget": "none", 
        "billrate": "1", 
        "discipline": "none", 
        "role": "none", 
        "displaystatus": "In the Office", 
        "displaydescription": " ", 
        "displayworkingproject": " ", 
        "displaystatusupdatetime": "2015-06-10T07:40:26.392000", 
        "lastupdateddate": "2015-06-10T07:40:26.392000", 
        "date": "2015-06-10T07:40:26.392000"
    }, 
    {
        "id": "5576e4f069299e0009662557", 
        "email": "nithya@fractals.in", 
        "password": "225d1a825c6f27b675f06a56295b33ea8ed2e724", 
        "first_name": "Nithya", 
        "last_name": "T", 
        "is_staff": true, 
        "is_active": true, 
        "is_superuser": false, 
        "email_resend": false, 
        "company_id": "5576e4f069299e0009662557", 
        "companyname": "dfffff", 
        "created_date": "2015-06-09T18:36:56.724000", 
        "login_date": "2015-06-09T18:36:56.724000", 
        "userip": "none", 
        "imagepath": "/static/angular1/img/b4.jpg", 
        "selectedbillrate": "1", 
        "permissionlevel": "1", 
        "address": "none", 
        "invoice_mail": "none", 
        "invoice_address": "none", 
        "invoice_ownername": "none", 
        "owner_account": true, 
        "emailmsg": "none", 
        "invited": "1", 
        "officephone": "4444444444", 
        "mobilenumber": "4444444444", 
        "location": "5576ef8f0cdcf5000ab4f9f9", 
        "employeenumber": "none", 
        "tags": "none", 
        "firstdaywork": "2015-06-09T00:00:00", 
        "lastdaywork": "2015-06-25T00:00:00", 
        "utilizationtarget": "none", 
        "billrate": "1", 
        "discipline": "5576ef0f0cdcf5000ab4f9f1", 
        "role": "5576ef010cdcf500098e7794", 
        "displaystatus": "In the Office", 
        "displaydescription": " ", 
        "displayworkingproject": " ", 
        "displaystatusupdatetime": "2015-06-09T18:36:56.725000", 
        "lastupdateddate": "2015-06-09T18:36:56.725000", 
        "date": "2015-06-09T18:36:56.725000"
    }
];

	
  }])  
	
.controller('displaymasoryview',['$scope','$http',function($scope,$http){
		





 var busy = false,
        heights = [254, 300, 192, 450, 350, 200, 360, 420, 270, 400, 200],
        cats = ['abstract', 'animals', 'business', 'cats', 'city', 'food', 'nightlife',  'people', 'nature', 'sports', 'transport'],
        stop;

    $scope.images = [];
  


    $scope.refresh = function() {
        $scope.images.length = 0;
     

        $timeout(function() { $scope.fetchNext(); }, 1000);
    };

    $scope.fetchNext = function() {
        var i=0;

        if(!busy) {
            console.log('Fetching next')
            busy = true;

            for(var i=0; i<30; i++) {
                $scope.images.push({
                    src:'http://lorempixel.com/250/' + heights[i % heights.length] + '/' + cats[Math.floor(Math.random() * cats.length )]
                }); 

         
            }

            busy = false;

        }

    };  
}])	





.controller('navcntrl',['$scope','$http',function($scope,$http){
		
	
}])


	;