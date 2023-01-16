/*
const arr = ['apple','mango','banana','kivi'];
const arr2 = arr.toString(); // convert array to string
console.log(arr2);
*/

/*
const arr = ['apple','banana','kivi','mango'];
const arr2 = arr.pop(); //remove 1 element
const arr3 = arr.push("blackbary");// add one element
console.log(arr2);
console.log(arr);
*/

// how to empty an array

/*
let arr = [3,4,5,2,4,3];
//arr.length=0;   // this method is for empty an array
arr.splice(0, arr.length);  // this method is for empty an array
console.log(arr)
*/

//=================================================================multi dimensonal array
const users =[
    {
        fname:"kishor",
        lname:"kumar"
    },
    {
        fname:"amrit",
        lname:"anand"
    },
    {
        fname:"dheeraj",
        lname:"jha"
    }
];

const finalusers = users.map((user) =>{

    return {
        fullname: user.fname+user.lname
    }
});






console.log(finalusers)