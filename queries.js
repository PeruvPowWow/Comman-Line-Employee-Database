const pool = require('./db');

const getAllDepartments = async () => {
    try {
    const result = await pool.query('SELECT * FROM department');
    return result.rows;
} catch (err) {
    console.error('Error fetching departments:', err);
}
};

const getAllRoles = async () => {
    try {
        const result = await pool.query('SELECT * FROM role');
        return result.rows;
    } catch (err) {
        console.error('Error fetching roles:', err);
    }
};

const getAllEmployees = async () => {
    try {
        const result = await pool.query('SELECT * FROM employee');
        return result.rows;
    } catch (err) {
        console.error('Error fetching employees:', err);
    }
};

module.exports = {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updatedEmployeeRole
};