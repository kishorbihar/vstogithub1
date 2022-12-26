/* let text = 'kishor is a good boy'; //lentgth of string
let length = text.length;
console.log(length)
*/

/* let fruit = 'apple, bannan, kivi'; // number of first and last index
let slice = fruit.slice(7 , 14);
console.log(slice);
*/

/* let fru = 'apple, mango, graps';
let slice = fru.slice(7); // after 7th element print all element
console.log(slice);
*/

/* let fru = 'apple, egg rice';
let slice = fru.slice(-12); // start from last and go 12 element
console.log(slice);
*/

/* let fru = 'papaya, orange,4 radish';
let slice = fru.slice(-12, -6); //start from last go to 12 and come back to 6 element 
console.log(slice);
*/

/* let str = 'kishor, amrit, dheeraj'
let substring = str.substring(7,13); //make string from 7th to 13th element
console.log(substring);
*/

/* let str = 'amrit, kishor,dheeraj';
let sug = str.substring(5,3); // starting come to 5 and back to 3
console.log(sug);
*/

/*
let str = 'amrit, kishor, dheeraj';
let sub = str.substring(7); //start from 7th element and go to last
let sus = str.substr(7);
console.log(sub);
console.log(sus);
*/


/*
let str = 'amrit, kishor, dheeraj';
let sub = str.substr(-5);
console.log(sub);
*/


/* let text = 'please vesit microsoft';
let rep = text.replace('microsoft', 'google');
console.log(rep);
*/

/* let text = 'please get job in facebook and facebook';
let rep = text.replace('facebook','amazon'); // only one time replace 
console.log(rep);
*/

/* let text = 'please visit microsoft';
let rep = text.replace('MICROSOFT','google'); //not replace uppercase text
console.log(rep);
*/

/* let text = 'please vesit microsoft';
let rep = text.replace(/microsoft/i,'google' ); //only replace (/and i)
console.log(rep);
*/

/*
let text = 'please visit microsoft and microsoft with microsoft';
let rep = text.replace(/microsoft/g, 'facebook'); //  wit (/g) replace all microsoft
console.log(rep);
*/

// replace all

/*
let text = 'this is CAT  kimar cat';
let rep = text.replaceAll('CAT','DOG');// reeplace capital cat to capital dos
let real = text.replaceAll('cat','dog');//replace small cat to small dog
console.log(rep)
console.log(real)
*/

/*
let text = 'this is Cats of india Cats is Cats';
let rep = text.replaceAll(/Cats/g, 'Dogs');// reaplace all Cats to Dogs
console.log(rep)
*/

/*
let text = 'hello kishor bhai';
let up = text.toUpperCase(); //convert capital later
console.log(up);
*/

/*
let text = 'HELLOW KISHOR BHAI KAISE HAN';
let lp = text.toLowerCase(); //convert small later
console.log(lp);
*/

/*
let text1 = 'hellow';
let text2 = 'kishor';
let text3 = text1.concat(' ', text2);//join two string
console.log(text3);
*/
 
/*
let text = "hello" +" "+ "world";
let text2 = "hellow".concat(" ", "world!2"); //join two string
console.log(text2);
*/
 
/*
let text1 = "         kishor        ";
let text2 = text1.trim(text1);//remove all spaces
console.log(text2);
*/

/*
let text1 = "        kishor        ";
let text2 = text1.trimStart(text1);// remove space from start
let text3 = text1.trimEnd(text1); // remove space from end
console.log(text3)
console.log(text2)
*/

/*
let text = '5';
let text2 = text.padStart(4,"g"); //padding from start
let text3 = text.padEnd(4,'k'); //padding from end
console.log(text3)
console.log(text2);
*/

/*
let num = 5;
let text = num.toString(); // convert to string
let text2 = text.padStart(5,"0"); //padding from start
console.log(text2);
*/

/*
let text = "hellow kishor";
let char = text.charAt(4); //print 4th number of string
console.log(char);
*/

/*
let text = "hellow world";
let char = text.charCodeAt(0);  // ------=================================charCodeAt   not understand
console.log(char);
*/

/*
let text = "hellow world";
let char = text[4];  // index of charectoe
console.log(char);
*/

/* let text ='a,b,c,d';
let coma = text.split(","); //----------------------------------not understand split
console.log(coma)
*/

/*
let text ='k,l,m,n,o';
let sep  = text.split(" ");
console.log(sep)
*/

let text = 'k|is|hormeeruthme';
let pip = text.split("|");
console.log(pip);