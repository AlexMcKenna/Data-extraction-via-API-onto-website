//function openNav() {
//    document.getElementById("myNav").style.width = "100%";
//}
//
//function closeNav() {
//    document.getElementById("myNav").style.width = "0%";
//}
//
//function insertReply(content) {
//  document.getElementById('output').innerHTML = content;
//}

/*
const api = 'http://transportapi.com/v3/uk/places.json?query=euston&type=train_station&app_id=d56927f5&app_key=e0dcf6205b574a542677a2b57087ca33';
var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};


getJSON(api).then(function(data) {
    //alert('Your Json result is:  ' + data.request_time); //you can comment this, i used it to debug
    //show the request time from api
    result.innerText = data.request_time; //display the result in an HTML element

    //member is an object obejct in the api
    var trains = data['member'];
    for(var i = 0; i < trains.length; i++){
      myName = document.createElement('p');
      myLat = document.createElement('p');

      myName.textContent = trains[i].name;
      myLat.textContent = trains[i].latitude;
      document.getElementById('result').appendChild(myName);
      document.getElementById('result').appendChild(myLat);
    }

}, function(status) { //error detection....
  alert('Something went wrong.');
});

*/