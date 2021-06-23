import panZoom from 'svg-pan-zoom';

export default function svg(countryNamesMap) {
  const $container = document.querySelector('.container');
  const $svg = $container.querySelector('svg');
  const $countries = $svg.querySelectorAll(
    'path.world-map__country--interactive'
  );
  panZoom($svg, {
    zoomEnabled: true,
    controlIconsEnabled: true,
    fit: true,
    center: true,
    // viewportSelector: document.getElementById('demo-tiger').querySelector('#g4') // this option will make library to misbehave. Viewport should have no transform attribute
  });

  [...$countries].forEach(($country) => {
    $country.addEventListener('click', (event) => {
      let countryCode = $country.getAttribute('id').split('country-').pop();
      console.log(countryNamesMap[countryCode]);
    });
  });
}
