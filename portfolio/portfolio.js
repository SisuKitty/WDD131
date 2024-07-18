function toggleDropdown() {
    const dropdownContent = document.getElementById("myDropdown");
    dropdownContent.classList.toggle("show");
}

const projects = [
    {
        title: "LIBRARY IDENTITY",
        image: "./images/Branding_logos-01.png",
        alt: "los angeles library logo",
        details: "",
        client: "Los Angeles Central Library",
        disciplines: "Identity, Branding",
        tags: ["", ""],
        process: "./images/",
    },
    {
        title: "EVENT PLANNER LOGO",
        image: "./images/Branding_logos-02.png",
        alt: "on top planning logo",
        details: "",
        client: "On Top Planning",
        disciplines: "Branding",
        tags: ["", ""],
        process: "./images/",
    },    
    {
        title: "PRINT BRANDING",
        image: "./images/Identity_Graf.png",
        alt: "print examples",
        details: "",
        client: "Emily Graf",
        disciplines: "Identity, Branding, Print",
        tags: ["print", ""],
        process: "./images/",
    }    
]

//Displaying grid of projects
function projectTemplate(projects) {
	return `<figure class="project_container">
        <img src=${projects.image} alt="Project Img" class="project_img">
        <h2 class="overlay">${projects.title}</h2>
    </figure>`;
}

function renderGallery(projects) {
	// get the element we will output the projects into
    const output = document.querySelector(".gallery");
	// use the projectTemplate function to transform our project objects into project HTML strings
    let projectString = ``
    for (let i = 0; i < projects.length; i++) {
    projectString += projectTemplate(projects[i]);
    }
	// Set the HTML strings as the innerHTML of our output element.
    console.log(projectString);
    output.innerHTML = projectString;
}

//filter sections by tag in list
function filterList(selected) {
	const filtered = recipes.filter((projects) => projects.tags.find((item) => item.toLowerCase().includes(selected)));
	// sort by name
	const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
	return sorted
}

renderGallery(projects);


//MODAL POP-UP ON CLICK
function modalTemplate(projects) {
    return `<figure class="modal" id="modal">
    <div class="modal-content">
        <span class="close-button" id="close-button">&times;</span>
        <img id="modal-image" src="${projects.image}" alt="${projects.alt}">
        <div id="modal-title" src="${projects.title}"</div>
        <div id="modal-details">${projects.details}</div>
        <img id="modal-process" src="${projects.process}">
    </div>
    </figure>` ;
}

function showModal(event) {
    const index = event.target.dataset.index;
    const image = images[index];
    
    document.getElementById('modal-image').src = image.src;
    document.getElementById('modal-image').alt = image.alt;
    document.getElementById('modal-details').innerText = image.details;

    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// Function to hide the modal
function hideModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}