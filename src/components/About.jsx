const About = () => {
  return (
    <section className="about__main" id="about">
      <h1 className="about__heading--prim">About me</h1>
      <h2 className="about__heading--sec">
        Here you will find the information about the person behind the code
      </h2>
      <div className="about__container">
        <div className="about__content--main">
          <h3 className="about__content--heading">Get to know me</h3>
          <div className="about__main--text">
            <p className="about__main--text--para">
              I am a junior developer based in Barcelona with a background that
              might surprise you.
            </p>
            <p className="about__main--text--para">
              I spent years in luxury hospitality, where every detail mattered
              and high standards were not optional. Along the way, I discovered
              web development - the logic, the structure, and the satisfaction
              of building something that works beautifully. So I started
              exploring it on my own, and when I realized I truly loved it, I
              went all in and joined a bootcamp.
            </p>
            <p className="about__main--text--para">
              It was not a leap into the unknown - it felt like finally finding
              the right fit. The care I once brought to every guest experience,
              I now bring to my code: clean interfaces, thoughtful structure,
              and experiences that just feel right.
            </p>
            <p className="about__main--text--para">
              I am fully committed to this path and eager to join a team where I
              can keep growing, contribute meaningfully, and take craft
              seriously.
            </p>
          </div>
        </div>

        <div className="about__content--skills">
          <h3 className="about__content--heading">What I work with</h3>
          <div className="skills">
            <img className="skills__skill" src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5" />
            <img className="skills__skill" src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3" />
            <img className="skills__skill" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript" />
            <img className="skills__skill" src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" alt="React" />
            <img className="skills__skill" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
            <img className="skills__skill" src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" alt="Node.js" />
            <img className="skills__skill" src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white" alt="Express.js" />
            <img className="skills__skill" src="https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB" alt="React Native" />
            <img className="skills__skill" src="https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white" alt="Expo" />
            <img className="skills__skill" src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" alt="MongoDB" />
            <img className="skills__skill" src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white" alt="Git" />
            <img className="skills__skill" src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;