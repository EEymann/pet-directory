//This file holds the program to read and display the pet data

//The variable named HTML holds a string of html that I'll build in a loop to render out the document, or website.

let html = '';

// To access each pet in the array of objects in pets.js, I need to loop through the array.

for ( let i = 0; i < pets.length; i++ ) {
  let pet = pets[i]; //Access the pet object and store it in a variable. The pet variable will be assigned to a new pet object each time the loop runs.
  html += `
    <h2>${pet.name}</h2>
    <h3>${pet.type} | ${pet.breed}</h3>
    <p>Age: ${pet.age}</p>
    <img src="${pet.photo}" alt="${pet.breed}">
  `;
}

// Use the insertAdjacentHTML method to display the directory on the webpage.

document.querySelector('main').insertAdjacentHTML('beforeend', html);
