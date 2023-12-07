/**
 * 🌧️.
 *
 */
const renderCurrentWeather = (conditions) => {
	document.querySelector("#forecast").innerHTML = `
		<img src="assets/images/forecast-banner.png" class="card-img-top">
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
                <li><img src="https://openweathermap.org/img/wn/${conditions.weather[0].icon}@2x.png"  alt="${conditions.weather[0].main}" title="${conditions.weather[0].description}" id="weatherRelations"></li>
            </ul>
		</div>
	`;
}

// Listen for when the user wants to get weather conditions for a city
document.querySelector("#search-form").addEventListener("submit", async (e) => {
	e.preventDefault();
	const city = e.target.query.value.trim();

	// Make sure input is at least somewhat valid
	if (city.length < 3) {
		alert("Please enter at least 3 chars");
		return;
	}

	console.log(`Searching for city "${city}"`);
    document.querySelector("#forecast").className = "card text-black hide"
    try {
        document.querySelector("#loadingIcon").className = "spinner-border"
        const data = await getCurrentWeather(city);
        document.querySelector("#loadingIcon").className = "spinner-border hide"

        renderCurrentWeather(data)
        console.log(`Current weather conditions in "${city}":`, data);
        document.querySelector("#forecast").className = "card text-black"
    } catch (error) {
        document.querySelector("#loadingIcon").className = "spinner-border hide"
        renderErrMssg(city)
    }
});


const renderErrMssg = (city) => {
    const ErrMssgDelay = 3000
    document.querySelector("#alert").className = "alert alert-danger text-center"
    document.querySelector("#alert").innerText = `${city} not found.Pls try again`
    setTimeout(()=>{
        document.querySelector("#alert").className = "alert alert-danger text-center hide"
    },ErrMssgDelay)
}