const findTheOldest = function(people = [{}]) {
  let oldestPerson;
  oldestPerson = people.reduce((previous, current) => {
    if (previous) {
      // determine age and return person with higher age
      // idea from solution: extract getAge calculation in separate function
      const prevDeath = previous.yearOfDeath ? previous.yearOfDeath : new Date().getFullYear();
      const currDeath = current.yearOfDeath ? current.yearOfDeath : new Date().getFullYear();
      const agePrev = prevDeath - previous.yearOfBirth;
      const ageCurr = currDeath - current.yearOfBirth;
      if (ageCurr > agePrev) return current;
      else return previous;
    } else {
      // first array element (there is no previous)
      return current;
    }
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
