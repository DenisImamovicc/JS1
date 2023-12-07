const popupMssg = document.querySelector("#alert");
const loadingIcon = document.querySelector("#loadingIcon");
const forecast = document.querySelector("#forecast")

document.querySelector("#search-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = e.target.query.value.trim();

  if (city.length < 3) {
    return alert("Please enter at least 3 chars")
  }

  try {
    forecast.className = "card text-black hide";
    loadingIcon.className = "spinner-border";
    const data = await getCurrentWeather(city);
    loadingIcon.className = "spinner-border hide";
    renderCurrentWeather(data);
    forecast.className = "card text-black";
  } catch (error) {
    loadingIcon.className = "spinner-border hide";
    renderErrMssg(city);
  }
});

const renderErrMssg = (city) => {
  const ErrMssgDelay = 3000;
  popupMssg.className = "alert alert-danger text-center";
  popupMssg.innerText = `${city} not found.Pls try again or check your spelling`;
  setTimeout(
    () => (popupMssg.className = "alert alert-danger text-center hide"),
    ErrMssgDelay
  );
};

const renderCurrentWeather = (conditions) => {

  forecast.innerHTML = `
		<img src="${checkTimeOfDay(conditions)}" class="card-img-top">
        <span class="text-start ms-2">Updated by: ${checkWeatherUpdateTime(
          conditions
        )}</span>
		<div class="card-body">
			<h5 class="card-title" id="location">
				<span id="city">${conditions.name}</span>,
				<span id="country">${conditions.sys.country ?? "N/A"}</span>
			</h5>
			<p class="temp">
				<span id="temperature">${conditions.main.temp}</span>
				&deg;C
			</p>
			<p class="humidity">
				<span id="humidity">${conditions.main.humidity}</span>
				&percnt; humidity
			</p>
			<p class="wind">
				<span id="windspeed">${conditions.wind.speed}</span>
				m/s
			</p>
        <ul class="conditions">
          <li>
            <img src="https://openweathermap.org/img/wn/${conditions.weather[0].icon}@2x.png"
              alt="${conditions.weather[0].main}"
              title="${conditions.weather[0].description}" 
              id="weatherRelations">
          </li>
        </ul>
		</div>
	`;
};

const checkTimeOfDay = (data) => {
  const currTime = Math.floor(Date.now() / 1000);
  return currTime > data.sys.sunrise && currTime < data.sys.sunset
    ? "assets/images/day.svg"
    : "assets/images/night.svg";
};

const checkWeatherUpdateTime = (data) => new Date(data.dt * 1000).toUTCString();
