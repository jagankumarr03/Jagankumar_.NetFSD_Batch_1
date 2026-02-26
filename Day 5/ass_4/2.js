let students = [
  { name: "Akhil", marks: 85 },
  { name: "Priya", marks: 72 },
  { name: "Ravi", marks: 90 },
  { name: "Meena", marks: 45 },
  { name: "Karan", marks: 30 }
];

console.log("===== STUDENT PERFORMANCE ANALYZER =====");

let passedStudents = students.filter(s => s.marks >= 40);
console.log("Passed Students:", passedStudents);

let distinctionStudents = students.filter(s => s.marks >= 85);
console.log("Distinction Students:", distinctionStudents);

let totalMarks = students.reduce((sum, s) => sum + s.marks, 0);
let average = totalMarks / students.length;
console.log("Class Average:", average.toFixed(2));

let topper = students.reduce((max, s) =>
  s.marks > max.marks ? s : max
);
console.log("Topper:", topper);

let failedCount = students.filter(s => s.marks < 40).length;
console.log("Failed Students Count:", failedCount);

let gradedStudents = students.map(s => {
  let grade;

  if (s.marks >= 85) grade = "A";
  else if (s.marks >= 60) grade = "B";
  else if (s.marks >= 40) grade = "C";
  else grade = "Fail";

  return { ...s, grade: grade };
});
console.log("Students with Grades:", gradedStudents);




let rankedStudents = [...students]
  .sort((a, b) => b.marks - a.marks)
  .map((student, index) => ({
    ...student,
    rank: index + 1
  }));
console.log("Ranked Students:", rankedStudents);

let minMarks = Math.min(...students.map(s => s.marks));
let withoutLowest = students.filter(s => s.marks !== minMarks);
console.log("After Removing Lowest Scorer:", withoutLowest);

let leaderboard = [...students]
  .sort((a, b) => b.marks - a.marks);

console.log("Leaderboard:");
leaderboard.forEach((s, i) => {
  console.log((i + 1) + ". " + s.name + " - " + s.marks);
});

console.log("===== END =====");