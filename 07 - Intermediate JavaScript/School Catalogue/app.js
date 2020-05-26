class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() { return this._name; }
  get level() { return this._level; }
  get numberOfStudents() { return this._numberOfStudents; }

  set numberOfStudents(number) {
    if (typeof number === "number") { this._numberOfStudents = number; }
    else { console.log("Invalid input: numberOfStudents must be set to a Number."); }
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`)
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let randomIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomIndex];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() { return this._pickupPolicy; } 
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportTeams) {
    super(name, "high", numberOfStudents);
    this._sportTeams = sportTeams;
  }

  get sportTeams() { 
    console.log(this._sportTeams);
    return this._sportTeams; 
  }
}

class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, "middle", numberOfStudents);
  }
}

const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.");

lorraineHansbury.quickFacts();

let listOfTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];

School.pickSubstituteTeacher(listOfTeachers);

const alSmith = new HighSchool("Al E. Smith", 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.sportTeams;