function random() {
  return Math.floor(Math.random() * 100);
}

const students = [
  {
    id: 1,
    name: "Куделя Олександр Андрійович",
    technology: "HTML",
    score: random(),
  },
  {
    id: 2,
    name: "Марченко Ярослава Андріївна",
    technology: "CSS",
    score: random(),
  },
  {
    id: 3,
    name: "Періжок Андрій Володимирович",
    technology: "JavaScript",
    score: random(),
  },
  {
    id: 4,
    name: "Петраш Андрій Миколайович",
    technology: "React",
    score: random(),
  },
  {
    id: 5,
    name: "Саліхова Альона Ільдусівна",
    technology: "Node",
    score: random(),
  },
  {
    id: 6,
    name: "Хамілов Костянтин Олександрович",
    technology: "Express",
    score: random(),
  },
];

module.exports = students;
