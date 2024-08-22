const pool = require('./db');

const getAllDepartments = async () => {
    const result = await pool.query('SELECT * FROM department');
    return result.rows;
};

module.exports = {
    getAllDepartments,
};