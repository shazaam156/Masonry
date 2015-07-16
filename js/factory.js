angular.module('app.factory', [])
  .factory('SegmentationsharedDetails', ['$http', '$rootScope', function($http,$rootScope) {
    var SegmentationsharedDetails = {};

    SegmentationsharedDetails.Segmentationsharedmessage  = [];

    SegmentationsharedDetails.Posttabledata = function() {
	
		 $http.get('post.json').success(function(addData) {
          this.Segmentationsharedmessage  = addData;
		  
		  
          SegmentationsharedDetails.publishItem();
		  
		  
        });
        
    };

    SegmentationsharedDetails.publishItem = function() {
        $rootScope.$broadcast('handleSegmentationsharedDetails');
    };

    return SegmentationsharedDetails;
}])
/*
.factory('sortedData', function(){
    var data =
        {
            ProjectName: ''
            
        };
 var data1 =
        {
            ProjectType: ''
            
        };
 var data2 =
        {
            Client: ''
            
        };		
    
    return {
        getProjectName: function () {
            return data.ProjectName;
        },
        setProjectName: function (projectName) {
           data.ProjectName = projectName.project_state;
			
			
        },
		getProjectType: function () {
            return data1.ProjectType;
        },
        setProjectType: function (ProjectType) {
            data1.ProjectType = ProjectType;
        },
		getClient: function () {
            return data2.Client;
        },
        setClient: function (Client) {
            data2.Client = Client;
        }
    };
})
*/
.factory('sortedData_segmentation', function(){

    var ViewStates =
        {
            ViewState: '',
            ViewState1: ''
            
        };
    var Weeks =
        {
            Week: ''
            
        };	
    var Projects =
        {
            Project: ''
            
        };			
       var Groupbys =
        {
            Groupby: ''
            
        }; 
       var ProjectNames =
        {
            ProjectName: ''
            
        }; 
  var TeamMembers =
        {
            TeamMember: ''
            
        };	
		
  var Clients =
        {
            Client: ''
            
        };
  var Disciplines =
        {
            Discipline: ''
            
        };
  var Roles =
        {
            Role: ''
            
        };
  var Locations =
        {
            Location: ''
            
        };	
  var LeaveTypes =
        {
            LeaveType: ''
            
        };
  var EntryTypes =
        {
            EntryType: ''
            
        };	
  var ProjectTypes =
        {
            ProjectType: ''
            
        };
  var Categorys =
        {
            Category: ''
            
        };	
  var ProjectStates =
        {
            ProjectState: ''
            
        };	
  var PhaseNames =
        {
            PhaseName: ''
            
        };	

  var ProjectTags =
        {
            ProjectTag: ''
            
        };	

  var PeopleTags =
        {
            PeopleTag: ''
            
        };		
    return {
        getViewState: function () {
            return ViewStates.ViewState+","+ViewStates.ViewState1;
        },
        setViewState: function (viewstate,viewstate1) {
            ViewStates.ViewState = viewstate;
            ViewStates.ViewState1 = viewstate1;
        },
		 getWeek: function () {
            return Weeks.Week;
        },
        setWeek: function (Week) {
            Weeks.Week = Week;
        },
		 getProject: function () {
            return Projects.Project;
        },
        setProject: function (Project) {
            Projects.Project = Project;
        },
		 getGroupby: function () {
            return Groupbys.Groupby;
        },
        setGroupby: function (Groupby) {
            Groupbys.Groupby = Groupby;
        },
		 getProject_Name: function () {
            return ProjectNames.ProjectName;
        },
        setProject_Name: function (ProjectName) {
            ProjectNames.ProjectName = ProjectName;
        },
		 getTeamMember: function () {
            return TeamMembers.TeamMember;
        },
        setTeamMember: function (TeamMember) {
            TeamMembers.TeamMember = TeamMember;
        },
		getClient: function () {
            return Clients.Client;
        },
        setClient: function (Client) {
            Clients.Client = Client;
        },
		getDiscipline: function () {
            return Disciplines.Discipline;
        },
        setDiscipline: function (Discipline) {
            Disciplines.Discipline = Discipline;
        },
		getRole: function () {
            return Roles.Role;
        },
        setRole: function (role) {
           Roles.Role = role;
        },
		getLocation: function () {
            return Locations.Location;
        },
        setLocation: function (location) {
           Locations.Location = location;
        },
		getLeaveType: function () {
            return LeaveTypes.LeaveType;
        },
        setLeaveType: function (leavetype) {
           LeaveTypes.LeaveType = leavetype;
        },
		getEntryType: function () {
            return EntryTypes.EntryType;
        },
        setEntryType: function (entrytype) {
           EntryTypes.EntryType = entrytype;
        },
		getProjectType: function () {
            return ProjectTypes.ProjectType;
        },
        setProjectType: function (projecttype) {
           ProjectTypes.ProjectType = projecttype;
        },
		getCategory: function () {
            return Categorys.Category;
        },
        setCategory: function (category) {
           Categorys.Category = category;
        },
		getProjectState: function () {
            return ProjectStates.ProjectState;
        },
        setProjectState: function (projetstate) {
           ProjectStates.ProjectState = projetstate;
        },
		getPhaseName: function () {
            return PhaseNames.PhaseName;
        },
        setPhaseName: function (phasename) {
           PhaseNames.PhaseName = phasename;
        },
		getProjectTag: function () {
            return ProjectTags.ProjectTag;
        },
        setProjectTag: function (projecttag) {
           ProjectTags.ProjectTag = projecttag;
        },
		getPeopleTag: function () {
            return PeopleTags.PeopleTag;
        },
        setPeopleTag: function (peopletag) {
           PeopleTags.PeopleTag = peopletag;
        }
    };
	
})

