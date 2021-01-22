const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
//const toDos = [];         const는 변경 불가하니까 let으로 변경
let toDos = [];

function deleteToDo(event)
{
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);       // 기존에 있던 리스트에서 선택된 li 삭제
    const cleanToDos = toDos.filter(function(toDo){
        //return toDo.id !== li.id;   이건 숫자와 문자열비교라서 안됨
        return toDo.id !== parseInt(li.id); // 모든 toDos가 'li'의 id와 같지 않을 때
    });
    // filter는 array의 모든 아이템을 통해 함수를 실행하고,
    // 그 중 true인 아이템들만 가지고 새로운 array를 만든다.

    // 이제 필터링된 todo들만 담긴 array를 기존 array에 교체해야 함
    toDos = cleanToDos;
    saveToDos();    // localStorage에 toDos배열을 저장하기

    console.log(cleanToDos);
}

function saveToDos()
{
    // 입력된 todo를 String 형태로 TODOS_LS에 담아두기
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));  // localStorage에는 자바스크립트의 data를 저장할 수 없음. String만 가능
}

function paintToDo(text)
{
    //console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);

    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;

    toDoList.appendChild(li);   // 입력된 정보 뿌려주기

    const toDoObj = 
    {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}
    
function handleSubmit(event)
{
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

/* 이렇게 따로 빼는것도 가능하다.
function something(toDo)
{
    console.log(toDo.text);
}
*/

function loadToDos()    // 페이지가 로드될때 기존 등록되어 있는 todo들을 조회해서 뿌려주기
{
    const loadedToDos = localStorage.getItem(TODOS_LS);
    //console.log(loadedToDos);     이건 String
    if(loadedToDos !== null)    // 기존에 등록된 todo가 있으면
    {
        const parsedToDos = JSON.parse(loadedToDos);    // JSON 형태로 만들어서
        parsedToDos.forEach(function(toDo){             // 각 항목들마다
            //console.log(toDo.text);
            paintToDo(toDo.text);                       // text값을 뿌려주기
        });
    }
}

function init()
{
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();