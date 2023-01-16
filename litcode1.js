//-----two some

function getSumePairZero(array){
    for(let number of array){
        for(let j=1;j<array.length;j++){
            if(number + array[j] === 0){
                return [number,array[j]];
            }
        }
    }
}

const result=getSumePairZero([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);


// two some using 1 loop
function findSumPair(array){
    let left=0;
    let right=array.length-1;

    while(left<right){
        sum=array[left]+array[right];
        if(sum===0){
            return [array[left],array[right]];

        }else if(sum > 0){
             right--;
        }else{
            left++;
        }
    }
}

const result = findSumPair([-5,-4,-3,-2,0,2,4,6,8])
console.log(result)