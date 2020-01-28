//console.log('Im Working. Im JS. Im beautiful. Im Worth it');
//경고창 띄우는 코드 (alert)

//a = 221;
//b = a -5;

//console.log(b);
//변수 사용법과 변수를 이용해 출력하는 코드(consol.log)

//let a = 221;
//let b = a -5;
//a= 4;
//console.log(b, a);
//a값을 다시 설정하면 이전값은 사라짐(let)


//const a = 221;
//let b = a -5;
//a= 4;
//console.log(b, a);
//const 는 변경할 수 없는 상수이므로 컴파일 에러
//즉 let은 값을 바꿀수 있고 const는 바꿀수 없다

/*string = 텍스트
const what = "Nicolas";
console.log(what);
*/

//boolean = 텍스트가 아님
//const wat = true;
//console.log(wat);

//float
//const wat = 55.1;
//console.log()

/*
const something = "Something";
const daysOfWeek = ["MOn","Tue","Wed","Tue","Fri","Sat","Sun", 54, true, "stuff", "lalalala", something];;

console.log(daysOfWeek[0]);
console.log(daysOfWeek[1]);
console.log(daysOfWeek[2]);
console.log(daysOfWeek[3]);
console.log(daysOfWeek[4]);
console.log(daysOfWeek[5]);
console.log(daysOfWeek[6]);
console.log(daysOfWeek);

//camel ways = 띄움을 스페이스 대신 대문자로 표시
*/
/*
const nicoInfo = 
    {
        name : "Nicolas",
        age :  "55",
        gender : "Male",
        isHandsome : true,
        favMovies : ["Along the gods","LOTR","Oldboy"],
        favFood : 
        [
            {
                name:"kimchi", 
                fatty:false
            }, 
            {
                name:"Cheese burger", fatty : true
            }
        ]
     }

    console.log(nicoInfo.gender);
*/

/*
function sayHello(name, age){
    console.log(`hello ${name} you are ${age} years old`);
}

const greenNicolas = sayHello("Nicolas", 14)

console.log(greenNicolas)
*/

/*
const calculator = {
    add: function(a, b){
        return a + b;
    }
}

const add = calculator.add(5,5)
console.log(add)
*/

/*
const calculator = {
    subtract : function(a, b){
        return a - b;
    }
}

const subtract = calculator.subract(5,5)
console.log(minus)
*/

/*
const calculator = {
    multiply : function(a, b){
        return a * b;
    }
}

const multiply = calculator.multiply(5,5)
console.log(multiply)
*/

/*
const calculator = {
    divide : function(a, b){
        return a / b;
    }
}

const divide = calculator.divide(5,5)
console.log(divide)
*/

/*
const title = document.getElementById("title");

title.innerHTML = "hi From JS";
*/

const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
 
}

function init(){
    getTime();
    setInterval(getTime,1000)
}

init();

