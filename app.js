// YOUR JS CODE HERE

const temperatureDisplay = document.getElementById('temperature-display')
const windSpeedDisplay = document.getElementById('wind-speed-display')
const timezoneDisplay = document.getElementById('timezone-display')
const timeDisplay = document.getElementById('time-display')

// TEMPERATURE DISPLAY

async function getTemperature() {
  try {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1`)
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
  }
}

async function buildTemperatureDisplay() {
  const temperatureData = await getTemperature()
  temperatureDisplay.textContent = `${temperatureData.current.temperature_2m} ${temperatureData.current_units.temperature_2m}`
}

buildTemperatureDisplay()

// WIND SPEED DISPLAY

async function getWindSpeed() {
  try {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1`)
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
  }
}

async function buildWindSpeedDisplay() {
  const windSpeedData = await getWindSpeed()
  windSpeedDisplay.textContent = `Wind Speed: ${windSpeedData.current.wind_speed_10m} ${windSpeedData.current_units.wind_speed_10m}`
}

buildWindSpeedDisplay()

// TIMEZONE DISPLAY

async function getTimezone() {
  try {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

async function buildTimezoneDisplay() {
  const weatherData = await getTimezone();

  const timezoneData = weatherData.timezone;
  
  timezoneDisplay.textContent = `${timezoneData}`;
}

buildTimezoneDisplay();

// TIME DISPLAY

async function getTime() {
  try {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

async function buildTimeDisplay() {
  const weatherData = await getTime();
  
  const timeString = weatherData.current.time;
  const timeAmerica = new Date(timeString);
  
  const formattedTime = timeAmerica.toLocaleString('en-US'); 
  
  timeDisplay.textContent = `Last Updated: ${formattedTime}`;
}

buildTimeDisplay();