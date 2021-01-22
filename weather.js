const API_KEY = "dacd8672474c75016bc760ebe1268d87";
const COORDS = 'coords';

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
        // getWeather
    }
}

function init()
{
    loadCoords();
}

init();