angular.module('app.controller2', ['pascalprecht.translate', 'ngCookies','ImageCropper'])
.controller('NewReports', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
	  

	
	  $scope.ViewState="None";
	  $scope.GroupbyFirst="None";
	   $scope.Groupby="None";

		$scope.Week=[
		{weekname:"This Quarter",id:1,on:false},
		{weekname:"This Month",id:2,on:false},
		{weekname:"This Week",id:3,on:false},
		{weekname:"Last Quarter",id:3,on:false},
		{weekname:"Last Month",id:3,on:false},
		{weekname:"Last Week",id:3,on:false},
		{weekname:"Last 30 Days",id:3,on:false},
		{weekname:"Next 60 Days",id:3,on:false},
		{weekname:"Next 90 Days",id:3,on:false},
		{weekname:"Last and Next 90 Days",id:3,on:false}];
		

		
		
		$scope.Team_Member=[
		{membername:"Nithya",id:1,on:false},
		{membername:"selva",id:2,on:false},
		{membername:"Kanagaraj",id:3,on:false}];
		
		$scope.project_Name=[
		{projectname:"expo",id:1,on:false},
		{projectname:"Mongo",id:2,on:false},
		{projectname:"Oversee",id:3,on:false}];
		
		
		$scope.clients=[
		{clientname:"prabu",id:1,on:false},
		{clientname:"babu",id:2,on:false},
		{clientname:"kannan",id:3,on:false},
		{clientname:"Nithya",id:3,on:false}];

		$scope.Disciplines=[
		{discipline:"discipline1",id:1,on:false},
		{discipline:"discipline2",id:2,on:false},
		{discipline:"discipline3",id:3,on:false},
		{discipline:"discipline4",id:3,on:false}];
        $scope.Roles=[
		{rolelist:"rolelist1",id:1,on:false},
		{rolelist:"rolelist2",id:2,on:false},
		{rolelist:"rolelist3",id:3,on:false},
		{rolelist:"rolelist4",id:3,on:false}];
   
	    $scope.Locations=[
		{locationlist:"locationlistt1",id:1,on:false},
		{locationlist:"locationlist2",id:2,on:false},
		{locationlist:"locationlist3",id:3,on:false},
		{locationlist:"locationlist4",id:3,on:false}];
		
	    $scope.LeaveTypes=[
		{leavetypelist:"leavetypelist1",id:1,on:false},
		{leavetypelist:"leavetypelist2",id:2,on:false},
		{leavetypelist:"leavetypelist3",id:3,on:false},
		{leavetypelist:"leavetypelist4",id:3,on:false}];
		
	    $scope.EntryTypes=[
		{entrytypelist:"entrytypelist1",id:1,on:false},
		{entrytypelist:"entrytypelist2",id:2,on:false},
		{entrytypelist:"entrytypelist3",id:3,on:false},
		{entrytypelist:"entrytypelist4",id:3,on:false}];
		
	    $scope.project_type=[
		{projecttypelist:"Internal",id:1,on:false},
		{projecttypelist:"Tentative",id:2,on:false},
		{projecttypelist:"Confirmed",id:3,on:false}];
		
	    $scope.ProjectCategory=[
		{projectcategorylist:"projectcategorylist1",id:1,on:false},
		{projectcategorylist:"projectcategorylist2",id:2,on:false},
		{projectcategorylist:"projectcategorylist3",id:3,on:false},
		{projectcategorylist:"projectcategorylist4",id:3,on:false}];

	    $scope.project_state=[
		{projectstatelist:"Active",id:1,on:false}];
		

	    $scope.phase_name=[
		{phaselist:"phase1",id:1,on:false},
		{phaselist:"phase2",id:1,on:false},
		{phaselist:"phase3",id:1,on:false}];
		
	    $scope.PhaseNames=[
		{phasenamelist:"phasenamelist1",id:1,on:false},
		{phasenamelist:"phasenamelist2",id:2,on:false},
		{phasenamelist:"phasenamelist3",id:3,on:false},
		{phasenamelist:"phasenamelist4",id:3,on:false}];	

	    $scope.ProjectTags=[
		{projecttagslist:"projecttagslist1",id:1,on:false},
		{projecttagslist:"projecttagslist2",id:2,on:false},
		{projecttagslist:"projecttagslist3",id:3,on:false},
		{projecttagslist:"projecttagslist4",id:3,on:false}];

	    $scope.PeopleTags=[
		{peopletagslist:"peopletagslist1",id:1,on:false},
		{peopletagslist:"peopletagslist2",id:2,on:false},
		{peopletagslist:"peopletagslist3",id:3,on:false},
		{peopletagslist:"peopletagslist4",id:3,on:false}];		

			

		

	  $scope.showChildren1  = function(timefee){
		
    timefee.show = !timefee.show;
  }	 

  $scope.showChildren3  = function(timefee){
		
    timefee.show1 = !timefee.show1;
  } 


  $scope.thenshowshowChildren  = function(timefee){
		
    timefee.thenshow = !timefee.thenshow;
  }
  
  	





	
	

	
//filter work
$('html').on('click', function(e) {
  if (typeof $(e.target).data('original-title') == 'undefined' &&
     !$(e.target).parents().is('.popover.in')) {
    $('[data-original-title]').popover('hide');
  }
});


/*****************  **** Basic Data For Report ****   ******************/

// All Data fetched By Company id

 $scope.Finalprojects=[
    {
        "id": "557a7bda26768700092e6270", 
        "project_name": "Expo", 
        "client_name": "client2", 
        "clientid": "557a7a76267687000a2708d5", 
        "project_code": "FGD445", 
        "project_type": "Internal", 
        "projectstartdate": "2015-06-01T00:00:00", 
        "projectenddate": "2015-06-30T00:00:00", 
        "duration": 29, 
	    "total_expense_budget": "5000", 
        "total_fee_budget": "2500", 
        "total_timehour_budget": "500", 
        "total_time_budget": "5000", 
        "total_timeday_budget": "1000", 

    },    {
        "id": "557a7bda26768700092e6271", 
        "project_name": "Expo1", 
        "client_name": "client1", 
        "clientid": "557a7a76267687000a2708d1", 
        "project_code": "FGD445", 
        "project_type": "Internal", 
        "projectstartdate": "2015-06-01T00:00:00", 
        "projectenddate": "2015-06-30T00:00:00", 
        "duration": 29, 
	    "total_expense_budget": "5000", 
        "total_fee_budget": "2500", 
        "total_timehour_budget": "500", 
        "total_time_budget": "5000", 
        "total_timeday_budget": "1000", 

    }
];

$scope.Member=[
    {
        "id": "557aa649e53b2200093c79c3", 
         
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "member_name": "Nithya", 
        "member_id": "557a793c267687000a2708cb", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "duration": 18, 
        "percentage": 100.0, 
        "hours_perday": 8.0, 
        "total": 144.0, 
        "percent_select": "percentage", 
         
         
        "memstartdate": "2015-06-11T18:30:00", 
        "memenddate": "2015-06-30T00:00:00"
    }, 
    {
        "id": "557aa649e53b22000a78e747", 
         
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "member_name": "Nithya", 
        "member_id": "557a793c267687000a2708cb", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "duration": 18, 
        "percentage": 100.0, 
        "hours_perday": 8.0, 
        "total": 144.0, 
        "percent_select": "percentage", 
         
         
        "memstartdate": "2015-06-11T18:30:00", 
        "memenddate": "2015-06-30T00:00:00"
    }, 
    {
        "id": "557aa651e53b22000a78e75d", 
         
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "member_name": "Nithya", 
        "member_id": "557a793c267687000a2708cb", 
        "editphaseid": "null", 
        "editphasename": "null", 
        "duration": 18, 
        "percentage": 100.0, 
        "hours_perday": 8.0, 
        "total": 144.0, 
        "percent_select": "percentage", 
         
         
        "memstartdate": "2015-06-11T18:30:00", 
        "memenddate": "2015-06-30T00:00:00"
    }, 
    {
        "id": "557aa65ee53b2200093c79d8", 
         
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "member_name": "Prabu", 
        "member_id": "557a7cf126768700092e62a1", 
        "editphaseid": "null", 
        "editphasename": "null", 
        "duration": 18, 
        "percentage": 100.0, 
        "hours_perday": 8.0, 
        "total": 144.0, 
        "percent_select": "percentage", 
         
         
        "memstartdate": "2015-06-11T18:30:00", 
        "memenddate": "2015-06-30T00:00:00"
    }, 
    {
        "id": "557aa66be53b22000a78e774", 
         
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "member_name": "Kanagaraj", 
        "member_id": "557a7d14267687000a2708f0", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "duration": 18, 
        "percentage": 100.0, 
        "hours_perday": 8.0, 
        "total": 144.0, 
        "percent_select": "percentage", 
         
         
        "memstartdate": "2015-06-11T18:30:00", 
        "memenddate": "2015-06-30T00:00:00"
    }, 
    {
        "id": "557aa66be53b2200093c79ed", 
         
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "member_name": "Kanagaraj", 
        "member_id": "557a7d14267687000a2708f0", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "duration": 18, 
        "percentage": 100.0, 
        "hours_perday": 8.0, 
        "total": 144.0, 
        "percent_select": "percentage", 
         
         
        "memstartdate": "2015-06-11T18:30:00", 
        "memenddate": "2015-06-30T00:00:00"
    }, 
    {
        "id": "557aa66be53b22000a78e78a", 
         
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "member_name": "Kanagaraj", 
        "member_id": "557a7d14267687000a2708f0", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "duration": 18, 
        "percentage": 100.0, 
        "hours_perday": 8.0, 
        "total": 144.0, 
        "percent_select": "percentage", 
         
         
        "memstartdate": "2015-06-11T18:30:00", 
        "memenddate": "2015-06-30T00:00:00"
    },
	 {
        "id": "557aa649e53b2200093c79c3", 
         
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "member_name": "Nithya", 
        "member_id": "557a793c267687000a2708cb", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "duration": 18, 
        "percentage": 100.0, 
        "hours_perday": 8.0, 
        "total": 144.0, 
        "percent_select": "percentage", 
         
         
        "memstartdate": "2015-06-11T18:30:00", 
        "memenddate": "2015-06-30T00:00:00"
    }, 
    {
        "id": "557aa649e53b22000a78e747", 
         
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "member_name": "Nithya", 
        "member_id": "557a793c267687000a2708cb", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "duration": 18, 
        "percentage": 100.0, 
        "hours_perday": 8.0, 
        "total": 144.0, 
        "percent_select": "percentage", 
         
         
        "memstartdate": "2015-06-11T18:30:00", 
        "memenddate": "2015-06-30T00:00:00"
    }, 
    {
        "id": "557aa651e53b22000a78e75d", 
         
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "member_name": "Nithya", 
        "member_id": "557a793c267687000a2708cb", 
        "editphaseid": "null", 
        "editphasename": "null", 
        "duration": 18, 
        "percentage": 100.0, 
        "hours_perday": 8.0, 
        "total": 144.0, 
        "percent_select": "percentage", 
         
         
        "memstartdate": "2015-06-11T18:30:00", 
        "memenddate": "2015-06-30T00:00:00"
    }, 
    {
        "id": "557aa65ee53b2200093c79d8", 
         
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "member_name": "Prabu", 
        "member_id": "557a7cf126768700092e62a1", 
        "editphaseid": "null", 
        "editphasename": "null", 
        "duration": 18, 
        "percentage": 100.0, 
        "hours_perday": 8.0, 
        "total": 144.0, 
        "percent_select": "percentage", 
         
         
        "memstartdate": "2015-06-11T18:30:00", 
        "memenddate": "2015-06-30T00:00:00"
    }, 
    {
        "id": "557aa66be53b22000a78e774", 
         
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "member_name": "Kanagaraj", 
        "member_id": "557a7d14267687000a2708f0", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "duration": 18, 
        "percentage": 100.0, 
        "hours_perday": 8.0, 
        "total": 144.0, 
        "percent_select": "percentage", 
         
         
        "memstartdate": "2015-06-11T18:30:00", 
        "memenddate": "2015-06-30T00:00:00"
    }, 
    {
        "id": "557aa66be53b2200093c79ed", 
         
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "member_name": "Kanagaraj", 
        "member_id": "557a7d14267687000a2708f0", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "duration": 18, 
        "percentage": 100.0, 
        "hours_perday": 8.0, 
        "total": 144.0, 
        "percent_select": "percentage", 
         
         
        "memstartdate": "2015-06-11T18:30:00", 
        "memenddate": "2015-06-30T00:00:00"
    }, 
    {
        "id": "557aa66be53b22000a78e78a", 
         
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "member_name": "Kanagaraj", 
        "member_id": "557a7d14267687000a2708f0", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "duration": 18, 
        "percentage": 100.0, 
        "hours_perday": 8.0, 
        "total": 144.0, 
        "percent_select": "percentage", 
         
         
        "memstartdate": "2015-06-11T18:30:00", 
        "memenddate": "2015-06-30T00:00:00"
    }
];

$scope.phase_added=[
    {
        "id": "557a7ca626768700092e6287",  
        "projectid": "557a7bda26768700092e6270", 
        "phasename": "phase1", 
        "phaseid": "557a7a2e26768700092e6263", 
        "duration": 29, 
         
        "phasestartdate": "2015-06-01T00:00:00", 
        "phaseenddate": "2015-06-30T00:00:00"
    }, 
    {
        "id": "557a7cae26768700092e6288",  
        "projectid": "557a7bda26768700092e6270", 
        "phasename": "phase3", 
        "phaseid": "557a7cae267687000a2708d8", 
        "duration": 29, 
         
        "phasestartdate": "2015-06-01T00:00:00", 
        "phaseenddate": "2015-06-30T00:00:00"
    },{
        "id": "557a7ca626768700092e6287",  
        "projectid": "557a7bda26768700092e6271", 
        "phasename": "phase1", 
        "phaseid": "557a7a2e26768700092e6263", 
        "duration": 29, 
         
        "phasestartdate": "2015-06-01T00:00:00", 
        "phaseenddate": "2015-06-30T00:00:00"
    }, 
    {
        "id": "557a7cae26768700092e6288",  
        "projectid": "557a7bda26768700092e6271", 
        "phasename": "phase3", 
        "phaseid": "557a7cae267687000a2708d8", 
        "duration": 29, 
         
        "phasestartdate": "2015-06-01T00:00:00", 
        "phaseenddate": "2015-06-30T00:00:00"
    }
];

$scope.alllocation=[
    {
        "id": "557a7a7e267687000a2708d6", 
        "locationname": "location1"
    }, 
    {
        "id": "557a7a8226768700092e626a", 
        "locationname": "location2"
    }, 
    {
        "id": "557a7a8626768700092e626b", 
        "locationname": "location3"
    }, 
    {
        "id": "none", 
        "locationname": "none"
    }
];

$scope.allrole=[
    {
        "id": "557a79f3267687000a2708cc", 
        "rolename": "Role1"
    }, 
    {
        "id": "557a79f5267687000a2708cd", 
        "rolename": "Role2"
    }, 
    {
        "id": "557a79f826768700092e6261", 
        "rolename": "Role3"
    }, 
    {
        "id": "none", 
        "rolename": "none"
    }
];

$scope.alldiscipline=[
    {
        "id": "557a7a01267687000a2708ce", 
        "disciplinename": "Discipline1"
    }, 
    {
        "id": "557a7a0526768700092e6262", 
        "disciplinename": "Discipline2"
    }, 
    {
        "id": "557a7a0a267687000a2708cf", 
        "disciplinename": "Discipline3"
    }, 
    {
        "id": "none", 
        "disciplinename": "none"
    }
];

$scope.userprofile=[
    {
        "id": "557a7cf126768700092e62a1", 
        "email": "prabu@fractals.in",
        "first_name": "Prabu", 
        "selectedbillrate": "1",
        "location": "none",  
        "firstdaywork": "2015-06-12T12:02:17.035000", 
        "lastdaywork": "2015-07-12T12:02:17.035000", 
        "utilizationtarget": "none", 
        "billrate": "1", 
        "discipline": "none", 
        "role": "557a79f826768700092e6261"
    }, 
    {
        "id": "557a7d14267687000a2708f0", 
        "email": "kanagaraj@fractals.in", 
        "first_name": "Kanagaraj", 
        "selectedbillrate": "1", 
        "location": "none",  
        "firstdaywork": "2015-05-10T12:02:52.495000", 
        "lastdaywork": "2015-06-12T12:02:52.495000", 
        "utilizationtarget": "none", 
        "billrate": "1", 
        "discipline": "none", 
        "role": "none"
    },
    {
        "id": "557a793c267687000a2708cb", 
        "email": "nithya@fractals.in", 
        "first_name": "Nithya", 
        "selectedbillrate": "1",
        "location": "557a7a8226768700092e626a",
        "firstdaywork": "2015-06-12T00:00:00", 
        "lastdaywork": "2015-07-22T00:00:00", 
        "utilizationtarget": "none", 
        "billrate": "1", 
        "discipline": "557a7a0526768700092e6262", 
        "role": "557a79f5267687000a2708cd"
    }
];
$scope.timetrack=[
    {
        "id": "557aa649e53b22000a78e750", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-17T00:00:00", 
        "values": 8        
    }, 
    {
        "id": "557aa649e53b2200093c79d6", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-28T00:00:00", 
        "values": 8
        
    }, 
    {
        "id": "557aa649e53b2200093c79d7", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-29T00:00:00", 
        "values": 8
        
    }, 
    {
        "id": "557aa64ae53b22000a78e751", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-18T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e752", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-19T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e753", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-20T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e754", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-21T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e755", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-22T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e756", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-23T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e757", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-24T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e758", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-25T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e759", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-26T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e75a", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-27T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e75b", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-28T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e75c", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-29T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79c5", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-11T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79c6", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-12T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79c7", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-13T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79c8", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-14T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79c9", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-15T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79ca", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-16T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79cb", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-17T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79cc", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-18T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79cd", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-19T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b22000a78e74a", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-11T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b22000a78e74b", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-12T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79ce", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-20T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79cf", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-21T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79d0", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-22T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79d1", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-23T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b22000a78e74c", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-13T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79d2", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-24T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b22000a78e74d", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-14T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79d3", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-25T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79d4", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-26T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b22000a78e74e", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-15T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79d5", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-27T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b22000a78e74f", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-16T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e761", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-11T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e762", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-12T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e763", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-13T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e764", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-14T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e765", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-15T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e766", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-16T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e767", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-17T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e768", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-18T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e769", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-19T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e76a", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-20T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e76b", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-21T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e76c", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-22T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e76d", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-23T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e76e", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-24T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e76f", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-25T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e770", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-26T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e771", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-27T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e772", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-28T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e773", 
         
        "projectname": "Expo", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-29T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79da", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-11T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79db", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-12T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79dc", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-13T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79dd", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-14T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79de", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-15T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79df", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-16T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e0", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-17T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e1", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-18T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e2", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-19T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e3", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-20T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e4", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-21T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e5", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-22T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e6", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-23T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e7", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-24T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e8", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-25T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e9", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-26T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79ea", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-27T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79eb", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-28T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79ec", 
         
        "projectname": "Expo", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-29T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79f0", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-11T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b2200093c79f1", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-12T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b2200093c79f2", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-13T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e777", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-11T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79f3", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-14T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b2200093c79f4", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-15T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e778", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-12T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b22000a78e779", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-13T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79f5", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-16T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b2200093c79f6", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-17T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e77a", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-14T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79f7", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-18T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e77b", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-15T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79f8", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-19T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b2200093c79f9", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-20T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e77c", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-16T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b22000a78e77d", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-17T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b22000a78e77e", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-18T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79fa", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-21T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b2200093c79fb", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-22T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e77f", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-19T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79fc", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-23T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e780", 
         
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-20T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79fd",  
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3",  
        "date": "2015-06-24T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e781",  
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0",  
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1",
        "date": "2015-06-21T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79fe",  
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0",
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3",
        "date": "2015-06-25T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e782", 
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "date": "2015-06-22T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b22000a78e783", 
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0",  
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "date": "2015-06-23T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79ff",  
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "date": "2015-06-26T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e784",  
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "date": "2015-06-24T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b22000a78e785",  
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "date": "2015-06-25T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c7a00",  
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "date": "2015-06-27T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e786", 
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0",
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "date": "2015-06-26T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c7a01", 
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "date": "2015-06-28T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e787", 
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1",
        "date": "2015-06-27T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c7a02", 
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0",
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "date": "2015-06-29T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e788", 
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1",
        "date": "2015-06-28T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b22000a78e789",  
        "projectname": "Expo", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6270", 
        "clientid": "557a7a76267687000a2708d5", 
        "clientname": "client2", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "date": "2015-06-29T00:00:00", 
        "values": 8
    },{
        "id": "557aa649e53b22000a78e750", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-17T00:00:00", 
        "values": 8        
    }, 
    {
        "id": "557aa649e53b2200093c79d6", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-28T00:00:00", 
        "values": 8
        
    }, 
    {
        "id": "557aa649e53b2200093c79d7", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-29T00:00:00", 
        "values": 8
        
    }, 
    {
        "id": "557aa64ae53b22000a78e751", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-18T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e752", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-19T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e753", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-20T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e754", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-21T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e755", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-22T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e756", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-23T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e757", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-24T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e758", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-25T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e759", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-26T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e75a", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-27T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e75b", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-28T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa64ae53b22000a78e75c", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-29T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79c5", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-11T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79c6", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-12T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79c7", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-13T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79c8", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-14T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79c9", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-15T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79ca", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-16T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79cb", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-17T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79cc", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-18T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79cd", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-19T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b22000a78e74a", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-11T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b22000a78e74b", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-12T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79ce", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-20T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79cf", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-21T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79d0", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-22T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79d1", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-23T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b22000a78e74c", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-13T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79d2", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-24T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b22000a78e74d", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-14T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79d3", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-25T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79d4", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-26T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b22000a78e74e", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-15T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b2200093c79d5", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-27T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa649e53b22000a78e74f", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-16T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e761", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-11T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e762", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-12T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e763", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-13T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e764", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-14T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e765", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-15T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e766", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-16T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e767", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-17T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e768", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-18T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e769", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-19T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e76a", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-20T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e76b", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-21T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e76c", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-22T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e76d", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-23T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e76e", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-24T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e76f", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-25T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e770", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-26T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e771", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-27T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e772", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-28T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa651e53b22000a78e773", 
         
        "projectname": "Expo1", 
        "mem_id": "557a793c267687000a2708cb", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-29T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79da", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-11T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79db", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-12T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79dc", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-13T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79dd", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-14T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79de", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-15T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79df", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-16T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e0", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-17T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e1", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-18T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e2", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-19T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e3", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-20T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e4", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-21T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e5", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-22T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e6", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-23T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e7", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-24T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e8", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-25T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79e9", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-26T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79ea", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-27T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79eb", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-28T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa65ee53b2200093c79ec", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7cf126768700092e62a1", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "null", 
        "editphasename": "null", 
         
        "date": "2015-06-29T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79f0", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-11T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b2200093c79f1", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-12T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b2200093c79f2", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-13T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e777", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-11T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79f3", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-14T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b2200093c79f4", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-15T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e778", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-12T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b22000a78e779", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-13T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79f5", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-16T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b2200093c79f6", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-17T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e77a", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-14T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79f7", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-18T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e77b", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-15T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79f8", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-19T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b2200093c79f9", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-20T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e77c", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-16T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b22000a78e77d", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-17T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b22000a78e77e", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-18T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79fa", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-21T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b2200093c79fb", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-22T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e77f", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-19T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79fc", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
         
        "date": "2015-06-23T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e780", 
         
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
         
        "date": "2015-06-20T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79fd",  
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3",  
        "date": "2015-06-24T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e781",  
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0",  
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1",
        "date": "2015-06-21T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79fe",  
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0",
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3",
        "date": "2015-06-25T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e782", 
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "date": "2015-06-22T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b22000a78e783", 
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0",  
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "date": "2015-06-23T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c79ff",  
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "date": "2015-06-26T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e784",  
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "date": "2015-06-24T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b22000a78e785",  
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "date": "2015-06-25T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c7a00",  
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "date": "2015-06-27T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e786", 
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0",
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "date": "2015-06-26T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c7a01", 
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "date": "2015-06-28T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e787", 
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1",
        "date": "2015-06-27T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b2200093c7a02", 
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0",
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "date": "2015-06-29T00:00:00", 
        "values": 16
    }, 
    {
        "id": "557aa66be53b22000a78e788", 
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1",
        "date": "2015-06-28T00:00:00", 
        "values": 8
    }, 
    {
        "id": "557aa66be53b22000a78e789",  
        "projectname": "Expo1", 
        "mem_id": "557a7d14267687000a2708f0", 
         
        "projectid": "557a7bda26768700092e6271", 
        "clientid": "557a7a76267687000a2708d1", 
        "clientname": "client1", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "date": "2015-06-29T00:00:00", 
        "values": 8
    }
];


$scope.expensetrack=[
   {
        "id": "557c0579ce67e0000ab0509d", 
        "editphaseid": "null", 
        "editphasename": "null", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "notes": "hiiii", 
        "amount": "50000", 
        "exp_userid": "557a7d14267687000a2708f0", 
        "date_update": "2015-06-04T00:00:00"
    }, 
    {
        "id": "557e618e43c9cd0009aa73ec", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "excatid": "557a7a3d26768700092e6265", 
        "excatname": "expense1", 
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "notes": "hgjghj", 
        "amount": "5000", 
        "exp_userid": "557a7d14267687000a2708f0", 
        "date_update": "2015-06-14T18:30:00" 
    }, 
    {
        "id": "557e61d243c9cd000a5155ce", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "notes": "kyyhh", 
        "amount": "600", 
        "exp_userid": "557a7d14267687000a2708f0", 
        "date_update": "2015-06-14T18:30:00"
    },
	{
        "id": "557c0579ce67e0000ab0509d", 
        "editphaseid": "null", 
        "editphasename": "null", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "notes": "erwdsfd", 
        "amount": "500", 
        "exp_userid": "557a7cf126768700092e62a1", 
        "date_update": "2015-06-14T00:00:00"
    }, 
    {
        "id": "557e618e43c9cd0009aa73ec", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "excatid": "557a7a3d26768700092e6265", 
        "excatname": "expense1", 
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "notes": "iuiui", 
        "amount": "3000", 
        "exp_userid": "557a7cf126768700092e62a1", 
        "date_update": "2015-06-18T18:30:00" 
    }, 
    {
        "id": "557e61d243c9cd000a5155ce", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "notes": "fgdtrt", 
        "amount": "580", 
        "exp_userid": "557a7cf126768700092e62a1", 
        "date_update": "2015-06-17T18:30:00"
    },
	{
        "id": "557c0579ce67e0000ab0509d", 
        "editphaseid": "null", 
        "editphasename": "null", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "notes": "ryry", 
        "amount": "500", 
        "exp_userid": "557a793c267687000a2708cb", 
        "date_update": "2015-07-20T00:00:00"
    }, 
    {
        "id": "557e618e43c9cd0009aa73ec", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "excatid": "557a7a3d26768700092e6265", 
        "excatname": "expense1", 
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "notes": "rtyrt", 
        "amount": "3000", 
        "exp_userid": "557a793c267687000a2708cb", 
        "date_update": "2015-05-11T18:30:00" 
    }, 
    {
        "id": "557e61d243c9cd000a5155ce", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "notes": "tryry", 
        "amount": "580", 
        "exp_userid": "557a793c267687000a2708cb", 
        "date_update": "2015-05-02T18:30:00"
    },
	{
        "id": "557c0579ce67e0000ab0509d", 
        "editphaseid": "null", 
        "editphasename": "null", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "notes": "wrqqew", 
        "amount": "59", 
        "exp_userid": "557a7d14267687000a2708f0", 
        "date_update": "2015-06-14T00:00:00"
    }, 
    {
        "id": "557e618e43c9cd0009aa73ec", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "excatid": "557a7a3d26768700092e6265", 
        "excatname": "expense1", 
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "notes": "rtyrt", 
        "amount": "50", 
        "exp_userid": "557a7d14267687000a2708f0", 
        "date_update": "2015-06-22T18:30:00" 
    }, 
    {
        "id": "557e61d243c9cd000a5155ce", 
        "editphaseid": "null", 
        "editphasename": "null", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "notes": "swtgegt", 
        "amount": "680", 
        "exp_userid": "557a7d14267687000a2708f0", 
        "date_update": "2015-06-20T18:30:00"
    },
	{
        "id": "557c0579ce67e0000ab0509d", 
        "editphaseid": "null", 
        "editphasename": "null", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "notes": "sdfsdf", 
        "amount": "590", 
        "exp_userid": "557a7cf126768700092e62a1", 
        "date_update": "2015-06-22T00:00:00"
    }, 
    {
        "id": "557e618e43c9cd0009aa73ec", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "excatid": "557a7a3d26768700092e6265", 
        "excatname": "expense1", 
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "notes": "sdfsdf", 
        "amount": "30", 
        "exp_userid": "557a7cf126768700092e62a1", 
        "date_update": "2015-06-25T18:30:00" 
    }, 
    {
        "id": "557e61d243c9cd000a5155ce", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6270", 
        "projectname": "Expo", 
        "notes": "sdfsd", 
        "amount": "3000", 
        "exp_userid": "557a7cf126768700092e62a1", 
        "date_update": "2015-06-27T18:30:00"
    },   {
        "id": "557c0579ce67e0000ab0509d", 
        "editphaseid": "null", 
        "editphasename": "null", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "notes": "hiiii", 
        "amount": "5", 
        "exp_userid": "557a7d14267687000a2708f0", 
        "date_update": "2015-06-04T00:00:00"
    }, 
    {
        "id": "557e618e43c9cd0009aa73ec", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "excatid": "557a7a3d26768700092e6265", 
        "excatname": "expense1", 
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "notes": "hgjghj", 
        "amount": "5", 
        "exp_userid": "557a7d14267687000a2708f0", 
        "date_update": "2015-06-14T18:30:00" 
    }, 
    {
        "id": "557e61d243c9cd000a5155ce", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "notes": "kyyhh", 
        "amount": "6", 
        "exp_userid": "557a7d14267687000a2708f0", 
        "date_update": "2015-06-14T18:30:00"
    },
	/*{
        "id": "557c0579ce67e0000ab0509d", 
        "editphaseid": "null", 
        "editphasename": "null", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "notes": "erwdsfd", 
        "amount": "5", 
        "exp_userid": "557a7cf126768700092e62a1", 
        "date_update": "2015-06-14T00:00:00"
    }, 
    {
        "id": "557e618e43c9cd0009aa73ec", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "excatid": "557a7a3d26768700092e6265", 
        "excatname": "expense1", 
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "notes": "iuiui", 
        "amount": "3000", 
        "exp_userid": "557a7cf126768700092e62a1", 
        "date_update": "2015-06-18T18:30:00" 
    }, 
    {
        "id": "557e61d243c9cd000a5155ce", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "notes": "fgdtrt", 
        "amount": "5", 
        "exp_userid": "557a7cf126768700092e62a1", 
        "date_update": "2015-06-17T18:30:00"
    },*/
	{
        "id": "557c0579ce67e0000ab0509d", 
        "editphaseid": "null", 
        "editphasename": "null", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "notes": "ryry", 
        "amount": "5", 
        "exp_userid": "557a793c267687000a2708cb", 
        "date_update": "2015-07-20T00:00:00"
    }, 
    {
        "id": "557e618e43c9cd0009aa73ec", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "excatid": "557a7a3d26768700092e6265", 
        "excatname": "expense1", 
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "notes": "rtyrt", 
        "amount": "3", 
        "exp_userid": "557a793c267687000a2708cb", 
        "date_update": "2015-05-11T18:30:00" 
    }, 
    {
        "id": "557e61d243c9cd000a5155ce", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "notes": "tryry", 
        "amount": "5", 
        "exp_userid": "557a793c267687000a2708cb", 
        "date_update": "2015-05-02T18:30:00"
    },
	{
        "id": "557c0579ce67e0000ab0509d", 
        "editphaseid": "null", 
        "editphasename": "null", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "notes": "wrqqew", 
        "amount": "5", 
        "exp_userid": "557a7d14267687000a2708f0", 
        "date_update": "2015-06-14T00:00:00"
    }, 
    {
        "id": "557e618e43c9cd0009aa73ec", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "excatid": "557a7a3d26768700092e6265", 
        "excatname": "expense1", 
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "notes": "rtyrt", 
        "amount": "5", 
        "exp_userid": "557a7d14267687000a2708f0", 
        "date_update": "2015-06-22T18:30:00" 
    }, 
    {
        "id": "557e61d243c9cd000a5155ce", 
        "editphaseid": "null", 
        "editphasename": "null", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "notes": "swtgegt", 
        "amount": "6", 
        "exp_userid": "557a7d14267687000a2708f0", 
        "date_update": "2015-06-20T18:30:00"
    }/*,
	{
        "id": "557c0579ce67e0000ab0509d", 
        "editphaseid": "null", 
        "editphasename": "null", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "notes": "sdfsdf", 
        "amount": "5", 
        "exp_userid": "557a7cf126768700092e62a1", 
        "date_update": "2015-06-22T00:00:00"
    }, 
    {
        "id": "557e618e43c9cd0009aa73ec", 
        "editphaseid": "557aa5f5e53b2200093c79c1", 
        "editphasename": "phase1", 
        "excatid": "557a7a3d26768700092e6265", 
        "excatname": "expense1", 
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "notes": "sdfsdf", 
        "amount": "3", 
        "exp_userid": "557a7cf126768700092e62a1", 
        "date_update": "2015-06-25T18:30:00" 
    }, 
    {
        "id": "557e61d243c9cd000a5155ce", 
        "editphaseid": "557aa5f7e53b2200093c79c2", 
        "editphasename": "phase3", 
        "excatid": "557a7a4726768700092e6266", 
        "excatname": "expense2", 
        "projectid": "557a7bda26768700092e6271", 
        "projectname": "Expo1", 
        "notes": "sdfsd", 
        "amount": "3", 
        "exp_userid": "557a7cf126768700092e62a1", 
        "date_update": "2015-06-27T18:30:00"
    }*/
]
/*****************  **** End ****   ************************************/
/************************** Base Link************************************/
  /****** Time Track Link start*******/
//Fetch Unique Member and Delete Dublicate
function arrUnique1(arr) {
    var cleaned = [];
    $scope.Member.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

$scope.newuniqueMember = arrUnique1($scope.Member);

// Find Member Id

var Member_Id = [];
var idsSeen = {}, idSeenValue = {};
for (var i = 0, len = $scope.newuniqueMember.length, member_id; i < len; ++i) {
    member_id = $scope.newuniqueMember[i].member_id;
    if (idsSeen[member_id] !== idSeenValue) {
         Member_Id.push({member_id:$scope.newuniqueMember[i].member_id,member_name:$scope.newuniqueMember[i].member_name,member_name:$scope.newuniqueMember[i].member_name});
        idsSeen[member_id] = idSeenValue;
    }
}

/*
var timetrack_member = $scope.timetrack.map(function(v){

    var ret;

    $.each($scope.newuniqueMember, function(k, v2){

        if(v2.member_id === v.mem_id && v2.projectid === v.projectid && v2.editphaseid === v.editphaseid){
            ret = $.extend({}, v2, v); // merge the objects in to a new one
            return false; // break the loop
        } 
		

    });

    return ret;

}); */

    var timetrack_member = _.map($scope.timetrack, function(base){
        return _.extend(base, _.findWhere($scope.newuniqueMember, { member_id: base.mem_id,editphaseid: base.editphaseid, projectid: base.projectid} ));
    });



	var timetrack=[];
	var timetrack1=[];
//Find time_incurred and time_future_sheduled from concat(timetracktable and member table)
for(var i = 0; i<timetrack_member.length; i++) {
	var time_future_sheduled=0;
	var time_incurred=0;
	var diffrentfrom_past=0;
	
       // var date1=new Date(timetrack_member[i].date);
        var date1=new Date(timetrack_member[i].date);
		var date = moment(date1).format('MM-DD-YYYY');
        var fdate1=new Date(date);
        var moments=new Date(moment().format('MM-DD-YYYY'));
	

		if(moment(moments).isSame(fdate1))
		{
			
			time_future_sheduled=timetrack_member[i].values;
			
			
		}

	  else if(moment(moments).isBefore(fdate1))
		{
			
			time_future_sheduled=timetrack_member[i].values;
		}
		
	  else if(moment(moments).isAfter(fdate1) && moment(moments).isSame(fdate1)==false)
		{
			
			time_incurred=timetrack_member[i].values;
		}	  
		

		else{
			time_incurred=0;
			time_future_sheduled=0;
			
		} 

		
     timetrack.push({timetrackkid:timetrack_member[i].id,member_id:timetrack_member[i].member_id,member_name:timetrack_member[i].member_name,projectid:timetrack_member[i].projectid,projectname:timetrack_member[i].projectname,editphaseid:timetrack_member[i].editphaseid,editphasename:timetrack_member[i].editphasename,Date:timetrack_member[i].date,time_future_sheduled:time_future_sheduled,time_incurred:time_incurred,memstartdate:timetrack_member[i].memstartdate,memenddate:timetrack_member[i].memenddate,clientid:timetrack_member[i].clientid,clientname:timetrack_member[i].clientname})
	}
	

for(var i = 0; i<timetrack_member.length; i++) {

	   var diffrentfrom_past=0;
	
        var date1=new Date(timetrack_member[i].date);
        var startdate1=new Date(timetrack_member[i].memstartdate);
		var date = moment(date1).format('MM-DD-YYYY');
		var startdate = moment(startdate1).format('MM-DD-YYYY');


	    if(moment(new Date(startdate)).isAfter(new Date(date)))
		{
			var data=(timetrack_member[i].values-8);

			diffrentfrom_past=data;
			
		}
		

		timetrack1.push({diffrentfrom_past:diffrentfrom_past,member_id:timetrack_member[i].member_id,projectid:timetrack_member[i].projectid,editphaseid:timetrack_member[i].editphaseid,member_name:timetrack_member[i].member_name,timetrackkid:timetrack_member[i].timetrackkid,})
	
		
     
	}
	
	var Timetrack_modified_details = timetrack.map(function(v){

    var ret;

    $.each(timetrack1, function(k, v2){

        if(v2.member_id === v.member_id && v2.projectid === v.projectid && v2.editphaseid === v.editphaseid){
            ret = $.extend({}, v2, v); // merge the objects in to a new one
            return false; // break the loop
        }
		

    });

    return ret;

});

$scope.finalcalculatedtimetrack=Timetrack_modified_details;
/****** Time Track Link End*******/
/****** Expense Track Link start*******/


	var ExpenseTrack_modified_details = $scope.expensetrack.map(function(v){

    var ret;

    $.each(Member_Id, function(k, v2){

	
        if(v2.member_id === v.exp_userid){
            ret = $.extend({}, v2, v); // merge the objects in to a new one
            return false; // break the loop
        }
		

    });

    return ret;

});

$scope.finalcalculatedexpensetrack=ExpenseTrack_modified_details;

/****** Expense Track Link end*******/

/****** Available Track Link start*******/

		var aMember_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = $scope.Member.length, id; i < len; ++i) {
			id = $scope.Member[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				aMember_Id.push({id:$scope.Member[i].member_id,displayname:$scope.Member[i].member_name});

				idsSeen[id] = idSeenValue;
			}
		}
		

	var availabletimetrack=[];


for(var i=0; i<aMember_Id.length;i++)
{
    
	 var ab=[];
   for(var z=0; z<$scope.userprofile.length;z++)
			{
				if(aMember_Id[i].id==$scope.userprofile[z].id)
				{
				
					var firstdaywork=new Date($scope.userprofile[z].firstdaywork)
					var lastdaywork=new Date($scope.userprofile[z].lastdaywork)
	
					
					var etdate= moment(lastdaywork)
					var stdate=moment(firstdaywork)
					var  diffdates = etdate.diff( stdate, 'days')+1;

					
				
					
					for(var k=1;k<=diffdates;k++)
					{
						var a = moment(stdate).subtract(1, 'day');
						var b = moment(a).add(k, 'day');
						ab.push({Date:b._d.toJSON(),availablehour:8,member_id:$scope.userprofile[z].id,member_name:$scope.userprofile[z].first_name,targetutilization:$scope.userprofile[z].first_name});
					}
					availabletimetrack.push(ab)
					
				}
			
			}
	
}

$scope.availabletimetrack=availabletimetrack;


var c=[];
for(var i=0; i<aMember_Id.length;i++)
{
	var m=[];
	  for(var j=0; j<$scope.timetrack.length;j++)
					{
					if(aMember_Id[i].id==$scope.timetrack[j].mem_id)
					m.push({actualhours:$scope.timetrack[j].values,mem_id:$scope.timetrack[j].mem_id,projectid:$scope.timetrack[j].projectid,projectname:$scope.timetrack[j].projectname,clientid:$scope.timetrack[j].clientid,clientname:$scope.timetrack[j].clientname,editphaseid:$scope.timetrack[j].editphaseid,date:$scope.timetrack[j].date})	
						
					}
	c.push(m)
}

$scope.actualtimetrack=c;



/****** Available Track Link end*******/

$scope.select_project = function(viewstate1,viewstate2) {


$scope.ViewState=viewstate1;
$scope.ViewState2=viewstate2;

if($scope.ViewState)
{




  if($scope.ViewState=="Expenses")
  {
	  
	  
	  $scope.Final_TwoBillRateResult=[];
	  $scope.Final_GroupByBillRateResult=[];
	  $scope.Final_GroupByResult=[];
      $scope.Final_GroupByResultBudget=[];
	  $scope.Finaldisplaytimetrack=[];
	  $scope.Finaldisplayexpensetrack=[];
	  $scope.expenseResultBudget=[];
	  $scope.TimeResultBudget=[];
	  



		$scope.Project=[
		{projectname:"",id:0},
		{projectname:"Team Member",id:1},
		{projectname:"Client",id:2},
		{projectname:"Project",id:3},
		{projectname:"Role",id:4},
		{projectname:"Discipline",id:5},
		{projectname:"Date String",id:6},
		{projectname:"Location",id:7},
		{projectname:"Category",id:8},
		{projectname:"Phase Name",id:9}];	




 $scope.select_firstGroupby = function(firstGroupby,index) {


	$scope.Then_groupby=[
		{projectname:"",id:0},
		{projectname:"Team Member",id:1},
		{projectname:"Client",id:2},
		{projectname:"Project",id:3},
		{projectname:"Role",id:4},
		{projectname:"Discipline",id:5},
		{projectname:"Date String",id:6},
		{projectname:"Location",id:7},
		{projectname:"Category",id:8},
		{projectname:"Phase Name",id:9}];	

  $scope.Then_groupby.splice(index,1);

  $scope.GroupbyFirst=firstGroupby;

 if($scope.GroupbyFirst!="None")
  {

	
if($scope.GroupbyFirst=="Project")
{

/****Get Project Id******/

var Project_Id = [];
var idsSeen = {}, idSeenValue = {};
for (var i = 0, len = $scope.Finalprojects.length, id; i < len; ++i) {
    id = $scope.Finalprojects[i].id;
    if (idsSeen[id] !== idSeenValue) {
         Project_Id.push({id:$scope.Finalprojects[i].id,displayname:$scope.Finalprojects[i].project_name,budget:$scope.Finalprojects[i].total_expense_budget});
        idsSeen[id] = idSeenValue;
    }
} 
	

	
	
var Final_GroupByResult=[]

for(var z=0; z<Project_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Project_Id[z].id===$scope.finalcalculatedexpensetrack[i].projectid)
		{
			
			var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;

			
			
		}
			
			
		}
		var m=[];
		var budget=parseInt(Project_Id[z].budget);
Final_GroupByResult.push({time_incurred:time_incurred,id:Project_Id[z].id,displayname:Project_Id[z].displayname,budget:budget,then:m})

	

	
}	
	


var Finaldisplayexpensetrack=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length; i++)
			{
				
			var time_incurred=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			
	Finaldisplayexpensetrack.push({Date:$scope.finalcalculatedexpensetrack[i].date_update,editphaseid:$scope.finalcalculatedexpensetrack[i].editphaseid,editphasename:$scope.finalcalculatedexpensetrack[i].editphasename,member_id:$scope.finalcalculatedexpensetrack[i].member_id,member_name:$scope.finalcalculatedexpensetrack[i].member_name,displayid:$scope.finalcalculatedexpensetrack[i].projectid,displayname:$scope.finalcalculatedexpensetrack[i].projectname,time_incurred:time_incurred,category:$scope.finalcalculatedexpensetrack[i].excatname,categoryid:$scope.finalcalculatedexpensetrack[i].excatid,notes:$scope.finalcalculatedexpensetrack[i].notes});		
				
			}

$scope.Final_GroupByResult=Final_GroupByResult;
$scope.Finaldisplayexpensetrack=Finaldisplayexpensetrack;

console.log(Final_GroupByResult)

}

if($scope.GroupbyFirst=="Client")
{


/****Get Project Id******/


var Client_Id = [];
var idsSeen = {}, idSeenValue = {};
for (var i = 0, len = $scope.Finalprojects.length, id; i < len; ++i) {
    id = $scope.Finalprojects[i].id;
    if (idsSeen[id] !== idSeenValue) {
         Client_Id.push({id:$scope.Finalprojects[i].clientid,displayname:$scope.Finalprojects[i].client_name,budget:$scope.Finalprojects[i].total_expense_budget});
        idsSeen[id] = idSeenValue;
    }
} 

  var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

/********** Get First Data For firstGroupby************/

var Final_GroupByResult=[]

for(var z=0; z<Client_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Client_Id[z].id===FinalpreResult[i].clientid)
		{
			
			var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;

			
			
		}
			
			
		}
var m=[];
		var budget=parseInt(Client_Id[z].budget);
Final_GroupByResult.push({time_incurred:time_incurred,id:Client_Id[z].id,displayname:Client_Id[z].displayname,budget:budget,then:m})	

	
}

 

var Finaldisplayexpensetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
			{
				
			var time_incurred=parseInt(FinalpreResult[i].amount);
			
	Finaldisplayexpensetrack.push({Date:FinalpreResult[i].date_update,editphaseid:FinalpreResult[i].editphaseid,editphasename:FinalpreResult[i].editphasename,member_id:FinalpreResult[i].member_id,member_name:FinalpreResult[i].member_name,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_incurred:time_incurred,category:FinalpreResult[i].excatname,categoryid:$scope.finalcalculatedexpensetrack[i].excatid,notes:FinalpreResult[i].notes,displayid:FinalpreResult[i].clientid,displayname:FinalpreResult[i].client_name});		
				
			}

$scope.Final_GroupByResult=Final_GroupByResult;
$scope.Finaldisplayexpensetrack=Finaldisplayexpensetrack;

	
}
if($scope.GroupbyFirst=="Team Member")
{
	

    var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

			var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:FinalpreResult[i].member_id,displayname:FinalpreResult[i].member_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}



 var Final_GroupByResult=[]


for(var z=0; z<Member_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Member_Id[z].id===$scope.finalcalculatedexpensetrack[i].member_id)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;
var m=[];

Final_GroupByResult.push({time_incurred:time_incurred,id:Member_Id[z].id,displayname:Member_Id[z].displayname,budget:budget,then:m})

	

	
}



var Finaldisplayexpensetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
			{
				
			var time_incurred=parseInt(FinalpreResult[i].amount);
			
	Finaldisplayexpensetrack.push({Date:FinalpreResult[i].date_update,editphaseid:FinalpreResult[i].editphaseid,editphasename:FinalpreResult[i].editphasename,displayid:FinalpreResult[i].member_id,displayname:FinalpreResult[i].member_name,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_incurred:time_incurred,category:FinalpreResult[i].excatname,categoryid:$scope.finalcalculatedexpensetrack[i].excatid,notes:FinalpreResult[i].notes,clientid:FinalpreResult[i].clientid,client_name:FinalpreResult[i].client_name});		
				
			}

$scope.Final_GroupByResult=Final_GroupByResult;
$scope.Finaldisplayexpensetrack=Finaldisplayexpensetrack;

	
}

if($scope.GroupbyFirst=="Date String")
{


var Dateall=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
{

		var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
Dateall.push({id:date,Date:date});

}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);


var Final_GroupByResult=[]


for(var z=0; z<Date_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			
		var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
		
		if(Date_Id[z].id===date)
		{
			
	var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
	
		}
			
		}

		var budget=0;
		$scope.budget=0;
        var m=[];

Final_GroupByResult.push({time_incurred:time_incurred,id:Date_Id[z].id,displayname:Date_Id[z].Date,budget:budget,then:m})

	

	
}


var Finaldisplayexpensetrack=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length; i++)
			{
					var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
	
			var time_incurred=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			
	Finaldisplayexpensetrack.push({displayid:date,Date:date,editphaseid:$scope.finalcalculatedexpensetrack[i].editphaseid,editphasename:$scope.finalcalculatedexpensetrack[i].editphasename,member_id:$scope.finalcalculatedexpensetrack[i].member_id,member_name:$scope.finalcalculatedexpensetrack[i].member_name,projectid:$scope.finalcalculatedexpensetrack[i].projectid,projectname:$scope.finalcalculatedexpensetrack[i].projectname,time_incurred:time_incurred,category:$scope.finalcalculatedexpensetrack[i].excatname,categoryid:$scope.finalcalculatedexpensetrack[i].excatid,notes:$scope.finalcalculatedexpensetrack[i].notes});	

	
			}
$scope.Final_GroupByResult=Final_GroupByResult;	
$scope.Finaldisplayexpensetrack=Finaldisplayexpensetrack;	


}
if($scope.GroupbyFirst=="Category")
{



    var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

			var Catall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].excatid;
			if (idsSeen[id] !== idSeenValue) {
				Catall.push({id:FinalpreResult[i].excatid,displayname:FinalpreResult[i].excatname,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniqueCat_Id(arr) {
    var cleaned = [];
    Catall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Cat_Id = arrUniqueCat_Id(Catall);


var Final_GroupByResult=[]


for(var z=0; z<Cat_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Cat_Id[z].id===$scope.finalcalculatedexpensetrack[i].excatid)
		{
			
	var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
	
		}
			
		}

		var budget=0;
	    $scope.budget=0;
	    var m=[];


Final_GroupByResult.push({time_incurred:time_incurred,id:Cat_Id[z].id,displayname:Cat_Id[z].displayname,budget:budget,then:m})

	

	
}


var Finaldisplayexpensetrack=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length; i++)
			{
		
			var time_incurred=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			
	Finaldisplayexpensetrack.push({displayid:$scope.finalcalculatedexpensetrack[i].excatid,Date:$scope.finalcalculatedexpensetrack[i].date_update,editphaseid:$scope.finalcalculatedexpensetrack[i].editphaseid,editphasename:$scope.finalcalculatedexpensetrack[i].editphasename,member_id:$scope.finalcalculatedexpensetrack[i].member_id,member_name:$scope.finalcalculatedexpensetrack[i].member_name,projectid:$scope.finalcalculatedexpensetrack[i].projectid,projectname:$scope.finalcalculatedexpensetrack[i].projectname,time_incurred:time_incurred,category:$scope.finalcalculatedexpensetrack[i].excatname,notes:$scope.finalcalculatedexpensetrack[i].notes});	

	
			}
$scope.Final_GroupByResult=Final_GroupByResult;	
$scope.Finaldisplayexpensetrack=Finaldisplayexpensetrack;	


}
if($scope.GroupbyFirst=="Phase Name")
{



    var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

			var Phaseall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phaseall.push({id:FinalpreResult[i].editphaseid,displayname:FinalpreResult[i].editphasename,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniquePhase(arr) {
    var cleaned = [];
    Phaseall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Phase_Id = arrUniquePhase(Phaseall);



var Final_GroupByResult=[]


for(var z=0; z<Phase_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Phase_Id[z].id===$scope.finalcalculatedexpensetrack[i].editphaseid)
		{
			
	var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
	
		}
			
		}

		var budget=0;
		var m=[];
	$scope.budget=0;
	


Final_GroupByResult.push({time_incurred:time_incurred,id:Phase_Id[z].id,displayname:Phase_Id[z].displayname,budget:budget,then:m})



	
}


var Finaldisplayexpensetrack=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length; i++)
			{
		
			var time_incurred=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			
	Finaldisplayexpensetrack.push({excatid:$scope.finalcalculatedexpensetrack[i].excatid,Date:$scope.finalcalculatedexpensetrack[i].date_update,displayid:$scope.finalcalculatedexpensetrack[i].editphaseid,editphasename:$scope.finalcalculatedexpensetrack[i].editphasename,member_id:$scope.finalcalculatedexpensetrack[i].member_id,member_name:$scope.finalcalculatedexpensetrack[i].member_name,projectid:$scope.finalcalculatedexpensetrack[i].projectid,projectname:$scope.finalcalculatedexpensetrack[i].projectname,time_incurred:time_incurred,category:$scope.finalcalculatedexpensetrack[i].excatname,notes:$scope.finalcalculatedexpensetrack[i].notes});	

	
			}
$scope.Final_GroupByResult=Final_GroupByResult;	
$scope.Finaldisplayexpensetrack=Finaldisplayexpensetrack;	


}

