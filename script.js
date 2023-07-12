async function fetchData() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e6c47b73fdmsh3e14cf78eb9606ep1d51e6jsn51d964db2fec",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  async function getWeather(city) {
    const url =
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
    cityname.innerHTML = city;
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      cloud_pct.innerHTML = result.cloud_pct;
      temp.innerHTML = result.temp;
      temp2.innerHTML = result.temp;
      humidity.innerHTML = result.humidity;
      humidity2.innerHTML = result.humidity;
      min_temp.innerHTML = result.min_temp;
      max_temp.innerHTML = result.max_temp;
      wind_speed.innerHTML = result.wind_speed;
      wind_speed2.innerHTML = result.wind_speed;
      wind_degrees.innerHTML = result.wind_degrees;
      sunrise.innerHTML = result.sunrise;
      sunset.innerHTML = result.sunset;
    } catch (error) {
      console.error(error);
    }
  }

  document.querySelector("#submit").addEventListener("click", function (e) {
    e.preventDefault();
    const city = document.querySelector('input[type="search"]').value;
    getWeather(city);
  });

  getWeather("Mumbai");

  async function tableWeather(city, row) {
    const url =
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);


      row.cells[1].textContent = result.temp;
      row.cells[2].textContent = result.cloud_pct;
      row.cells[3].textContent = result.feels_like;
      row.cells[4].textContent = result.humidity;
      row.cells[5].textContent = result.min_temp;
      row.cells[6].textContent = result.max_temp;
      row.cells[7].textContent = result.wind_speed;
      row.cells[8].textContent = result.wind_degrees;
      row.cells[9].textContent = result.sunrise;
      row.cells[10].textContent = result.sunset;
    } catch (error) {
      console.error(error);
    }
  }

  document.querySelector("#submit").addEventListener("click", function (e) {
    e.preventDefault();
    const city = document.getElementById("cityname").value;
    const table = document.querySelector(".table");
    const newRow = table.insertRow();
    const cityNameCell = newRow.insertCell();
    cityNameCell.textContent = city;
    for (let i = 1; i <= 10; i++) {
      newRow.insertCell();
    }
    tableWeather(city, newRow);
  });

  tableWeather(
    "Delhi",
    document.querySelector("#myTable tbody tr:first-child")
  );
  tableWeather(
    "Shanghai",
    document.querySelector("#shanghai_cloud_pct").parentNode
  );
  tableWeather("Tokyo", document.querySelector("#tokyo_cloud_pct").parentNode);
}

fetchData();
