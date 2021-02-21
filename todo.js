const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  pendingList = document.querySelector(".js-pendingList"),
  finishedList = document.querySelector(".js-finishedList");

const PEND_LS = "PENDING";
const FIN_LS = "FINISHED";
let pends = [];
let finish = [];

// localStorage에 저장하기
function saveToDos() {
  localStorage.setItem(PEND_LS, JSON.stringify(pends));
  localStorage.setItem(FIN_LS, JSON.stringify(finish));
}

// pending에서 삭제하기
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);

  const cleanToDos = pends.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  pends = cleanToDos;
  saveToDos();
}

// finished에서 삭제하기
function deleteToDoFin(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finishedList.removeChild(li);

  const cleanToDos = finish.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  finish = cleanToDos;
  saveToDos();
}

// 완료하기
// pending에서 제거
// finish에 추가
function finishToDo(event) {
  // pending에서 제거
  const btn = event.target;
  const li = btn.parentNode;

  pendingList.removeChild(li);

  const cleanToDos = pends.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  pends = cleanToDos;

  // finished에 추가
  paintToDoFin(li.firstChild.innerText);
}

// 다시 pending에 넣기
function goToPending() {
  // finished에서 제거
  const btn = event.target;
  const li = btn.parentNode;

  finishedList.removeChild(li);

  const cleanToDos = finish.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  finish = cleanToDos;

  // pending에 추가
  paintToDo(li.firstChild.innerText);
}

// finish 리스트 뿌려주기
function paintToDoFin(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const penBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = finish.length + 1;

  delBtn.innerHTML = "❌";
  penBtn.innerHTML = "⏪";

  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(penBtn);
  li.id = newId;

  // 화면상 리스트 추가하기
  finishedList.appendChild(li);

  // 삭제 버튼 클릭 시 삭제 함수 호출
  delBtn.addEventListener("click", deleteToDoFin);

  // pending버튼 클릭 시 pending에 넣는 함수 호출
  penBtn.addEventListener("click", goToPending);

  const finishedObj = {
    text: text,
    id: newId
  };

  finish.push(finishedObj);
  saveToDos();
}

// pending 리스트 뿌려주기
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const finBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = pends.length + 1;

  delBtn.innerHTML = "❌";
  finBtn.innerHTML = "✅";

  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finBtn);
  li.id = newId;

  // 첫 등록하면 Pending으로 넣기
  pendingList.appendChild(li);

  // 삭제 버튼 클릭 시 삭제 함수 호출
  delBtn.addEventListener("click", deleteToDo);

  // 완료버튼 클릭 시 finish에 넣는 함수 호출
  finBtn.addEventListener("click", finishToDo);

  const pendingObj = {
    text: text,
    id: newId
  };
  pends.push(pendingObj);
  saveToDos();
}

// Pending에 최초 저장하기
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

// 기존 리스트 불러오기
function loadToDos() {
  const loadedToDos = localStorage.getItem(PEND_LS);
  const loadedToDos2 = localStorage.getItem(FIN_LS);

  // pending 리스트 불러오기
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
  // finished 리스트 불러오기
  if (loadedToDos2 !== null) {
    const parsedToDos2 = JSON.parse(loadedToDos2);
    parsedToDos2.forEach(function (toDo) {
      paintToDoFin(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();