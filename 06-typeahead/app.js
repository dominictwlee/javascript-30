//  Create event listener for form input
const cityInput = document.querySelector('.form__input');
const cityList = document.querySelector('.list');

const citiesUrl = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const citiesPromise =
  fetch(citiesUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    return res.json();
  });

function displayMatches(cities) {
  const listItem = document.createElement('li');
  const population = document.createElement('span');
  listItem.classList.add('list__item');
  const matches = cities.map((city) => {
    return `
    <li class="list__item">
      <span class="city-state">${city.city}, ${city.state}</span>
      <span class="population">${city.population}</span>
    </li>
    `;
  }).join('');
  cityList.innerHTML = matches;
}

cityInput.addEventListener('input', function() {
  //  Reset list
  //  Filter Matches
  const regexp = new RegExp(cityInput.value, 'gi')
  citiesPromise
    .then(cities => {
      return cities.filter((result) => {
        return result.city.match(regexp) || result.state.match(regexp);
      })
    })
    .then(filteredCities => {
      displayMatches(filteredCities)
    })
    .catch(err => console.log(err))
})
