# Command-Line-Employee-Database

## Overview

This project is a command-line employee management system designed to help businesses manage their departments, roles, and employees efficiently. It allows users to perform various operations like viewing, adding, and updating records within a PostgreSQL database, all from a user-friendly command-line interface (CLI).

## Description

The Employee Management System is built using Node.js and PostgreSQL. It provides a series of prompts via the command line to manage departments, roles, and employees within a company. The application interacts with a PostgreSQL database to retrieve and manipulate data, making it a robust solution for managing organizational structures.

## Changes Made

During the development of this project, several enhancements and adjustments were made:

Database Setup: Created and populated tables for departments, roles, and employees.
User Interface: Implemented a CLI using Inquirer.js to guide users through various management tasks.
Functionality: Added features to view, add, and update records in the database.
Error Handling: Improved error handling to ensure smooth user experience and data integrity.

## Mock-Up Comparison

The final application closely resembles the initial mock-up provided during the planning phase. The key functionalities such as viewing all departments, roles, and employees, as well as adding and updating records, were implemented as planned. The CLI interface is intuitive, and the application's performance is optimized for real-time data management.

## Installation

To set up the Employee Management System locally, follow these steps:

1. Clone the Repository:

git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system

2. Install Dependencies:

npm install

3. Set Up PostgreSQL Database:
- Ensure PostgreSQL is installed and running.
- Create a database named employee_tracker.
- Run the provided schema.sql and seeds.sql files to set up and populate the database:

psql -d employee_tracker -f schema.sql
psql -d employee_tracker -f seeds.sql

4. Configure the Database Connection:
- In 'db.js', update the connection details (user,password,host,etc.) to match your PostgreSQL configuration.

## Start the Application

To start the application:

1. Open your terminal and navigate to the project directory.
2. Run the following command:

node index.js

3. Follow the prompts in the CLI to manage departments, roles, and employees.

## How-to Video


## Technologies Used

- Node.js: JavaScript runtime for building the command-line application.
- Inquirer.js: Library for creating interactive command-line prompts.
- PostgreSQL: Relational database management system for storing and managing data.
- pg (node-postgres): Node.js client for interacting with PostgreSQL.

## Tests

Currently, there are no automated tests implemented for this project. However, manual testing was conducted to ensure the functionality of each feature. Future iterations may include unit tests and integration tests to enhance reliability.

## Future Improvements

Several improvements can be made to enhance the system's capabilities:

1. User Authentication: Implement role-based access control to restrict certain operations.
2. Search and Filter: Add search and filter functionality to quickly find specific departments, roles, or employees.
3. Automated Tests: Introduce unit and integration tests for better code coverage.
4. Web Interface: Develop a web-based interface to provide a more user-friendly experience.

## Conclusion

The Employee Management System is a versatile tool for managing organizational data through a command-line interface. It demonstrates the power of combining Node.js with PostgreSQL to create a dynamic, real-world application. With future enhancements, this system could be expanded to meet more complex business needs.