const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const older = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        const current = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
        return older > current ? oldest : currentPerson; // loop through, return oldest
    })
};

function getAge(latest, birth){
    if (!latest) {
        latest = new Date().getFullYear(); // current date if alive
    }
    return latest - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
