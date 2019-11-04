document.querySelector('.btn').onclick = () => {

    let citiesId = document.querySelector('.cities-list').value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${citiesId}&APPID=58d6fdf40efaefc74dc8e0da3793eddc`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {

            console.log(data);

            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.country').innerHTML = data.sys.country;
            document.querySelector('.cloudy').innerHTML = data.weather[0].description;


        })
        .catch(function () {

        })
}