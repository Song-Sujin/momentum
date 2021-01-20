const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
    ;

const USER_LS = "currentUser",  // 사용자
    SHOWING_CN = "showing";     // 클래스명 노출

function saveName(text)
{
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event)
{
    event.preventDefault();     // submit을 하면 페이지 새로고침되는 default 액션을 막아둠
    const currentValue = input.value;
    console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName()
{
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text)    // 유저가 있는 경우 호출되는 인사
{
    form.classList.remove(SHOWING_CN);      // 이미 유저가 있기 때문에 input 폼 제거
    greeting.classList.add(SHOWING_CN);     // 유저한테 인사하는 문구 노출
    greeting.innerText = `Hello ${text}`;  
}

function loadName()     // init()이 호출되자마자 실행
{
    const currentUser = localStorage.getItem(USER_LS); // 현재 로컬에 저장되어 있는 유저 확인
    if(currentUser === null)
    {
        // 유저가 없는 경우
        askForName();
    } else
    {
        // 유저가 있는 경우
        paintGreeting(currentUser);
    }
}

function init()
{
    loadName();
}

init();