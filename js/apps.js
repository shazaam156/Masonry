 'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    'ui.load',
    'ui.jq',
    'ui.validate',

    'pascalprecht.translate',
    'app.filters',
    'app.services',
    'app.factory',
   'ImageCropper',
   'ngResource',
   '$strap.directives',
   'highcharts-ng',
   'ui.select2',
    'app.directives',
    'app.controllers',
    'angularPayments',


  ])
.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;        
    }
  ]
)

.run(function($rootScope, $templateCache) {
   $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
   });
})


.run(['$rootScope', '$exceptionHandler', '$timeout', '$state', function ($rootScope, $exceptionHandler, $timeout, $state) {
        $rootScope.$on('$stateChangeError', function (e, toState, toParams, fromState, fromParams, error) {
            if (error && error.redirect) {
                return $state.go(error.redirect);
            }

            $exceptionHandler(error);
        });
    }])

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
                template: ''
            })
            .state('access.signin', {


                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                      //return $q.when(userInfo);
                      return $q.reject({ redirect: 'app.user' });
                }
            }


            },
             url: '/signin',
            templateUrl: '/static/angular1/tpl/page_signin.html',
            controller : 'SigninFormController'
            })


            .state('access.terms_condition', {
                url: '/Terms_condition',
                templateUrl: '/static/angular1/tpl/terms_condition.html',
                 //controller : 'SigninFormController'
            })
          .state('access.signup', {
                url: '/signup',
                templateUrl: '/static/angular1/tpl/page_signup.html',
                 controller : 'SignupFormController'
            })
            
            .state('access.forgotpwd', {
                url: '/forgotpwd',
                templateUrl: '/static/angular1/tpl/page_forgotpwd.html',
                 controller : 'ForgotpasswordController'
            })
            .state('access.404', {
                url: '/404',
                templateUrl: '/static/angular1/tpl/page_404.html'
            })
            //Super Admin

            .state('appsuperadmin', {
                abstract: true,
                url: '/Admin',
                templateUrl: '/static/angular1/tpl/appsuperadmin.html'
            })

          .state('appsuperadmin.userprofileview', {
                url: '/userprofileview',
                templateUrl: '/static/angular1/tpl/userprofileview.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'RegistrationTableCtrl'
            })
        .state('appsuperadmin.Billing', {
                url: '/UserBilling_Details',
                templateUrl: '/static/angular1/tpl/page_adminbilling.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }
            },
            controller : 'BillingTableCtrl'
            })

            .state('appsuperadmin.plans', {
                url: '/Plans',
                templateUrl: '/static/angular1/tpl/page_adminplans.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }
            },
            controller : 'AdminplansController'
            })

            .state('appsuperadmin.createsupersubadmin', {
                url: '/Create_superadmin',
                templateUrl: '/static/angular1/tpl/page_createsuperadmin.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'superadmin_userlist'
            })


               .state('appsuperadmin.superadminregistration', {
                url: '/Registration',
                templateUrl: '/static/angular1/tpl/page_superadmin_registration.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'superadmin_registration'
            })

             .state('appsuperadmin.changepassword', {
                url: '/user_adminchangepassword',
                templateUrl: '/static/angular1/tpl/page_changepassword.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'Changepasswordctrl'
            })
            .state('appsuperadmin.Reports', {
                url: '/Reports',
                 templateUrl: '/static/angular1/tpl/page_Reports.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'segmentationmain'
            })
         
         //user forms appcontroller
         .state('app', {
                abstract: true,
                url: '/app',
                templateUrl: '/static/angular1/tpl/app.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                     return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'appcontroller'
            })

            .state('app.company', {
                url: '/company',
                templateUrl: '/static/angular1/tpl/admincompany.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                     return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'admincompanycontroller'
            })
             .state('app.changepassword', {
                url: '/user_changepassword',
                templateUrl: '/static/angular1/tpl/page_changepassword.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'Changepasswordctrl'
            })
            .state('app.user', {
                url: '/user?user_id',
                templateUrl: '/static/angular1/tpl/admin_user.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'BridgeController'
            })

           .state('app.Useredit_profile', {
                url: '/Myprofile?user_id',
                templateUrl: '/static/angular1/tpl/page_profileregistration.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                    return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'FormDemoCtrl'
            })

            .state('app.Indexpage', {
                url: '/Indexpage',
                templateUrl: '/static/angular1/tpl/IndexMainpage.html'
            })
         .state('app.Indexpage.Myprofile', {
                url: '/Myprofile',
                templateUrl: '/static/angular1/tpl/page_profileregistration.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'BridgeController'
            })
         .state('app.Indexpage.MyprofileView', {
                url: '/MyprofileView',
                templateUrl: '/static/angular1/tpl/page_profileview_list.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'RegistrationTableCtrl'
            })
            .state('app.Project', {
                url: '/Project',
                templateUrl: '/static/angular1/tpl/page_project.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                    return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'projectviewpage'
            })
         .state('app.Individualprojectview', {
                url: '/Selected_Project?id',
                templateUrl: '/static/angular1/tpl/Page_Individualprojectview.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                    return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'individualprojectview'
            })

            .state('app.editprojectview', {
                url: '/Edit_project?id',
                templateUrl: '/static/angular1/tpl/page_editproject.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                    return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'EditprojectController'
            })


            .state('app.Editprojectshifts', {
                url: '/Dateshift?project_id&pahse_id',
                templateUrl: '/static/angular1/tpl/page_editphseproject.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'EditprojectphaseController'
            })
         .state('app.shiftprojectdates', {
                url: '/Shiftproject_shift?project_id',
                templateUrl: '/static/angular1/tpl/page_projectshiftdates.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'ShiftprojectdateController'
            })

         .state('app.shiftphasedates', {
                url: '/Shiftphase_shift?project_id&pahse_id',
                templateUrl: '/static/angular1/tpl/page_phaseshiftdates.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'ShiftphasedateController'
            })

         .state('app.AddProject', {
                url: '/addProject',
                templateUrl: '/static/angular1/tpl/page_Addparoject.html',
                 resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'AddprojectController'

            })

            .state('app.Schedule', {
                url: '/Schedule',
                templateUrl: '/static/angular1/tpl/page_ganttchart.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                    return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'MainGanttCtrl'
            })
           /* .state('app.Reports', {
                url: '/Reports',
                templateUrl: '/static/angular1/tpl/page_Reports.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'segmentationmain'
            })*/
           .state('app.Reports', {
                url: '/Reports',
                templateUrl: '/static/angular1/tpl/page_newsegmentatioin.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'NewReports'
            })

         .state('app.Reports.GanttChart', {
                url: '/GanttChart',
                templateUrl: '/static/angular1/tpl/page_ganttchart.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'MainGanttCtrl'
            })
         .state('app.Reports.Segemntation', {
                url: '/Segemntation',
                templateUrl: '/static/angular1/tpl/page_segmentation.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'segmentationmain'
            })
            .state('app.Preference', {
                url: '/Preference',
                templateUrl: '/static/angular1/tpl/MyPreferencemain.html'
            })
          .state('app.settingpage', {
                url: '/AccountPage',
                templateUrl: '/static/angular1/tpl/Accountsettings.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                    return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'Mainaccount_settings'
            })

            .state('app.Preference.Roles', {
                url: '/Roles',
                templateUrl: '/static/angular1/tpl/page_Roles.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                    return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'organizerroleController'
            })

             .state('app.Preference.Billing', {
                url: '/user_billing',
                templateUrl: '/static/angular1/tpl/user_billing.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'userbilling'
            })


            .state('app.Preference.Disciplines', {
                url: '/Disciplines',
                templateUrl: '/static/angular1/tpl/page_Disciplines.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'organizerDisciplineController'
            })
            .state('app.Preference.BillRates', {
                url: '/BillRates',
                templateUrl: '/static/angular1/tpl/page_BillRates.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'organizerBillratesController'
            })

            .state('app.Preference.preProjects', {
                url: '/Projects',
                templateUrl: '/static/angular1/tpl/page_prefProjects.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'organizerProjectsController'
            })



            .state('app.Preference.PhaseNames', {
                url: '/PhaseNames',
                templateUrl: '/static/angular1/tpl/page_PhaseNames.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'organizerPhasenameController'
            })
            .state('app.Preference.ExpenseCategories', {
                url: '/ExpenseCategories',
                templateUrl: '/static/angular1/tpl/page_ExpenseCategories.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'organizerexpenseController'
            })
            .state('app.Preference.timefeeCategories', {
                url: '/timefeeCategories',
                templateUrl: '/static/angular1/tpl/page_timefeeCategories.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                    return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'organizertimefeeController'
            })
            .state('app.Preference.Officialhoildays', {
                url: '/Officialhoildays',
                templateUrl: '/static/angular1/tpl/page_Officialhoildays.html',
                 resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                    return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'organizerholidayController'
            })
            .state('app.Preference.Clients', {
                url: '/Clients',
                templateUrl: '/static/angular1/tpl/page_Clients.html',
                 resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                    return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'organizerClientsController'
            }) 
          .state('app.Preference.Locations', {
                url: '/Locations',
                templateUrl: '/static/angular1/tpl/page_Locations.html',
                 resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'organizerLocationsController'
            }) 
          .state('app.Preference.LeaveTypes', {
                url: '/LeaveTypes',
                templateUrl: '/static/angular1/tpl/page_LeaveTypes.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'organizerLeavetypeController'
            }) 
          .state('app.Preference.Users', {
                url: '/Users',
                templateUrl: '/static/angular1/tpl/page_Users.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'total_added_userlist'
            })
         

            .state('app.addsingleperson', {
                url: '/addSinglePerson?companyname',
                templateUrl: '/static/angular1/tpl/page_Users_addperson.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                    return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'invitesingleuser'
            })

            .state('app.sendInvitation', {
                url: '/Send_Invitation?name&id',
                templateUrl: '/static/angular1/tpl/page_Users_invitation.html',
                resolve: {

            auth: function ($q, authenticationSvc) {
                var userInfo = authenticationSvc.getUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                } else {
                   return $q.reject({ redirect: 'access.signin' });
                }
            }


            },
            controller : 'invite_newuser'
            })
            .state('app.addmultiplepeople', {
                url: '/Add_Multipleuser',
                templateUrl: '/static/angular1/tpl/page_Users_addmultipleuser.html',
            })








 
    }
  ]
)

