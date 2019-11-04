fetch('http://api.openweathermap.org/data/2.5/weather?q=Poltava,ua&APPID=58d6fdf40efaefc74dc8e0da3793eddc')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city').innerHTML = data.city.name;
        document.querySelector('.country').innerHTML = data.city.country;
        document.querySelector('.cloudy').innerHTML = data.weather[0].main;

    })
    .catch(function () {

    })