if($scope.GroupbyFirst=="Location")
{
	


     var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });



    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });

			var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}
		


		
var Final_GroupByResult=[]


for(var z=0; z<Location_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Location_Id[z].id===FinalpreResult[i].location)
		{
			
	var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			
			
		}
			
			
		}
		var budget=0;
		var m=[];
	$scope.budget=0;
	


Final_GroupByResult.push({time_incurred:time_incurred,id:Location_Id[z].id,displayname:Location_Id[z].displayname,budget:budget,then:m})
}

var Finaldisplayexpensetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
			{
				
		var time_incurred=parseInt(FinalpreResult[i].amount);		
		Finaldisplayexpensetrack.push({excatid:FinalpreResult[i].excatid,Date:FinalpreResult[i].date_update,displayid:FinalpreResult[i].location,editphasename:FinalpreResult[i].editphasename,member_id:FinalpreResult[i].member_id,member_name:FinalpreResult[i].member_name,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_incurred:time_incurred,category:FinalpreResult[i].excatname,notes:FinalpreResult[i].notes});			
				
			}


$scope.Final_GroupByResult=Final_GroupByResult;	
$scope.Finaldisplayexpensetrack=Finaldisplayexpensetrack;		
	

}


if($scope.GroupbyFirst=="Role")
{
	

    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });


			var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}
		


		
var Final_GroupByResult=[]


for(var z=0; z<Role_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Role_Id[z].id===FinalpreResult[i].role)
		{
			
	var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			
			
		}
			
			
		}
		var budget=0;
		var m=[];
	$scope.budget=0;
	


Final_GroupByResult.push({time_incurred:time_incurred,id:Role_Id[z].id,displayname:Role_Id[z].displayname,budget:budget,then:m})
}

var Finaldisplayexpensetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
			{
				
		var time_incurred=parseInt(FinalpreResult[i].amount);		
		Finaldisplayexpensetrack.push({excatid:FinalpreResult[i].excatid,Date:FinalpreResult[i].date_update,displayid:FinalpreResult[i].role,editphasename:FinalpreResult[i].editphasename,member_id:FinalpreResult[i].member_id,member_name:FinalpreResult[i].member_name,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_incurred:time_incurred,category:FinalpreResult[i].excatname,notes:FinalpreResult[i].notes});			
				
			}


$scope.Final_GroupByResult=Final_GroupByResult;	
$scope.Finaldisplayexpensetrack=Finaldisplayexpensetrack;		
	

}

if($scope.GroupbyFirst=="Discipline")
{
	

    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });



    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });

			var Discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}
		


		
var Final_GroupByResult=[]


for(var z=0; z<Discipline_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Discipline_Id[z].id===FinalpreResult[i].discipline)
		{
			
	var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			
			
		}
			
			
		}
		var budget=0;
		var m=[];
	$scope.budget=0;
	


Final_GroupByResult.push({time_incurred:time_incurred,id:Discipline_Id[z].id,displayname:Discipline_Id[z].displayname,budget:budget,then:m})
}

var Finaldisplayexpensetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
			{
				
		var time_incurred=parseInt(FinalpreResult[i].amount);		
		Finaldisplayexpensetrack.push({excatid:FinalpreResult[i].excatid,Date:FinalpreResult[i].date_update,displayid:FinalpreResult[i].discipline,editphasename:FinalpreResult[i].editphasename,member_id:FinalpreResult[i].member_id,member_name:FinalpreResult[i].member_name,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_incurred:time_incurred,category:FinalpreResult[i].excatname,notes:FinalpreResult[i].notes});			
				
			}


$scope.Final_GroupByResult=Final_GroupByResult;	
$scope.Finaldisplayexpensetrack=Finaldisplayexpensetrack;		
	

}
      



  }

  $scope.select_Groupby = function(thenGroupby) {

  $scope.Groupby=thenGroupby;


//----------------------------------------------------------------------------

  if($scope.GroupbyFirst=="Project" && $scope.Groupby!="None")
  {

	  
 if($scope.Groupby=="Team Member")
	  {
		  
		  	
var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });
	
var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:FinalpreResult[i].member_id,displayname:FinalpreResult[i].member_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}

var Project_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Project_Id.push({id:FinalpreResult[i].projectid});

				idsSeen[id] = idSeenValue;
			}
		}

 var m=[]
 var m1=[]

for(var y=0; y<Project_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Member_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Member_Id[z].id===$scope.finalcalculatedexpensetrack[i].member_id && Project_Id[y].id===$scope.finalcalculatedexpensetrack[i].id)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Member_Id[z].id,thenid:Project_Id[y].id,displayname:Member_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Project_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }
	  
 if($scope.Groupby=="Client")
	  {
		  	
var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });
	
var Client_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].clientid;
			if (idsSeen[id] !== idSeenValue) {
				Client_Id.push({id:FinalpreResult[i].clientid,displayname:FinalpreResult[i].client_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		
		

var Project_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Project_Id.push({id:FinalpreResult[i].projectid});

				idsSeen[id] = idSeenValue;
			}
		}

		

 var m1=[]

for(var y=0; y<Project_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Client_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Client_Id[z].id===$scope.finalcalculatedexpensetrack[i].clientid && Project_Id[y].id===$scope.finalcalculatedexpensetrack[i].id)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Client_Id[z].id,thenid:Project_Id[y].id,displayname:Client_Id[z].displayname,budget:budget})

	

}

m1.push({id:Project_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }	  
	  
 if($scope.Groupby=="Role")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });


			var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}

var Project_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Project_Id.push({id:FinalpreResult[i].projectid});

				idsSeen[id] = idSeenValue;
			}
		}
		
	
	console.log(FinalpreResult)
		

 var m=[]
 var m1=[]

for(var y=0; y<Project_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Role_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Role_Id[z].id===FinalpreResult[i].role && Project_Id[y].id===FinalpreResult[i].projectid)
		{
			

	       var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Role_Id[z].id,thenid:Project_Id[y].id,displayname:Role_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Project_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }
	  
 if($scope.Groupby=="Discipline")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });


			var Discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}

var Project_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Project_Id.push({id:FinalpreResult[i].projectid});

				idsSeen[id] = idSeenValue;
			}
		}
		
	
	
		

 var m=[]
 var m1=[]

for(var y=0; y<Project_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Discipline_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Discipline_Id[z].id===FinalpreResult[i].discipline && Project_Id[y].id===FinalpreResult[i].projectid)
		{
			

	       var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Discipline_Id[z].id,thenid:Project_Id[y].id,displayname:Discipline_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Project_Id[y].id,d:thenFinal_GroupByResult});

}



var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }
	  
 if($scope.Groupby=="Location")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });


			var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}

var Project_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Project_Id.push({id:FinalpreResult[i].projectid});

				idsSeen[id] = idSeenValue;
			}
		}
		
	
	
		

 var m=[]
 var m1=[]

for(var y=0; y<Project_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Location_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Location_Id[z].id===FinalpreResult[i].location && Project_Id[y].id===FinalpreResult[i].projectid)
		{
			

	       var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Location_Id[z].id,thenid:Project_Id[y].id,displayname:Location_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Project_Id[y].id,d:thenFinal_GroupByResult});

}



var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }	  

	   if($scope.Groupby=="Phase Name")
	  {
		  
		  

    var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

			var Phaseall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phaseall.push({id:FinalpreResult[i].editphaseid,displayname:FinalpreResult[i].editphasename,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniquePhase(arr) {
    var cleaned = [];
    Phaseall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Phase_Id = arrUniquePhase(Phaseall);


var Project_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Project_Id.push({id:FinalpreResult[i].projectid});

				idsSeen[id] = idSeenValue;
			}
		}

		

 var m1=[]

for(var y=0; y<Project_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Phase_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Phase_Id[z].id===$scope.finalcalculatedexpensetrack[i].editphaseid && Project_Id[y].id===$scope.finalcalculatedexpensetrack[i].id)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Phase_Id[z].id,thenid:Project_Id[y].id,displayname:Phase_Id[z].displayname,budget:budget})

	

}

m1.push({id:Project_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;

	  }
	  
if($scope.Groupby=="Category")
{
	
	 var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

			var Catall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].excatid;
			if (idsSeen[id] !== idSeenValue) {
				Catall.push({id:FinalpreResult[i].excatid,displayname:FinalpreResult[i].excatname,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniqueCat_Id(arr) {
    var cleaned = [];
    Catall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Cat_Id = arrUniqueCat_Id(Catall);


var Project_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Project_Id.push({id:FinalpreResult[i].projectid});

				idsSeen[id] = idSeenValue;
			}
		}

		

 var m1=[]

for(var y=0; y<Project_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Cat_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Cat_Id[z].id===$scope.finalcalculatedexpensetrack[i].excatid && Project_Id[y].id===$scope.finalcalculatedexpensetrack[i].id)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Cat_Id[z].id,thenid:Project_Id[y].id,displayname:Cat_Id[z].displayname,budget:budget})

	

}

m1.push({id:Project_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


}
if($scope.Groupby=="Date String")
{
	
	
var Dateall=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
{

		var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
Dateall.push({id:date,Date:date});

}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);

var Project_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = $scope.finalcalculatedexpensetrack.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Project_Id.push({id:$scope.finalcalculatedexpensetrack[i].projectid});

				idsSeen[id] = idSeenValue;
			}
		}

		

 var m1=[]

for(var y=0; y<Project_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Date_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			
	var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
		
		if(Date_Id[z].id===date && Project_Id[y].id===$scope.finalcalculatedexpensetrack[i].id)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Date_Id[z].id,thenid:Project_Id[y].id,displayname:Date_Id[z].Date,budget:budget})

	

}

m1.push({id:Project_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



}
  }
//----------------------------------------------------------------------
    if($scope.GroupbyFirst=="Client" && $scope.Groupby!="None")
  {

	  
 if($scope.Groupby=="Team Member")
	  {
		  
		  	
var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });
	
var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:FinalpreResult[i].member_id,displayname:FinalpreResult[i].member_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}

var Client_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].clientid;
			if (idsSeen[id] !== idSeenValue) {
				Client_Id.push({id:FinalpreResult[i].clientid});

				idsSeen[id] = idSeenValue;
			}
		}

 var m=[]
 var m1=[]

for(var y=0; y<Client_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Member_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Member_Id[z].id===$scope.finalcalculatedexpensetrack[i].member_id && Client_Id[y].id===$scope.finalcalculatedexpensetrack[i].clientid)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Member_Id[z].id,thenid:Client_Id[y].id,displayname:Member_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Client_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }

 if($scope.Groupby=="Project")
	  {
		  
		  	
var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });
	
var Project_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Project_Id.push({id:FinalpreResult[i].projectid,displayname:FinalpreResult[i].project_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}

var Client_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].clientid;
			if (idsSeen[id] !== idSeenValue) {
				Client_Id.push({id:FinalpreResult[i].clientid});

				idsSeen[id] = idSeenValue;
			}
		}

 var m=[]
 var m1=[]

for(var y=0; y<Client_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Project_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Project_Id[z].id===$scope.finalcalculatedexpensetrack[i].projectid && Client_Id[y].id===$scope.finalcalculatedexpensetrack[i].clientid)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Project_Id[z].id,thenid:Client_Id[y].id,displayname:Project_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Client_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }	  
  
	  
 if($scope.Groupby=="Role")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });


			var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}

var Client_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].clientid;
			if (idsSeen[id] !== idSeenValue) {
				Client_Id.push({id:FinalpreResult[i].clientid});

				idsSeen[id] = idSeenValue;
			}
		}
		
	
		

 var m=[]
 var m1=[]

for(var y=0; y<Client_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Role_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Role_Id[z].id===FinalpreResult[i].role && Client_Id[y].id===FinalpreResult[i].clientid)
		{
			

	       var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Role_Id[z].id,thenid:Client_Id[y].id,displayname:Role_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Client_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }
	  
 if($scope.Groupby=="Discipline")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });


			var Discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}

var Client_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].clientid;
			if (idsSeen[id] !== idSeenValue) {
				Client_Id.push({id:FinalpreResult[i].clientid});

				idsSeen[id] = idSeenValue;
			}
		}
		
	
	
		

 var m=[]
 var m1=[]

for(var y=0; y<Client_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Discipline_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Discipline_Id[z].id===FinalpreResult[i].discipline && Client_Id[y].id===FinalpreResult[i].clientid)
		{
			

	       var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Discipline_Id[z].id,thenid:Client_Id[y].id,displayname:Discipline_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Client_Id[y].id,d:thenFinal_GroupByResult});

}



var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }
	  
 if($scope.Groupby=="Location")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });


			var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}

var Client_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].clientid;
			if (idsSeen[id] !== idSeenValue) {
				Client_Id.push({id:FinalpreResult[i].clientid});

				idsSeen[id] = idSeenValue;
			}
		}
		
	
	
		

 var m=[]
 var m1=[]

for(var y=0; y<Client_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Location_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Location_Id[z].id===FinalpreResult[i].location && Client_Id[y].id===FinalpreResult[i].clientid)
		{
			

	       var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Location_Id[z].id,thenid:Client_Id[y].id,displayname:Location_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Client_Id[y].id,d:thenFinal_GroupByResult});

}



var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }	  

	   if($scope.Groupby=="Phase Name")
	  {
		  
		  

    var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

			var Phaseall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phaseall.push({id:FinalpreResult[i].editphaseid,displayname:FinalpreResult[i].editphasename,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniquePhase(arr) {
    var cleaned = [];
    Phaseall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Phase_Id = arrUniquePhase(Phaseall);


var Client_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].clientid;
			if (idsSeen[id] !== idSeenValue) {
				Client_Id.push({id:FinalpreResult[i].clientid});

				idsSeen[id] = idSeenValue;
			}
		}

		

 var m1=[]

for(var y=0; y<Client_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Phase_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Phase_Id[z].id===$scope.finalcalculatedexpensetrack[i].editphaseid && Client_Id[y].id===$scope.finalcalculatedexpensetrack[i].clientid)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Phase_Id[z].id,thenid:Client_Id[y].id,displayname:Phase_Id[z].displayname,budget:budget})

	

}

m1.push({id:Client_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;

	  }
	  
if($scope.Groupby=="Category")
{
	
	 var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

			var Catall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].excatid;
			if (idsSeen[id] !== idSeenValue) {
				Catall.push({id:FinalpreResult[i].excatid,displayname:FinalpreResult[i].excatname,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniqueCat_Id(arr) {
    var cleaned = [];
    Catall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Cat_Id = arrUniqueCat_Id(Catall);


var Client_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].clientid;
			if (idsSeen[id] !== idSeenValue) {
				Client_Id.push({id:FinalpreResult[i].clientid});

				idsSeen[id] = idSeenValue;
			}
		}

		

 var m1=[]

for(var y=0; y<Client_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Cat_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Cat_Id[z].id===$scope.finalcalculatedexpensetrack[i].excatid && Client_Id[y].id===$scope.finalcalculatedexpensetrack[i].clientid)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Cat_Id[z].id,thenid:Client_Id[y].id,displayname:Cat_Id[z].displayname,budget:budget})

	

}

m1.push({id:Client_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


}
if($scope.Groupby=="Date String")
{
	
	
var Dateall=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
{

		var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
Dateall.push({id:date,Date:date});

}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);

var Client_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = $scope.finalcalculatedexpensetrack.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].clientid;
			if (idsSeen[id] !== idSeenValue) {
				Client_Id.push({id:$scope.finalcalculatedexpensetrack[i].clientid});

				idsSeen[id] = idSeenValue;
			}
		}

		

 var m1=[]

for(var y=0; y<Client_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Date_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			
	var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
		
		if(Date_Id[z].id===date && Client_Id[y].id===$scope.finalcalculatedexpensetrack[i].clientid)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Date_Id[z].id,thenid:Client_Id[y].id,displayname:Date_Id[z].Date,budget:budget})

	

}

m1.push({id:Client_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



}
  }
//----------------------------------------------------------------------------  
      if($scope.GroupbyFirst=="Team Member" && $scope.Groupby!="None")
  {


 if($scope.Groupby=="Project")
	  {
		  
		  	
var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });
	
var Project_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Project_Id.push({id:FinalpreResult[i].projectid,displayname:FinalpreResult[i].project_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}

var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:FinalpreResult[i].member_id});

				idsSeen[id] = idSeenValue;
			}
		}

 var m=[]
 var m1=[]

for(var y=0; y<Member_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Project_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Project_Id[z].id===$scope.finalcalculatedexpensetrack[i].projectid && Member_Id[y].id===$scope.finalcalculatedexpensetrack[i].member_id)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Project_Id[z].id,thenid:Member_Id[y].id,displayname:Project_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Member_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }	  


 if($scope.Groupby=="Client")
	  {
		  
		  	
var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.clientid} ));
    });
	
var Client_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].clientid;
			if (idsSeen[id] !== idSeenValue) {
				Client_Id.push({id:FinalpreResult[i].clientid,displayname:FinalpreResult[i].client_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}

var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:FinalpreResult[i].member_id});

				idsSeen[id] = idSeenValue;
			}
		}

 var m=[]
 var m1=[]

for(var y=0; y<Member_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Client_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Client_Id[z].id===$scope.finalcalculatedexpensetrack[i].clientid && Member_Id[y].id===$scope.finalcalculatedexpensetrack[i].member_id)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Client_Id[z].id,thenid:Member_Id[y].id,displayname:Client_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Member_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }		  
	  
 if($scope.Groupby=="Role")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });


			var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}

var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:FinalpreResult[i].member_id});

				idsSeen[id] = idSeenValue;
			}
		}
		
	
		

 var m=[]
 var m1=[]

for(var y=0; y<Member_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Role_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Role_Id[z].id===FinalpreResult[i].role && Member_Id[y].id===FinalpreResult[i].member_id)
		{
			

	       var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Role_Id[z].id,thenid:Member_Id[y].id,displayname:Role_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Member_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }
	  
 if($scope.Groupby=="Discipline")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });


			var Discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}

var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:FinalpreResult[i].member_id});

				idsSeen[id] = idSeenValue;
			}
		}
		
	
	
		

 var m=[]
 var m1=[]

for(var y=0; y<Member_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Discipline_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Discipline_Id[z].id===FinalpreResult[i].discipline && Member_Id[y].id===FinalpreResult[i].member_id)
		{
			

	       var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Discipline_Id[z].id,thenid:Member_Id[y].id,displayname:Discipline_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Member_Id[y].id,d:thenFinal_GroupByResult});

}



var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }
	  
 if($scope.Groupby=="Location")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });


			var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}

var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:FinalpreResult[i].member_id});

				idsSeen[id] = idSeenValue;
			}
		}
		
	
	
		

 var m=[]
 var m1=[]

for(var y=0; y<Member_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Location_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Location_Id[z].id===FinalpreResult[i].location && Member_Id[y].id===FinalpreResult[i].member_id)
		{
			

	       var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Location_Id[z].id,thenid:Member_Id[y].id,displayname:Location_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Member_Id[y].id,d:thenFinal_GroupByResult});

}



var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }	  

	   if($scope.Groupby=="Phase Name")
	  {
		  
		  

    var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

			var Phaseall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phaseall.push({id:FinalpreResult[i].editphaseid,displayname:FinalpreResult[i].editphasename,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniquePhase(arr) {
    var cleaned = [];
    Phaseall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Phase_Id = arrUniquePhase(Phaseall);


var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:FinalpreResult[i].member_id});

				idsSeen[id] = idSeenValue;
			}
		}

		

 var m1=[]

for(var y=0; y<Member_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Phase_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Phase_Id[z].id===$scope.finalcalculatedexpensetrack[i].editphaseid && Member_Id[y].id===$scope.finalcalculatedexpensetrack[i].member_id)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Phase_Id[z].id,thenid:Member_Id[y].id,displayname:Phase_Id[z].displayname,budget:budget})

	

}

m1.push({id:Member_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;

	  }
	  
if($scope.Groupby=="Category")
{
	
	 var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

			var Catall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].excatid;
			if (idsSeen[id] !== idSeenValue) {
				Catall.push({id:FinalpreResult[i].excatid,displayname:FinalpreResult[i].excatname,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniqueCat_Id(arr) {
    var cleaned = [];
    Catall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Cat_Id = arrUniqueCat_Id(Catall);


var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:FinalpreResult[i].member_id});

				idsSeen[id] = idSeenValue;
			}
		}

		

 var m1=[]

for(var y=0; y<Member_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Cat_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Cat_Id[z].id===$scope.finalcalculatedexpensetrack[i].excatid && Member_Id[y].id===$scope.finalcalculatedexpensetrack[i].member_id)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Cat_Id[z].id,thenid:Member_Id[y].id,displayname:Cat_Id[z].displayname,budget:budget})

	

}

m1.push({id:Member_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


}
if($scope.Groupby=="Date String")
{
	
	
var Dateall=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
{

		var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
Dateall.push({id:date,Date:date});

}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);

var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = $scope.finalcalculatedexpensetrack.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:$scope.finalcalculatedexpensetrack[i].member_id});

				idsSeen[id] = idSeenValue;
			}
		}

		

 var m1=[]

for(var y=0; y<Member_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Date_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			
	var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
		
		if(Date_Id[z].id===date && Member_Id[y].id===$scope.finalcalculatedexpensetrack[i].member_id)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Date_Id[z].id,thenid:Member_Id[y].id,displayname:Date_Id[z].Date,budget:budget})

	

}

m1.push({id:Member_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



}
  }
//---------------------------------------------------------------------------
 if($scope.GroupbyFirst=="Role" && $scope.Groupby!="None")
  {

	  
 if($scope.Groupby=="Team Member")
	  {
	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });

	
var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:FinalpreResult[i].member_id,displayname:FinalpreResult[i].member_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}

			var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}		



 var m=[]
 var m1=[]

for(var y=0; y<Role_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Member_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Member_Id[z].id===FinalpreResult[i].member_id && Role_Id[y].id===FinalpreResult[i].role)
		{
			

			
		var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Member_Id[z].id,thenid:Role_Id[y].id,displayname:Member_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Role_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }

 if($scope.Groupby=="Project")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });
			var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}
	
var Project_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Project_Id.push({id:FinalpreResult[i].projectid,displayname:FinalpreResult[i].project_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}



 var m=[]
 var m1=[]

for(var y=0; y<Role_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Project_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Project_Id[z].id===FinalpreResult[i].projectid && Role_Id[y].id===FinalpreResult[i].role)
		{
			

			
		var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Project_Id[z].id,thenid:Role_Id[y].id,displayname:Project_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Role_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }	  
 

 if($scope.Groupby=="Client")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });
			var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}
	
var Client_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Client_Id.push({id:FinalpreResult[i].clientid,displayname:FinalpreResult[i].client_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}



 var m=[]
 var m1=[]

for(var y=0; y<Role_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Client_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Client_Id[z].id===FinalpreResult[i].clientid && Role_Id[y].id===FinalpreResult[i].role)
		{
			

			
		var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Client_Id[z].id,thenid:Role_Id[y].id,displayname:Client_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Role_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  } 
		  
 if($scope.Groupby=="Discipline")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });
   var FinalpreResult1 = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });

			var Discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult1.length, id; i < len; ++i) {
			id = FinalpreResult1[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id.push({id:FinalpreResult1[i].discipline,displayname:FinalpreResult1[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}
		
	var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}

	

 var m=[]
 var m1=[]

for(var y=0; y<Role_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Discipline_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult1.length;i++)
		{
			

		
		if(Discipline_Id[z].id===FinalpreResult1[i].discipline && Role_Id[y].id===FinalpreResult1[i].role)
		{
			

	       var Amount=parseInt(FinalpreResult1[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Discipline_Id[z].id,thenid:Role_Id[y].id,displayname:Discipline_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Role_Id[y].id,d:thenFinal_GroupByResult});

}



var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }
	  
 if($scope.Groupby=="Location")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });


    var FinalpreResult1 = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });
			var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult1.length, id; i < len; ++i) {
			id = FinalpreResult1[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult1[i].location,displayname:FinalpreResult1[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}
		
var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}

	

 var m=[]
 var m1=[]

for(var y=0; y<Role_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Location_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult1.length;i++)
		{
			

		
		if(Location_Id[z].id===FinalpreResult1[i].location && Role_Id[y].id===FinalpreResult1[i].role)
		{
			

	       var Amount=parseInt(FinalpreResult1[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Location_Id[z].id,thenid:Role_Id[y].id,displayname:Location_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Role_Id[y].id,d:thenFinal_GroupByResult});

}



var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }	  

	   if($scope.Groupby=="Phase Name")
	  {
		  
		
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });
	
	var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}		



			var Phaseall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phaseall.push({id:FinalpreResult[i].editphaseid,displayname:FinalpreResult[i].editphasename,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniquePhase(arr) {
    var cleaned = [];
    Phaseall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Phase_Id = arrUniquePhase(Phaseall);




		

 var m1=[]

for(var y=0; y<Role_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Phase_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Phase_Id[z].id===FinalpreResult[i].editphaseid && Role_Id[y].id===FinalpreResult[i].role)
		{
			

			
		var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Phase_Id[z].id,thenid:Role_Id[y].id,displayname:Phase_Id[z].displayname,budget:budget})

	

}

m1.push({id:Role_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;

	  }
	  
if($scope.Groupby=="Category")
{
	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });
	
	var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}	

			var Catall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].excatid;
			if (idsSeen[id] !== idSeenValue) {
				Catall.push({id:FinalpreResult[i].excatid,displayname:FinalpreResult[i].excatname,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniqueCat_Id(arr) {
    var cleaned = [];
    Catall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Cat_Id = arrUniqueCat_Id(Catall);


 var m1=[]

for(var y=0; y<Role_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Cat_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Cat_Id[z].id===FinalpreResult[i].excatid && Role_Id[y].id===FinalpreResult[i].role)
		{
			

			
		var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Cat_Id[z].id,thenid:Role_Id[y].id,displayname:Cat_Id[z].displayname,budget:budget})

	

}

m1.push({id:Role_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


}
if($scope.Groupby=="Date String")
{


 var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });
	
	var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}	
	
var Dateall=[];
for(var i=0; i<FinalpreResult.length;i++)
{

		var date=moment(FinalpreResult[i].date_update).format('DD-MM-YYYY')
		
Dateall.push({id:date,Date:date});

}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);


 var m1=[]

