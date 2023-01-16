//========================================with array
// rest

/*
function addNumber(a,b,c,...other){
    console.log(other)
    return a+b+c;

}
const result = addNumber(2,5,7,8,9,6,8,9)
console.log(result)
*/

// spred opretor

/*
var names=["ajay","vevak","anuj"];

function getName(name1,name2,name3){
    console.log(name1,name2,name3)
   
}
//getName(names[0],names[1],names[2])
getName(...names)
//getName(names)
*/


//===========================================================with obj
//rest

var student = {
    name:"ajay",
    age:28,
    hobbies: ["cirket ","singing"]
}

//const age = student.age;
const {...rest}=student;
console.log(rest)


//spred
var newStudent={
    ...student,
    age :30 
}
console.log(newStudent)