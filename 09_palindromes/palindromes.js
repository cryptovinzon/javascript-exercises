const palindromes = function (string) {   
    const normal = string.toLowerCase().replace(/[^a-z]/g, ''); // ^a-z: replace anything NOT a-z
    const reversed = normal.split('').reverse().join(''); // split into array, reverse, convert back to string
    
    return normal === reversed ? true : false;     
}

// Do not edit below this line
module.exports = palindromes;