.factory('sortedteammemberData', function(){
    var team =
        {
            TeamMember: ''
            
        };
	    var phase =
        {
            PhaseName: ''
            
        };	
    	    var teamphase =
        {
            PhaseName: '',
            member: ''
            
        };
    	var durations =
        {
            Duration: '',
            LockDuration: ''
            
            
        };
		var phasedurations =
        {
            PhaseDuration: '',
            PhaseLockDuration: '',
            Phaseid: ''
            
            
        };
		var Startdates =
        {
            Startdate: ''
            
        };
        var Enddates =
        {
            Enddate: ''
            
        };
		var PhaseStartdates =
        {
            PhaseStartdate: ''
            
        };
        var PhaseEnddates =
        {
            PhaseEnddate: ''
            
        };
		var assignallocation =
        {
            percentatge: '',
            hourseperday: '',
            totalhours: ''
            
            
        };	
        
		var Status_phase =
        {
            PhaseName: ''
            
        };	
		
    return {
        getTeamMember: function () {
            return team.TeamMember;
        },
        setTeamMember: function (teamMember) {
            team.TeamMember = teamMember;
        },
        getPhaseName: function () {
            return phase.PhaseName;
        },
        setPhaseName: function (PhaseName) {
            phase.PhaseName = PhaseName;
        },
        getTeamPhaseName: function () {
		
            return teamphase.PhaseName+","+teamphase.member;
        },
        setTeamPhaseName: function (teamphase1,teamphase2) {
            teamphase.PhaseName = teamphase1;
            teamphase.member = teamphase2;
        },
        getDuration: function () {
		
             return durations.Duration+","+durations.LockDuration;
        },
        setDuration: function (duration,lockduration) {
			
            durations.Duration = duration;
            durations.LockDuration = lockduration;
					
        },
		getStartdate: function () {
            return Startdates.Startdate;
        },
        setStartdate: function (startdate) {
            Startdates.Startdate = startdate;
        },
		getEnddate: function () {
            return Enddates.Enddate;
        },
        setEnddate: function (enddate) {
            Enddates.Enddate = enddate;
        },
        getPhaseDuration: function () {
		
             return phasedurations.Duration+","+phasedurations.LockDuration+","+phasedurations.Phaseid;
        },
        setPhaseDuration: function (duration,lockduration,phaseid) {
			
            phasedurations.Duration = duration;
            phasedurations.LockDuration = lockduration;
            phasedurations.Phaseid = phaseid;
					
        },
		getPhaseStartdate: function () {
            return PhaseStartdates.PhaseStartdate;
        },
        setPhaseStartdate: function (startdate) {
            PhaseStartdates.PhaseStartdate = startdate;
        },
		getPhaseEnddate: function () {
            return PhaseEnddates.PhaseEnddate;
        },
        setPhaseEnddate: function (enddate) {
            PhaseEnddates.PhaseEnddate = enddate;
        },
        getAssignallocation: function () {
		
             return assignallocation.percentatge+","+assignallocation.hourseperday+","+assignallocation.totalhours;
        },
        setAssignallocation: function (duration,lockduration,phaseid) {
			
            assignallocation.percentatge = duration;
            assignallocation.hourseperday = lockduration;
            assignallocation.totalhours = phaseid;
					
        },
        getPhaseStatus: function () {
            return Status_phase.PhaseName;
        },
        setPhaseStatus: function (PhaseName) {
            Status_phase.PhaseName = PhaseName;
        },	
    };
})
.factory('crypt', function () {
    return {
        hash: function (value) {
            var str = JSON.stringify(value);
           // return CryptoJS.SHA1(value);
          return CryptoJS.SHA1(str).toString();
        }
    };
});
;


