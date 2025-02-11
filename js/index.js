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


// Define GitHub username
const username = "helenw4"; // Replace with your GitHub username

// Create a GET request to fetch repositories
fetch(`https://api.github.com/users/${username}/repos`)
  .then((response) => {	 
    return response.text();
  })
  .then((repositories) => {		
	var repositories = JSON.parse(repositories);	
	
	console.log(repositories);
	
    // Select the container for displaying repositories
    const projectSection = document.getElementById("Projects");

	const projectList = document.querySelector(".projects-container ul");
		
	console.log(projectList);
	document.querySelector(".projects-container ul").innerText ="";

	for(let i=0; i < repositories.length; i++)
	{
		const project = document.createElement("li"); // Create a new list item
		project.innerText = repositories[i].name; // Set the text to the repository name
		projectList.appendChild(project); // Append the item to the project list
	}
    
  })
  .catch((error) => {
    console.error("Error fetching repositories:", error);
    document.querySelector(".projects-container ul").innerText =
      "Error loading repositories.";
  });

