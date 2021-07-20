mapboxgl.accessToken = "pk.eyJ1IjoiYmVubnlib3kyMSIsImEiOiJja3I5cXNzZXoycXM1Mm5yemo2cHcxNWh6In0.fjDBXnp-JRlOPXTPRWxHPw";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([0.0, 0.0]);
}

function setupMap(center) {
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });

  // map.addControl(new mapboxgl.NavigationControl());

  map.dragRotate.disable();
  map.touchZoomRotate.disableRotation();

  map.on("load", function () {
    map.loadImage(
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/201408_cat.png",
      function (error, image) {
        if (error) throw error;
        map.addImage("cat", image);
        map.addSource("point", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [center[0], center[1]],
                },
              },
            ],
          },
        });
        map.addLayer({
          id: "points",
          type: "symbol",
          source: "point",
          layout: {
            "icon-image": "cat",
            "icon-size": 0.25,
            "icon-rotate": 0,
          },
        });
      }
    );
  });

  // Styles:
  // mapbox://styles/mapbox/streets-v11
  // mapbox://styles/mapbox/outdoors-v11
  // mapbox://styles/mapbox/light-v10
  // mapbox://styles/mapbox/dark-v10
  // mapbox://styles/mapbox/satellite-v9
  // mapbox://styles/mapbox/satellite-streets-v11
  // mapbox://styles/mapbox/navigation-day-v1
  // mapbox://styles/mapbox/navigation-night-v1
}
