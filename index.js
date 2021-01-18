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

