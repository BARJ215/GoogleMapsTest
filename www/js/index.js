var map;
var currentCenter={lat: -34.397, lng: 150.644};
//when the jQuery Mobile page is initialised
$(document).on('pageinit', function(){
    //set up listener for button click
	$(document).on('click', getPosition);

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
	console.log("getting data");
	//change time box to show updated message
	//$('#time').val("Getting data...");
	
	//instruct location service to get position with appropriate callbacks
    navigator.geolocation.getCurrentPosition(successPosition, failPosition);
}


//called when the position is successfully determined
function successPosition(position) {
	
	//You can find out more details about what the position obejct contains here:
	// http://www.w3schools.com/html/html5_geolocation.asp
	

	//lets get some stuff out of the position object
	var unixTime = new Date(position.timestamp);
    var date = unixTime.toDateString();
	var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var acc = position.coords.accuracy;
    var alt = position.coords.altitude;
    var altAcc = position.coords.altitudeAccuracy;
    var head = position.coords.heading;
    var speed = position.coords.speed;
    
    console.log(latitude);
	
}

//called if the position is not obtained correctly
function failPosition(error) {
	//change time box to show updated message
    //$('#time').val("Error getting data: " + error);
    console.log("Error getting data:"+error);
	
}
	
function initMap(){
    detectBrowser();
     map = new google.maps.Map(document.getElementById('map'), {
        center: currentCenter,
        zoom: 8
    });
}

function detectBrowser() {
    var useragent = navigator.userAgent;
    var mapdiv = document.getElementById("map");
    mapdiv.style.width = '600px';
    mapdiv.style.height = '800px';
}