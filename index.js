const inquirer = require('inquirer');
const queries = require('./queries');

const mainMenu = async () => {
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Quit',
        ]
    });

    switch (answer.action) {
        case 'View all departments':
            const departments = await queries.getAllDepartments();
            console.table(departments);
            break;
        
        case 'View all roles':
            const roles = await queries.getAllRoles();
            console.table(roles);
            break;

        case 'View all employees':
            const employees = await queries.getAllEmployees();
            console.table(employees);
            break;
        
        case 'Add a department':
            await queries.addDepartment();
            break;

        case 'Add a role':
            await queries.addRole();
            break;
        
        case 'Add an employee':
            await queries.addEmployee();
            break;
        
        case 'Update an employee role':
            await queries.updateEmployeeRole();
            break;
        
        case 'Quit':
            process.exit();
            break;

        default:
            console.log('Invalid option selected');
    }

    mainMenu();
};

mainMenu();