const projects = [
  {
      title: 'Glitch',
      projectURL: 'http://glitch.patriccampbell.com/#/',
      image: 'https://res.cloudinary.com/drhyh4h0r/image/upload/v1504876423/glitch_fu60zv.png',
      githubURL: 'https://github.com/PatricCampbell/Glitch',
      description: 'Glitch is a real time chatting web application built using PostgresSQL as its database, Ruby on Rails as the backend, and React with Redux on the frontend. Glitch is inspired by Slack and allows users to chat in public channels as well as two person and multi-person direct messages.'
  },
  {
    title: 'Kilobyte',
    projectURL: 'https://patriccampbell.github.io/Kilobyte/',
    image: 'https://res.cloudinary.com/drhyh4h0r/image/upload/v1504876285/kilobyte_gkafea.png',
    githubURL: 'https://github.com/patriccampbell/kilobyte',
    description: 'Kilobyte is a browser game based off of 1024. It is written in vanilla JavaScript and uses the Animate.css CSS library for its animations.'
  },
  {
    title: 'YelpCamp',
    projectURL: 'https://limitless-ravine-76629.herokuapp.com/',
    image: 'https://res.cloudinary.com/drhyh4h0r/image/upload/v1492695251/yelpcamp_enqrbw.png',
    githubURL: 'https://github.com/PatricCampbell/yelpcamp',
    description: 'YelpCamp is a full stack web application inspired by Yelp. The backend is written in NodeJS with ExpressJS and a MongoDB database. It utilizies RESTful principles for its API and the frontend uses pug templates.'
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
