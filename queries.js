const inquirer = require('inquirer');
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

const addDepartment = async () => {
    const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter the department name:',
    });

    try {
        await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
        console.log('Department added successfully.');
    } catch (err) {
        console.error('Error adding department:', err);
    }
};

const addRole = async () => {
    const { title, salary, department_id } = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the role title:',
        },
        {
            type: 'number',
            name: 'salary',
            message: 'Enter the role salary:',
        },
        {
            type: 'number',
            name: 'department_id',
            message: 'Enter the department ID this role belongs to:',
        }
    ]);

    try {
        await pool.query(
            'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)',
            [title, salary, department_id]
        );
        console.log('Role added successfully.');
    } catch (err) {
        console.error('Error adding role:', err);
    }
};

const addEmployee = async () => {
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter the employee\'s first name:',
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter the employee\'s last name:',
        },
        {
            type: 'number',
            name: 'role_id',
            message: 'Enter the role ID for the employee:',
        },
        {
            type: 'number',
            name: 'manager_id',
            message: 'Enter the manager ID for the employee (leave blank if none):',
            default: null
        }
    ]);

    try {
        await pool.query(
            'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
            [first_name, last_name, role_id, manager_id]
        );
        console.log('Employee added successfully.');
    } catch (err) {
        console.error('Error adding employee:', err);
    }
};

const updateEmployeeRole = async () => {
    const employeesResult = await pool.query('SELECT id, first_name, last_name FROM employee');
    const rolesResult = await pool.query('SELECT id, title FROM role');

    const employees = employeesResult.rows.map(emp => ({
        name: `${emp.first_name} ${emp.last_name}`,
        value: emp.id
    }));

    const roles = rolesResult.rows.map(role => ({
        name: role.title,
        value: role.id
    }));

    const { employeeId, newRoleId } = await inquirer.prompt([
        {
            type: 'list',
            name: 'employeeId',
            message: 'Select an employee to update:',
            choices: employees
        },
        {
            type: 'list',
            name: 'newRoleId',
            message: 'Select the new role for this employee:',
            choices: roles
        }
    ]);

    try {
        await pool.query(
            'UPDATE employee SET role_id = $1 WHERE id = $2',
            [newRoleId, employeeId]
        );
        console.log('Employee role updated successfully.');
    } catch (err) {
        console.error('Error updating employee role:', err);
    }
};



module.exports = {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
};