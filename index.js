/*
const nicoInfo = {
    name:"Nico",
    age:33,
    gender:"Male",
    favMovies: ["Along the gods", "LOTR", "Oldboy"],
    favFood: [
        {
            name:"Kimchi", 
            fatty: false
        }, 
        {
            name:"Cheese burger", 
            fatty: true
        }
    ]   // favFood Object안에 Array가 있고 그 안에 Object가 있음
}
console.log(nicoInfo.gender);
nicoInfo.gender = "Femail";     // const라도 객체 안에있는 정보들은 이렇게 변경 가능하다
console.log(nicoInfo.gender);

console.log(nicoInfo.favFood[0].fatty)  // false 출력

console.log(console)    // console 이라는 Object 안에 log라는 함수가 존재함을 확인할 수 있다.

// function

function sayHello(name, age){
    //console.log('HELLO!', name, "you have", age, "years of age.");
    console.log(`Hello ${name} you are ${age} years old`);  // `` 기호를 쓰면 ${}로 변수 사용 가능!
}

sayHello("Nicolas", 15);    // age가 없을 경우에도 매개변수의 개수가 같지 않지만 함수는 작동한다. (15는 출력되지 않음)
console.log("Hi!");


const calculator = {
    plus: function(a, b){
        return a + b;
    }
}

//console.log(greetNicolas)
const plus = calculator.plus(5, 5);
console.log(plus);
*/

// const title = document.getElementById("title");

// console.log(title);
// // DOM (Document Object Module)

// title.innerHTML = "Hi! From JS";
// title.style.color = "red";
// document.title = "I own you now";

// const title = document.querySelector("#title");  // 노드의 첫번째 자식을 반환. 아이디로 찾겠다 #
// title.innerHTML = "Hi! From JS";
// title.style.color = "red";
// document.title = "I own you now";

// function handleResize(){
//     console.log("I have been resized");
// }

//window.addEventListener("resize", handleResize);    // 이벤트를 받기를 기다리고 있는중. 어떤 이벤트인지는 우리가 알려줘야 함
                                                    // handleResize에 괄호는 작성하지 말아야 함! 중요!
                                                    // () 안쓰면 내가 필요한 시점에 handleResize함수를 호출하는 것. ()를 쓰면 지금 바로 호출하는 것
                                                    // 윈도우 사이즈가 변경될 때! 그때 로그 찍어라

function handleClick(){
    title.style.color = "blue";
}

title.addEventListener("click", handleClick)                                                  

