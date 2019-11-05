document.querySelector('.btn').onclick = () => {

    let citiesId = document.querySelector('.cities-list').value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${citiesId}&APPID=58d6fdf40efaefc74dc8e0da3793eddc`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {

            console.log(data);
            console.log(data.sys.sunrise);
            console.log(data.sys.sunset);

            document.querySelector('.city').textContent = data.name;
            document.querySelector('.country').textContent = data.sys.country;
            document.querySelector('.middle-content__img img').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            document.querySelector('.middle-content__temperature').innerHTML = getTemperature(data.main['temp']);
            document.querySelector('.middle-content__hi span').innerHTML = getTemperature(data.main['temp_max']);
            document.querySelector('.middle-content__lo span').innerHTML = getTemperature(data.main['temp_min']);
            document.querySelector('.middle-content__weather-descr').textContent = data.weather[0].description;

            document.querySelector('.rain span').textContent = getRain(data.rain['3h']);
            document.querySelector('.humidity span').textContent = `${data.main['humidity']}%`;
            document.querySelector('.wind span').innerHTML = getWind(data.wind.speed, data.wind.deg);
            document.querySelector('.sunrise span').textContent = getTime(data.sys.sunrise, data.timezone);
            document.querySelector('.sunset span').textContent = getTime(data.sys.sunset, data.timezone);
            document.querySelector('.pressure span').textContent = `${data.main.pressure} hPa`;


        })
        .catch(function () {

        })
}

function getTemperature(temp) {

    temp = Math.floor(temp - 273);

    if (temp >= 0)
        return `+${temp}&deg;`;
    else
        return `${temp}&deg;`;

}

function getRain(rain) {
    if (rain)
        return `${rain} mm`;
    else
        return `--`;
}

function getTime(time, timeZone) {

    let minutes = Math.floor((time % 3600) / 60);
    let houres = Math.floor((time % 86400) / 3600) + timeZone / 3600;

    if (houres >= 12)
        return `${houres - 12}:${minutes} PM`;
    else
        return `${houres}:${minutes} AM`;

}

function getWind(speed, direction) {

    let deg = direction;

    switch (true) {
        case (direction <= 22.5 || direction > 337.5):
            direction = 'North'
            break;
        case (direction <= 67.5):
            direction = 'North-East'
            break;
        case (direction <= 112.5):
            direction = 'East'
            break;
        case (direction <= 157.5):
            direction = 'South-East'
            break;
        case (direction <= 202.5):
            direction = 'South'
            break;
        case (direction <= 247.5):
            direction = 'South-West'
            break;
        case (direction <= 292.5):
            direction = 'West'
            break;
        case (direction <= 337.5):
            direction = 'North-West'
            break;
    }

    speed += ' m/s';

    return `${speed}, ${direction} (${deg}&deg;)`;

}
