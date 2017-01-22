/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append(["Sergey"]);

 //var awesome = "an awesome string";

 //var fun = awesome.replace("awesome","fun");

//var skills = ["dev","manager","couch"];

var bio ={
	"name" : "Name Surname",
	"role" : "Web developer",
	"contacts" :
	{ 
		"location" : "Moscow",
		"mobile": "+7111222333"
	},
	"picture_URL" : "https://c1.staticflickr.com/2/1279/1395420480_6a020d21a4_m.jpg",
	"welcome_message" : "welcome to this interactive resume",
	"skills" : ["photographer","analyst","web developer"]
};

var work={};
work.jobs=[
		{
			"name" : "company 1",
			"title" : "title1",
			"responsobilities" : "get job done 1",
			"dates" : "2001-2002",
			"location" : "Moscow"
		},
		{
			"name" : "company 2",
			"title" : "title1",
			"responsobilities" : "get job done 2",
			"dates" : "2002-2003",
			"location" : "Volgogdad"

		}
	];

var project = [{
	"title": "project 1",
	"dates":"2001-2002",
	"description": "description 1",
	"image" : "https://c1.staticflickr.com/8/7241/7189186396_dd9636a7fd_m.jpg"
}, {
	"title": "project 2",
	"dates":"2002-2003",
	"description": "description 1",
	"image" : "https://c1.staticflickr.com/8/7241/7189186396_dd9636a7fd_m.jpg"
}];

var education =
{"schools" : [{"name":"school1", "location": "Volgogdad"},{"name":"school2", "location": "Volgogdad"}],		
"cources" : [{"name":"cource1 ","year":"2016"}]
 }

if ( bio.skills[0]!=null)
{
	$("#header").append(HTMLskillsStart);
 	var formattedSkills = HTMLskills.replace("%data%",bio.skills);
 	$("#skills").append(formattedSkills);
}

function add_work()
{
	for (job in work.jobs)
	{
	$("#workExperience").append(HTMLworkStart);

	var text = 
		HTMLworkEmployer.replace("%data%",work.jobs[job].name)
		+
		HTMLworkTitle.replace("%data%",work.jobs[job].title);
	$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
	$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].responsobilities));
	}
}

add_work();

$(document).click(function(loc)
{
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

	


function in_name(input_name)
{
  var split = input_name.split(" ");
  // console.log(split[0]);
  var out = split[0][0].toUpperCase() + split[0].slice(1).toLowerCase() + " " + split[1];
  console.log(out);
}

in_name("ONE two");

 $("#main").append(internationalizeButton);

project.display = function ()
{
	$("#projects").append(HTMLprojectStart);

	for (i=0 ; i<project.length ; i++)
	{
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project[i].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",project[i].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",project[i].description));
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%",project[i].image));
	}
}

project.display();


//$("#main").append(bio.work);
//$("#main").append(bio.education);


 var formattedName = HTMLheaderName.replace("%data%",bio.name);
//console.log(formattedName);

 var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
//console.log(formattedRole);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 $("#mapDiv").append(googleMap);

/*
 var formattedPic = HTMLbioPic.replace("%data%",bio.picture_URL);
 $("#main").append(formattedPic);

 var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcome_message);
 $("#main").append(formattedWelcome);

 $("#main").append(HTMLskillsStart);




 var formattedContact = HTMLcontactGeneric.replace("%contact%",bio.contact_info.mobile);
 $("#main").append(formattedContact);

*/

