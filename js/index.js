// this area is to create a footer to insert into our DOM
const footer = document.createElement("footer") // create variable to hold footer element
const body = document.querySelector("body") // create variable to store selected body element
body.appendChild(footer); // added node 

// area for actually adding text to footer 
const today = new Date(); // variable stores/creates date object representing current date and time
const year = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerHTML = ` <span>&copy; ${year} Helen Abera</span>`; // used temp literal to add in variables to create footer text back into HTML doc 
footer.appendChild(copyright); 

// area to add skiils items in section
const mySkills = ["JavaScript", "React", "Scratch", "Airtable"];
const skillsArea = document.getElementById("Skills");
const skillsList = skillsArea.querySelector("ul");

// using for loop to iterate over skills array 
for (let skill of mySkills){
    let skillLi = document.createElement("li");
    skillLi.innerHTML = skill; // adding text to DOM
    skillsList.appendChild(skillLi)
}
