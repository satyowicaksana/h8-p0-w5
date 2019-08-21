function sorting(arrNumber) {
    var sorted = false;
    while(!sorted) {
        sorted = true;
        for(var i = 0; i < arrNumber.length - 1; i++) {
            if(arrNumber[i] < arrNumber[i + 1]) {
                var temp = arrNumber[i];
                arrNumber[i] = arrNumber[i + 1];
                arrNumber[i + 1] = temp;
                sorted = false;
            }
        }
    }
    
    return arrNumber;
}

function getTotal(arrNumber) {
    if(arrNumber.length === 0) {
        return '';
    }

    var highestNumber = arrNumber[0];
    var highestNumberCount = 1;
    var i = 1;
    while(arrNumber[i] === highestNumber) {
        highestNumberCount++;
        i++;
    }
    
    return 'angka paling besar adalah ' + highestNumber +
    ' dan jumlah kemunculan sebanyak ' + highestNumberCount + ' kali';
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  return getTotal(listSort);
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''