for(var y=0; y<Role_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Date_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<FinalpreResult.length;i++)
		{
			
	var date=moment(FinalpreResult[i].date_update).format('DD-MM-YYYY')
		
		
		if(Date_Id[z].id===date && Role_Id[y].id===FinalpreResult[i].role)
		{
			

			
		var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Date_Id[z].id,thenid:Role_Id[y].id,displayname:Date_Id[z].Date,budget:budget})

	

}

m1.push({id:Role_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



}
  }
  //-----------------------------------------------------------------------------
   if($scope.GroupbyFirst=="Discipline" && $scope.Groupby!="None")
  {

	  
 if($scope.Groupby=="Team Member")
	  {
	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });

	
var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:FinalpreResult[i].member_id,displayname:FinalpreResult[i].member_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}

			var Discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}		



 var m=[]
 var m1=[]

for(var y=0; y<Discipline_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Member_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Member_Id[z].id===FinalpreResult[i].member_id && Discipline_Id[y].id===FinalpreResult[i].discipline)
		{
			

			
		var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Member_Id[z].id,thenid:Discipline_Id[y].id,displayname:Member_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Discipline_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }

 if($scope.Groupby=="Project")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });
			var Discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}
	
var Project_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Project_Id.push({id:FinalpreResult[i].projectid,displayname:FinalpreResult[i].project_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}



 var m=[]
 var m1=[]

for(var y=0; y<Discipline_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Project_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Project_Id[z].id===FinalpreResult[i].projectid && Discipline_Id[y].id===FinalpreResult[i].discipline)
		{
			

			
		var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Project_Id[z].id,thenid:Discipline_Id[y].id,displayname:Project_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Discipline_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }	  
 

 if($scope.Groupby=="Client")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });
			var Discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}
	
var Client_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Client_Id.push({id:FinalpreResult[i].clientid,displayname:FinalpreResult[i].client_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}



 var m=[]
 var m1=[]

for(var y=0; y<Discipline_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Client_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Client_Id[z].id===FinalpreResult[i].clientid && Discipline_Id[y].id===FinalpreResult[i].discipline)
		{
			

			
		var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Client_Id[z].id,thenid:Discipline_Id[y].id,displayname:Client_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Discipline_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  } 
		  
 if($scope.Groupby=="Role")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult1 = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });
   var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });
	
		var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult1.length, id; i < len; ++i) {
			id = FinalpreResult1[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult1[i].role,displayname:FinalpreResult1[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}

			var Discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}
		


	

 var m=[]
 var m1=[]

for(var y=0; y<Discipline_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Role_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult1.length;i++)
		{
			

		
		if(Role_Id[z].id===FinalpreResult1[i].role && Discipline_Id[y].id===FinalpreResult1[i].discipline)
		{
			

	       var Amount=parseInt(FinalpreResult1[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Role_Id[z].id,thenid:Discipline_Id[y].id,displayname:Role_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Discipline_Id[y].id,d:thenFinal_GroupByResult});

}



var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }
	  
 if($scope.Groupby=="Location")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });


    var FinalpreResult1 = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });
			var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult1.length, id; i < len; ++i) {
			id = FinalpreResult1[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult1[i].location,displayname:FinalpreResult1[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}
		
var Discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}

	

 var m=[]
 var m1=[]

for(var y=0; y<Discipline_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Location_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult1.length;i++)
		{
			

		
		if(Location_Id[z].id===FinalpreResult1[i].location && Discipline_Id[y].id===FinalpreResult1[i].discipline)
		{
			

	       var Amount=parseInt(FinalpreResult1[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Location_Id[z].id,thenid:Discipline_Id[y].id,displayname:Location_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Discipline_Id[y].id,d:thenFinal_GroupByResult});

}



var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }	  

	   if($scope.Groupby=="Phase Name")
	  {
		  
		
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });
	
	var Discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}		



			var Phaseall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phaseall.push({id:FinalpreResult[i].editphaseid,displayname:FinalpreResult[i].editphasename,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniquePhase(arr) {
    var cleaned = [];
    Phaseall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Phase_Id = arrUniquePhase(Phaseall);




		

 var m1=[]

for(var y=0; y<Discipline_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Phase_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Phase_Id[z].id===FinalpreResult[i].editphaseid && Discipline_Id[y].id===FinalpreResult[i].discipline)
		{
			

			
		var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Phase_Id[z].id,thenid:Discipline_Id[y].id,displayname:Phase_Id[z].displayname,budget:budget})

	

}

m1.push({id:Discipline_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;

	  }
	  
if($scope.Groupby=="Category")
{
	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });
	
	var Discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}	

			var Catall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].excatid;
			if (idsSeen[id] !== idSeenValue) {
				Catall.push({id:FinalpreResult[i].excatid,displayname:FinalpreResult[i].excatname,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniqueCat_Id(arr) {
    var cleaned = [];
    Catall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Cat_Id = arrUniqueCat_Id(Catall);


 var m1=[]

for(var y=0; y<Discipline_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Cat_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Cat_Id[z].id===FinalpreResult[i].excatid && Discipline_Id[y].id===FinalpreResult[i].discipline)
		{
			

			
		var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Cat_Id[z].id,thenid:Discipline_Id[y].id,displayname:Cat_Id[z].displayname,budget:budget})

	

}

m1.push({id:Discipline_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


}
if($scope.Groupby=="Date String")
{


 var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });
	
	var Discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}	
	
var Dateall=[];
for(var i=0; i<FinalpreResult.length;i++)
{

		var date=moment(FinalpreResult[i].date_update).format('DD-MM-YYYY')
		
Dateall.push({id:date,Date:date});

}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);


 var m1=[]

for(var y=0; y<Discipline_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Date_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<FinalpreResult.length;i++)
		{
			
	var date=moment(FinalpreResult[i].date_update).format('DD-MM-YYYY')
		
		
		if(Date_Id[z].id===date && Discipline_Id[y].id===FinalpreResult[i].discipline)
		{
			

			
		var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Date_Id[z].id,thenid:Discipline_Id[y].id,displayname:Date_Id[z].Date,budget:budget})

	

}

m1.push({id:Discipline_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



}
  }
  //-----------------------------------------------------------------------------
     if($scope.GroupbyFirst=="Location" && $scope.Groupby!="None")
  {

	  
 if($scope.Groupby=="Team Member")
	  {
	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });

	
var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:FinalpreResult[i].member_id,displayname:FinalpreResult[i].member_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}

			var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}		



 var m=[]
 var m1=[]

for(var y=0; y<Location_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Member_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Member_Id[z].id===FinalpreResult[i].member_id && Location_Id[y].id===FinalpreResult[i].location)
		{
			

			
		var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Member_Id[z].id,thenid:Location_Id[y].id,displayname:Member_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Location_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }

 if($scope.Groupby=="Project")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });
			var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}
	
var Project_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Project_Id.push({id:FinalpreResult[i].projectid,displayname:FinalpreResult[i].project_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}



 var m=[]
 var m1=[]

for(var y=0; y<Location_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Project_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Project_Id[z].id===FinalpreResult[i].projectid && Location_Id[y].id===FinalpreResult[i].location)
		{
			

			
		var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Project_Id[z].id,thenid:Location_Id[y].id,displayname:Project_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Location_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }	  
 

 if($scope.Groupby=="Client")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });
			var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}
	
var Client_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Client_Id.push({id:FinalpreResult[i].clientid,displayname:FinalpreResult[i].client_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}



 var m=[]
 var m1=[]

for(var y=0; y<Location_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Client_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Client_Id[z].id===FinalpreResult[i].clientid && Location_Id[y].id===FinalpreResult[i].location)
		{
			

			
		var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Client_Id[z].id,thenid:Location_Id[y].id,displayname:Client_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Location_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  } 
		  
 if($scope.Groupby=="Role")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult1 = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });
   var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });
	
		var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult1.length, id; i < len; ++i) {
			id = FinalpreResult1[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult1[i].role,displayname:FinalpreResult1[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}

			var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}
		


	

 var m=[]
 var m1=[]

for(var y=0; y<Location_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Role_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult1.length;i++)
		{
			

		
		if(Role_Id[z].id===FinalpreResult1[i].role && Location_Id[y].id===FinalpreResult1[i].location)
		{
			

	       var Amount=parseInt(FinalpreResult1[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Role_Id[z].id,thenid:Location_Id[y].id,displayname:Role_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Location_Id[y].id,d:thenFinal_GroupByResult});

}



var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }
	  
 if($scope.Groupby=="Discipline")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });


    var FinalpreResult1 = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });
			var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}
		
var Discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult1.length, id; i < len; ++i) {
			id = FinalpreResult1[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id.push({id:FinalpreResult1[i].discipline,displayname:FinalpreResult1[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}

	

 var m=[]
 var m1=[]

for(var y=0; y<Location_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Discipline_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult1.length;i++)
		{
			

		
		if(Discipline_Id[z].id===FinalpreResult1[i].discipline && Location_Id[y].id===FinalpreResult1[i].location)
		{
			

	       var Amount=parseInt(FinalpreResult1[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Discipline_Id[z].id,thenid:Location_Id[y].id,displayname:Discipline_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Location_Id[y].id,d:thenFinal_GroupByResult});

}



var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }	  

	   if($scope.Groupby=="Phase Name")
	  {
		  
		
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });
	
	var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}		



			var Phaseall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phaseall.push({id:FinalpreResult[i].editphaseid,displayname:FinalpreResult[i].editphasename,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniquePhase(arr) {
    var cleaned = [];
    Phaseall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Phase_Id = arrUniquePhase(Phaseall);




		

 var m1=[]

for(var y=0; y<Location_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Phase_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Phase_Id[z].id===FinalpreResult[i].editphaseid && Location_Id[y].id===FinalpreResult[i].location)
		{
			

			
		var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Phase_Id[z].id,thenid:Location_Id[y].id,displayname:Phase_Id[z].displayname,budget:budget})

	

}

m1.push({id:Location_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;

	  }
	  
if($scope.Groupby=="Category")
{
	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });
	
	var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}	

			var Catall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].excatid;
			if (idsSeen[id] !== idSeenValue) {
				Catall.push({id:FinalpreResult[i].excatid,displayname:FinalpreResult[i].excatname,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniqueCat_Id(arr) {
    var cleaned = [];
    Catall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Cat_Id = arrUniqueCat_Id(Catall);


 var m1=[]

for(var y=0; y<Location_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Cat_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Cat_Id[z].id===FinalpreResult[i].excatid && Location_Id[y].id===FinalpreResult[i].location)
		{
			

			
		var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Cat_Id[z].id,thenid:Location_Id[y].id,displayname:Cat_Id[z].displayname,budget:budget})

	

}

m1.push({id:Location_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


}
if($scope.Groupby=="Date String")
{


 var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });
	
	var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}	
	
var Dateall=[];
for(var i=0; i<FinalpreResult.length;i++)
{

		var date=moment(FinalpreResult[i].date_update).format('DD-MM-YYYY')
		
Dateall.push({id:date,Date:date});

}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);


 var m1=[]

for(var y=0; y<Location_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Date_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<FinalpreResult.length;i++)
		{
			
	var date=moment(FinalpreResult[i].date_update).format('DD-MM-YYYY')
		
		
		if(Date_Id[z].id===date && Location_Id[y].id===FinalpreResult[i].location)
		{
			

			
		var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Date_Id[z].id,thenid:Location_Id[y].id,displayname:Date_Id[z].Date,budget:budget})

	

}

