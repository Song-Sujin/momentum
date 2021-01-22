const API_KEY = "dacd8672474c75016bc760ebe1268d87";
const COORDS = 'coords';
const weather = document.querySelector(".js-weather");
const money = document.querySelector(".jinyong");

function getWeather(lat, lng)
{
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){  // fetch가 모두 완료된 다음에 json으로 만들기
        return response.json()
    }).then(function(json){     // json이 모두 만들어진 다음에 정보 가져오기
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });   
    // then: 데이터가 우리한테 넘어 왔을 때. (fetch가 완료된 이후)완전히 들어온 다음 함수 호출하기
    // JavaScript에서 뭔가가 끝나길 기다리는 방법은 then을 사용하도록 하자
}

function saveCoords(coordsObj)
{
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position)
{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude   // longitude: longitude 와 같은 의미
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError()
{
    console.log("Cant access geo location");
}

function askForCoords()
{
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords()
{
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null)     // 좌표가 없으면 좌표를 물어보기
    {
        askForCoords();
    } else                      // 좌표가 있으면 날씨를 가져오기
    {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init()
{
    loadCoords();
}

init();