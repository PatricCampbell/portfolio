const projects = [
  {
      title: 'Glitch',
      projectURL: 'http://glitch.patriccampbell.com/#/',
      image: 'https://res.cloudinary.com/drhyh4h0r/image/upload/v1504876423/glitch_fu60zv.png',
      githubURL: 'https://github.com/PatricCampbell/Glitch',
      description: 'Glitch is a real time chatting web application built using PostgresSQL as its database, Ruby on Rails as the backend, and React with Redux on the frontend. Glitch is inspired by Slack and allows users to chat in public channels as well as two person and multi-person direct messages.'
  },
  {
    title: 'YelpCamp',
    projectURL: 'https://limitless-ravine-76629.herokuapp.com/',
    image: 'https://res.cloudinary.com/drhyh4h0r/image/upload/v1492695251/yelpcamp_enqrbw.png',
    githubURL: 'https://github.com/PatricCampbell/yelpcamp',
    description: 'YelpCamp project made for the Udemy Complete Web Develper course. Backend is written in NodeJS with ExpressJS and a MongoDB database. This app uses RESTful principles for its API. Frontend uses pug templates.'
  },
  {
    title: 'User Registration Form',
    projectURL: '',
    image: 'https://res.cloudinary.com/drhyh4h0r/image/upload/v1487015456/OSP-User-Form_fweeqd.png',
    githubURL: '',
    description: 'User Registration form for the Cayuse system at NYU. It validates all information using vanilla javascript and then submits via PHP to a spreadsheet and SQL database for the user to then be added to Cayuse.'
  },
  {
    title: 'Consent Form Generator',
    projectURL: '',
    image: 'https://res.cloudinary.com/drhyh4h0r/image/upload/v1487015456/OSP-Consent-Form-Generator-Page_msscrf.png',
    githubURL: '',
    description: 'Consent Form generator for new human subjects researchers at NYU. It asks questions to generate the form, allows the user to edit it in the browser before creating a word document for them to download. It is written in vanilla javascript and uses the docx.js library to create the word document.'
  }
];

const contacts = [
  {
    name: "Email",
    link: "mailto:patriccampbell@outlook.com",
    icon: "envelope-o"
  },
  {
    name: "Github Profile",
    link: "https://github.com/PatricCampbell",
    icon: "github"
  },
  {
    name: "LinkedIn Profile",
    link: "https://www.linkedin.com/in/patriccampbell",
    icon: "linkedin"
  },
  {
    name: "Resume",
    link: "#resume",
    icon: "file-text-o"
  }
];

populateProjects(projects);
populateContacts(contacts);

function populateProjects(projectArr) {
  var portfolio = document.querySelector(".portfolio");
  projectArr.forEach((project) => {
    if (project.githubURL !== "") {
      portfolio.innerHTML = `
        ${portfolio.innerHTML}
        <div class='project'>
          <h3>${project.title}</h3>
          <a href=${project.projectURL} target=_blank>
            <img src=${project.image} />
          </a>
          <a href=${project.githubURL} target=_blank>See Code on Github</a>
          <p>${project.description}
        </div>
      `
    }
    else {
      portfolio.innerHTML = `
        ${portfolio.innerHTML}
        <div class='project'>
          <h3>${project.title}</h3>
          <img src=${project.image} />
          <p>${project.description}</p>
        </div>
      `
    }
  });
}

function populateContacts(contactArr) {
  var contacts = document.querySelector(".contact_list");
  contactArr.forEach((contact) => {
    contacts.innerHTML = `
      ${contacts.innerHTML}
      <div class='contact_link'>
        <p>
          <a href=${contact.link} target=_blank>
            <i class='fa fa-${contact.icon}' aria-hidden='true'></i>
            ${contact.name}
          </a>
        </p>
      </div>
    `
  });
}
