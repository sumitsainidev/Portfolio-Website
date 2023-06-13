const socialMediaLinks = {
  github: "https://github.com/sumitsainidev/",
  linkedin: "https://www.linkedin.com/in/sumit-saini-90898b117/",
  gmail: "sumitsaini199711@gmail.com",
  resume:
    "https://drive.google.com/file/d/1NVoESbjhEFgILoi93_n2bVqZfVWop2S2/view?usp=sharing",
  display: true, // Set true to display this section, defaults to false
};

const home_p_section =
  "Passionate Full Stack Software Developer Experienced In Building Web Applications For A Leading Electronics Company And An Internationally Established Engineering Consultancy.";

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
      role: "Software Engineer",
      company: "Samsung Electronics",
      companyLink: "//www.samsung.com/",
      companylogo: "./Images/samsung_logo.png",
      date: "June 2019 – Nov 2020",
      desc:
        "Worked as a Backend developer in the Knox Service framework team, responsible for development and maintenance of Mobile Device Management (MDM) Solutions for Samsung Mobile’s B2B clients.",
      descBullets: [
        "Developed Node.js module for streaming byte array to server via Knox MDM remote control APIs, precomputing it with Java API and streaming to requested device.",
        "Developed Node.js module for storing network socket data from mobile devices to server, captured by Java API from netD module of the kernel.",
        "Developed Node.js module for storing and calculating billing amount of enterprise data usage in Dual-APN approach, accessed by IT admin.",
        "Technologies used: JavaScript, Typescript, Node.js, Express.js ,MySQL, RESTAPIs, Git, Perforce, Swagger"
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "J&F India Pvt. Ltd.",
      companyLink: "//www.jf.ag/",
      companylogo: "./Images/jf_logo.png",
      date: "Nov 2020 – Present",
      desc:
        "Currently working as a Full-Stack Developer, responsible for designing and implementing robust and scalable solutions for the company's website. I handle both front-end and back-end development",
      descBullets: [
        "AI-driven Data Summarization & Project Assistant module built using ChatGPT API for automating diverse data source summarization.",
        "Built custom Project Management System integrating Jira for efficient project tracking.",
        "Developed Activity & Notification System module for website activities (JIRA, file uploads, email updates).",
        "Technologies used:JavaScript, TypeScript, AngularJS, Node.js, Express.js, PostgreSQL, Neo4j,GraphQL, RESTAPIs, ChatGpt API, Amazon EC2, AWS Lambda, Amazon S3, AWS Cognitoauth, AWS Appsync, AWS Cloudfront(CDN), AWS KMS",
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
    name: "JavaScript",
    faClass: "fab fa-js",
  },
  {
    name: "TypeScript",
    faClass: "fab icon icon-typescript",
  },
  {
    name: "Python",
    faClass: "fab fa-python",
  },
  {
    name: "Angular",
    faClass: "fab fa-angular",
  },
  {
    name: "React JS",
    faClass: "fab fa-react",
  },
  {
    name: "Redux",
    faClass: "fab fa-battle-net",
  },

  {
    name: "Three JS",
    faClass: "fas fa-cubes",
  },
  {
    name: "Node JS",
    faClass: "fab fa-node",
  },
  {
    name: "Express JS",
    faClass: "fab icon icon-express",
  },
  {
    name: "PostgreSQL",
    faClass: "fab icon icon-postgres",
  },
  {
    name: "MySQL",
    faClass: "fab icon icon-mysql",
  },
  {
    name: "Neo4J",
    faClass: "fab icon icon-neo4j",
  },
  {
    name: "GraphQL",
    faClass: "fab icon icon-graphql",
  },
  {
    name: "ChatGPT API",
    faClass: "fab icon icon-chatgpt",
  },
  {
    name: "AWS",
    faClass: "fab fa-aws",
  },
  {
    name: "Netlify",
    faClass: "fab icon icon-netlify",
  },
  {
    name: "Heroku",
    faClass: "fas fa-h-square",
  },
  {
    name: "Swagger",
    faClass: "fab icon icon-swagger",
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
