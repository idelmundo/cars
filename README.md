
   
  <p>
  <img src="https://media.giphy.com/media/PkjuJb3knlRiuhx9RO/giphy.gif"width="250"/></p>
  <hr>
  
  ## Table Of Contents
  |   |       | |
| ------------- |:-------------:| -----:|
| [E-mail](#email)| [Project Title](#Project-title)| [Description](#description)|
| [Installation](#installation)| [Usage](#usage)| [License](#license)|
| [Contribute](#contribute)| [Tests](#tests)| [Questions](#questions)|
  <hr>

  ## Email 
  idelmundo68@gmail.com
  <hr>
      
  ## Project title 
  cars list
  <hr>

  ## Description 
  In this project, we were asked to make a app that can be added and push to another list. So I decided to make a car list. Then use mysql workbench to test our app. We also need to setup our heroku/Jawdb and workbench that way when the user input a car from the list it can be saved to the db. The struggle for this project was keeping all the object name to be consitant. ```router.get("/", function(req, res) {
    car.selectAll(function(data) {
        var hbsObject = {
            cars: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});```
  <hr>

  ## Installation 
  Use the MySQL NPM package to connect to your MySQL database and perform queries.
  Use InquirerJs NPM package to interact with the user via the command-line.
  Use console.table to print MySQL rows to the console. There is a built-in version of console.table
  MYySQL workbench.
  here are the step to install these:
  npm i init
  npm i requirer 
  npm i mysql
  npm i express
  npm i express-handlebars
  npm i express
  You'll also need to utilize MYSQL Heroku deploymnet guide https://ucb.bootcampcontent.com/UCB-Coding-Bootcamp/ucb-ber-fsf-ft-06-2020-u-c/blob/master/course-content/13-MVC/student-resources/MySQLHeroku/MySQLHerokuDeploymentProcess.pdf 

  <hr>

  ## Usage 
  J's
  Mysql/workbench 
  Heroku 
  
  <hr>

  ## License 
  MIT
  <hr>

  ## Contribute
  Isaias Del Mundo 
  <hr>

  ## Tests 
 mysql workbench 
 node
 heroku 
  <hr>

  ## Questions 
  do you have any question contact me.
  <hr>

  ![license](https://img.shields.io/badge/license-MIT-orange.svg)
        