m1.push({id:Location_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



}
  }
  //-----------------------------------------------------------------------------
      if($scope.GroupbyFirst=="Phase Name" && $scope.Groupby!="None")
  {

	  
 if($scope.Groupby=="Team Member")
	  {
		  

    var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });


	var Phaseall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phaseall.push({id:FinalpreResult[i].editphaseid,displayname:FinalpreResult[i].editphasename,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniquePhase(arr) {
    var cleaned = [];
    Phaseall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Phase_Id = arrUniquePhase(Phaseall);
		  

var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:FinalpreResult[i].member_id,displayname:FinalpreResult[i].member_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}



 var m=[]
 var m1=[]

for(var y=0; y<Phase_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Member_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Member_Id[z].id===$scope.finalcalculatedexpensetrack[i].member_id && Phase_Id[y].id===$scope.finalcalculatedexpensetrack[i].editphaseid)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Member_Id[z].id,thenid:Phase_Id[y].id,displayname:Member_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Phase_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }

 if($scope.Groupby=="Project")
	  {
		  
		  	
var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });
	
		var Phaseall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phaseall.push({id:FinalpreResult[i].editphaseid,displayname:FinalpreResult[i].editphasename,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniquePhase(arr) {
    var cleaned = [];
    Phaseall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Phase_Id = arrUniquePhase(Phaseall);
	
var Project_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Project_Id.push({id:FinalpreResult[i].projectid,displayname:FinalpreResult[i].project_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}



 var m=[]
 var m1=[]

for(var y=0; y<Phase_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Project_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Project_Id[z].id===$scope.finalcalculatedexpensetrack[i].projectid && Phase_Id[y].id===$scope.finalcalculatedexpensetrack[i].editphaseid)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Project_Id[z].id,thenid:Phase_Id[y].id,displayname:Project_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Phase_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }
 if($scope.Groupby=="Client")
	  {
		  
		  	
var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });
	
		var Phaseall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phaseall.push({id:FinalpreResult[i].editphaseid,displayname:FinalpreResult[i].editphasename,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniquePhase(arr) {
    var cleaned = [];
    Phaseall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Phase_Id = arrUniquePhase(Phaseall);
	
var Client_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].clientid;
			if (idsSeen[id] !== idSeenValue) {
				Client_Id.push({id:FinalpreResult[i].clientid,displayname:FinalpreResult[i].client_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}



 var m=[]
 var m1=[]

for(var y=0; y<Phase_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Client_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Client_Id[z].id===$scope.finalcalculatedexpensetrack[i].clientid && Phase_Id[y].id===$scope.finalcalculatedexpensetrack[i].editphaseid)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Client_Id[z].id,thenid:Phase_Id[y].id,displayname:Client_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Phase_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }	  
  
	  
 if($scope.Groupby=="Role")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });


			var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}


		
	var Phaseall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phaseall.push({id:FinalpreResult[i].editphaseid,displayname:FinalpreResult[i].editphasename,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniquePhase(arr) {
    var cleaned = [];
    Phaseall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Phase_Id = arrUniquePhase(Phaseall);	
		

 var m=[]
 var m1=[]

for(var y=0; y<Phase_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Role_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Role_Id[z].id===FinalpreResult[i].role && Phase_Id[y].id===FinalpreResult[i].editphaseid)
		{
			

	       var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Role_Id[z].id,thenid:Phase_Id[y].id,displayname:Role_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Phase_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }
	  
 if($scope.Groupby=="Discipline")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });


			var Discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}

	var Phaseall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phaseall.push({id:FinalpreResult[i].editphaseid,displayname:FinalpreResult[i].editphasename,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniquePhase(arr) {
    var cleaned = [];
    Phaseall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Phase_Id = arrUniquePhase(Phaseall);
		
	
	
		

 var m=[]
 var m1=[]

for(var y=0; y<Phase_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Discipline_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Discipline_Id[z].id===FinalpreResult[i].discipline && Phase_Id[y].id===FinalpreResult[i].editphaseid)
		{
			

	       var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Discipline_Id[z].id,thenid:Phase_Id[y].id,displayname:Discipline_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Phase_Id[y].id,d:thenFinal_GroupByResult});

}



var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }
	  
 if($scope.Groupby=="Location")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });


			var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}

	var Phaseall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phaseall.push({id:FinalpreResult[i].editphaseid,displayname:FinalpreResult[i].editphasename,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniquePhase(arr) {
    var cleaned = [];
    Phaseall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Phase_Id = arrUniquePhase(Phaseall);
		
	
	
		

 var m=[]
 var m1=[]

for(var y=0; y<Phase_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Location_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Location_Id[z].id===FinalpreResult[i].location && Phase_Id[y].id===FinalpreResult[i].editphaseid)
		{
			

	       var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Location_Id[z].id,thenid:Phase_Id[y].id,displayname:Location_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Phase_Id[y].id,d:thenFinal_GroupByResult});

}



var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }	  

	  
if($scope.Groupby=="Category")
{
	
	 var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

			var Catall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].excatid;
			if (idsSeen[id] !== idSeenValue) {
				Catall.push({id:FinalpreResult[i].excatid,displayname:FinalpreResult[i].excatname,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniqueCat_Id(arr) {
    var cleaned = [];
    Catall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Cat_Id = arrUniqueCat_Id(Catall);


	var Phaseall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phaseall.push({id:FinalpreResult[i].editphaseid,displayname:FinalpreResult[i].editphasename,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniquePhase(arr) {
    var cleaned = [];
    Phaseall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Phase_Id = arrUniquePhase(Phaseall);

		

 var m1=[]

for(var y=0; y<Phase_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Cat_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Cat_Id[z].id===$scope.finalcalculatedexpensetrack[i].excatid && Phase_Id[y].id===$scope.finalcalculatedexpensetrack[i].editphaseid)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Cat_Id[z].id,thenid:Phase_Id[y].id,displayname:Cat_Id[z].displayname,budget:budget})

	

}

m1.push({id:Phase_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


}
if($scope.Groupby=="Date String")
{
	
	
var Dateall=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
{

		var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
Dateall.push({id:date,Date:date});

}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);

	var Phaseall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = $scope.finalcalculatedexpensetrack.length, id; i < len; ++i) {
			id =$scope.finalcalculatedexpensetrack[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phaseall.push({id:$scope.finalcalculatedexpensetrack[i].editphaseid,displayname:$scope.finalcalculatedexpensetrack[i].editphasename,budget:$scope.finalcalculatedexpensetrack[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniquePhase(arr) {
    var cleaned = [];
    Phaseall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Phase_Id = arrUniquePhase(Phaseall);

		

 var m1=[]

for(var y=0; y<Phase_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Date_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			
	var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
		
		if(Date_Id[z].id===date && Phase_Id[y].id===$scope.finalcalculatedexpensetrack[i].editphaseid)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Date_Id[z].id,thenid:Phase_Id[y].id,displayname:Date_Id[z].Date,budget:budget})

	

}

m1.push({id:Phase_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



}
  }
//----------------------------------------------------------------------------
    if($scope.GroupbyFirst=="Category" && $scope.Groupby!="None")
  {

	  
 if($scope.Groupby=="Team Member")
	  {
		  
		  	
	 var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

			var Catall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].excatid;
			if (idsSeen[id] !== idSeenValue) {
				Catall.push({id:FinalpreResult[i].excatid,displayname:FinalpreResult[i].excatname,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniqueCat_Id(arr) {
    var cleaned = [];
    Catall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Cat_Id = arrUniqueCat_Id(Catall);
	
var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:FinalpreResult[i].member_id,displayname:FinalpreResult[i].member_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}



 var m=[]
 var m1=[]

for(var y=0; y<Cat_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Member_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Member_Id[z].id===$scope.finalcalculatedexpensetrack[i].member_id && Cat_Id[y].id===$scope.finalcalculatedexpensetrack[i].excatid)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Member_Id[z].id,thenid:Cat_Id[y].id,displayname:Member_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Cat_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }

 if($scope.Groupby=="Project")
	  {
		  
		  	
var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });
	
				var Catall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].excatid;
			if (idsSeen[id] !== idSeenValue) {
				Catall.push({id:FinalpreResult[i].excatid,displayname:FinalpreResult[i].excatname,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniqueCat_Id(arr) {
    var cleaned = [];
    Catall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Cat_Id = arrUniqueCat_Id(Catall);
	
var Project_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Project_Id.push({id:FinalpreResult[i].projectid,displayname:FinalpreResult[i].project_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}



 var m=[]
 var m1=[]

for(var y=0; y<Cat_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Project_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Project_Id[z].id===$scope.finalcalculatedexpensetrack[i].projectid && Cat_Id[y].id===$scope.finalcalculatedexpensetrack[i].excatid)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Project_Id[z].id,thenid:Cat_Id[y].id,displayname:Project_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Cat_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }	  
   if($scope.Groupby=="Client")
	  {
		  
		  	
var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });
	
				var Catall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].excatid;
			if (idsSeen[id] !== idSeenValue) {
				Catall.push({id:FinalpreResult[i].excatid,displayname:FinalpreResult[i].excatname,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniqueCat_Id(arr) {
    var cleaned = [];
    Catall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Cat_Id = arrUniqueCat_Id(Catall);
	
var Client_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].clientid;
			if (idsSeen[id] !== idSeenValue) {
				Client_Id.push({id:FinalpreResult[i].clientid,displayname:FinalpreResult[i].client_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}



 var m=[]
 var m1=[]

for(var y=0; y<Cat_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Client_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Client_Id[z].id===$scope.finalcalculatedexpensetrack[i].clientid && Cat_Id[y].id===$scope.finalcalculatedexpensetrack[i].excatid)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Client_Id[z].id,thenid:Cat_Id[y].id,displayname:Client_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Cat_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }	  
  
	  
 if($scope.Groupby=="Role")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });


			var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}

				var Catall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].excatid;
			if (idsSeen[id] !== idSeenValue) {
				Catall.push({id:FinalpreResult[i].excatid,displayname:FinalpreResult[i].excatname,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniqueCat_Id(arr) {
    var cleaned = [];
    Catall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Cat_Id = arrUniqueCat_Id(Catall);
		
	
		

 var m=[]
 var m1=[]

for(var y=0; y<Cat_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Role_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Role_Id[z].id===FinalpreResult[i].role && Cat_Id[y].id===FinalpreResult[i].excatid)
		{
			

	       var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Role_Id[z].id,thenid:Cat_Id[y].id,displayname:Role_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Cat_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }
	  
 if($scope.Groupby=="Discipline")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });


			var Discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}

				var Catall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].excatid;
			if (idsSeen[id] !== idSeenValue) {
				Catall.push({id:FinalpreResult[i].excatid,displayname:FinalpreResult[i].excatname,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniqueCat_Id(arr) {
    var cleaned = [];
    Catall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Cat_Id = arrUniqueCat_Id(Catall);
		
	
	
		

 var m=[]
 var m1=[]

for(var y=0; y<Cat_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Discipline_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Discipline_Id[z].id===FinalpreResult[i].discipline && Cat_Id[y].id===FinalpreResult[i].excatid)
		{
			

	       var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Discipline_Id[z].id,thenid:Cat_Id[y].id,displayname:Discipline_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Cat_Id[y].id,d:thenFinal_GroupByResult});

}



var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }
	  
 if($scope.Groupby=="Location")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });


			var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}

				var Catall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].excatid;
			if (idsSeen[id] !== idSeenValue) {
				Catall.push({id:FinalpreResult[i].excatid,displayname:FinalpreResult[i].excatname,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniqueCat_Id(arr) {
    var cleaned = [];
    Catall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Cat_Id = arrUniqueCat_Id(Catall);
		
	
	
		

 var m=[]
 var m1=[]

for(var y=0; y<Cat_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Location_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Location_Id[z].id===FinalpreResult[i].location && Cat_Id[y].id===FinalpreResult[i].excatid)
		{
			

	       var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Location_Id[z].id,thenid:Cat_Id[y].id,displayname:Location_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Cat_Id[y].id,d:thenFinal_GroupByResult});

}



var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }	  

	   if($scope.Groupby=="Phase Name")
	  {
		  
		  

    var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

			var Phaseall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phaseall.push({id:FinalpreResult[i].editphaseid,displayname:FinalpreResult[i].editphasename,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniquePhase(arr) {
    var cleaned = [];
    Phaseall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Phase_Id = arrUniquePhase(Phaseall);


				var Catall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].excatid;
			if (idsSeen[id] !== idSeenValue) {
				Catall.push({id:FinalpreResult[i].excatid,displayname:FinalpreResult[i].excatname,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniqueCat_Id(arr) {
    var cleaned = [];
    Catall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Cat_Id = arrUniqueCat_Id(Catall);

		

 var m1=[]

for(var y=0; y<Cat_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Phase_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Phase_Id[z].id===$scope.finalcalculatedexpensetrack[i].editphaseid && Cat_Id[y].id===$scope.finalcalculatedexpensetrack[i].excatid)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Phase_Id[z].id,thenid:Cat_Id[y].id,displayname:Phase_Id[z].displayname,budget:budget})

	

}

m1.push({id:Cat_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;

	  }
	  

if($scope.Groupby=="Date String")
{
	
	
var Dateall=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
{

		var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
Dateall.push({id:date,Date:date});

}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);

				var Catall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = $scope.finalcalculatedexpensetrack.length, id; i < len; ++i) {
			id =$scope.finalcalculatedexpensetrack[i].excatid;
			if (idsSeen[id] !== idSeenValue) {
				Catall.push({id:$scope.finalcalculatedexpensetrack[i].excatid,displayname:$scope.finalcalculatedexpensetrack[i].excatname,budget:$scope.finalcalculatedexpensetrack[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniqueCat_Id(arr) {
    var cleaned = [];
    Catall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Cat_Id = arrUniqueCat_Id(Catall);

		

 var m1=[]

for(var y=0; y<Cat_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Date_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			
	var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
		
		if(Date_Id[z].id===date && Cat_Id[y].id===$scope.finalcalculatedexpensetrack[i].excatid)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Date_Id[z].id,thenid:Cat_Id[y].id,displayname:Date_Id[z].Date,budget:budget})

	

}

m1.push({id:Cat_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



}
  }
//---------------------------------------------------------------------------- 
    if($scope.GroupbyFirst=="Date String" && $scope.Groupby!="None")
  {

	  
 if($scope.Groupby=="Team Member")
	  {
		  
		  	
	 var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

		
var Dateall=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
{

		var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
Dateall.push({id:date,Date:date});

}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);



	
var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:FinalpreResult[i].member_id,displayname:FinalpreResult[i].member_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}



 var m=[]
 var m1=[]

for(var y=0; y<Date_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Member_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			
      var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
		if(Member_Id[z].id===$scope.finalcalculatedexpensetrack[i].member_id && Date_Id[y].id===date)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Member_Id[z].id,thenid:Date_Id[y].id,displayname:Member_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Date_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }

 if($scope.Groupby=="Project")
	  {
		  
var Dateall=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
{

		var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
Dateall.push({id:date,Date:date});

}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);
		  	
var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });
	

		

var Project_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].projectid;
			if (idsSeen[id] !== idSeenValue) {
				Project_Id.push({id:FinalpreResult[i].projectid,displayname:FinalpreResult[i].project_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}



 var m=[]
 var m1=[]

for(var y=0; y<Date_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Project_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			
var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
		if(Project_Id[z].id===$scope.finalcalculatedexpensetrack[i].projectid && Date_Id[y].id===date)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Project_Id[z].id,thenid:Date_Id[y].id,displayname:Project_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Date_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }	  
   if($scope.Groupby=="Client")
	  {
		  
		  	
var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });
	
var Dateall=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
{

		var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
Dateall.push({id:date,Date:date});

}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);
	
var Client_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].clientid;
			if (idsSeen[id] !== idSeenValue) {
				Client_Id.push({id:FinalpreResult[i].clientid,displayname:FinalpreResult[i].client_name,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}



 var m=[]
 var m1=[]

for(var y=0; y<Date_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Client_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			
	var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
		if(Client_Id[z].id===$scope.finalcalculatedexpensetrack[i].clientid && Date_Id[y].id===date)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Client_Id[z].id,thenid:Date_Id[y].id,displayname:Client_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Date_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;


	  }	  
  
	  
 if($scope.Groupby=="Role")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });


			var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}

var Dateall=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
{

		var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
Dateall.push({id:date,Date:date});

}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);
		
	

 var m=[]
 var m1=[]

for(var y=0; y<Date_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Role_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			
var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')

		
		if(Role_Id[z].id===FinalpreResult[i].role && Date_Id[y].id===date)
		{
			

	       var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Role_Id[z].id,thenid:Date_Id[y].id,displayname:Role_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Date_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }
	  
 if($scope.Groupby=="Discipline")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });


			var Discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}

var Dateall=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
{

		var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
Dateall.push({id:date,Date:date});

}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);
		

 var m=[]
 var m1=[]

for(var y=0; y<Date_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Discipline_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			
var date=moment(FinalpreResult[i].date_update).format('DD-MM-YYYY')
		
		if(Discipline_Id[z].id===FinalpreResult[i].discipline && Date_Id[y].id===date)
		{
			

	       var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Discipline_Id[z].id,thenid:Date_Id[y].id,displayname:Discipline_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Date_Id[y].id,d:thenFinal_GroupByResult});

}



var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }
	  
 if($scope.Groupby=="Location")
	  {
		  
		  	
    var preResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });


			var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}

var Dateall=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
{

		var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
Dateall.push({id:date,Date:date});

}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);

 var m=[]
 var m1=[]

for(var y=0; y<Date_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Location_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult.length;i++)
		{
			
var date=moment(FinalpreResult[i].date_update).format('DD-MM-YYYY')
		
		if(Location_Id[z].id===FinalpreResult[i].location && Date_Id[y].id===date)
		{
			

	       var Amount=parseInt(FinalpreResult[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Location_Id[z].id,thenid:Date_Id[y].id,displayname:Location_Id[z].displayname,budget:budget})

	

}
m.push(thenFinal_GroupByResult);
m1.push({id:Date_Id[y].id,d:thenFinal_GroupByResult});

}



var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;



	  }	  

	   if($scope.Groupby=="Phase Name")
	  {
		  
		  

    var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

			var Phaseall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phaseall.push({id:FinalpreResult[i].editphaseid,displayname:FinalpreResult[i].editphasename,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniquePhase(arr) {
    var cleaned = [];
    Phaseall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Phase_Id = arrUniquePhase(Phaseall);


var Dateall=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
{

		var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
Dateall.push({id:date,Date:date});

}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);


		

 var m1=[]

for(var y=0; y<Date_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Phase_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			
var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
		
		if(Phase_Id[z].id===$scope.finalcalculatedexpensetrack[i].editphaseid && Date_Id[y].id===date)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Phase_Id[z].id,thenid:Date_Id[y].id,displayname:Phase_Id[z].displayname,budget:budget})

	

}

m1.push({id:Date_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;

	  }
	  
  if($scope.Groupby=="Category")
	  {
		  
		  

    var FinalpreResult = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

			var Catall = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id =FinalpreResult[i].excatid;
			if (idsSeen[id] !== idSeenValue) {
				Catall.push({id:FinalpreResult[i].excatid,displayname:FinalpreResult[i].excatname,budget:FinalpreResult[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniqueCat(arr) {
    var cleaned = [];
    Catall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Cat_Id = arrUniqueCat(Catall);


var Dateall=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
{

		var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
Dateall.push({id:date,Date:date});

}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);


		

 var m1=[]

for(var y=0; y<Date_Id.length;y++)
{

  var thenFinal_GroupByResult=[]
for(var z=0; z<Cat_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


 
		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			
var date=moment($scope.finalcalculatedexpensetrack[i].date_update).format('DD-MM-YYYY')
		
		
		if(Cat_Id[z].id===$scope.finalcalculatedexpensetrack[i].excatid && Date_Id[y].id===date)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
			

			
			
		}
		
			
		}

			var budget=0;
		$scope.budget=0;


thenFinal_GroupByResult.push({time_incurred:time_incurred,id:Cat_Id[z].id,thenid:Date_Id[y].id,displayname:Cat_Id[z].displayname,budget:budget})

	

}

m1.push({id:Date_Id[y].id,d:thenFinal_GroupByResult});

}

var z=[];
for(var i=0; i<$scope.Final_GroupByResult.length;i++)
{
	var k=[];
	for(var j=0; j<m1.length;j++)
{
	if($scope.Final_GroupByResult[i].id==m1[i].id)
	{
if(j==0){
		k.push(m1[i].d)
}
		
	}
	
}
z.push({displayname:$scope.Final_GroupByResult[i].displayname,time_incurred:$scope.Final_GroupByResult[i].time_incurred,budget:$scope.Final_GroupByResult[i].budget,displayname:$scope.Final_GroupByResult[i].displayname,then:k,id:$scope.Final_GroupByResult[i].id})
			
}

$scope.Final_GroupByResult=z;

	  }
	  

  }
//----------------------------------------------------------------------------
 };

 };

  }

//----------------------------------------------------------------------------------------------------

  if($scope.ViewState=="Utilization")
  {

	  $scope.Final_TwoBillRateResult=[];
	  $scope.Final_GroupByBillRateResult=[];
	  $scope.Final_GroupByResult=[];
      $scope.Final_GroupByResultBudget=[];
	  $scope.Finaldisplaytimetrack=[];
	  $scope.Finaldisplayexpensetrack=[];
	  $scope.expenseResultBudget=[];
	  $scope.TimeResultBudget=[];

	  $scope.Final_TwoBillRateResult=[];
	  $scope.Final_GroupByBillRateResult=[];
	  $scope.Final_GroupByResult=[];
      $scope.Final_GroupByResultBudget=[];
	  $scope.Finaldisplaytimetrack=[];
	  $scope.Finaldisplayexpensetrack=[];
	  $scope.expenseResultBudget=[];
	  $scope.TimeResultBudget=[];
	  

         		$scope.Project=[
		{projectname:"",id:0},
		{projectname:"Team Member",id:1},
		{projectname:"Role",id:2},
		{projectname:"Discipline",id:3},
		{projectname:"Location",id:4}
	    ];





			$scope.expense=false;
			$scope.util=true;
			$scope.timefee2=false;
			$scope.timefee1=false;
			$scope.budget=false;



 $scope.select_firstGroupby = function(firstGroupby,index) {

  $scope.GroupbyFirst=firstGroupby;

  		$scope.Then_groupby=[
		{projectname:"None",id:0},
		{projectname:"Team Member",id:1},
		{projectname:"Role",id:2},
		{projectname:"Discipline",id:3},
		{projectname:"Location",id:4}
		];
    $scope.Then_groupby.splice(index,1);

 if($scope.GroupbyFirst!="None")
  {

     /* $http({
                        method : "POST",
                        url : "/reportsefilter/",
                        data :
                        {
                        tag:'groupbyvalueutilization',

                        ViewState:$scope.ViewState,
                        groupbyfirst:$scope.GroupbyFirst,


                         user_id:userInfo.user_id,
                        company_id:userInfo.company_id

                        }

                       }).success(function(data){
                          $scope.Returnstables1=data.all_projdata
                          $scope.OverallTotal=data.totalexpenses


                   }); */


  }

  $scope.select_Groupby = function(thenGroupby) {

  $scope.Groupby=thenGroupby;




  if($scope.GroupbyFirst!="None" && $scope.Groupby!="None")
  {
    /* $http({
                        method : "POST",
                        url : "/reportfilterthengroupby/",
                        data :
                        {
                        tag:'groupbyvalueutilization',

                        ViewState:$scope.ViewState,
                        groupbyfirst:$scope.GroupbyFirst,
                        groupby_then:$scope.Groupby,

                         user_id:userInfo.user_id,
                        company_id:userInfo.company_id

                        }

                       }).success(function(data){
                         $scope.Returnstables1=data.all_projdata;
                        $scope.OverallTotal=data.totalexpenses

                   }); */

  }


 };

 };

  }

//--------------------------------------------------------------------------------

if($scope.ViewState=="Budgets" && ($scope.ViewState2=="Hours" || $scope.ViewState2=="Days"))
{

	  $scope.Final_TwoBillRateResult=[];
	  $scope.Final_GroupByBillRateResult=[];
	  $scope.Final_GroupByResult=[];
      $scope.Final_GroupByResultBudget=[];
	  $scope.Finaldisplaytimetrack=[];
	  $scope.Finaldisplayexpensetrack=[];
	  $scope.expenseResultBudget=[];
	  $scope.TimeResultBudget=[];
	  

	if($scope.ViewState2=="Hours")
	{
		$scope.convert=1;
	}
else{
	
	$scope.convert=8;
    }
//Budgets Hours/Days start
	$scope.Project=[
		{projectname:"",id:0},
		{projectname:"Team Member",id:1},
		{projectname:"Client",id:2},
		{projectname:"Project",id:3},
		{projectname:"Role",id:4},
		{projectname:"Discipline",id:5},
		{projectname:"Date String",id:6},
		{projectname:"Location",id:7},
		{projectname:"Phase Name",id:8}];	




	$scope.select_firstGroupby = function(firstGroupby,index) {

		$scope.GroupbyFirst=firstGroupby;
		
	$scope.Then_groupby=[
		{projectname:"",id:0},
		{projectname:"Team Member",id:1},
		{projectname:"Client",id:2},
		{projectname:"Project",id:3},
		{projectname:"Role",id:4},
		{projectname:"Discipline",id:5},
		{projectname:"Date String",id:6},
		{projectname:"Location",id:7},
		{projectname:"Phase Name",id:8}];	
		
	$scope.Then_groupby.splice(index,1);

	if($scope.GroupbyFirst!="None")
		{


if($scope.GroupbyFirst=="Project")
{

	/*
	var FinalpreResult = $scope.finalcalculatedtimetrack.map(function(v){

    var ret;

    $.each($scope.Finalprojects, function(k, v2){

        if(v2.id === v.projectid){
            ret = $.extend({}, v2, v); // merge the objects in to a new one
            return false; // break the loop
        } 
		

    });

    return ret;

}); */


	
		    var FinalpreResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

/****Get Project Id******/

var Project_Id = [];
var idsSeen = {}, idSeenValue = {};
for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
    id = FinalpreResult[i].id;
    if (idsSeen[id] !== idSeenValue) {
         Project_Id.push({id:FinalpreResult[i].id,displayname:FinalpreResult[i].project_name});
        idsSeen[id] = idSeenValue;
    }
}



/********** Get First Data For firstGroupby************/

var Final_GroupByResult=[]

for(var z=0; z<Project_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;

		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Project_Id[z].id===FinalpreResult[i].id)
		{
			
			time_incurred=time_incurred+FinalpreResult[i].time_incurred
			time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
			diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
			
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Project_Id[z].id,displayname:Project_Id[z].displayname,remaining:"-"})

	

	
}


var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
				
				
	Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,displayid:$scope.finalcalculatedtimetrack[i].projectid,displayname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred,remaining:"-"});		
				
			}


$scope.Final_GroupByResult=Final_GroupByResult;
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;

	
}	
	
if($scope.GroupbyFirst=="Client")
{
	

	
	
	/* var FinalpreResult = $scope.finalcalculatedtimetrack.map(function(v){

    var ret;

    $.each($scope.Finalprojects, function(k, v2){

        if(v2.id === v.projectid){
            ret = $.extend({}, v2, v); // merge the objects in to a new one
            return false; // break the loop
        } 
		

    });

    return ret;

}); */
		    var FinalpreResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

/****Get Project Id******/

var Client_Id = [];
var idsSeen = {}, idSeenValue = {};
for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
    id = FinalpreResult[i].id;
    if (idsSeen[id] !== idSeenValue) {
         Client_Id.push({id:FinalpreResult[i].clientid,displayname:FinalpreResult[i].clientname});
        idsSeen[id] = idSeenValue;
    }
}



/********** Get First Data For firstGroupby************/

var Final_GroupByResult=[]

for(var z=0; z<Client_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;

		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Client_Id[z].id===FinalpreResult[i].clientid)
		{
			
			time_incurred=time_incurred+FinalpreResult[i].time_incurred
			time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
			diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
			
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Client_Id[z].id,displayname:Client_Id[z].displayname,remaining:"_"})

	

	
}


var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
				
				
	Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,displayid:$scope.finalcalculatedtimetrack[i].clientid,displayname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred,remaining:"_"});		
				
			}

$scope.Final_GroupByResult=Final_GroupByResult;
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;

	
}


if($scope.GroupbyFirst=="Team Member")
{
			var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = $scope.finalcalculatedtimetrack.length, id; i < len; ++i) {
			id = $scope.finalcalculatedtimetrack[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:$scope.finalcalculatedtimetrack[i].member_id,displayname:$scope.finalcalculatedtimetrack[i].member_name});

				idsSeen[id] = idSeenValue;
			}
		}


var Final_GroupByResult=[]


for(var z=0; z<Member_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;

		for( i=0; i<$scope.finalcalculatedtimetrack.length;i++)
		{
			

		
		if(Member_Id[z].id===$scope.finalcalculatedtimetrack[i].member_id)
		{
			
	time_incurred=time_incurred+$scope.finalcalculatedtimetrack[i].time_incurred
	time_future_sheduled=time_future_sheduled+$scope.finalcalculatedtimetrack[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+$scope.finalcalculatedtimetrack[i].diffrentfrom_past
			
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Member_Id[z].id,displayname:Member_Id[z].displayname,remaining:"_"})

	

	
}

var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
				
				
	Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,displayid:$scope.finalcalculatedtimetrack[i].member_id,displayname:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred,remaining:"_"});		
				
			}
$scope.Final_GroupByResult=Final_GroupByResult;
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;		
	
}


if($scope.GroupbyFirst=="Date String")
{


var Dateall=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length;i++)
{
	
Dateall.push({id:$scope.finalcalculatedtimetrack[i].Date});
	
}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);


var Final_GroupByResult=[]


for(var z=0; z<Date_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;

		for( i=0; i<$scope.finalcalculatedtimetrack.length;i++)
		{
			

		
		if(Date_Id[z].id===$scope.finalcalculatedtimetrack[i].Date)
		{
			
	time_incurred=time_incurred+$scope.finalcalculatedtimetrack[i].time_incurred
	time_future_sheduled=time_future_sheduled+$scope.finalcalculatedtimetrack[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+$scope.finalcalculatedtimetrack[i].diffrentfrom_past
			
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Date_Id[z].id,displayname:Date_Id[z].id,remaining:"_"})

	

	
}


var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
				
				
	Finaldisplaytimetrack.push({displayid:$scope.finalcalculatedtimetrack[i].Date,Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred,remaining:"_"});		
				
			}
$scope.Final_GroupByResult=Final_GroupByResult;	
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;	


}


if($scope.GroupbyFirst=="Phase Name")
{
	//$scope.phase_added

	
			var Phase_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = $scope.finalcalculatedtimetrack.length, id; i < len; ++i) {
			id = $scope.finalcalculatedtimetrack[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phase_Id.push({id:$scope.finalcalculatedtimetrack[i].editphaseid,displayname:$scope.finalcalculatedtimetrack[i].editphasename});

				idsSeen[id] = idSeenValue;
			}
		}
		
var Final_GroupByResult=[]


for(var z=0; z<Phase_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;

		for( i=0; i<$scope.finalcalculatedtimetrack.length;i++)
		{
			

		
		if(Phase_Id[z].id===$scope.finalcalculatedtimetrack[i].editphaseid)
		{
			
	time_incurred=time_incurred+$scope.finalcalculatedtimetrack[i].time_incurred
	time_future_sheduled=time_future_sheduled+$scope.finalcalculatedtimetrack[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+$scope.finalcalculatedtimetrack[i].diffrentfrom_past
			
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Phase_Id[z].id,displayname:Phase_Id[z].displayname,remaining:"_"})
	
}

var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
				
				
	Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,displayid:$scope.finalcalculatedtimetrack[i].editphaseid,displayname:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred,remaining:"_"});		
				
			}
	
$scope.Final_GroupByResult=Final_GroupByResult;	
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;		
}

if($scope.GroupbyFirst=="Location")
{

  /*  var preResult = $scope.finalcalculatedtimetrack.map(function(v){

    var ret;

    $.each($scope.userprofile, function(k, v2){

        if(v2.id === v.member_id){
            ret = $.extend({}, v2, v); // merge the objects in to a new one
            return false; // break the loop
        } 
		

    });

    return ret;

});

	var FinalpreResult = preResult.map(function(v){

   var ret;

    $.each($scope.alllocation, function(k, v2){

	
		 if(v2.id === v.location){
			

             ret = $.extend({}, v2, v); // merge the objects in to a new one
           return false; // break the loop
        }

         
		

    });

  return ret;

}); */

 var preResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });
	
 var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });	

			var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}

		
var Final_GroupByResult=[]


for(var z=0; z<Location_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;

		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Location_Id[z].id===FinalpreResult[i].location)
		{
			
	time_incurred=time_incurred+FinalpreResult[i].time_incurred
	time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
			
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Location_Id[z].id,displayname:Location_Id[z].displayname,remaining:"_"})
	
}

var Finaldisplaytimetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
			{
				
				
	Finaldisplaytimetrack.push({Date:FinalpreResult[i].Date,clientid:FinalpreResult[i].clientid,clientname:FinalpreResult[i].clientname,displayid:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname,diffrentfrom_past:FinalpreResult[i].diffrentfrom_past,editphaseid:FinalpreResult[i].editphaseid,editphasename:FinalpreResult[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:FinalpreResult[i].memenddate,memstartdate:FinalpreResult[i].memstartdate,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_future_sheduled:FinalpreResult[i].time_future_sheduled,time_incurred:FinalpreResult[i].time_incurred,remaining:"_"});		
				
			}


$scope.Final_GroupByResult=Final_GroupByResult;	
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;			

}

if($scope.GroupbyFirst=="Role")
{

   /* var preResult = $scope.finalcalculatedtimetrack.map(function(v){

    var ret;

    $.each($scope.userprofile, function(k, v2){

        if(v2.id === v.member_id){
            ret = $.extend({}, v2, v); // merge the objects in to a new one
            return false; // break the loop
        } 
		

    });

    return ret;

});



	 var FinalpreResult = preResult.map(function(v){

   var ret;

    $.each($scope.allrole, function(k, v2){

	
		 if(v2.id === v.role){
			

             ret = $.extend({}, v2, v); // merge the objects in to a new one
           return false; // break the loop
        }

         
		

    });

  return ret;

}); */

 var preResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });
	
 var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });	

		var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}

		
var Final_GroupByResult=[]


for(var z=0; z<Role_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;

		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Role_Id[z].id===FinalpreResult[i].role)
		{
			
	time_incurred=time_incurred+FinalpreResult[i].time_incurred
	time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
			
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Role_Id[z].id,displayname:Role_Id[z].displayname,remaining:"_"})
	
}

var Finaldisplaytimetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
			{
				
				
	Finaldisplaytimetrack.push({Date:FinalpreResult[i].Date,clientid:FinalpreResult[i].clientid,clientname:FinalpreResult[i].clientname,displayid:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename,diffrentfrom_past:FinalpreResult[i].diffrentfrom_past,editphaseid:FinalpreResult[i].editphaseid,editphasename:FinalpreResult[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:FinalpreResult[i].memenddate,memstartdate:FinalpreResult[i].memstartdate,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_future_sheduled:FinalpreResult[i].time_future_sheduled,time_incurred:FinalpreResult[i].time_incurred,remaining:"_"});		
				
			}


$scope.Final_GroupByResult=Final_GroupByResult;	
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;	

		
}

if($scope.GroupbyFirst=="Discipline")
{
	
	//$scope.alldiscipline disciplinename

   /* var preResult = $scope.finalcalculatedtimetrack.map(function(v){

    var ret;

    $.each($scope.userprofile, function(k, v2){

        if(v2.id === v.member_id){
            ret = $.extend({}, v2, v); // merge the objects in to a new one
            return false; // break the loop
        } 
		

    });

    return ret;

});



	 var FinalpreResult = preResult.map(function(v){

   var ret;

    $.each($scope.alldiscipline, function(k, v2){

	
		 if(v2.id === v.discipline){
			

             ret = $.extend({}, v2, v); // merge the objects in to a new one
           return false; // break the loop
        }

         
		

    });

  return ret;

}); */

 var preResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });
	
 var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });	

		var discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}

		
var Final_GroupByResult=[]


for(var z=0; z<discipline_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;

		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(discipline_Id[z].id===FinalpreResult[i].role)
		{
			
	time_incurred=time_incurred+FinalpreResult[i].time_incurred
	time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
			
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:discipline_Id[z].id,displayname:discipline_Id[z].displayname,remaining:"_"})
	
}

var Finaldisplaytimetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
			{
				
				
	Finaldisplaytimetrack.push({Date:FinalpreResult[i].Date,clientid:FinalpreResult[i].clientid,clientname:FinalpreResult[i].clientname,displayid:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename,diffrentfrom_past:FinalpreResult[i].diffrentfrom_past,editphaseid:FinalpreResult[i].editphaseid,editphasename:FinalpreResult[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:FinalpreResult[i].memenddate,memstartdate:FinalpreResult[i].memstartdate,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_future_sheduled:FinalpreResult[i].time_future_sheduled,time_incurred:FinalpreResult[i].time_incurred,remaining:"_"});		
				
			}


$scope.Final_GroupByResult=Final_GroupByResult;	
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;	

		
}

		}

		$scope.select_Groupby = function(thenGroupby) {

		$scope.Groupby=thenGroupby;




		if($scope.GroupbyFirst!="None" && $scope.Groupby!="None")
		{
		               /*    $http({
                        method : "POST",
                        url : "/reportfilterthengroupby/",
                        data :
                        {
                        tag:'groupbyvaluebudget',

                        ViewState:$scope.ViewState,
                        ViewState1:$scope.ViewState1,
                        groupbyfirst:$scope.GroupbyFirst,
                        groupby_then:$scope.Groupby,

                         user_id:userInfo.user_id,
                        company_id:userInfo.company_id

                        }

                       }).success(function(data){
                        $scope.Returnstables1=data.all_projdata;
                        $scope.OverallTotal=data.totalexpenses

                   }); */


		}


	};

	};

		}


//--------------------------------------------------------------------------------


