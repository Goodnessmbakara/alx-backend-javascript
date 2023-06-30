export default class HolbertonCourse {
  constructor(name, lenght, students) {
    this._name = name;
    this._lenght = lenght;
    this._students = students;
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof lenght !== 'number') {
      throw TypeError('Lenght must be a number');
    }
    if (typeof students !== 'string') {
      throw TypeError('Students must be an array of Strings');
    }
  }

  get name() {
    return this._name;
  }

  get lenght() {
    return this._lenght;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    this._name = value;
  }

  set lenght(value) {
    this._lenght = value;
  }

  set students(value) {
    this._students = value;
  }
}
