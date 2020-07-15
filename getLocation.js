function myCurentLocation(position){
    lon = position.coords.longitude;
    lat = position.coords.latitude;
    
    /* in here add fetch data functions
        first  make two variables, lat and lon add these into 'url'
        to get current location json file
        secon load json file and read data in the file.
        */
    document.getElementById('longitude').innerHTML = lon;
    document.getElementById('latitude').innerHTML = lat;
}
function getLocation(){
    if (navigator.geolocation){
        myLocation = navigator.geolocation.getCurrentPosition(myCurentLocation);
        //getTagValue();
        //window.alert('ok');
    }
    else {
        window.alert("Current browser doesn't support geolocation");
    }
}