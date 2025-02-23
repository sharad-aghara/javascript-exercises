const age = function(birthYear, dethYear) {
    if(!dethYear) {
        dethYear = new Date().getFullYear();
    }

    return dethYear - birthYear;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestPersonAge = age(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentPersonAge = age(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestPersonAge < currentPersonAge ? currentPerson : oldest;
    });
};
 
// Do not edit below this line
module.exports = findTheOldest;