.config(['$translateProvider', function($translateProvider){

  // Register a loader for the static files
  // So, the module will search missing translation tables under the specified urls.
  // Those urls are [prefix][langKey][suffix].
  $translateProvider.useStaticFilesLoader({
    prefix: '/static/angular1/js/l10n/',
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
    easyPieChart:   ["/static/angular1/js/jquery/charts/easypiechart/jquery.easy-pie-chart.js"],
    sparkline:      ["/static/angular1/js/jquery/charts/sparkline/jquery.sparkline.min.js"],
    plot:           ["/static/angular1/js/jquery/charts/flot/jquery.flot.min.js",
                        "/static/angular1/js/jquery/charts/flot/jquery.flot.resize.js",
                        "/static/angular1/js/jquery/charts/flot/jquery.flot.tooltip.min.js",
                        "/static/angular1/js/jquery/charts/flot/jquery.flot.spline.js",
                        "/static/angular1/js/jquery/charts/flot/jquery.flot.orderBars.js",
                        "/static/angular1/js/jquery/charts/flot/jquery.flot.pie.min.js"],
    slimScroll:     ["/static/angular1/js/jquery/slimscroll/jquery.slimscroll.min.js"],
    sortable:       ["/static/angular1/js/jquery/sortable/jquery.sortable.js"],
    nestable:       ["/static/angular1/js/jquery/nestable/jquery.nestable.js",
                        "/static/angular1/js/jquery/nestable/nestable.css"],
    filestyle:      ["/static/angular1/js/jquery/file/bootstrap-filestyle.min.js"],
    slider:         ["/static/angular1/js/jquery/slider/bootstrap-slider.js",
                        "/static/js/jquery/slider/slider.css"],
    chosen:         ["/static/angular1/js/jquery/chosen/chosen.jquery.min.js",
                        "/static/angular1/js/jquery/chosen/chosen.css"],
    TouchSpin:      ["/static/angular1/js/jquery/spinner/jquery.bootstrap-touchspin.min.js",
                        "{% static'angular1/js/jquery/spinner/jquery.bootstrap-touchspin.css"],
    wysiwyg:        ["/static/angular1/js/jquery/wysiwyg/bootstrap-wysiwyg.js",
                        "/static/angular1/js/jquery/wysiwyg/jquery.hotkeys.js"],
    dataTable:      ["/static/angular1/js/jquery/datatables/jquery.dataTables.min.js",
                        "/static/angular1/js/jquery/datatables/dataTables.bootstrap.js",
                        "/static/angular1/js/jquery/datatables/dataTables.fixedColumns.js",
                        "/static/angular1/js/jquery/datatables/dataTables.bootstrap.css",
                        "/static/angular1/js/jquery/datatables/dataTables.fixedColumns.css"],
    vectorMap:      ["/static/angular1/js/jquery/jvectormap/jquery-jvectormap.min.js",
                        "/static/angular1/js/jquery/jvectormap/jquery-jvectormap-world-mill-en.js",
                        "/static/angular1/js/jquery/jvectormap/jquery-jvectormap-us-aea-en.js",
                        "/static/angular1/js/jquery/jvectormap/jquery-jvectormap.css"],
    footable:       ["/static/angular1/js/jquery/footable/footable.all.min.js",
                        "/static/angular1/js/jquery/footable/footable.core.css"]
    }
)


.constant('MODULE_CONFIG', {
    select2:        ['/static/angular1/js/jquery/select2/select2.css',
                        '/static/angular1/js/jquery/select2/select2-bootstrap.css',
                        '/static/angular1/js/jquery/select2/select2.min.js',
                        '/static/angular1/js/modules/ui-select2.js']
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