/*
const interviewQuestion = (name) =>{
    if (name === "kishor"){
        return function(topic){
            console.log(`Hii ${name}.what is ${topic}?.Plz explain it`);
        }
    }

    if (name === "dheeraj"){
        return function(topic){
            console.log(`hii ${name}.what is ${topic}?.Plz explain it`);
        }
    }

    if (name === "amrit"){
        return function(topic){
            console.log(`hii ${name}.what is ${topic} Plz explain it`);
        }
    }
    else {
        return function(){
            console.log("welcome to interview");
        }
    }


}

 interviewQuestion("dheeraj")("UI");
 interviewQuestion("kishor")("full stack");
 interviewQuestion("amrit")("dajngo");
 interviewQuestion("ok")("love");
*/




const interviewQuestion = (name) =>{
    if (name === "kishor"){
        return function(topic){
            console.log(`Hii ${name}.what is ${topic}?.Plz explain it`);
        }
    }

    if (name === "dheeraj"){
        return function(topic){
            console.log(`hii ${name}.what is ${topic}?.Plz explain it`);
        }
    }

    if (name === "amrit"){
        return function(topic){
            console.log(`hii ${name}.what is ${topic} Plz explain it`);
        }
    }
    else {
        return function(){
            console.log("welcome to interview");
        }
    }


}

 


 const cand1 = interviewQuestion("kishor");
 cand1("javascript");
 cand1("bootstrap");
 cand1("ajax");

 const cand2 = interviewQuestion("dheeraj");
 cand2("express");
 cand2("node");
 cand2("api");