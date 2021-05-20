const express = require("express");
const students = require("./database");
const uuid = require("uuid");

const app = express();

app.use(express.json());

//Get students
app.get("/api/students", (req, res) => {
  res.json(students);
  // res.send(<h1>Hello Van great you!!!</h1>)
});

//Get student
app.get("/api/students/:id", (req, res) => {
  const { id } = req.params;
  const studentIdExist = students.some(
    (student) => student.id === parseInt(id)
  );
  const student = students.find((student) => student.id === parseInt(id));
  studentIdExist
    ? res.json(student)
    : res.status(404).json({ error: `No student id = ${id}` });
});

//Add student
app.post("/api/students/add", (req, res) => {
  const newStudent = {
    id: uuid.v4(),
    name: req.body.name,
    sex: req.body.sex,
  };
  if (
    newStudent.name !== "" &&
    (newStudent.sex === "M" || newStudent.sex === "F")
  ) {
    students.push(newStudent);
    res.json({ message: "Student created successfully", students });
  } else {
    res.status(404).json({
      Message: `The name input cannot be empty, and the sex input must be F for female or M for male`,
    });
  }
});

//Update student
app.put("/api/students/update/:id", (req, res) => {
  const { id } = req.params;
  const NewStudentValues = {
    id: id,
    newName: req.body.name,
    newSex: req.body.sex,
  };
  students.find((student) => {
    student.id === parseInt(id)
  })

  console.log(NewStudentValues);
});

//Delete
app.delete("/api/students/delete/:id", (req, res) => {
  const { id } = req.params;
  const studentIdExist = students.some(
    (student) => student.id === parseInt(id)
  );
  const response = students.splice(id - 1, 1);

  studentIdExist
    ? res.json(students)
    : res.status(404).json({ error: `No student with id =${id}` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
