function changeVocals (str) {
    var strResult = '';
    for(var i = 0; i < str.length; i++) {
        if(str[i] === 'a' || str[i] === 'A'
        || str[i] === 'e' || str[i] === 'E'
        || str[i] === 'i' || str[i] === 'I'
        || str[i] === 'o' || str[i] === 'O'
        || str[i] === 'u' || str[i] === 'U') {
            strResult += String.fromCharCode(str.charCodeAt(i) + 1);
        } else {
            strResult += str[i];
        }
    }
    return strResult;
}

function reverseWord (str) {
    var strResult = '';
    for(var i = str.length - 1; i >= 0; i--) {
        strResult += str[i];
    }
    return strResult;
}

function setLowerUpperCase (str) {
    var strResult = '';
    for(var i = 0; i < str.length; i++) {
        if(str[i].toUpperCase() === str[i]) {
            strResult += str[i].toLowerCase();
        } else if(str[i].toLowerCase() === str[i]) {
            strResult += str[i].toUpperCase();
        }
    }
    return strResult;
}

function removeSpaces (str) {
    var strResult = str.split(' ').join('');
    return strResult;
}

function passwordGenerator (name) {
    if(name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'