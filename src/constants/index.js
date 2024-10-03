import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React, as well as back-end technologies like Java, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Java, Node.js, MySQL, and MongoDB. My journey in development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
  {
    year: '2023-Present',
    degree: 'Master of Computer Applications',
    college: 'NMIMS University',
    cgpaOrPercentage: '3.3/4 CGPA',
  },
  {
    year: '2019-2022',
    degree: 'Bachelors in Information technology',
    college: 'MKS College',
    cgpaOrPercentage: '83%',
  },
  {
    year: '2017-2029',
    degree: 'HSC',
    college: 'AAV Patel Jr College',
    cgpaOrPercentage: '64%',
  },
];

export const PROJECTS = [
  {
    title: "File Hider",
    image: project1,
    description:
      "It is a Java-based application that provides secure data-hiding functionalities. It allows users to hide sensitive information within files using advanced encryption techniques.",
    technologies: ["Java", "MySQL"],
    link: "https://github.com/tejaspanchall/File-Hider",
  },
  {
    title: "TextUtils",
    image: project2,
    description:
      "TextUtils is a word counter and a character counting utility which can be used to manipulate your text in the way you want.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link: "https://github.com/tejaspanchall/TextUtils-React",
  },
  {
    title: "Code Resources",
    image: project3,
    description:
      "This projects contains a curated list of useful resources for web developers, ranging from tutorials and tools to enhance your web development skills. ",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/tejaspanchall/Code-Resources",
  },
];

export const CONTACT = {
  email: "tejaspanchal127@gmail.com",
};