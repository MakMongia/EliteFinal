import React from 'react';
import './Weather.css'; // Import the CSS file

function Weather() {
  return (
    <section id="weather">
      <h1>Weather Forecast</h1>
      <div className="weather-widget">
        <iframe
          src="https://www.meteoblue.com/en/weather/widget/daily/melbourne_australia_2158177?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&windgust=1&winddirection=0&winddirection=1&uv=0&uv=1&humidity=0&humidity=1&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&spot=1&pressure=0&layout=light"
          frameborder="0"
          scrolling="NO"
          allowtransparency="true"
          sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
          style={{ width: '100%', height: '445px' }}
        ></iframe>
        {/* Visit our weather partner */}
        <div>
          <br>
          </br>
          <a href="https://www.meteoblue.com/en/weather/week/melbourne_australia_2158177?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget" target="_blank" rel="noopener">
            Visit our weather partner meteoblue
          </a>
        </div>
      </div>
    </section>
  );
}

export default Weather;
