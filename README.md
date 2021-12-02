# INDRA Back End Configuration

## Schema Design
![schema](./images/schema_pic_indra.png)
>This Schema is how the database for INDRA currently works. Each table relates to each of the separate rules, so there are 10 different tables total.


## Data
For each of the 10 rule tables, the columns inputted into the table follows the following format:
* Constraint Name: This column contains the text of one of the questions asked on the rule card. This is the first column of the one row.
* Constraint Boolean Condition: This column contains the boolean condition that the program will compare the user input against.
* Constraint Integer Condition: This column contains the integer condition that the program will compare the user input against.
* User Input Boolean Condition: This column contains the boolean condition that the user inputs on the front end for a specific rule.
* User Input Integer Condition: This column contains the integer condition that the user inputs on the front end for a specific rule.
* Logic Group: This column contains the parent and child relationships between the commit rules and the terms of peer combinations. This field would not, normally, be subject to user input, and may require verification from weather subject matter experts before adjustment.

## Routes
* GET **/rules/${ruleList[i]}**: Retrieves all data related to specific rules that are called upon. For example, if a GET is requested at link /rules/lightning, the lightning data from the lightning table.

* PUT **/rules/${ruleList[i]}**: Allows you to input data into the user input boolean or integer condition section of the table. Also allows users to edit specific rules to ensure that the constraints being used to evaluate weather criteria are up to date with the latest standards.

## Testing
Tests were used to ensure routes were working and returning data when called.

## Installation
Fork and clone down git repository. npm install to install all packages required to run app backend.
Next create a database with relevant name:
1. If you are using Docker to store your data, prior to running backend, open Docker app and run the container in which you will be storing your data. Will be utilizing the Postgres image in this app. Steps to set up and run a postgres container:
    * docker pull postgres
    * docker run --name (name of container) -e POSTGRES_PASSWORD=(password) -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
        * if docker container is already created: docker run (container name)
    * docker exec -it (container name) /bin/bash, you are now in the shell of your container
    * psql -U postgres, running your image in your container
    * Now in your container you can CREATE DATABASE (database name) or \c into an already created database. To view tables when in a database: \d or to look at a specific table \dt (table name)
    * When done, ^C to escape out
 2. Make sure to configure knexfile.js with appropriate connection string with the following template: connection: '(image)://(image):(password)@localhost/(database name)'
 3. Once knex is configured and container has been started, npx knex migrate:latest and npx knex seed:run to populate database with character information
 4. npm start to bring your backend up so frontend can connect and retrieve data from it.


