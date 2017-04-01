const projects = [
  // {
  //   'title': 'Random Quoter',
  //   'projectURL': 'https://patriccampbell.github.io/random-quote',
  //   'image': 'https://res.cloudinary.com/drhyh4h0r/image/upload/v1487016581/randomQuoter_eabpvg.png',
  //   'githubURL': 'https://github.com/PatricCampbell/random-quote',
  //   'description': 'Random Quoter app made for FreeCodeCamp.com certificate. It pulls from a random quote api and lets you tweet it or get a new quote.'
  // },
  {
    'title': 'Portfolio',
    'projectURL': 'http://patriccampbell.com/',
    'image': 'https://res.cloudinary.com/drhyh4h0r/image/upload/v1487106547/portfolio_pwapde.png',
    'githubURL': 'https://github.com/PatricCampbell/portfolio',
    'description': "You're looking right at it. This portfolio is made with vanilla javascript, html, and css."
  },
  {
    'title': 'User Registration Form',
    'projectURL': '',
    'image': 'https://res.cloudinary.com/drhyh4h0r/image/upload/v1487015456/OSP-User-Form_fweeqd.png',
    'githubURL': '',
    'description': 'User Registration form for the Cayuse system at NYU. It validates all information using vanilla javascript and then submits via PHP to a spreadsheet and SQL database for the user to then be added to Cayuse.'
  },
  {
    'title': 'Consent Form Generator',
    'projectURL': '',
    'image': 'https://res.cloudinary.com/drhyh4h0r/image/upload/v1487015456/OSP-Consent-Form-Generator-Page_msscrf.png',
    'githubURL': '',
    'description': 'Consent Form generator for new human subjects researchers at NYU. It asks questions to generate the form, allows the user to edit it in the browser before creating a word document for them to download. It is written in vanilla javascript and uses the docx.js library to create the word document.'
  }
];

const contacts = [
  {
    "name": "Email",
    "link": "mailto:patriccampbell@outlook.com",
    "icon": "envelope-o"
  },
  {
    "name": "Github Profile",
    "link": "https://github.com/PatricCampbell",
    "icon": "github"
  },
  {
    "name": "LinkedIn Profile",
    "link": "https://www.linkedin.com/in/patriccampbell",
    "icon": "linkedin"
  },
  {
    "name": "FreeCodeCamp Profile",
    "link": "https://www.freecodecamp.com/patriccampbell",
    "icon": "free-code-camp"
  }
];

populateProjects(projects);
populateContacts(contacts);

//TODO Change these to ` blocks
function populateProjects(projectArr) {
  var portfolio = document.querySelector(".portfolio");
  projectArr.forEach((project) => {
    if (project.githubURL !== "") {
      portfolio.innerHTML = portfolio.innerHTML + 
      '<div class="project"><h3>' + project.title + 
      '</h3><a href="' + project.projectURL + 
      '" target= _blank><img src="' + project.image +
      '"></a><a href="' + project.githubURL +
      '" target= _blank>See Code on Github</a>' +
      '<p>' + project.description +
      '</p></div>';
    }
    else {
      portfolio.innerHTML = portfolio.innerHTML + 
      '<div class="project"><h3>' + project.title + 
      '</h3><img src="' + project.image +
      '"></a><p>' + project.description +
      '</p></div>';   
    }
  });
}

//TODO Change these to ` blocks
function populateContacts(contactArr) {
  var contacts = document.querySelector(".contact_list");
  contactArr.forEach((contact) => {
    if (contact.name !== "Email") {
    contacts.innerHTML = contacts.innerHTML +
    '<div class="contact_link"><p><a href="' + contact.link +
    '" target=_blank><i class="fa fa-' + contact.icon +
    '" aria-hidden="true"</i> ' + contact.name +
    '</a></p></div>';
  }
  else {
    contacts.innerHTML = contacts.innerHTML +
    '<div class="contact_link"><p><a href="' + contact.link +
    '"><i class="fa fa-' + contact.icon +
    '" aria-hidden="true"</i> ' + contact.name +
    '</a></p></div>';
  }
  });
}