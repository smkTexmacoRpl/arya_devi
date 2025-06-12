
const students = [
 { name: "Daud", score: 80 },
 { name: "Anggur", score: 77 },
 { name: "Divya", score: 88 },
 { name: "Ishita", score: 95 },
 { name: "Tomas", score: 68 }
];

function getGrade(score) {
 if (score < 60) return "F";
 if (score < 70) return "D";
 if (score < 80) return "C";
 if (score < 90) return "B";
 return "A";
}

function calculateAverageAndGrade() {
 console.log("Hasil Nilai Siswa:");
 console.log("=================");
 
 students.forEach(student => {
     const average = student.score;
     const grade = getGrade(average);
     console.log(`Nama: ${student.name}, Nilai: ${average}, Grade: ${grade}`);
 });
 
 const totalScore = students.reduce((sum, student) => sum + student.score, 0);
 const classAverage = totalScore / students.length;
 console.log("=================");
 console.log(`Rata-rata kelas: ${classAverage.toFixed(2)}`);
}

calculateAverageAndGrade();