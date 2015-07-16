'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('app', [
    
    'ngAnimate',
    'ngCookies',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
	'ian.bootstrap',
	'ui.bootstrap.datetimepicker',
	'restangular',
    'ui.load',
    'ui.jq',
	
	'masonryLayout',
	'infinite-scroll',
    //'ui.validate',
    'pascalprecht.translate',
    'app.filters',
    'app.services',
    'app.factory',
	'ImageCropper',
	'highcharts-ng',
	'ui.select2',
	'ngResource',
	'$strap.directives',
	'checklist-model',
    'app.directives',
    'app.services',
    'app.controllers',
    'app.controller2'
  ])
  
 
.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;        
    }
  ]
)

.config(function(RestangularProvider) {
                //set the base url for api calls on our RESTful services
	
		var newBaseUrl = "https://sheltered-reef-7408.herokuapp.com";
		
		
		RestangularProvider.setBaseUrl(newBaseUrl);
	})
.config(
  [          '$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($stateProvider,   $urlRouterProvider,   $controllerProvider,   $compileProvider,   $filterProvider,   $provide) {
        
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
		app.constant   = $provide.constant;
        app.value      = $provide.value;

        $urlRouterProvider
            .otherwise('/access/signin');
        $stateProvider            
            
            .state('access', {
                url: '/access',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('access.signin', {
                url: '/signin',
                templateUrl: 'tpl/page_signin.html'
            })
			 .state('access.signup', {
                url: '/signup',
                templateUrl: 'tpl/page_signup.html'
            })
            
            .state('access.forgotpwd', {
                url: '/forgotpwd',
                templateUrl: 'tpl/page_forgotpwd.html'
            })
            .state('access.404', {
                url: '/404',
                templateUrl: 'tpl/page_404.html'
            })

			
			//User forms
			.state('app', {
                abstract: true,
                url: '/app',
                templateUrl: 'tpl/app.html'
            })	
		   
    

//employee List	
            .state('app.ui1', {
                url: '/ui1',
                template: '<div ui-view class="fade-in-up"></div>'
            })		
            .state('app.ui1.Menu1_A', {
                url: '/Menu1_A',
                templateUrl: 'tpl/Accountsettings.html'
            })	
			
 //customer List
 			.state('app.ui2', {
                url: '/ui2',
                template: '<div ui-view class="fade-in-up"></div>'
            })
             .state('app.ui2.Menu2_A', {
                url: '/Menu2_A',
                templateUrl: 'tpl/Accountsettings.html'
            })	
              .state('app.ui2.Menu2_B', {
                url: '/Menu2_B',
                templateUrl: 'tpl/Accountsettings.html'
            }) 
 //Material List
 		    .state('app.ui3', {
                url: '/ui3',
                template: '<div ui-view class="fade-in-up"></div>'
            })
			.state('app.ui3.Menu3_A', {
                url: '/Menu3_A',
                templateUrl: 'tpl/Accountsettings.html'
            })
			.state('app.ui3.Menu3_B', {
                url: '/Menu3_B',
                templateUrl: 'tpl/Accountsettings.html'
            })	

 //Test List
 		    .state('app.ui4', {
                url: '/ui4',
                template: '<div ui-view class="fade-in-up"></div>'
            })

			.state('app.ui4.Menu4_A', {
                url: '/Menu4_A',
                templateUrl: 'tpl/Accountsettings.html'
            })
			.state('app.ui4.Menu4_B', {
                url: '/Menu4_B',
                templateUrl: 'tpl/Accountsettings.html'
            })
 
			
    }
  ]
)

.config(['$translateProvider', function($translateProvider){

  // Register a loader for the static files
  // So, the module will search missing translation tables under the specified urls.
  // Those urls are [prefix][langKey][suffix].
  $translateProvider.useStaticFilesLoader({
    prefix: 'l10n/',
    suffix: '.json'
  });

  // Tell the module what language to use by default
  $translateProvider.preferredLanguage('en');

  // Tell the module to store the language in the local storage
  $translateProvider.useLocalStorage();

}])

/**
 * jQuery plugin config use ui-jq directive , config the js and css files that required
 * key: function name of the jQuery plugin
 * value: array of the css js file located
 */
.constant('JQ_CONFIG', {
    easyPieChart:   ['js/jquery/charts/easypiechart/jquery.easy-pie-chart.js'],
    sparkline:      ['js/jquery/charts/sparkline/jquery.sparkline.min.js'],
    plot:           ['js/jquery/charts/flot/jquery.flot.min.js', 
                        'js/jquery/charts/flot/jquery.flot.resize.js',
                        'js/jquery/charts/flot/jquery.flot.tooltip.min.js',
                        'js/jquery/charts/flot/jquery.flot.spline.js',
                        'js/jquery/charts/flot/jquery.flot.orderBars.js',
                        'js/jquery/charts/flot/jquery.flot.pie.min.js'],
    slimScroll:     ['js/jquery/slimscroll/jquery.slimscroll.min.js'],
    sortable:       ['js/jquery/sortable/jquery.sortable.js'],
    nestable:       ['js/jquery/nestable/jquery.nestable.js',
                        'js/jquery/nestable/nestable.css'],
    filestyle:      ['js/jquery/file/bootstrap-filestyle.min.js'],
    slider:         ['js/jquery/slider/bootstrap-slider.js',
                        'js/jquery/slider/slider.css'],
    chosen:         ['js/jquery/chosen/chosen.jquery.min.js',
                        'js/jquery/chosen/chosen.css'],
    TouchSpin:      ['js/jquery/spinner/jquery.bootstrap-touchspin.min.js',
                        'js/jquery/spinner/jquery.bootstrap-touchspin.css'],
    wysiwyg:        ['js/jquery/wysiwyg/bootstrap-wysiwyg.js',
                        'js/jquery/wysiwyg/jquery.hotkeys.js'],
    dataTable:      ['js/jquery/datatables/jquery.dataTables.min.js',
                         'js/jquery/datatables/dataTables.bootstrap.js','js/jquery/datatables/dataTables.fixedColumns.js',
                       'js/jquery/datatables/dataTables.bootstrap.css',
					 'js/jquery/datatables/dataTables.fixedColumns.css'],
    vectorMap:      ['js/jquery/jvectormap/jquery-jvectormap.min.js', 
                        'js/jquery/jvectormap/jquery-jvectormap-world-mill-en.js',
                        'js/jquery/jvectormap/jquery-jvectormap-us-aea-en.js',
                        'js/jquery/jvectormap/jquery-jvectormap.css'],
    footable:       ['js/jquery/footable/footable.all.min.js',
                        'js/jquery/footable/footable.core.css']
    }
)


.constant('MODULE_CONFIG', {
    select2:        ['js/jquery/select2/select2.css',
                        'js/jquery/select2/select2-bootstrap.css',
                        'js/jquery/select2/select2.min.js',
                        'js/modules/ui-select2.js']
    }
)






;

var uniqueItems = function (data, key) {
    var result = new Array();
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
 
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    
    }
    return result;
};

