function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  (this.marks === undefined) ? this.marks = [mark] : this.marks.push(mark);
}

Student.prototype.addMarks = function (...mark) {
  (this.marks === undefined) ? this.marks = mark : mark.forEach(item => this.marks.push(item));
}

Student.prototype.getAverage = function () {
  let result = this.marks.reduce((acc, item) => acc += item, 0);

  return result /= this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}