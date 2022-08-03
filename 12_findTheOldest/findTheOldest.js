const findTheOldest = function(people) {
    people.forEach(person => {
        if ('yearOfDeath' in person === false){
            person.yearOfDeath = new Date().getFullYear();
        }
    });
    const oldest = people.sort((a, b) => a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth ? 1 : -1 );
    console.log(oldest);
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
