const model = require('../models/proverbModel');
const pool = require('../db'); // برای query مستقیم

// CRUD functions using model
exports.getAll = async (req, res) => {
  const result = await model.getAll();
  res.json(result.rows);
};

exports.getById = async (req, res) => {
  const result = await model.getById(req.params.id);
  if (result.rows.length === 0) return res.status(404).json({ error: 'Not found' });
  res.json(result.rows[0]);
};

exports.create = async (req, res) => {
  const result = await model.create(req.body);
  res.status(201).json(result.rows[0]);
};

exports.update = async (req, res) => {
  const result = await model.update(req.params.id, req.body);
  res.json(result.rows[0]);
};

exports.remove = async (req, res) => {
  await model.delete(req.params.id);
  res.json({ message: 'Deleted successfully' });
};

// Bonus feature: get random proverb
exports.getRandomProverb = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM proverbs ORDER BY RANDOM() LIMIT 1');
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Bonus feature: search proverbs
exports.searchProverbs = async (req, res) => {
    const { keyword } = req.query;
    try {
      const result = await pool.query(`
        SELECT * FROM proverbs 
        WHERE textdari ILIKE $1 
           OR textpashto ILIKE $1 
           OR translationen ILIKE $1 
           OR meaning ILIKE $1
      `, [`%${keyword}%`]);
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
