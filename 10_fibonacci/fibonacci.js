const fibonacci = function(position) {
    if (position < 0) return 'OOPS';

    let array = [1 , 1];
    for (let i = 2; i < position; i++){
        array[i] = array[i-1] + array[i-2];
    }
    return array[position - 1];
};

// Do not edit below this line
module.exports = fibonacci;
