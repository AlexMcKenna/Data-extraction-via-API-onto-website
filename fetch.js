//used to get time with api within recent time
var dt = new Date();
var time = dt.getFullYear()+"-"+(dt.getMonth()+1)+"-"+dt.getDate()+"/"+dt.getHours() + ":" + dt.getMinutes();
var number = 0;
console.log(time);

// Aquire JSon file and read the object in file
// Reference: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange 
function loadBus() {
    ATCO = document.getElementById("select").value;
    apiHospital = 'https://transportapi.com/v3/uk/bus/stop/'+ATCO+'/'+time+'/timetable.json?app_id=a6024560&app_key=c564e4afe0c883302dd0bf250bc3efcc&group=no';
	//to be used for an XML object
	var req = new XMLHttpRequest();
	//request to api - get format
	req.open('GET', apiHospital, true);
	
	req.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

			var Arr = JSON.parse(this.responseText);
			getBus(Arr);
		}
	};

	req.send();
}

//load bus json
	function getBus(data) {

	departures = data.departures;
	
	var bus = departures['all'];
	for (var i = 0; i < bus.length; i++) {

		//retrieve data within further JSon files
		var url = bus[i].id; //gets id of further JSon


		var req = new XMLHttpRequest();
		req.open('GET', url, true); //get request to get data within api

		req.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var Arr = JSON.parse(this.responseText);
				busDetail2(Arr); //load info into busdetail2
			}
		};
		req.send(); //send request

	}
}

function busDetail2(data) {
	number ++;	//append to the names
	var stop = data['stops']; //get array object

	
	busNumber = document.createElement("h4");


	busNumber.textContent = "Bus Number: " + data.line + " ("+stop[0].time+")";

	wholePanel = document.createElement('div');
	wholePanel.className = "panel-group";
	$(wholePanel).attr({
		'id':'accordion'
	});
	document.getElementById('businfo2').appendChild(wholePanel);
	//create panel
	panel = document.createElement("div");
	panel.className = "panel panel-default";

	wholePanel.appendChild(panel); //add panel to group selection

	//panel header
	panelHeader = document.createElement("div");
	panel.className = "panel-head";
	panel.appendChild(panelHeader); //add to head of panel selection

	//title of panel
	panelTitle = document.createElement("h1");
	$(panelTitle).attr({
		'text-align':'right'
	});
	panelTitle.className = "panel-title"; //add title to panel
	panelHeader.appendChild(panelTitle);

	//use tag
	atag = document.createElement("a")
$(atag).attr({
	'data-toggle':'collapse',
	'data-parent':'#accordion',
	'href':'#collapse'+number,
});
atag.textContent = "Bus Number: " + data.line + " ("+stop[0].time+")";
panelTitle.appendChild(atag); //adds collapse to panel

collapse = document.createElement("div");
collapse.className = "panel-collapse collapse";

$(collapse).attr({
	'id':'collapse'+number
});
panel.appendChild(collapse); //drop down append

collapseDetail = document.createElement("div");
collapseDetail.className = "panel-body"; //add detail to body

collapse.appendChild(collapseDetail);

	for (var i = 0; i < stop.length; i++) {
		//for each property, create a value
		tdate = document.createElement('p');
		//date = document.createElement('p');
		stop_name = document.createElement('p');
		//locality = document.createElement('p');

		//store value in JSon
		tdate.textContent = stop[i].time + " " + stop[i].date;
		//date.textContent = stop[i].date;
		stop_name.textContent = "Stop: " + stop[i].stop_name + ", " + stop[i].locality;
		//locality.textContent = stop[i].locality;

		//append data to variables
		collapseDetail.appendChild(tdate);
		//document.getElementById('info').appendChild(date);
		collapseDetail.appendChild(stop_name);
		//document.getElementById('info').appendChild(locality);
	}
	collapseDetail.appendChild(document.createElement("hr"));
	collapseDetail.appendChild(document.createElement("hr"));
}

//clear box with an empty element
function clearBox() {
	document.getElementById('businfo').innerHTML = "";
	document.getElementById('businfo2').innerHTML = "";
}

//for feedback box
function toggle_visibility() {
   	var e = document.getElementById('feedback-main');
       	if(e.style.display == 'block')
          	e.style.display = 'none';
       	else
          	e.style.display = 'block';
}