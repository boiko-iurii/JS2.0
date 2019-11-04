document.querySelector('.btn').onclick = () => {

    let citiesId = document.querySelector('.cities-list').value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${citiesId}&APPID=58d6fdf40efaefc74dc8e0da3793eddc`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {

            console.log(data);

            document.querySelector('.city').textContent = data.name;
            document.querySelector('.country').textContent = data.sys.country;
            document.querySelector('.middle-content__img img').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            document.querySelector('.middle-content__temperature').innerHTML = getTemperature(data.main['temp']);
            document.querySelector('.middle-content__hi span').innerHTML = getTemperature(data.main['temp_min']);
            document.querySelector('.middle-content__lo span').innerHTML = getTemperature(data.main['temp_max']);
            document.querySelector('.middle-content__weather-descr').textContent = data.weather[0].description;
            document.querySelector('.humidity span').textContent = `${data.main['humidity']}%`;

            document.querySelector('.sunrise span').textContent = getTime(data.sys.sunrise);
            document.querySelector('.sunset span').textContent = getTime(data.sys.sunset);
            document.querySelector('.wind span').textContent = data.wind.speed;


        })
        .catch(function () {

        })
}

function getTemperature(temp) {

    temp = Math.floor(temp - 273);

    if (temp >= 0)
        temp = `+${temp}&deg;`;
    else
        temp = `${temp}&deg;`;

    return temp;

}

function getTime(time) {

    date = new Date(time);

    date.toString;

    return date;

}