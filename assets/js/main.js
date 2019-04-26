window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

            let temperature = document.getElementById('temperature');
            let location = document.getElementById('location');
            let description = document.getElementById('description');
            let icon = document.getElementById('icon');
            
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const apiUrl = 'https://fcc-weather-api.glitch.me/api/current?lat=' + latitude + '&lon=' + longitude + '';
            
            fetch (apiUrl)
                .then (response => {
                    return response.json();
                })
                .then (data => {
                    console.log(data);
                    temperature.textContent = data.main.temp
                    location.textContent = data.name;
                    description.textContent = data.weather[0].description;
                    icon.src = data.weather[0].icon;
                })
        });
    } else {

    }
})