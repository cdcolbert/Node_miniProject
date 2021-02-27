const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where are you from?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'What is your favorite color?',
      name: 'color',
    },
    {
        type: 'input',
        message: 'What is your favorite food?',
        name: 'food',
      },
      {
        type: 'input',
        message: 'What is your LinkedIn profile?',
        name: 'LinkedIn',
      },
      {
        type: 'input',
        message: 'What is your GitHub profile?',
        name: 'GitProfile',
      },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );

//   const music = {
//     title: "The Less I Know The Better",
//     artist: "Tame Impala",
//     album: "Currents"
//   };
  
//   // write code between the <div> tags to output your objects data
//   const songSnippet = `
//     <div class="song">
//        <h2>${music.title}</h2>
//        <p class="artist">${music.artist}</p>
//        <p class="album">${music.album}</p>
//     </div>
//   `;
//   const element = document.getElementById("music");
//   element.innerHTML = songSnippet;