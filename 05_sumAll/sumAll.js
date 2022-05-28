const sumAll = function(a, b) {
let i = Math.min(a, b); // any sequence of a & b
let total = 0;

// check for positive integers only
if (Number.isInteger(a) && Number.isInteger(b) && a * b >= 0){
    while (i <= Math.max(a,b)){
        total += i;
        i++;
        }
        return total;
    } else {
        return 'ERROR';
    }
}

// Do not edit below this line
module.exports = sumAll;
