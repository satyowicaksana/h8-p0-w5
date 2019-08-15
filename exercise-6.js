function meleeRangedGrouping (str) {
    if(str.length === 0) {
        return [];
    }
    var splitStr = str.split(',');
    var arrResult = [[], []];
    for(var i = 0; i < splitStr.length; i++) {
        if(splitStr[i].split('-')[1] === 'Ranged') {
            arrResult[0].push(splitStr[i].split('-')[0]);
        } else if(splitStr[i].split('-')[1] === 'Melee') {
            arrResult[1].push(splitStr[i].split('-')[0]);
        }
    }

    return arrResult;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []