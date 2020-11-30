mapboxgl.accessToken =
  "pk.eyJ1IjoidGFuaWFpc2xhbSIsImEiOiJja2k0eHI0Mm80OGF6MnFrenExZXpkeDBuIn0.z5yOkWCWGDsNvgnhqFZ9Hg"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([60.155, 24.743])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}
