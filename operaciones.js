const fs = require("fs");
const data = require("./citas.json");

const registrar = (name, age, animal, color, symptom) => {
  const newDate = {
    nombre: `${name}`,
    edad: `${age}`,
    animal: `${animal}`,
    color: `${color}`,
    sintoma: `${symptom}`,
  };
  fs.writeFileSync("citas.json", JSON.stringify([...data, newDate]));
};

const leer = () => {
  console.log(fs.readFileSync("citas.json", "utf-8"));
};

module.exports = { registrar, leer };
