var map;

//when the jQuery Mobile page is initialised
$(document).on('pageinit', function() {
    //set up listener for button click
	//$(document).on('click', getPosition);
	   
   // var locationOptions = {
        //maximumAge: 10000,
        //timeout: 6000,
        //enableHighAccuracy: true
   // };
       
    //navigator.geolocation.watchPosition(successPosition,failPosition,locationOptions);

    //var pos  = getPosition();
});

//Call this function when you want to get the current position
function getPosition() {
	//instruct location service to get position with appropriate callbacks
	navigator.geolocation.getCurrentPosition(successPosition, failPosition);
}
//called when the position is successfully determined
function successPosition(position) {
	
	//You can find out more details about what the position obejct contains here:
	// http://www.w3schools.com/html/html5_geolocation.asp
	

	//lets get some stuff out of the position object
	// var unixTime = new Date(position.timestamp);
    // var date = unixTime.toDateString();
	// var latitude = position.coords.latitude;
    // var longitude = position.coords.longitude;
    // var acc = position.coords.accuracy;
    // var alt = position.coords.altitude;
    // var altAcc = position.coords.altitudeAccuracy;
    // var head = position.coords.heading;
    // var speed = position.coords.speed;

    var positionInfo = {
        unixTime: new Date(position.timestamp),
        date: unixTime.toDateString(),
        lat: position.coords.latitude,
        long: position.coords.longitude,
        acc: position.coords.accuracy,
        alt: position.coords.altitude,
        altAcc: position.coords.altitudeAccuracy,
        head: position.coords.heading,
        speed: position.coords.speed
    }
    
    console.log(longitude,latitude);
    return positionInfo;

}

//called if the position is not obtained correctly
function failPosition(error) {
	//change time box to show updated message
    console.log("ERROR: "+ error);
}
	
function initMap(){
    detectBrowser();
    var pos  = getPosition();
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: pos.lat, lng: pos.long},
        zoom: 8
    });
}

function detectBrowser() {
    var useragent = navigator.userAgent;
    var mapdiv = document.getElementById("map");
    mapdiv.style.width = '600px';
    mapdiv.style.height = '800px';
}