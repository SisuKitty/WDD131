function toggleDropdown() {
    const dropdownContent = document.getElementById("myDropdown");
    dropdownContent.classList.toggle("show");
}

const projects = [
    {
        title: "LIBRARY IDENTITY",
        image: "./images/Branding_logos-01.png",
        alt: "los angeles library logo",
        preview: "./projects/MilkyWayMcKay_DSN.mp4",
        details: "Researched & strategized for branding to apply to Los Angeles Central Library. The library is a beautiful building filled with wonderful resources, so I built on it's values.",
        client: "Los Angeles Central Library",
        disciplines: "Identity, Branding",
        tags: ["identity&branding", ""],
        process: "./images/",
        displayModal: () => {
            html = modalTemplate(projects[0]);
            const output = document.querySelector(".modal-content");
            output.innerHTML = html;
            const exit = document.querySelector(".close-button");
            exit.addEventListener('click', closeModal);
            renderModal();
        },
    },
    {
        title: "EVENT PLANNER LOGO",
        image: "./images/Branding_logos-02.png",
        alt: "on top planning logo",
        preview: "./images/",
        details: "",
        client: "On Top Planning",
        disciplines: "Identity",
        tags: ["identity&branding", ""],
        process: "./images/",
        displayModal: () => {
            html = modalTemplate(projects[1]);
            const output = document.querySelector(".modal-content");
            output.innerHTML = html;
            const exit = document.querySelector(".close-button");
            exit.addEventListener('click', closeModal);
            renderModal();
        },
    },    
    {
        title: "PRINT BRANDING",
        image: "./images/Identity_Graf.png",
        alt: "print examples",
        preview: "./images/",
        details: "",
        client: "Emily Graf",
        disciplines: "Identity, Branding, Print",
        tags: ["", "identity&branding"],
        process: "./images/",
        displayModal: () => {
            html = modalTemplate(projects[2]);
            const output = document.querySelector(".modal-content");
            output.innerHTML = html;
            const exit = document.querySelector(".close-button");
            exit.addEventListener('click', closeModal);
            renderModal();
        },
    },
    {
        title: "SPACE EVENT POSTER",
        image: "./projects/Space-01.png",
        alt: "on top planning logo",
        preview: "./projects/MilkyWayMcKay_DSN.mp4",
        details: "",
        client: "On Top Planning",
        disciplines: "Branding",
        tags: ["advertisement", ""],
        process: "./images/",
        displayModal: () => {
            html = modalTemplate(projects[3]);
            const output = document.querySelector(".modal-content");
            output.innerHTML = html;
            const exit = document.querySelector(".close-button");
            exit.addEventListener('click', closeModal);
            renderModal();
        },
    }, 
    {
        title: "SPACE EVENT POSTER",
        image: "./projects/Space-01.png",
        alt: "on top planning logo",
        preview: "./projects/MilkyWayMcKay_DSN.mp4",
        details: "",
        client: "On Top Planning",
        disciplines: "Branding",
        tags: ["", ""],
        process: "./images/",
        displayModal: () => {
            html = modalTemplate(projects[4]);
            const output = document.querySelector(".modal-content");
            output.innerHTML = html;
            const exit = document.querySelector(".close-button");
            exit.addEventListener('click', closeModal);
            renderModal();
        },
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
function renderModal(projects) {
	// get the element we will output the projects into
    const output = document.querySelector(".modal");
	// use the projectTemplate function to transform our project objects into project HTML strings
    let projectString = ``
    for (let i = 0; i < projects.length; i++) {
    projectString += modalTemplate(projects[i]);
    }
	// Set the HTML strings as the innerHTML of our output element.
    console.log(projectString);
    output.innerHTML = projectString;
}

function modalTemplate(project) {
    return `<span class="close-button" id="close-button">&times;</span>
        <img id="modal-image" src="${project.preview}">
        <div id="modal-title">${project.title}</div>
        <div id="modal-details">${project.details}</div>
        <img id="modal-process" src="${project.process}">` ;
}

function renderModal() {
    modal = document.getElementById("modal");
    modal.classList.remove('hide');
}

function closeModal() {
    modal = document.getElementById("modal");
    modal.classList.add('hide');
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

const imageOpen = document.querySelectorAll(".project_img");

for (let i = 0; i <  imageOpen.length; i++) {
    imageOpen[i].addEventListener('click', projects[i].displayModal);
}

