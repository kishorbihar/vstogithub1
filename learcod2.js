function isAnagram(string1,string2){
    if(string1.length!==string2.length){
        return false;
    }
    let counter={}
    for (let leater of string1){
        counter[leater]=(counter[leater] || 0)+1;
        console.log(counter[leater])
    }
    for (let items of string2){
        if(!counter[items]){
            return false;
        }
        counter[items]-=1.
    }
    return true;
}
const check=isAnagram('hello','lleho');
console.log(check)