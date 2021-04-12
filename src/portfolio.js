const socialMediaLinks = {
  github: "https://github.com/sumitsaini199711/",
  linkedin: "https://www.linkedin.com/in/sumit-saini-90898b117/",
  gmail: "sumitsaini199711@gmail.com",
  resume:
    "https://drive.google.com/file/d/1shdJC4Kja0yWMpY7Cub4Iu4vxLgFonfz/view?usp=sharing",
  display: true, // Set true to display this section, defaults to false
};

const home_p_section =
  "A Passionate Full Stack Software Developer Having An Experience Of Building Web Applications For A Leading Smartphone Company And A Germany Based Real Estate Startup.";

const about_p_section_1 =
  "👋 Hello I'm Sumit Saini, A dedicated and passionate Full stack developer who loves to design and code 👨🏼‍💻. I build high-quality applications for the web. I concentrate on writing clean and understandable code. I'm a graduate 👨‍🎓 in Electronics and Communication Engineering from ";
const about_p_section_2 =
  " I'm currently working 💻 as a Full Stack developer at ";
const about_p_section_3 =
  " I enjoy spending my free time exploring new tech stacks, and contributing my knowledge to open source community.";

const contact = {
  pitch:
    "My inbox is always open whether for a potential project or just to say Hi, I'll try my best to answer your email! Also, you can find me on Linkldn too.",
  copyright: "Sumit Saini",
  contactUrl: "",
};

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Samsung",
      companyLink: "//www.samsung.com/",
      companylogo: "./Images/samsung_logo.png",
      date: "June 2019 – Nov 2020",
      desc:
        "Worked with Knox Service framework team, responsible for development and maintenance of Backend APIs for Mobile Device Management Solutions for Samsung Mobile’s B2B clients.",
      descBullets: [
        "Created Remote Control MDM APIs (NodeJs, Express, AWS)",
        "Knox Secure Network (KSN) MDM APIs (NodeJs, Express, AWS)",
        "Enterprise Billing (E-Billing) (NodeJs, Express, AWS)",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "J&F",
      companyLink: "//www.jf.ag/",
      companylogo: "./Images/jf_logo.png",
      date: "Nov 2020 – Present",
      desc:
        "Currently working as a part of Research & Development team at J&F Projects (HQ. Frankfurt,Germany), responsible for generating a live rendering of assets on scale & quality for one of the product Buildtwin",
      descBullets: [
        "Created Node API for extraction of SVG Floorplan from 3d Model (ReactJs, NodeJs ,ThreeJs, Express, AWS)",
        "Created API for 360 image generation from 3d Model at Backend (NodeJs ,ThreeJs, Express, AWS)",
        "Created 360 Panaroma Viewer for Frontend (JavaScript, ReactJs, Three Js, Material UI)",
      ],
    },
  ],
};

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Delhi Technological University",
      logo: "./Images/dtu_logo.png",
      subHeader:
        "Bachelor of Technology in Electronics And Communication Engg.",
      duration: "May 2015 - May 2019",
      desc: "CGPA : 7.33/10",
    },
    {
      schoolName: "Kendriya Vidyalaya",
      logo: "./Images/kv_logo.png",
      subHeader: "High School Class-XII",
      duration: "April 2014 - April 2015",
      desc: "Percentage: 92/100",
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
  about_p_section_1,
  about_p_section_2,
  about_p_section_3,
};
