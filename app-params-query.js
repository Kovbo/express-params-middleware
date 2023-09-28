const express = require("express");
const students = require("./students");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Home");
});

app.get("/api/students", (req, res) => {
  const studentsShortInfo = students.map((student) => {
    const { id, name, score } = student;

    return { id, name, score };
  });

  res.status(200).json(studentsShortInfo);
});

app.get("/api/students/:id", (req, res) => {
  const { id } = req.params;

  const student = students.find((student) => {
    return student.id === Number(id);
  });

  if (!student) {
    res.status(404).send("Not found!");
  }

  res.status(200).json(student);
});

app.get("/api/students/technology/:tech/score/:score", (req, res) => {
  const { tech, score } = req.params;

  console.log(tech, score);

  const newStudents = students.filter((student) => {
    return student.technology === tech && student.score >= score;
  });

  res.status(200).json(newStudents);
});

app.get("/api/search", (req, res) => {
  const { technology, score, limit } = req.query;

  let newStudents = [...students];

  if (technology) {
    newStudents = newStudents.filter((student) => {
      return student.technology === technology;
    });
  }

  if (score) {
    newStudents = newStudents.filter((student) => {
      return student.score >= score;
    });
  }

  if (limit) {
    newStudents = newStudents.slice(0, Number(limit));
  }

  res.status(200).json(newStudents);
});

app.listen(8000);
