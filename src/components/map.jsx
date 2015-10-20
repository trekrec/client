var React = require('react');
var circleDraw = require('../helpers/circleDraw');
var NavBar = require('./navigation');

var Map = React.createClass({
  getInitialState: function() {
    return {
      map: null,
      location: null,
      markers: []
    }
  },
  render: function() {
    return (
      <div>
        <NavBar />
        <div id="map-container">
          <input id="pac-input" className="controls" type="text" placeholder="Search Box" />
          <div ref="mapRef" id="map-canvas">
          </div>
        </div>
      </div>
    );
  },

  componentDidMount: function() {
    var map;

    this.getUserLocation(function(location) {
      map = this.createMap(location);
      this.setState({location: location});
      this.setState({map: map});
      this.renderUserLocation(map, location);
    }.bind(this));

    // Not sure this is necessary
    window.addEventListener("resize", function() {google.maps.event.trigger(map, 'resize')});

    //map event listeners go here

  },

  createMap: function(location) {
    var mapOptions = {
      draggable: true,
      zoom: 10,
      center: new google.maps.LatLng(location.latitude, location.longitude)
    }

    var map = new google.maps.Map(this.refs.mapRef.getDOMNode(), mapOptions);
  
    var input = document.getElementById('pac-input');
    // Create autocomplete and link it to the UI element.
    var autocomplete = new google.maps.places.Autocomplete(input);

    // Set the map controls to render in the to left position of the map.
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // SearchBox is initialized as hidden, until google maps is loaded.
    google.maps.event.addListenerOnce(map, 'idle', function() {
      $('#pac-input').css('display', 'block');
    });

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      autocomplete.setBounds(map.getBounds());
    });

    autocomplete.addListener('place_changed', function() { 
      var newPlace = autocomplete.getPlace();

      new google.maps.Marker({
        map: map,
        position: newPlace.geometry.location
      });
    });

    return map;
  },

  getUserLocation: function(callback) {
    navigator.geolocation.getCurrentPosition(function(location) {
      callback(location.coords);
    });
  },

  renderUserLocation: function(map, location) {
    // Append the users location as a circle to the map
    var userLocationDot = new google.maps.Circle({
      strokeOpacity: 0,
      fillOpacity: 1,
      fillColor: 'blue',
      map: map,
      center: {lat: location.latitude, lng: location.longitude},
      radius: 700
    });

    // Another circle that animates a "pulse"
    var userLocationPulse = new google.maps.Circle({
      strokeColor: 'LightBlue',
      strokeWeight: 2,
      fillOpacity: 0,
      map: map,
      center: {lat: location.latitude, lng: location.longitude},
      radius: 700
    });

    // Helper functions that animate the circles and update their
    // rendering when the zoom of the map is changed
    circleDraw.radiusOnZoom(map, userLocationDot);
    circleDraw.animateOnZoom(map, userLocationPulse);
  }
});

module.exports = Map;