// Foursquare API informations
const clientId = '&client_id=NYC0TZKENJF0YFWWQZEYYRLNCQDWP5L4WCEOZFTU3ZIJEZ0P';
const clientSecret = '&client_secret=MMTCG5VBOZFVPSGFXN0RJ0GTNMG332NNBOQL5JZWI3BP5ZD5';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// Additional informations
const limit = "&limit=10";
const actualDate = new Date();
let [day, month, year] =  [actualDate.getDate(), actualDate.getMonth() + 1, actualDate.getFullYear()]
if(day < 10) { day = "0" + day; } 
if(month < 10) { month = "0" + month; } 

const version = "&v=" + year + month + day;

const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);

// OpenWeather informations
const openWeatherKey = '&APPID=af97c127a3db92b8f2ae748217b95c62';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

// Page elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// AJAX
const getVenues = async () => {
  const city = $input.val();
  const urlToFetch = url + city + limit + clientId + clientSecret + version
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
      return venues;
    }
  } catch (error) { console.log(error); }
}

const getForecast = async () => {
  const city = $input.val();
  const urlToFetch = weatherUrl + city + openWeatherKey;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }

  } catch (error) { console.log(error); }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = venueIcon.prefix + 'bg_64' + venueIcon.suffix;
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (forecast) => {  
	let weatherContent = createWeatherHTML(forecast);
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues => renderVenues(venues))
  getForecast().then(forecast => renderForecast(forecast))
  return false;
}

$submit.click(executeSearch);