var currentTime = new Date().toJSON().slice(0, 16).replace('T', '/');

/* XMLHttpRequest Object
/* Request JSon file from server and read object in the file */
/* References: https://www.w3schools.com/xml/xml_http.asp */
function loadTrain() {
    //ATCO = document.getElementById("mySelect").value;
    apiHospital = 'https://transportapi.com/v3/uk/train/station/nrw/live.json?app_id=d90978a7&app_key=baca186ad4d64964990fe84c72d57ce1&darwin=false&train_status=passenger';
    var req = new XMLHttpRequest();
    req.open('GET', apiHospital, true);
    //    req.responseType = 'json';
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var myArr = JSON.parse(this.responseText);
            //loadTrain(myArr); // load train data for testing purpose
            getTrain(myArr);
        }
    };

    req.send();
}

/* load trains json,  */
function getTrain(data) {
    /** Button for modal **/
    stopName = document.createElement("h1");

    stopName.textContent = data.station_name+" Railway Station";
    address = document.createElement("p");
    address.textContent = "Address: Station Approach, Norwich NR11EF";
    document.getElementById('businfo2').appendChild(stopName);
    document.getElementById('businfo2').appendChild(address);
    document.getElementById('businfo2').appendChild(document.createElement("br"));

    departures = data.departures;
    //document.getElementById('departures').innerHTML = departures;
    console.log(departures);
    var trains = departures['all'];
    for (var i = 0; i < trains.length; i++) {
        destination = document.createElement("h4");
        stationPlatform = document.createElement("p");
        stationPlatform.textContent = "Platform: "+trains[i].platform;
        //console.log(trains[i].platform);
        destination.textContent = trains[i].destination_name + " ("+trains[i].aimed_departure_time +")";
        //console.log(destination);
        document.getElementById('businfo2').appendChild(destination);
        document.getElementById('businfo2').appendChild(stationPlatform);
        document.getElementById('businfo2').appendChild(document.createElement("hr"));
    }
}

/** clear content */
function clearBox() {
    document.getElementById('businfo').innerHTML = "";
    document.getElementById('businfo2').innerHTML = "";
}