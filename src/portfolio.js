const socialMediaLinks = {
  github: "https://github.com/sumitsaini199711/",
  linkedin: "https://www.linkedin.com/in/sumit-saini-90898b117/",
  gmail: "sumitsaini199711@gmail.com",
  display: true, // Set true to display this section, defaults to false
};

const home_p_section =
  "A Passionate Full Stack Software Developer Having An Experience Of Building Web Applications For A Leading Smartphone Company And A Germany Based Real Estate Startup.";

const contact = {
  pitch:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
  copyright: "Kaustubh Mishra",
  contactUrl: "",
};

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack Developer",
      company: "Samsung",
      companylogo: "./Images/samsung_logo.png",
      date: "June 2019 – Nov 2020",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "J&F",
      companylogo: "./Images/jf_logo.png",
      date: "Nov 2020 – Present",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Delhi Technological University",
      logo: "./Images/dtu_logo.png",
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      schoolName: "Kendriya Vidyalaya",
      logo: "./Images/kv_logo.png",
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
  ],
};

const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "ReactJs",
    faClass: "fab fa-react",
  },
  {
    name: "Redux",
    faClass: "fab fa-battle-net",
  },
  {
    name: "NodeJs",
    faClass: "fab fa-node",
  },
  {
    name: "Ruby",
    faClass: "fas fa-gem",
  },

  {
    name: "Rails",
    faClass: "fas fa-road",
  },

  {
    name: "ThreeJs",
    faClass: "fas fa-cubes",
  },

  {
    name: "Python",
    faClass: "fab fa-python",
  },
  {
    name: "MySQL",
    faClass: "fas fa-database",
  },
  {
    name: "PostgreSQL",
    faClass: "fas fa-server",
  },
  {
    name: "AWS",
    faClass: "fab fa-aws",
  },
  {
    name: "Heroku",
    faClass: "fas fa-h-square",
  },
  {
    name: "Firebase",
    faClass: "fas fa-fire",
  },
  {
    name: "Docker",
    faClass: "fab fa-docker",
  },
  {
    name: "NPM",
    faClass: "fab fa-npm",
  },

  {
    name: "Linux",
    faClass: "fab fa-linux",
  },
];

export {
  socialMediaLinks,
  workExperiences,
  educationInfo,
  skillsBar,
  contact,
  home_p_section,
};
