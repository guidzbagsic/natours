/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZ3VpZHpiYWdzaWMiLCJhIjoiY2xrMjg5OHBmMGYxZjNobzdhNWNqOWx0aiJ9.u2DmQmJu7lIRdj2LjdOOcA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/guidzbagsic/clk28cuns004001pw2e470j0h',
    center: [-118.10535861410091, 34.096270509669715]
    //   zoom: 10,
    //   interactive: false
  });
  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    //Create marker
    const el = document.createElement('div');
    el.className = 'marker';
    //add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addto(map);

    //extend map bound to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
