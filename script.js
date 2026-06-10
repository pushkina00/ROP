mapboxgl.accessToken = 'pk.eyJ1IjoicHVzaGtpbmEwMCIsImEiOiJjbXB6eXoyZ24wZXk3MnNvaGx4YmJvbDk0In0.ASvZLFFowTnQxSR5jmfeCw';
const map = new mapboxgl.Map({
  container: 'map', style:'mapbox://styles/pushkina00/cmq8ghk1e002z01sqc6beft30', //Your Style URL goes here
  center: [-120.2867, 38.2719], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9 // starting zoom
    });