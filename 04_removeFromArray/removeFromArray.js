const removeFromArray = function(...args) {
    // extract first array
    const initialArray = args[0];

    // remove preceding arguments from initialArray
    for (let i=1; i < args.length; i++) {
        for (j=0; j < initialArray.length; j++){
            if (args[i] === initialArray[j]){
                initialArray.splice(j,1);
            }
        }
    }

    return initialArray;
};

// Do not edit below this line
module.exports = removeFromArray;
