class Student {
  constructor(name) {
    this.name = name;
    this.marks = [];
  }

  addMark(mark) {
    this.marks.push(mark);
  }

  getAverage() {
    let total = this.marks.reduce((sum, m) => sum + m, 0);
    return total / this.marks.length;
  }

  getGrade() {
    let avg = this.getAverage();

    if (avg >= 90) return "A";
    if (avg >= 75) return "B";
    if (avg >= 50) return "C";
    return "Fail";
  }
}

let s1 = new Student("Akhil");
s1.addMark(80);
s1.addMark(90);
console.log("Average:", s1.getAverage());
console.log("Grade:", s1.getGrade());