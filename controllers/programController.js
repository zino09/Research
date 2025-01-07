const Program = require("../models/Program");

const getPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.status(200).json(programs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addProgram = async (req, res) => {
  const { title, description, duration, price } = req.body;
  try {
    const program = await Program.create({ title, description, duration, price });
    res.status(201).json(program);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getPrograms, addProgram };
