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
