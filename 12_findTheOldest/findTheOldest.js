const findTheOldest = function(people) {
    let oldestPerson;
    people.reduce((oldestAge, person, index) => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
        let age = person.yearOfDeath - person.yearOfBirth;
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = people[index];
        }
        return oldestAge;
    }, 0);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
