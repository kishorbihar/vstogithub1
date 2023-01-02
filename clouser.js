/*
var sum = function(a){
    console.log("my brother is " +a);
    var b=9;
    return function(c){
        return a+b+c;
    }
   
}
var stor = sum(3);
console.log(stor(9))
*/

var sum = function(a,b,c){
    return{
        getSumTwo:function(){
            return a+b;
        },

        getSumThree:function(){
            return a+b+c;
        },
        multAll:function(){
            return a*b*c;
        },
        cal:function(){
            return a*b*c - 10;
        }
    }
}
 var stor = sum(3,4,5);
 console.log(stor.getSumTwo())
 console.log(stor.getSumThree())
 console.log(stor.multAll())
 console.log(stor.cal())