if($scope.ViewState=="Budgets" && $scope.ViewState2=="Amounts")
{


	  $scope.Final_TwoBillRateResult=[];
	  $scope.Final_GroupByBillRateResult=[];
	  $scope.Final_GroupByResult=[];
      $scope.Final_GroupByResultBudget=[];
	  $scope.Finaldisplaytimetrack=[];
	  $scope.Finaldisplayexpensetrack=[];
	  $scope.expenseResultBudget=[];
	  $scope.TimeResultBudget=[];
	  
	$scope.Project=[
		{projectname:"",id:0},
		{projectname:"Team Member",id:1},
		{projectname:"Client",id:2},
		{projectname:"Project",id:3},
		{projectname:"Role",id:4},
		{projectname:"Discipline",id:5},
		{projectname:"Location",id:7},
		{projectname:"Phase Name",id:8}];	






 $scope.select_firstGroupby = function(firstGroupby,index) {

  $scope.GroupbyFirst=firstGroupby;

	$scope.Then_groupby=[
		{projectname:"",id:0},
		{projectname:"Team Member",id:1},
		{projectname:"Client",id:2},
		{projectname:"Project",id:3},
		{projectname:"Role",id:4},
		{projectname:"Discipline",id:5},
		{projectname:"Location",id:7},
		{projectname:"Phase Name",id:8}];	
		
	$scope.Then_groupby.splice(index,1);

 if($scope.GroupbyFirst!="None")
  {

if($scope.GroupbyFirst=="Project")
{
	
	
	/*	var FinalpreResult = $scope.finalcalculatedtimetrack.map(function(v){

    var ret;

    $.each($scope.Finalprojects, function(k, v2){

        if(v2.id === v.projectid){
            ret = $.extend({}, v2, v); // merge the objects in to a new one
            return false; // break the loop
        } 
		

    });

    return ret;

}); */


 var FinalpreResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });	

/****Get Project Id******/

var Project_Id = [];
var idsSeen = {}, idSeenValue = {};
for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
    id = FinalpreResult[i].id;
    if (idsSeen[id] !== idSeenValue) {
         Project_Id.push({id:FinalpreResult[i].id,displayname:FinalpreResult[i].project_name,budget:FinalpreResult[i].total_expense_budget});
        idsSeen[id] = idSeenValue;
    }
}





/********** Get First Data For firstGroupby************/

var Final_GroupByResult=[]

for(var z=0; z<Project_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;

		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Project_Id[z].id===FinalpreResult[i].id)
		{
			
			time_incurred=time_incurred+FinalpreResult[i].time_incurred
			time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
			diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
			
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Project_Id[z].id,displayname:Project_Id[z].displayname})

	

	
}


var Final_GroupByResult2=[]

for(var z=0; z<Project_Id.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Project_Id[z].id===$scope.finalcalculatedexpensetrack[i].projectid)
		{
			
			var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;

			
			
		}
			
			
		}
		
		var budget=parseInt(Project_Id[z].budget);
Final_GroupByResult2.push({time_incurred2:time_incurred,id:Project_Id[z].id,displayname:Project_Id[z].displayname,budget:budget})

	

	
}

/*
var finaly = Final_GroupByResult.map(function(v){

    var ret;

    $.each(Final_GroupByResult2, function(k, v2){

        if(v2.id === v.id){
			
            ret = $.extend({}, v2, v); // merge the objects in to a new one
            return false; // break the loop
        } 
		

    });

    return ret;

}); */

  var finaly = _.map(Final_GroupByResult, function(base){
        return _.extend(base, _.findWhere(Final_GroupByResult2, { id: base.id} ));
    });	


var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
				
				
	Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,displayid:$scope.finalcalculatedtimetrack[i].projectid,displayname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred});		
				
			}
			
var Finaldisplayexpensetrack=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length; i++)
			{
				
			var time_incurred=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			
	Finaldisplayexpensetrack.push({Date:$scope.finalcalculatedexpensetrack[i].date_update,editphaseid:$scope.finalcalculatedexpensetrack[i].editphaseid,editphasename:$scope.finalcalculatedexpensetrack[i].editphasename,member_id:$scope.finalcalculatedexpensetrack[i].member_id,member_name:$scope.finalcalculatedexpensetrack[i].member_name,displayid:$scope.finalcalculatedexpensetrack[i].projectid,displayname:$scope.finalcalculatedexpensetrack[i].projectname,time_incurred:time_incurred,category:$scope.finalcalculatedexpensetrack[i].excatname,categoryid:$scope.finalcalculatedexpensetrack[i].excatid,notes:$scope.finalcalculatedexpensetrack[i].notes});		
				
			}

$scope.expenseResultBudget=Final_GroupByResult2;
$scope.TimeResultBudget=Final_GroupByResult;
$scope.Final_GroupByResultBudget=finaly;
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;
$scope.Finaldisplayexpensetrack=Finaldisplayexpensetrack;


}	
if($scope.GroupbyFirst=="Client")
{

/****Get Project Id******/


var Client_Id2 = [];
var idsSeen = {}, idSeenValue = {};
for (var i = 0, len = $scope.Finalprojects.length, id; i < len; ++i) {
    id = $scope.Finalprojects[i].id;
    if (idsSeen[id] !== idSeenValue) {
         Client_Id2.push({id:$scope.Finalprojects[i].clientid,displayname:$scope.Finalprojects[i].client_name,budget:$scope.Finalprojects[i].total_expense_budget});
        idsSeen[id] = idSeenValue;
    }
} 

	/* var FinalpreResult2 = $scope.finalcalculatedexpensetrack.map(function(v){

    var ret;

    $.each($scope.Finalprojects, function(k, v2){

        if(v2.id === v.projectid){
            ret = $.extend({}, v2, v); // merge the objects in to a new one
            return false; // break the loop
        } 
		

    });

    return ret;

}); */

	 var FinalpreResult2 = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });	

/********** Get First Data For firstGroupby************/

var Final_GroupByResult2=[]

for(var z=0; z<Client_Id2.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult2.length;i++)
		{
			

		
		if(Client_Id2[z].id===FinalpreResult2[i].clientid)
		{
			
			var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;

			
			
		}
			
			
		}

		var budget=parseInt(Client_Id2[z].budget);
Final_GroupByResult2.push({time_incurred2:time_incurred,id:Client_Id2[z].id,displayname:Client_Id2[z].displayname,budget:budget})	

	
}

 /******** Expense End **********/
 /******** time End **********/
 
 	
	/*var FinalpreResult = $scope.finalcalculatedtimetrack.map(function(v){

    var ret;

    $.each($scope.Finalprojects, function(k, v2){

        if(v2.id === v.projectid){
            ret = $.extend({}, v2, v); // merge the objects in to a new one
            return false; // break the loop
        } 
		

    });

    return ret;

}); */

	 var FinalpreResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });	

/****Get Project Id******/

var Client_Id = [];
var idsSeen = {}, idSeenValue = {};
for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
    id = FinalpreResult[i].id;
    if (idsSeen[id] !== idSeenValue) {
         Client_Id.push({id:FinalpreResult[i].clientid,displayname:FinalpreResult[i].clientname});
        idsSeen[id] = idSeenValue;
    }
}



/********** Get First Data For firstGroupby************/

var Final_GroupByResult=[]

for(var z=0; z<Client_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;

		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Client_Id[z].id===FinalpreResult[i].clientid)
		{
			
			time_incurred=time_incurred+FinalpreResult[i].time_incurred
			time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
			diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
			
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Client_Id[z].id,displayname:Client_Id[z].displayname})

	

	
}
/*
var finaly = Final_GroupByResult.map(function(v){

    var ret;

    $.each(Final_GroupByResult2, function(k, v2){

        if(v2.id === v.id){
			
            ret = $.extend({}, v2, v); // merge the objects in to a new one
            return false; // break the loop
        } 
		

    });

    return ret;

});
 */
  var finaly = _.map(Final_GroupByResult, function(base){
        return _.extend(base, _.findWhere(Final_GroupByResult2, { id: base.id} ));
    });	

 /******** Time End **********/

var Finaldisplayexpensetrack=[];
for(var i=0; i<FinalpreResult2.length; i++)
			{
				
			var time_incurred=parseInt(FinalpreResult2[i].amount);
			
	Finaldisplayexpensetrack.push({Date:FinalpreResult2[i].date_update,editphaseid:FinalpreResult2[i].editphaseid,editphasename:FinalpreResult2[i].editphasename,member_id:FinalpreResult2[i].member_id,member_name:FinalpreResult2[i].member_name,projectid:FinalpreResult2[i].projectid,projectname:FinalpreResult2[i].projectname,time_incurred:time_incurred,category:FinalpreResult2[i].excatname,categoryid:$scope.finalcalculatedexpensetrack[i].excatid,notes:FinalpreResult2[i].notes,displayid:FinalpreResult2[i].clientid,displayname:FinalpreResult2[i].client_name});		
				
			}

var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
				
				
	Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,displayid:$scope.finalcalculatedtimetrack[i].clientid,displayname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred});		
				
			}


$scope.expenseResultBudget=Final_GroupByResult2;
$scope.TimeResultBudget=Final_GroupByResult;
$scope.Final_GroupByResultBudget=finaly;
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;
$scope.Finaldisplayexpensetrack=Finaldisplayexpensetrack;	
	


}
if($scope.GroupbyFirst=="Team Member")
{
	/*********** Expense Track Start***************/
		/*	var FinalpreResult2 = $scope.finalcalculatedexpensetrack.map(function(v){

    var ret;

    $.each($scope.Finalprojects, function(k, v2){

        if(v2.id === v.projectid){
            ret = $.extend({}, v2, v); // merge the objects in to a new one
            return false; // break the loop
        } 
		

    });

    return ret;

}); */
 var FinalpreResult2 = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });	

			var Member_Id2 = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult2.length, id; i < len; ++i) {
			id = $scope.finalcalculatedexpensetrack[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id2.push({id:FinalpreResult2[i].member_id,displayname:FinalpreResult2[i].member_name,budget:FinalpreResult2[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}



 var Final_GroupByResult2=[]


for(var z=0; z<Member_Id2.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Member_Id2[z].id===$scope.finalcalculatedexpensetrack[i].member_id)
		{
			

			
		var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;

			
			
		}
			
			
		}

		var budget=0;
		$scope.budget=0;


Final_GroupByResult2.push({time_incurred2:time_incurred,id:Member_Id2[z].id,displayname:Member_Id2[z].displayname,budget:budget})

	

	
}
/************ Expense Track end**************/
/*************Time Track Start*************/
			var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = $scope.finalcalculatedtimetrack.length, id; i < len; ++i) {
			id = $scope.finalcalculatedtimetrack[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:$scope.finalcalculatedtimetrack[i].member_id,displayname:$scope.finalcalculatedtimetrack[i].member_name});

				idsSeen[id] = idSeenValue;
			}
		}


var Final_GroupByResult=[]


for(var z=0; z<Member_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;

		for( i=0; i<$scope.finalcalculatedtimetrack.length;i++)
		{
			

		
		if(Member_Id[z].id===$scope.finalcalculatedtimetrack[i].member_id)
		{
			
	time_incurred=time_incurred+$scope.finalcalculatedtimetrack[i].time_incurred
	time_future_sheduled=time_future_sheduled+$scope.finalcalculatedtimetrack[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+$scope.finalcalculatedtimetrack[i].diffrentfrom_past
			
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Member_Id[z].id,displayname:Member_Id[z].displayname})

	

	
}



/*************Time Track end*************/

/* var finaly = Final_GroupByResult.map(function(v){

    var ret;

    $.each(Final_GroupByResult2, function(k, v2){

        if(v2.id === v.id){
			
            ret = $.extend({}, v2, v); // merge the objects in to a new one
            return false; // break the loop
        } 
		

    });

    return ret;

}); */

  var finaly = _.map(Final_GroupByResult, function(base){
        return _.extend(base, _.findWhere(Final_GroupByResult2, { id: base.id} ));
    });	


var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
				
				
	Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,displayid:$scope.finalcalculatedtimetrack[i].member_id,displayname:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred});		
				
			}
	
	var Finaldisplayexpensetrack=[];
for(var i=0; i<FinalpreResult2.length; i++)
			{
				
			var time_incurred=parseInt(FinalpreResult2[i].amount);
			
	Finaldisplayexpensetrack.push({Date:FinalpreResult2[i].date_update,editphaseid:FinalpreResult2[i].editphaseid,editphasename:FinalpreResult2[i].editphasename,displayid:FinalpreResult2[i].member_id,displayname:FinalpreResult2[i].member_name,projectid:FinalpreResult2[i].projectid,projectname:FinalpreResult2[i].projectname,time_incurred:time_incurred,category:FinalpreResult2[i].excatname,categoryid:$scope.finalcalculatedexpensetrack[i].excatid,notes:FinalpreResult2[i].notes,clientid:FinalpreResult2[i].clientid,client_name:FinalpreResult2[i].client_name});		
				
			}


$scope.expenseResultBudget=Final_GroupByResult2;
$scope.TimeResultBudget=Final_GroupByResult;
$scope.Final_GroupByResultBudget=finaly;
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;
$scope.Finaldisplayexpensetrack=Finaldisplayexpensetrack;	
}	

if($scope.GroupbyFirst=="Phase Name")
{
	
	
	/************ Expense Track start************************/
	
	
	/*	var FinalpreResult2 = $scope.finalcalculatedexpensetrack.map(function(v){

    var ret;

    $.each($scope.Finalprojects, function(k, v2){

        if(v2.id === v.projectid){
            ret = $.extend({}, v2, v); // merge the objects in to a new one
            return false; // break the loop
        } 
		

    });

    return ret;

});  */

 var FinalpreResult2 = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });	

			var Phaseall2 = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult2.length, id; i < len; ++i) {
			id =FinalpreResult2[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phaseall2.push({id:FinalpreResult2[i].editphaseid,displayname:FinalpreResult2[i].editphasename,budget:FinalpreResult2[i].total_expense_budget});

				idsSeen[id] = idSeenValue;
			}
		}
		



function arrUniquePhase(arr) {
    var cleaned = [];
    Phaseall2.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Phase_Id2 = arrUniquePhase(Phaseall2);



var Final_GroupByResult2=[]


for(var z=0; z<Phase_Id2.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<$scope.finalcalculatedexpensetrack.length;i++)
		{
			

		
		if(Phase_Id2[z].id===$scope.finalcalculatedexpensetrack[i].editphaseid)
		{
			
	var Amount=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			time_incurred=time_incurred+Amount;
	
		}
			
		}

		var budget=0;
	$scope.budget=0;
	


Final_GroupByResult2.push({time_incurred2:time_incurred,id:Phase_Id2[z].id,displayname:Phase_Id2[z].displayname,budget:budget})

	

	
}

/************ Expense Track end************************/
	
/************ Time Track start************************/
	//$scope.phase_added

	
			var Phase_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = $scope.finalcalculatedtimetrack.length, id; i < len; ++i) {
			id = $scope.finalcalculatedtimetrack[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phase_Id.push({id:$scope.finalcalculatedtimetrack[i].editphaseid,displayname:$scope.finalcalculatedtimetrack[i].editphasename});

				idsSeen[id] = idSeenValue;
			}
		}
		
var Final_GroupByResult=[]


for(var z=0; z<Phase_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;

		for( i=0; i<$scope.finalcalculatedtimetrack.length;i++)
		{
			

		
		if(Phase_Id[z].id===$scope.finalcalculatedtimetrack[i].editphaseid)
		{
			
	time_incurred=time_incurred+$scope.finalcalculatedtimetrack[i].time_incurred
	time_future_sheduled=time_future_sheduled+$scope.finalcalculatedtimetrack[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+$scope.finalcalculatedtimetrack[i].diffrentfrom_past
			
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Phase_Id[z].id,displayname:Phase_Id[z].displayname})
	
}


	/************ Time Track end************************/
	
	/* var finaly = Final_GroupByResult.map(function(v){

    var ret;

    $.each(Final_GroupByResult2, function(k, v2){

        if(v2.id === v.id){
			
            ret = $.extend({}, v2, v); // merge the objects in to a new one
            return false; // break the loop
        } 
		

    });

    return ret;

});

 */
 
  var finaly = _.map(Final_GroupByResult, function(base){
        return _.extend(base, _.findWhere(Final_GroupByResult2, { id: base.id} ));
    });	
	
	var Finaldisplayexpensetrack=[];
for(var i=0; i<$scope.finalcalculatedexpensetrack.length; i++)
			{
		
			var time_incurred=parseInt($scope.finalcalculatedexpensetrack[i].amount);
			
	Finaldisplayexpensetrack.push({excatid:$scope.finalcalculatedexpensetrack[i].excatid,Date:$scope.finalcalculatedexpensetrack[i].date_update,displayid:$scope.finalcalculatedexpensetrack[i].editphaseid,editphasename:$scope.finalcalculatedexpensetrack[i].editphasename,member_id:$scope.finalcalculatedexpensetrack[i].member_id,member_name:$scope.finalcalculatedexpensetrack[i].member_name,projectid:$scope.finalcalculatedexpensetrack[i].projectid,projectname:$scope.finalcalculatedexpensetrack[i].projectname,time_incurred:time_incurred,category:$scope.finalcalculatedexpensetrack[i].excatname,notes:$scope.finalcalculatedexpensetrack[i].notes});	

	
			}
			
			var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
				
				
	Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,displayid:$scope.finalcalculatedtimetrack[i].editphaseid,displayname:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred});		
				
			}
			
		
	

$scope.expenseResultBudget=Final_GroupByResult2;
$scope.TimeResultBudget=Final_GroupByResult;
$scope.Final_GroupByResultBudget=finaly;
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;
$scope.Finaldisplayexpensetrack=Finaldisplayexpensetrack;	
	
}

if($scope.GroupbyFirst=="Location")
{
/******************Expense Track Start********************************/

	


    var preResult2 = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });



    var FinalpreResult2 = _.map(preResult2, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });

			var Location_Id2 = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult2.length, id; i < len; ++i) {
			id = FinalpreResult2[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id2.push({id:FinalpreResult2[i].location,displayname:FinalpreResult2[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}
		




		
var Final_GroupByResult2=[]


for(var z=0; z<Location_Id2.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult2.length;i++)
		{
			

		
		if(Location_Id2[z].id===FinalpreResult2[i].location)
		{
			
	var Amount=parseInt(FinalpreResult2[i].amount);
			time_incurred=time_incurred+Amount;
			
			
		}
			
			
		}
		var budget=0;
	$scope.budget=0;
	


Final_GroupByResult2.push({time_incurred2:time_incurred,id:Location_Id2[z].id,displayname:Location_Id2[z].displayname,budget:budget})
}



/******************Expense Track End********************************/

/******************Time Track Start********************************/



	    var preResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });
	
		    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });





			var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}

		
var Final_GroupByResult=[]


for(var z=0; z<Location_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;

		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Location_Id[z].id===FinalpreResult[i].location)
		{
			
	time_incurred=time_incurred+FinalpreResult[i].time_incurred
	time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
			
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Location_Id[z].id,displayname:Location_Id[z].displayname,remaining:"_"})
	
}



/******************Time Track End********************************/

  var finaly = _.map(Final_GroupByResult, function(base){
        return _.extend(base, _.findWhere(Final_GroupByResult2, { id: base.id} ));
    });	
	
	
var Finaldisplayexpensetrack=[];
for(var i=0; i<FinalpreResult2.length; i++)
			{
				
		var time_incurred=parseInt(FinalpreResult2[i].amount);		
		Finaldisplayexpensetrack.push({excatid:FinalpreResult2[i].excatid,Date:FinalpreResult2[i].date_update,displayid:FinalpreResult2[i].location,editphasename:FinalpreResult2[i].editphasename,member_id:FinalpreResult2[i].member_id,member_name:FinalpreResult2[i].member_name,projectid:FinalpreResult2[i].projectid,projectname:FinalpreResult2[i].projectname,time_incurred:time_incurred,category:FinalpreResult2[i].excatname,notes:FinalpreResult2[i].notes});			
				
			}

var Finaldisplaytimetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
			{
				
				
	Finaldisplaytimetrack.push({Date:FinalpreResult[i].Date,clientid:FinalpreResult[i].clientid,clientname:FinalpreResult[i].clientname,displayid:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname,diffrentfrom_past:FinalpreResult[i].diffrentfrom_past,editphaseid:FinalpreResult[i].editphaseid,editphasename:FinalpreResult[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:FinalpreResult[i].memenddate,memstartdate:FinalpreResult[i].memstartdate,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_future_sheduled:FinalpreResult[i].time_future_sheduled,time_incurred:FinalpreResult[i].time_incurred,remaining:"_"});		
				
			}

	
$scope.expenseResultBudget=Final_GroupByResult2;
$scope.TimeResultBudget=Final_GroupByResult;
$scope.Final_GroupByResultBudget=finaly;
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;
$scope.Finaldisplayexpensetrack=Finaldisplayexpensetrack;	
	
}
if($scope.GroupbyFirst=="Role")
{
	
	/****************Expense Track Start*****************************/
		

    var preResult2 = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult2 = _.map(preResult2, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });


			var Role_Id2 = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult2.length, id; i < len; ++i) {
			id = FinalpreResult2[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id2.push({id:FinalpreResult2[i].role,displayname:FinalpreResult2[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}
		


		
var Final_GroupByResult2=[]


for(var z=0; z<Role_Id2.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult2.length;i++)
		{
			

		
		if(Role_Id2[z].id===FinalpreResult2[i].role)
		{
			
	var Amount=parseInt(FinalpreResult2[i].amount);
			time_incurred=time_incurred+Amount;
			
			
		}
			
			
		}
		var budget=0;
	$scope.budget=0;
	


Final_GroupByResult2.push({time_incurred2:time_incurred,id:Role_Id2[z].id,displayname:Role_Id2[z].displayname,budget:budget})
}


	/****************Expense Track End*****************************/
	/****************Time Track Start*****************************/
	

	    var preResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });
	
		    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });

		var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}

		
var Final_GroupByResult=[]


for(var z=0; z<Role_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;

		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Role_Id[z].id===FinalpreResult[i].role)
		{
			
	time_incurred=time_incurred+FinalpreResult[i].time_incurred
	time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
			
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Role_Id[z].id,displayname:Role_Id[z].displayname,remaining:"_"})
	
}


	/****************Time Track End*****************************/
	
	  var finaly = _.map(Final_GroupByResult, function(base){
        return _.extend(base, _.findWhere(Final_GroupByResult2, { id: base.id} ));
    });	

	var Finaldisplayexpensetrack=[];
for(var i=0; i<FinalpreResult2.length; i++)
			{
				
		var time_incurred=parseInt(FinalpreResult2[i].amount);		
		Finaldisplayexpensetrack.push({excatid:FinalpreResult2[i].excatid,Date:FinalpreResult2[i].date_update,displayid:FinalpreResult2[i].role,editphasename:FinalpreResult2[i].editphasename,member_id:FinalpreResult2[i].member_id,member_name:FinalpreResult2[i].member_name,projectid:FinalpreResult2[i].projectid,projectname:FinalpreResult2[i].projectname,time_incurred:time_incurred,category:FinalpreResult2[i].excatname,notes:FinalpreResult2[i].notes});			
				
			}
var Finaldisplaytimetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
			{
				
				
	Finaldisplaytimetrack.push({Date:FinalpreResult[i].Date,clientid:FinalpreResult[i].clientid,clientname:FinalpreResult[i].clientname,displayid:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename,diffrentfrom_past:FinalpreResult[i].diffrentfrom_past,editphaseid:FinalpreResult[i].editphaseid,editphasename:FinalpreResult[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:FinalpreResult[i].memenddate,memstartdate:FinalpreResult[i].memstartdate,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_future_sheduled:FinalpreResult[i].time_future_sheduled,time_incurred:FinalpreResult[i].time_incurred,remaining:"_"});		
				
			}


$scope.expenseResultBudget=Final_GroupByResult2;
$scope.TimeResultBudget=Final_GroupByResult;
$scope.Final_GroupByResultBudget=finaly;
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;
$scope.Finaldisplayexpensetrack=Finaldisplayexpensetrack;
	
}

if($scope.GroupbyFirst=="Discipline")
{
	
	/****************Expense Track Start*****************************/
		

    var preResult2 = _.map($scope.finalcalculatedexpensetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });


    var FinalpreResult2 = _.map(preResult2, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });


			var Discipline_Id2 = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult2.length, id; i < len; ++i) {
			id = FinalpreResult2[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id2.push({id:FinalpreResult2[i].discipline,displayname:FinalpreResult2[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}
		


		
var Final_GroupByResult2=[]


for(var z=0; z<Discipline_Id2.length;z++)
{
	var i=0;
	var time_incurred=0;


		for( i=0; i<FinalpreResult2.length;i++)
		{
			

		
		if(Discipline_Id2[z].id===FinalpreResult2[i].discipline)
		{
			
	var Amount=parseInt(FinalpreResult2[i].amount);
			time_incurred=time_incurred+Amount;
			
			
		}
			
			
		}
		var budget=0;
	$scope.budget=0;
	


Final_GroupByResult2.push({time_incurred2:time_incurred,id:Discipline_Id2[z].id,displayname:Discipline_Id2[z].displayname,budget:budget})
}


	/****************Expense Track End*****************************/
	/****************Time Track Start*****************************/
	

	    var preResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });
	
		    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.discipline} ));
    });

		var Discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				Discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}

		
var Final_GroupByResult=[]


for(var z=0; z<Discipline_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;

		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Discipline_Id[z].id===FinalpreResult[i].discipline)
		{
			
	time_incurred=time_incurred+FinalpreResult[i].time_incurred
	time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
			
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Discipline_Id[z].id,displayname:Discipline_Id[z].displayname,remaining:"_"})
	
}


	/****************Time Track End*****************************/
	
	  var finaly = _.map(Final_GroupByResult, function(base){
        return _.extend(base, _.findWhere(Final_GroupByResult2, { id: base.id} ));
    });	
	


	var Finaldisplayexpensetrack=[];
for(var i=0; i<FinalpreResult2.length; i++)
			{
				
		var time_incurred=parseInt(FinalpreResult2[i].amount);		
		Finaldisplayexpensetrack.push({excatid:FinalpreResult2[i].excatid,Date:FinalpreResult2[i].date_update,displayid:FinalpreResult2[i].discipline,editphasename:FinalpreResult2[i].editphasename,member_id:FinalpreResult2[i].member_id,member_name:FinalpreResult2[i].member_name,projectid:FinalpreResult2[i].projectid,projectname:FinalpreResult2[i].projectname,time_incurred:time_incurred,category:FinalpreResult2[i].excatname,notes:FinalpreResult2[i].notes});			
				
			}
var Finaldisplaytimetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
			{
				
				
	Finaldisplaytimetrack.push({Date:FinalpreResult[i].Date,clientid:FinalpreResult[i].clientid,clientname:FinalpreResult[i].clientname,displayid:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename,diffrentfrom_past:FinalpreResult[i].diffrentfrom_past,editphaseid:FinalpreResult[i].editphaseid,editphasename:FinalpreResult[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:FinalpreResult[i].memenddate,memstartdate:FinalpreResult[i].memstartdate,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_future_sheduled:FinalpreResult[i].time_future_sheduled,time_incurred:FinalpreResult[i].time_incurred,remaining:"_"});		
				
			}


$scope.expenseResultBudget=Final_GroupByResult2;
$scope.TimeResultBudget=Final_GroupByResult;
$scope.Final_GroupByResultBudget=finaly;
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;
$scope.Finaldisplayexpensetrack=Finaldisplayexpensetrack;

	
}


  }

  $scope.select_Groupby = function(thenGroupby) {

  $scope.Groupby=thenGroupby;




  if($scope.GroupbyFirst!="None" && $scope.Groupby!="None")
  {
    /* $http({
                        method : "POST",
                        url : "/reportfilterthengroupby/",
                        data :
                        {
                        tag:'groupbyvalueutilization',

                        ViewState:$scope.ViewState,
                        groupbyfirst:$scope.GroupbyFirst,
                        groupby_then:$scope.Groupby,

                         user_id:userInfo.user_id,
                        company_id:userInfo.company_id

                        }

                       }).success(function(data){
                         $scope.Returnstables1=data.all_projdata;
                        $scope.OverallTotal=data.totalexpenses

                   }); */

  }


 };

 };

  }





//--------------------------------------------------------------------------------




if($scope.ViewState=="Timefee" && $scope.ViewState2=="Amounts" )
{

	  $scope.Final_TwoBillRateResult=[];
	  $scope.Final_GroupByBillRateResult=[];
	  $scope.Final_GroupByResult=[];
      $scope.Final_GroupByResultBudget=[];
	  $scope.Finaldisplaytimetrack=[];
	  $scope.Finaldisplayexpensetrack=[];
	  $scope.expenseResultBudget=[];
	  $scope.TimeResultBudget=[];


	$scope.Project=[
		{projectname:"",id:0},
		{projectname:"Team Member",id:1},
		{projectname:"Client",id:2},
		{projectname:"Project",id:3},
		{projectname:"Role",id:4},
		{projectname:"Discipline",id:5},
		{projectname:"Date String",id:6},
		{projectname:"Location",id:7},
		{projectname:"Phase Name",id:8}];	






 $scope.select_firstGroupby = function(firstGroupby,index) {

  $scope.GroupbyFirst=firstGroupby;

	$scope.Then_groupby=[
		{projectname:"",id:0},
		{projectname:"Team Member",id:1},
		{projectname:"Client",id:2},
		{projectname:"Project",id:3},
		{projectname:"Role",id:4},
		{projectname:"Discipline",id:5},
		{projectname:"Date String",id:6},
		{projectname:"Location",id:7},
		{projectname:"Phase Name",id:8}];	
		
	$scope.Then_groupby.splice(index,1);

 if($scope.GroupbyFirst!="None")
  {


if($scope.GroupbyFirst=="Project")
{
	


    var FinalpreResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

/****Get Project Id******/

var Project_Id = [];
var idsSeen = {}, idSeenValue = {};
for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
    id = FinalpreResult[i].id;
    if (idsSeen[id] !== idSeenValue) {
         Project_Id.push({id:FinalpreResult[i].id,displayname:FinalpreResult[i].project_name});
        idsSeen[id] = idSeenValue;
    }
}



/********** Get First Data For firstGroupby************/

var Final_GroupByResult=[]

for(var z=0; z<Project_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;
	var billrate=0;

		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Project_Id[z].id===FinalpreResult[i].id)
		{
			
			time_incurred=time_incurred+FinalpreResult[i].time_incurred
			time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
			diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
			billrate=1;
			
			
		}
			
			
		}
Final_GroupByResult.push({billrate:billrate,time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Project_Id[z].id,displayname:Project_Id[z].displayname})

	

	
}


var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
				
				var billrate=1;
	Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,displayid:$scope.finalcalculatedtimetrack[i].projectid,displayname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred,billrate:billrate});		
				
			}


$scope.Final_GroupByBillRateResult=Final_GroupByResult;
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;


}	
	

if($scope.GroupbyFirst=="Client")
{

$scope.Final_GroupByResult=[];
$scope.Finaldisplayexpensetrack=[];
$scope.Finaldisplaytimetrack=[];



	    var FinalpreResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

/****Get Project Id******/

var Client_Id = [];
var idsSeen = {}, idSeenValue = {};
for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
    id = FinalpreResult[i].id;
    if (idsSeen[id] !== idSeenValue) {
         Client_Id.push({id:FinalpreResult[i].clientid,displayname:FinalpreResult[i].clientname});
        idsSeen[id] = idSeenValue;
    }
}



/********** Get First Data For firstGroupby************/

var Final_GroupByResult=[]

for(var z=0; z<Client_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;
     var billrate=0;	
		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Client_Id[z].id===FinalpreResult[i].clientid)
		{
			
			time_incurred=time_incurred+FinalpreResult[i].time_incurred
			time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
			diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
			billrate=1;	
			
		}
			
			
		}
Final_GroupByResult.push({billrate:billrate,time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Client_Id[z].id,displayname:Client_Id[z].displayname})

	

	
}


var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
			var billrate=1;	
				
	Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,displayid:$scope.finalcalculatedtimetrack[i].clientid,displayname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred,billrate:billrate});		
				
			}

$scope.Final_GroupByBillRateResult=Final_GroupByResult;
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;

	
}

if($scope.GroupbyFirst=="Team Member")
{
			var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = $scope.finalcalculatedtimetrack.length, id; i < len; ++i) {
			id = $scope.finalcalculatedtimetrack[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:$scope.finalcalculatedtimetrack[i].member_id,displayname:$scope.finalcalculatedtimetrack[i].member_name});

				idsSeen[id] = idSeenValue;
			}
		}


var Final_GroupByResult=[]


for(var z=0; z<Member_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;
var billrate=0;
		for( i=0; i<$scope.finalcalculatedtimetrack.length;i++)
		{
			

		
		if(Member_Id[z].id===$scope.finalcalculatedtimetrack[i].member_id)
		{
			
	time_incurred=time_incurred+$scope.finalcalculatedtimetrack[i].time_incurred;
	time_future_sheduled=time_future_sheduled+$scope.finalcalculatedtimetrack[i].time_future_sheduled;
    diffrentfrom_past=diffrentfrom_past+$scope.finalcalculatedtimetrack[i].diffrentfrom_past;
	billrate=1;		
			
		}
			
			
		}
Final_GroupByResult.push({billrate:billrate,time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Member_Id[z].id,displayname:Member_Id[z].displayname})

	

	
}

var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
				
				var billrate=1;
	Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,displayid:$scope.finalcalculatedtimetrack[i].member_id,displayname:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred,billrate:billrate});		
				
			}
$scope.Final_GroupByBillRateResult=Final_GroupByResult;
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;	
}

if($scope.GroupbyFirst=="Date String")
{


var Dateall=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length;i++)
{
	
Dateall.push({id:$scope.finalcalculatedtimetrack[i].Date});
	
}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);


var Final_GroupByResult=[]


for(var z=0; z<Date_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;
	var billrate=0;

		for( i=0; i<$scope.finalcalculatedtimetrack.length;i++)
		{
			

		
		if(Date_Id[z].id===$scope.finalcalculatedtimetrack[i].Date)
		{
			
	time_incurred=time_incurred+$scope.finalcalculatedtimetrack[i].time_incurred
	time_future_sheduled=time_future_sheduled+$scope.finalcalculatedtimetrack[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+$scope.finalcalculatedtimetrack[i].diffrentfrom_past
	billrate=1;		
			
		}
			
			
		}
Final_GroupByResult.push({billrate:billrate,time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Date_Id[z].id,displayname:Date_Id[z].id})

	

	
}


var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
			var billrate=1;	
				
	Finaldisplaytimetrack.push({displayid:$scope.finalcalculatedtimetrack[i].Date,Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred,billrate:billrate});		
				
			}
$scope.Final_GroupByBillRateResult=Final_GroupByResult;	
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;	

}


if($scope.GroupbyFirst=="Phase Name")
{
	//$scope.phase_added

	
			var Phase_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = $scope.finalcalculatedtimetrack.length, id; i < len; ++i) {
			id = $scope.finalcalculatedtimetrack[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phase_Id.push({id:$scope.finalcalculatedtimetrack[i].editphaseid,displayname:$scope.finalcalculatedtimetrack[i].editphasename});

				idsSeen[id] = idSeenValue;
			}
		}
		
var Final_GroupByResult=[]


for(var z=0; z<Phase_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;
	var billrate=0;

		for( i=0; i<$scope.finalcalculatedtimetrack.length;i++)
		{
			

		
		if(Phase_Id[z].id===$scope.finalcalculatedtimetrack[i].editphaseid)
		{
			
	time_incurred=time_incurred+$scope.finalcalculatedtimetrack[i].time_incurred
	time_future_sheduled=time_future_sheduled+$scope.finalcalculatedtimetrack[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+$scope.finalcalculatedtimetrack[i].diffrentfrom_past
	billrate=1;	
			
		}
			
			
		}
Final_GroupByResult.push({billrate:billrate,time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Phase_Id[z].id,displayname:Phase_Id[z].displayname})
	
}

var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
			var billrate=1;	
				
	Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,displayid:$scope.finalcalculatedtimetrack[i].editphaseid,displayname:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred,billrate:billrate});		
				
			}
	
$scope.Final_GroupByBillRateResult=Final_GroupByResult;	
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;	
}

if($scope.GroupbyFirst=="Location")
{
	


	    var preResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });
	
		    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });





			var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}

		
var Final_GroupByResult=[]


for(var z=0; z<Location_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;
	var billrate=0;

		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Location_Id[z].id===FinalpreResult[i].location)
		{
			
	time_incurred=time_incurred+FinalpreResult[i].time_incurred
	time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
    billrate=1;
			
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,billrate:billrate,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Location_Id[z].id,displayname:Location_Id[z].displayname,remaining:"_"})
	
}

var Finaldisplaytimetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
			{
				
			var billrate=1;	
	Finaldisplaytimetrack.push({Date:FinalpreResult[i].Date,clientid:FinalpreResult[i].clientid,clientname:FinalpreResult[i].clientname,displayid:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname,diffrentfrom_past:FinalpreResult[i].diffrentfrom_past,editphaseid:FinalpreResult[i].editphaseid,editphasename:FinalpreResult[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:FinalpreResult[i].memenddate,memstartdate:FinalpreResult[i].memstartdate,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_future_sheduled:FinalpreResult[i].time_future_sheduled,time_incurred:FinalpreResult[i].time_incurred,billrate:billrate,remaining:"_"});		
				
			}

$scope.Final_GroupByBillRateResult=Final_GroupByResult;	
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;			

}

if($scope.GroupbyFirst=="Role")
{



	    var preResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });
	
		    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });

		var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}

		
var Final_GroupByResult=[]


for(var z=0; z<Role_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;
	var billrate=0;

		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Role_Id[z].id===FinalpreResult[i].role)
		{
			
	time_incurred=time_incurred+FinalpreResult[i].time_incurred
	time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
	billrate=1;		
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,billrate:billrate,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Role_Id[z].id,displayname:Role_Id[z].displayname,remaining:"_"})
	
}

var Finaldisplaytimetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
			{
				
			var billrate=1;
			
	Finaldisplaytimetrack.push({Date:FinalpreResult[i].Date,clientid:FinalpreResult[i].clientid,clientname:FinalpreResult[i].clientname,displayid:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename,diffrentfrom_past:FinalpreResult[i].diffrentfrom_past,editphaseid:FinalpreResult[i].editphaseid,editphasename:FinalpreResult[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:FinalpreResult[i].memenddate,memstartdate:FinalpreResult[i].memstartdate,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_future_sheduled:FinalpreResult[i].time_future_sheduled,time_incurred:FinalpreResult[i].time_incurred,billrate:billrate,remaining:"_"});		
				
			}

$scope.Final_GroupByBillRateResult=Final_GroupByResult;	
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;	

		
}
if($scope.GroupbyFirst=="Discipline")
{


	    var preResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });
	
		    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });

		var discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}

		
var Final_GroupByResult=[]


for(var z=0; z<discipline_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;
	var billrate=0;

		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(discipline_Id[z].id===FinalpreResult[i].role)
		{
			
	time_incurred=time_incurred+FinalpreResult[i].time_incurred
	time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
	billrate=1;		
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,billrate:billrate,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:discipline_Id[z].id,displayname:discipline_Id[z].displayname,remaining:"_"})
	
}

var Finaldisplaytimetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
			{
			var billrate=1;	
				
      Finaldisplaytimetrack.push({Date:FinalpreResult[i].Date,clientid:FinalpreResult[i].clientid,clientname:FinalpreResult[i].clientname,displayid:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename,diffrentfrom_past:FinalpreResult[i].diffrentfrom_past,editphaseid:FinalpreResult[i].editphaseid,editphasename:FinalpreResult[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:FinalpreResult[i].memenddate,memstartdate:FinalpreResult[i].memstartdate,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_future_sheduled:FinalpreResult[i].time_future_sheduled,time_incurred:FinalpreResult[i].time_incurred,billrate:billrate,remaining:"_"});		
				
			}

$scope.Final_GroupByBillRateResult=Final_GroupByResult;	
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;	

		
}


  }

  $scope.select_Groupby = function(thenGroupby) {

  $scope.Groupby=thenGroupby;




  if($scope.GroupbyFirst!="None" && $scope.Groupby!="None")
  {
    /* $http({
                        method : "POST",
                        url : "/reportfilterthengroupby/",
                        data :
                        {
                        tag:'groupbyvalueutilization',

                        ViewState:$scope.ViewState,
                        groupbyfirst:$scope.GroupbyFirst,
                        groupby_then:$scope.Groupby,

                         user_id:userInfo.user_id,
                        company_id:userInfo.company_id

                        }

                       }).success(function(data){
                         $scope.Returnstables1=data.all_projdata;
                        $scope.OverallTotal=data.totalexpenses

                   }); */

  }


 };

 };

  }





//--------------------------------------------------------------------------------

if($scope.ViewState=="Timefee" && ($scope.ViewState2=="Hours" || $scope.ViewState2=="Days"))
  {

	  $scope.Final_TwoBillRateResult=[];
	  $scope.Final_GroupByBillRateResult=[];
	  $scope.Final_GroupByResult=[];
      $scope.Final_GroupByResultBudget=[];
	  $scope.Finaldisplaytimetrack=[];
	  $scope.Finaldisplayexpensetrack=[];
	  $scope.expenseResultBudget=[];
	  $scope.TimeResultBudget=[];

   
   if($scope.ViewState2=="Hours")
   {
      $scope.convert=1;
   }
else{
   
   $scope.convert=8;
    }
//TimeFee Hours/Days start
   $scope.Project=[
      {projectname:"",id:0},
      {projectname:"Team Member",id:1},
      {projectname:"Client",id:2},
      {projectname:"Project",id:3},
      {projectname:"Role",id:4},
      {projectname:"Discipline",id:5},
      {projectname:"Date String",id:6},
      {projectname:"Location",id:7},
      {projectname:"Phase Name",id:8}];  





 $scope.select_firstGroupby = function(firstGroupby,index) {

  $scope.GroupbyFirst=firstGroupby;

   $scope.Then_groupby=[
      {projectname:"",id:0},
      {projectname:"Team Member",id:1},
      {projectname:"Client",id:2},
      {projectname:"Project",id:3},
      {projectname:"Role",id:4},
      {projectname:"Discipline",id:5},
      {projectname:"Date String",id:6},
      {projectname:"Location",id:7},
      {projectname:"Phase Name",id:8}];  
      
   $scope.Then_groupby.splice(index,1);

 if($scope.GroupbyFirst!="None")
  {


if($scope.GroupbyFirst=="Project")
{
   
$scope.Final_GroupByResult=[];
$scope.Finaldisplayexpensetrack=[];
$scope.Finaldisplaytimetrack=[];



    var FinalpreResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

/****Get Project Id******/

var Project_Id = [];
var idsSeen = {}, idSeenValue = {};
for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
    id = FinalpreResult[i].id;
    if (idsSeen[id] !== idSeenValue) {
         Project_Id.push({id:FinalpreResult[i].id,displayname:FinalpreResult[i].project_name});
        idsSeen[id] = idSeenValue;
    }
}



/********** Get First Data For firstGroupby************/

var Final_GroupByResult=[]

for(var z=0; z<Project_Id.length;z++)
{
   var i=0;
   var time_incurred=0;
   var time_future_sheduled=0;
   var diffrentfrom_past=0;

      for( i=0; i<FinalpreResult.length;i++)
      {
         

      
      if(Project_Id[z].id===FinalpreResult[i].id)
      {
         
         time_incurred=time_incurred+FinalpreResult[i].time_incurred
         time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
         diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
         
         
      }
         
        
      }
	  var m=[]; 
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Project_Id[z].id,displayname:Project_Id[z].displayname,then:m})

   

   
}


var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
         {
            
            
   Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,displayid:$scope.finalcalculatedtimetrack[i].projectid,displayname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred});      
            
         }


$scope.Final_GroupByResult=Final_GroupByResult;
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;


}  
   

if($scope.GroupbyFirst=="Client")
{

$scope.Final_GroupByResult=[];
$scope.Finaldisplayexpensetrack=[];
$scope.Finaldisplaytimetrack=[];

   


       var FinalpreResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

/****Get Project Id******/

var Client_Id = [];
var idsSeen = {}, idSeenValue = {};
for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
    id = FinalpreResult[i].id;
    if (idsSeen[id] !== idSeenValue) {
         Client_Id.push({id:FinalpreResult[i].clientid,displayname:FinalpreResult[i].clientname});
        idsSeen[id] = idSeenValue;
    }
}



/********** Get First Data For firstGroupby************/

var Final_GroupByResult=[]

for(var z=0; z<Client_Id.length;z++)
{
   var i=0;
   var time_incurred=0;
   var time_future_sheduled=0;
   var diffrentfrom_past=0;

      for( i=0; i<FinalpreResult.length;i++)
      {
         

      
      if(Client_Id[z].id===FinalpreResult[i].clientid)
      {
         
         time_incurred=time_incurred+FinalpreResult[i].time_incurred
         time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
         diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
         
         
      }
         
         
      }
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Client_Id[z].id,displayname:Client_Id[z].displayname})

   

   
}


var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
         {
            
            
   Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,displayid:$scope.finalcalculatedtimetrack[i].clientid,displayname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred});    
            
         }


$scope.Final_GroupByResult=Final_GroupByResult;
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;

   
}

if($scope.GroupbyFirst=="Team Member")
{
         var Member_Id = [];
      var idsSeen = {}, idSeenValue = {};
      for (var i = 0, len = $scope.finalcalculatedtimetrack.length, id; i < len; ++i) {
         id = $scope.finalcalculatedtimetrack[i].member_id;
         if (idsSeen[id] !== idSeenValue) {
            Member_Id.push({id:$scope.finalcalculatedtimetrack[i].member_id,displayname:$scope.finalcalculatedtimetrack[i].member_name});

            idsSeen[id] = idSeenValue;
         }
      }


var Final_GroupByResult=[]


for(var z=0; z<Member_Id.length;z++)
{
   var i=0;
   var time_incurred=0;
   var time_future_sheduled=0;
   var diffrentfrom_past=0;

      for( i=0; i<$scope.finalcalculatedtimetrack.length;i++)
      {
         

      
      if(Member_Id[z].id===$scope.finalcalculatedtimetrack[i].member_id)
      {
         
   time_incurred=time_incurred+$scope.finalcalculatedtimetrack[i].time_incurred
   time_future_sheduled=time_future_sheduled+$scope.finalcalculatedtimetrack[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+$scope.finalcalculatedtimetrack[i].diffrentfrom_past
         
         
      }
         
         
      }
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Member_Id[z].id,displayname:Member_Id[z].displayname})

   

   
}

var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
         {
            
            
   Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,displayid:$scope.finalcalculatedtimetrack[i].member_id,displayname:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred});      
            
         }
$scope.Final_GroupByResult=Final_GroupByResult;
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;       
   
}

if($scope.GroupbyFirst=="Date String")
{


var Dateall=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length;i++)
{
   
Dateall.push({id:$scope.finalcalculatedtimetrack[i].Date});
   
}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);


var Final_GroupByResult=[]


for(var z=0; z<Date_Id.length;z++)
{
   var i=0;
   var time_incurred=0;
   var time_future_sheduled=0;
   var diffrentfrom_past=0;

      for( i=0; i<$scope.finalcalculatedtimetrack.length;i++)
      {
         

      
      if(Date_Id[z].id===$scope.finalcalculatedtimetrack[i].Date)
      {
         
   time_incurred=time_incurred+$scope.finalcalculatedtimetrack[i].time_incurred
   time_future_sheduled=time_future_sheduled+$scope.finalcalculatedtimetrack[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+$scope.finalcalculatedtimetrack[i].diffrentfrom_past
         
         
      }
         
         
      }
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Date_Id[z].id,displayname:Date_Id[z].id})

   

   
}


var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
         {
            
            
   Finaldisplaytimetrack.push({displayid:$scope.finalcalculatedtimetrack[i].Date,Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred});    
            
         }
$scope.Final_GroupByResult=Final_GroupByResult;    
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;    


}


if($scope.GroupbyFirst=="Phase Name")
{
   //$scope.phase_added

   
         var Phase_Id = [];
      var idsSeen = {}, idSeenValue = {};
      for (var i = 0, len = $scope.finalcalculatedtimetrack.length, id; i < len; ++i) {
         id = $scope.finalcalculatedtimetrack[i].editphaseid;
         if (idsSeen[id] !== idSeenValue) {
            Phase_Id.push({id:$scope.finalcalculatedtimetrack[i].editphaseid,displayname:$scope.finalcalculatedtimetrack[i].editphasename});

            idsSeen[id] = idSeenValue;
         }
      }
      
var Final_GroupByResult=[]


for(var z=0; z<Phase_Id.length;z++)
{
   var i=0;
   var time_incurred=0;
   var time_future_sheduled=0;
   var diffrentfrom_past=0;

      for( i=0; i<$scope.finalcalculatedtimetrack.length;i++)
      {
         

      
      if(Phase_Id[z].id===$scope.finalcalculatedtimetrack[i].editphaseid)
      {
         
   time_incurred=time_incurred+$scope.finalcalculatedtimetrack[i].time_incurred
   time_future_sheduled=time_future_sheduled+$scope.finalcalculatedtimetrack[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+$scope.finalcalculatedtimetrack[i].diffrentfrom_past
         
         
      }
         
         
      }
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Phase_Id[z].id,displayname:Phase_Id[z].displayname})
   
}

var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
         {
            
            
   Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,displayid:$scope.finalcalculatedtimetrack[i].editphaseid,displayname:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred});      
            
         }
   
$scope.Final_GroupByResult=Final_GroupByResult;    
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;       
}

if($scope.GroupbyFirst=="Location")
{
   


       var preResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });
   
          var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });





         var Location_Id = [];
      var idsSeen = {}, idSeenValue = {};
      for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
         id = FinalpreResult[i].location;
         if (idsSeen[id] !== idSeenValue) {
            Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

            idsSeen[id] = idSeenValue;
         }
      }

      
var Final_GroupByResult=[]


for(var z=0; z<Location_Id.length;z++)
{
   var i=0;
   var time_incurred=0;
   var time_future_sheduled=0;
   var diffrentfrom_past=0;

      for( i=0; i<FinalpreResult.length;i++)
      {
         

      
      if(Location_Id[z].id===FinalpreResult[i].location)
      {
         
   time_incurred=time_incurred+FinalpreResult[i].time_incurred
   time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
         
         
      }
         
         
      }
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Location_Id[z].id,displayname:Location_Id[z].displayname,remaining:"_"})
   
}

var Finaldisplaytimetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
         {
            
            
   Finaldisplaytimetrack.push({Date:FinalpreResult[i].Date,clientid:FinalpreResult[i].clientid,clientname:FinalpreResult[i].clientname,displayid:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname,diffrentfrom_past:FinalpreResult[i].diffrentfrom_past,editphaseid:FinalpreResult[i].editphaseid,editphasename:FinalpreResult[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:FinalpreResult[i].memenddate,memstartdate:FinalpreResult[i].memstartdate,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_future_sheduled:FinalpreResult[i].time_future_sheduled,time_incurred:FinalpreResult[i].time_incurred,remaining:"_"});    
            
         }


$scope.Final_GroupByResult=Final_GroupByResult;    
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;          

}

if($scope.GroupbyFirst=="Role")
{



       var preResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });
   
          var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });

      var Role_Id = [];
      var idsSeen = {}, idSeenValue = {};
      for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
         id = FinalpreResult[i].role;
         if (idsSeen[id] !== idSeenValue) {
            Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

            idsSeen[id] = idSeenValue;
         }
      }

      
var Final_GroupByResult=[]


for(var z=0; z<Role_Id.length;z++)
{
   var i=0;
   var time_incurred=0;
   var time_future_sheduled=0;
   var diffrentfrom_past=0;

      for( i=0; i<FinalpreResult.length;i++)
      {
         

      
      if(Role_Id[z].id===FinalpreResult[i].role)
      {
         
   time_incurred=time_incurred+FinalpreResult[i].time_incurred
   time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
         
         
      }
         
         
      }
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Role_Id[z].id,displayname:Role_Id[z].displayname,remaining:"_"})
   
}

var Finaldisplaytimetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
         {
            
            
   Finaldisplaytimetrack.push({Date:FinalpreResult[i].Date,clientid:FinalpreResult[i].clientid,clientname:FinalpreResult[i].clientname,displayid:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename,diffrentfrom_past:FinalpreResult[i].diffrentfrom_past,editphaseid:FinalpreResult[i].editphaseid,editphasename:FinalpreResult[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:FinalpreResult[i].memenddate,memstartdate:FinalpreResult[i].memstartdate,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_future_sheduled:FinalpreResult[i].time_future_sheduled,time_incurred:FinalpreResult[i].time_incurred,remaining:"_"});    
            
         }


$scope.Final_GroupByResult=Final_GroupByResult;    
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;    

      
}
if($scope.GroupbyFirst=="Discipline")
{
   
   //$scope.alldiscipline disciplinename

   /* var preResult = $scope.finalcalculatedtimetrack.map(function(v){

    var ret;

    $.each($scope.userprofile, function(k, v2){

        if(v2.id === v.member_id){
            ret = $.extend({}, v2, v); // merge the objects in to a new one
            return false; // break the loop
        } 
      

    });

    return ret;

});



    var FinalpreResult = preResult.map(function(v){

   var ret;

    $.each($scope.alldiscipline, function(k, v2){

   
       if(v2.id === v.discipline){
         

             ret = $.extend({}, v2, v); // merge the objects in to a new one
           return false; // break the loop
        }

         
      

    });

  return ret;

}); */

       var preResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });
   
          var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });

      var discipline_Id = [];
      var idsSeen = {}, idSeenValue = {};
      for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
         id = FinalpreResult[i].discipline;
         if (idsSeen[id] !== idSeenValue) {
            discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

            idsSeen[id] = idSeenValue;
         }
      }

      
var Final_GroupByResult=[]


for(var z=0; z<discipline_Id.length;z++)
{
   var i=0;
   var time_incurred=0;
   var time_future_sheduled=0;
   var diffrentfrom_past=0;

      for( i=0; i<FinalpreResult.length;i++)
      {
         

      
      if(discipline_Id[z].id===FinalpreResult[i].role)
      {
         
   time_incurred=time_incurred+FinalpreResult[i].time_incurred
   time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
         
         
      }
         
         
      }
Final_GroupByResult.push({time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:discipline_Id[z].id,displayname:discipline_Id[z].displayname,remaining:"_"})
   
}

var Finaldisplaytimetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
         {
            
            
   Finaldisplaytimetrack.push({Date:FinalpreResult[i].Date,clientid:FinalpreResult[i].clientid,clientname:FinalpreResult[i].clientname,displayid:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename,diffrentfrom_past:FinalpreResult[i].diffrentfrom_past,editphaseid:FinalpreResult[i].editphaseid,editphasename:FinalpreResult[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:FinalpreResult[i].memenddate,memstartdate:FinalpreResult[i].memstartdate,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_future_sheduled:FinalpreResult[i].time_future_sheduled,time_incurred:FinalpreResult[i].time_incurred,remaining:"_"});    
            
         }


$scope.Final_GroupByResult=Final_GroupByResult;    
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;    

      
}


  }

  $scope.select_Groupby = function(thenGroupby) {

  $scope.Groupby=thenGroupby;




  if($scope.GroupbyFirst!="None" && $scope.Groupby!="None")
  {
    /* $http({
                        method : "POST",
                        url : "/reportfilterthengroupby/",
                        data :
                        {
                        tag:'groupbyvalueutilization',

                        ViewState:$scope.ViewState,
                        groupbyfirst:$scope.GroupbyFirst,
                        groupby_then:$scope.Groupby,

                         user_id:userInfo.user_id,
                        company_id:userInfo.company_id

                        }

                       }).success(function(data){
                         $scope.Returnstables1=data.all_projdata;
                        $scope.OverallTotal=data.totalexpenses

                   }); */

  }


 };

 };

  }


//--------------------------------------------------------------------------------


if($scope.ViewState=="Timefee" && ($scope.ViewState2=="Amount&Hours" || $scope.ViewState2=="Amount&Days" ))
{
	
	  $scope.Final_TwoBillRateResult=[];
	  $scope.Final_GroupByBillRateResult=[];
	  $scope.Final_GroupByResult=[];
      $scope.Final_GroupByResultBudget=[];
	  $scope.Finaldisplaytimetrack=[];
	  $scope.Finaldisplayexpensetrack=[];
	  $scope.expenseResultBudget=[];
	  $scope.TimeResultBudget=[];

if($scope.ViewState2=="Amount&Hours")
{
	
$scope.convert=1;	
	
}
if($scope.ViewState2=="Amount&Days")
{
$scope.convert=8;	
	
}


	$scope.Project=[
		{projectname:"",id:0},
		{projectname:"Team Member",id:1},
		{projectname:"Client",id:2},
		{projectname:"Project",id:3},
		{projectname:"Role",id:4},
		{projectname:"Discipline",id:5},
		{projectname:"Date String",id:6},
		{projectname:"Location",id:7},
		{projectname:"Phase Name",id:8}];






 $scope.select_firstGroupby = function(firstGroupby,index) {

  $scope.GroupbyFirst=firstGroupby;

	$scope.Then_groupby=[
		{projectname:"",id:0},
		{projectname:"Team Member",id:1},
		{projectname:"Client",id:2},
		{projectname:"Project",id:3},
		{projectname:"Role",id:4},
		{projectname:"Discipline",id:5},
		{projectname:"Date String",id:6},
		{projectname:"Location",id:7},
		{projectname:"Phase Name",id:8}];	
		
	$scope.Then_groupby.splice(index,1);

 if($scope.GroupbyFirst!="None")
  {


if($scope.GroupbyFirst=="Project")
{
	


    var FinalpreResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

/****Get Project Id******/

var Project_Id = [];
var idsSeen = {}, idSeenValue = {};
for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
    id = FinalpreResult[i].id;
    if (idsSeen[id] !== idSeenValue) {
         Project_Id.push({id:FinalpreResult[i].id,displayname:FinalpreResult[i].project_name});
        idsSeen[id] = idSeenValue;
    }
}



/********** Get First Data For firstGroupby************/

var Final_GroupByResult=[]

for(var z=0; z<Project_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;
	var billrate=0;

		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Project_Id[z].id===FinalpreResult[i].id)
		{
			
			time_incurred=time_incurred+FinalpreResult[i].time_incurred
			time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
			diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
			billrate=1;
			
			
		}
			
			
		}
Final_GroupByResult.push({billrate:billrate,time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Project_Id[z].id,displayname:Project_Id[z].displayname})

	

	
}


var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
				
				var billrate=1;
	Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,displayid:$scope.finalcalculatedtimetrack[i].projectid,displayname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred,billrate:billrate});		
				
			}



$scope.Final_TwoBillRateResult=Final_GroupByResult;

$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;

	

}	
	

if($scope.GroupbyFirst=="Client")
{

$scope.Final_GroupByResult=[];
$scope.Finaldisplayexpensetrack=[];
$scope.Finaldisplaytimetrack=[];



	    var FinalpreResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.Finalprojects, { id: base.projectid} ));
    });

/****Get Project Id******/

var Client_Id = [];
var idsSeen = {}, idSeenValue = {};
for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
    id = FinalpreResult[i].id;
    if (idsSeen[id] !== idSeenValue) {
         Client_Id.push({id:FinalpreResult[i].clientid,displayname:FinalpreResult[i].clientname});
        idsSeen[id] = idSeenValue;
    }
}



/********** Get First Data For firstGroupby************/

var Final_GroupByResult=[]

for(var z=0; z<Client_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;
     var billrate=0;	
		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Client_Id[z].id===FinalpreResult[i].clientid)
		{
			
			time_incurred=time_incurred+FinalpreResult[i].time_incurred
			time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
			diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
			billrate=1;	
			
		}
			
			
		}
Final_GroupByResult.push({billrate:billrate,time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Client_Id[z].id,displayname:Client_Id[z].displayname})

	

	
}


var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
			var billrate=1;	
				
	Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,displayid:$scope.finalcalculatedtimetrack[i].clientid,displayname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred,billrate:billrate});		
				
			}

$scope.Final_TwoBillRateResult=Final_GroupByResult;
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;

	
}

if($scope.GroupbyFirst=="Team Member")
{
			var Member_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = $scope.finalcalculatedtimetrack.length, id; i < len; ++i) {
			id = $scope.finalcalculatedtimetrack[i].member_id;
			if (idsSeen[id] !== idSeenValue) {
				Member_Id.push({id:$scope.finalcalculatedtimetrack[i].member_id,displayname:$scope.finalcalculatedtimetrack[i].member_name});

				idsSeen[id] = idSeenValue;
			}
		}


var Final_GroupByResult=[]


for(var z=0; z<Member_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;
var billrate=0;
		for( i=0; i<$scope.finalcalculatedtimetrack.length;i++)
		{
			

		
		if(Member_Id[z].id===$scope.finalcalculatedtimetrack[i].member_id)
		{
			
	time_incurred=time_incurred+$scope.finalcalculatedtimetrack[i].time_incurred;
	time_future_sheduled=time_future_sheduled+$scope.finalcalculatedtimetrack[i].time_future_sheduled;
    diffrentfrom_past=diffrentfrom_past+$scope.finalcalculatedtimetrack[i].diffrentfrom_past;
	billrate=1;		
			
		}
			
			
		}
Final_GroupByResult.push({billrate:billrate,time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Member_Id[z].id,displayname:Member_Id[z].displayname})

	

	
}

var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
				
				var billrate=1;
	Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,displayid:$scope.finalcalculatedtimetrack[i].member_id,displayname:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred,billrate:billrate});		
				
			}
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;		
$scope.Final_TwoBillRateResult=Final_GroupByResult;	
}

if($scope.GroupbyFirst=="Date String")
{


var Dateall=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length;i++)
{
	
Dateall.push({id:$scope.finalcalculatedtimetrack[i].Date});
	
}
function arrUnique1(arr) {
    var cleaned = [];
    Dateall.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

Date_Id = arrUnique1(Dateall);


var Final_GroupByResult=[]


for(var z=0; z<Date_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;
	var billrate=0;

		for( i=0; i<$scope.finalcalculatedtimetrack.length;i++)
		{
			

		
		if(Date_Id[z].id===$scope.finalcalculatedtimetrack[i].Date)
		{
			
	time_incurred=time_incurred+$scope.finalcalculatedtimetrack[i].time_incurred
	time_future_sheduled=time_future_sheduled+$scope.finalcalculatedtimetrack[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+$scope.finalcalculatedtimetrack[i].diffrentfrom_past
	billrate=1;		
			
		}
			
			
		}
Final_GroupByResult.push({billrate:billrate,time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Date_Id[z].id,displayname:Date_Id[z].id})

	

	
}


var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
			var billrate=1;	
				
	Finaldisplaytimetrack.push({displayid:$scope.finalcalculatedtimetrack[i].Date,Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,editphaseid:$scope.finalcalculatedtimetrack[i].editphaseid,editphasename:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred,billrate:billrate});		
				
			}
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;	
$scope.Final_TwoBillRateResult=Final_GroupByResult;

}


if($scope.GroupbyFirst=="Phase Name")
{
	//$scope.phase_added

	
			var Phase_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = $scope.finalcalculatedtimetrack.length, id; i < len; ++i) {
			id = $scope.finalcalculatedtimetrack[i].editphaseid;
			if (idsSeen[id] !== idSeenValue) {
				Phase_Id.push({id:$scope.finalcalculatedtimetrack[i].editphaseid,displayname:$scope.finalcalculatedtimetrack[i].editphasename});

				idsSeen[id] = idSeenValue;
			}
		}
		
var Final_GroupByResult=[]


for(var z=0; z<Phase_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;
	var billrate=0;

		for( i=0; i<$scope.finalcalculatedtimetrack.length;i++)
		{
			

		
		if(Phase_Id[z].id===$scope.finalcalculatedtimetrack[i].editphaseid)
		{
			
	time_incurred=time_incurred+$scope.finalcalculatedtimetrack[i].time_incurred
	time_future_sheduled=time_future_sheduled+$scope.finalcalculatedtimetrack[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+$scope.finalcalculatedtimetrack[i].diffrentfrom_past
	billrate=1;	
			
		}
			
			
		}
Final_GroupByResult.push({billrate:billrate,time_incurred:time_incurred,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Phase_Id[z].id,displayname:Phase_Id[z].displayname})
	
}

var Finaldisplaytimetrack=[];
for(var i=0; i<$scope.finalcalculatedtimetrack.length; i++)
			{
			var billrate=1;	
				
	Finaldisplaytimetrack.push({Date:$scope.finalcalculatedtimetrack[i].Date,clientid:$scope.finalcalculatedtimetrack[i].clientid,clientname:$scope.finalcalculatedtimetrack[i].clientname,diffrentfrom_past:$scope.finalcalculatedtimetrack[i].diffrentfrom_past,displayid:$scope.finalcalculatedtimetrack[i].editphaseid,displayname:$scope.finalcalculatedtimetrack[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:$scope.finalcalculatedtimetrack[i].memenddate,memstartdate:$scope.finalcalculatedtimetrack[i].memstartdate,projectid:$scope.finalcalculatedtimetrack[i].projectid,projectname:$scope.finalcalculatedtimetrack[i].projectname,time_future_sheduled:$scope.finalcalculatedtimetrack[i].time_future_sheduled,time_incurred:$scope.finalcalculatedtimetrack[i].time_incurred,billrate:billrate});		
				
			}
		
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;	
$scope.Final_TwoBillRateResult=Final_GroupByResult;	
}

if($scope.GroupbyFirst=="Location")
{
	


	    var preResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });
	
		    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alllocation, { id: base.location} ));
    });





			var Location_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].location;
			if (idsSeen[id] !== idSeenValue) {
				Location_Id.push({id:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname});

				idsSeen[id] = idSeenValue;
			}
		}

		
var Final_GroupByResult=[]


for(var z=0; z<Location_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;
	var billrate=0;

		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Location_Id[z].id===FinalpreResult[i].location)
		{
			
	time_incurred=time_incurred+FinalpreResult[i].time_incurred
	time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
    billrate=1;
			
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,billrate:billrate,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Location_Id[z].id,displayname:Location_Id[z].displayname,remaining:"_"})
	
}

var Finaldisplaytimetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
			{
				
			var billrate=1;	
	Finaldisplaytimetrack.push({Date:FinalpreResult[i].Date,clientid:FinalpreResult[i].clientid,clientname:FinalpreResult[i].clientname,displayid:FinalpreResult[i].location,displayname:FinalpreResult[i].locationname,diffrentfrom_past:FinalpreResult[i].diffrentfrom_past,editphaseid:FinalpreResult[i].editphaseid,editphasename:FinalpreResult[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:FinalpreResult[i].memenddate,memstartdate:FinalpreResult[i].memstartdate,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_future_sheduled:FinalpreResult[i].time_future_sheduled,time_incurred:FinalpreResult[i].time_incurred,billrate:billrate,remaining:"_"});		
				
			}

$scope.Final_TwoBillRateResult=Final_GroupByResult;
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;			

}

if($scope.GroupbyFirst=="Role")
{



	    var preResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });
	
		    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.allrole, { id: base.role} ));
    });

		var Role_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].role;
			if (idsSeen[id] !== idSeenValue) {
				Role_Id.push({id:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename});

				idsSeen[id] = idSeenValue;
			}
		}

		
var Final_GroupByResult=[]


for(var z=0; z<Role_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;
	var billrate=0;

		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(Role_Id[z].id===FinalpreResult[i].role)
		{
			
	time_incurred=time_incurred+FinalpreResult[i].time_incurred
	time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
	billrate=1;		
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,billrate:billrate,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:Role_Id[z].id,displayname:Role_Id[z].displayname,remaining:"_"})
	
}

var Finaldisplaytimetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
			{
				
			var billrate=1;
			
	Finaldisplaytimetrack.push({Date:FinalpreResult[i].Date,clientid:FinalpreResult[i].clientid,clientname:FinalpreResult[i].clientname,displayid:FinalpreResult[i].role,displayname:FinalpreResult[i].rolename,diffrentfrom_past:FinalpreResult[i].diffrentfrom_past,editphaseid:FinalpreResult[i].editphaseid,editphasename:FinalpreResult[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:FinalpreResult[i].memenddate,memstartdate:FinalpreResult[i].memstartdate,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_future_sheduled:FinalpreResult[i].time_future_sheduled,time_incurred:FinalpreResult[i].time_incurred,billrate:billrate,remaining:"_"});		
				
			}

$scope.Final_TwoBillRateResult=Final_GroupByResult;	
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;	

		
}
if($scope.GroupbyFirst=="Discipline")
{


	    var preResult = _.map($scope.finalcalculatedtimetrack, function(base){
        return _.extend(base, _.findWhere($scope.userprofile, { id: base.member_id} ));
    });
	
		    var FinalpreResult = _.map(preResult, function(base){
        return _.extend(base, _.findWhere($scope.alldiscipline, { id: base.discipline} ));
    });

		var discipline_Id = [];
		var idsSeen = {}, idSeenValue = {};
		for (var i = 0, len = FinalpreResult.length, id; i < len; ++i) {
			id = FinalpreResult[i].discipline;
			if (idsSeen[id] !== idSeenValue) {
				discipline_Id.push({id:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename});

				idsSeen[id] = idSeenValue;
			}
		}

		
var Final_GroupByResult=[]


for(var z=0; z<discipline_Id.length;z++)
{
	var i=0;
	var time_incurred=0;
	var time_future_sheduled=0;
	var diffrentfrom_past=0;
	var billrate=0;

		for( i=0; i<FinalpreResult.length;i++)
		{
			

		
		if(discipline_Id[z].id===FinalpreResult[i].role)
		{
			
	time_incurred=time_incurred+FinalpreResult[i].time_incurred
	time_future_sheduled=time_future_sheduled+FinalpreResult[i].time_future_sheduled
    diffrentfrom_past=diffrentfrom_past+FinalpreResult[i].diffrentfrom_past
	billrate=1;		
			
		}
			
			
		}
Final_GroupByResult.push({time_incurred:time_incurred,billrate:billrate,time_future_sheduled:time_future_sheduled,diffrentfrom_past:diffrentfrom_past,id:discipline_Id[z].id,displayname:discipline_Id[z].displayname,remaining:"_"})
	
}

var Finaldisplaytimetrack=[];
for(var i=0; i<FinalpreResult.length; i++)
			{
			var billrate=1;	
				
      Finaldisplaytimetrack.push({Date:FinalpreResult[i].Date,clientid:FinalpreResult[i].clientid,clientname:FinalpreResult[i].clientname,displayid:FinalpreResult[i].discipline,displayname:FinalpreResult[i].disciplinename,diffrentfrom_past:FinalpreResult[i].diffrentfrom_past,editphaseid:FinalpreResult[i].editphaseid,editphasename:FinalpreResult[i].editphasename,member_id:$scope.finalcalculatedtimetrack[i].member_id,member_name:$scope.finalcalculatedtimetrack[i].member_name,memenddate:FinalpreResult[i].memenddate,memstartdate:FinalpreResult[i].memstartdate,projectid:FinalpreResult[i].projectid,projectname:FinalpreResult[i].projectname,time_future_sheduled:FinalpreResult[i].time_future_sheduled,time_incurred:FinalpreResult[i].time_incurred,billrate:billrate,remaining:"_"});		
				
			}

$scope.Final_TwoBillRateResult=Final_GroupByResult;	
$scope.Finaldisplaytimetrack=Finaldisplaytimetrack;	

		
}


  }

  $scope.select_Groupby = function(thenGroupby) {

  $scope.Groupby=thenGroupby;




  if($scope.GroupbyFirst!="None" && $scope.Groupby!="None")
  {
    /* $http({
                        method : "POST",
                        url : "/reportfilterthengroupby/",
                        data :
                        {
                        tag:'groupbyvalueutilization',

                        ViewState:$scope.ViewState,
                        groupbyfirst:$scope.GroupbyFirst,
                        groupby_then:$scope.Groupby,

                         user_id:userInfo.user_id,
                        company_id:userInfo.company_id

                        }

                       }).success(function(data){
                         $scope.Returnstables1=data.all_projdata;
                        $scope.OverallTotal=data.totalexpenses

                   }); */

  }


 };

 };

  }

//--------------------------------------------------------------------------------

$scope.select_firstGroupby($scope.GroupbyFirst,1);
}

    };

$scope.select_project("Expenses");
$scope.select_firstGroupby("Team Member",1);



/******************************  End  ************************************/



  }])   
  
    .controller('project_viewsate', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
		
	
	}])

	
.controller('project_week', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
		
	
	}])
	
.controller('project_projectlist', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
		
		
      $scope.GroupbyFirst = '';
    
	
	}])

.controller('project_Groupby', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
		
	  	
    $scope.Groupby = '';
    

		
	}])	
	
.controller('project_projectname', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
		
		
    $scope.ProjectName = '';
    
	
	}])	
.controller('project_teammembernamepopover', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
		
	
		
    $scope.TeamMember = '';
    

		
	}])

.controller('project_clientpage', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
		
		
  /*  $scope.Client = '';
    
  /*  $scope.$watch('Client', function (newValue, oldValue) {
		
		
        if (newValue !== oldValue) sortedData_segmentation.setTeamMember(newValue);
		
		
    });
	
$scope.select_clientname = function(client) {
	
     
sortedData_segmentation.setClient(client);

    };	*/
		
	}])


.controller('project_dicipilinelist', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
		
		
    $scope.Discipline = '';
    
    $scope.$watch('Discipline', function (newValue, oldValue) {
		
		
        if (newValue !== oldValue) sortedData_segmentation.setDiscipline(newValue);
		
		
    });
	
$scope.select_discipline = function(discipline) {
	
     
sortedData_segmentation.setDiscipline(discipline);

    };	
		
	}])	

.controller('project_rolelist', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
		
		
    $scope.Role = '';
    
    $scope.$watch('Role', function (newValue, oldValue) {
		
		
        if (newValue !== oldValue) sortedData_segmentation.setRole(newValue);
		
		
    });
	
$scope.select_role = function(role) {
	
     
sortedData_segmentation.setRole(role);

    };	
		
	}])

.controller('project_locationlist', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
		
		
    $scope.Location = '';
    
    $scope.$watch('Location', function (newValue, oldValue) {
		
		
        if (newValue !== oldValue) sortedData_segmentation.setLocation(newValue);
		
		
    });
	
$scope.select_location = function(location) {
	
     
sortedData_segmentation.setLocation(location);

    };	
		
	}])

.controller('project_leavetypelist', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
		
		
    $scope.LeaveType = '';
    
    $scope.$watch('LeaveType', function (newValue, oldValue) {
		
		
        if (newValue !== oldValue) sortedData_segmentation.setLeaveType(newValue);
		
		
    });
	
$scope.select_leavetype = function(leavetype) {
	
     
sortedData_segmentation.setLeaveType(leavetype);

    };	
		
	}])	
	

.controller('project_entrytypelist', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
		
		
    $scope.EntryType = '';
    
    $scope.$watch('EntryType', function (newValue, oldValue) {
		
		
        if (newValue !== oldValue) sortedData_segmentation.setEntryType(newValue);
		
		
    });
	
$scope.select_entrytype = function(entrytype) {
	
     
sortedData_segmentation.setEntryType(entrytype);

    };	
		
	}])	

.controller('project_projecttypelist', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
		
		
    $scope.ProjectType = '';
    
    $scope.$watch('ProjectType', function (newValue, oldValue) {
		
		
        if (newValue !== oldValue) sortedData_segmentation.setProjectType(newValue);
		
		
    });
	
$scope.select_projecttype = function(projecttype) {
	
     
sortedData_segmentation.setProjectType(projecttype);

    };	
		
	}])	
	
.controller('project_categorytypelist', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
		
		
    $scope.Category = '';
    
    $scope.$watch('Category', function (newValue, oldValue) {
		
		
        if (newValue !== oldValue) sortedData_segmentation.setCategory(newValue);
		
		
    });
	
$scope.select_categorytype = function(category) {
	
     
sortedData_segmentation.setCategory(category);

    };	
		
	}])

.controller('project_statetypelist', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
		
		
    $scope.ProjectState = '';
    
    $scope.$watch('ProjectState', function (newValue, oldValue) {
		
		
        if (newValue !== oldValue) sortedData_segmentation.setProjectState(newValue);
		
		
    });
	
$scope.select_projectstatetype = function(projectstate) {
	
     
sortedData_segmentation.setProjectState(projectstate);

    };	
		
	}])	
	
	.controller('project_phasenamelist', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
		
		
    $scope.PhaseName = '';
    
    $scope.$watch('PhaseName', function (newValue, oldValue) {
		
		
        if (newValue !== oldValue) sortedData_segmentation.setPhaseName(newValue);
		
		
    });
	
$scope.select_phasename = function(phase) {
	
     
sortedData_segmentation.setPhaseName(phase);

    };	
		
	}])
	
		
	.controller('project_projecttaglist', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
		
		
    $scope.ProjectTag = '';
    
    $scope.$watch('ProjectTag', function (newValue, oldValue) {
		
		
        if (newValue !== oldValue) sortedData_segmentation.setProjectTag(newValue);
		
		
    });
	
$scope.select_projecttag = function(projecttag) {
	
     
sortedData_segmentation.setProjectTag(projecttag);

    };	
		
	}])
	
	.controller('project_peopletaglist', ['$scope','$http','sortedData_segmentation', function($scope,$http,sortedData_segmentation) {
		
		
    $scope.PeopleTag = '';
    
    $scope.$watch('PeopleTag', function (newValue, oldValue) {
		
		
        if (newValue !== oldValue) sortedData_segmentation.setPeopleTag(newValue);
		
		
    });
	
$scope.select_peopletag = function(peopletag) {
	
     
sortedData_segmentation.setPeopleTag(peopletag);


    };	
		
	}])	
	

;	