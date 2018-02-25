var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 10
        });
      }
      function initMap2(){
    var map2 = new google.maps.Map(document.getElementById("map2"), {
    	center: {lat: -29.7604, lng: 95.3698},
    	zoom: 4
    })
    }

//api key AIzaSyBECdr1cotQ82zUZ0BLfU3uZz4hubcnBHE