const db = require('../db');

module.exports = {
  getAll: () => db.query('SELECT * FROM proverbs'),
  getById: (id) => db.query('SELECT * FROM proverbs WHERE id = $1', [id]),
  create: (data) => {
    const { textdari, textpashto, translationen, meaning, category } = data;
    return db.query(
      `INSERT INTO proverbs (textdari, textpashto, translationen, meaning, category)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [textdari, textpashto, translationen, meaning, category]
    );
  },
  update: (id, data) => {
    const { textdari, textpashto, translationen, meaning, category } = data;
    return db.query(
      `UPDATE proverbs SET textdari=$1, textpashto=$2, translationen=$3, meaning=$4, category=$5 WHERE id=$6 RETURNING *`,
      [textdari, textpashto, translationen, meaning, category, id]
    );
  },
  delete: (id) => db.query('DELETE FROM proverbs WHERE id = $1', [id])
};
