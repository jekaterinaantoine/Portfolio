const Projects = () => {
  return (
    <section className="project__main" id="projects">
      <h1 className="project__heading--prim">Projects</h1>
      <h2 className="project__heading--sec">
        A selection of the things I have built — each one a step forward in
        craft and code
      </h2>

      {/* Project 1 - Website */}
      <div className="project__container">
        <div className="project__image--wrap">
          <a
            href="https://mood-based-store-project.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project__image"
              src="/images/ease.png"
              alt="Ease mood-based store screenshot"
            />
          </a>
        </div>
        <div className="project__content">
          <h3 className="project__content--heading">Ease — Mood-Based Store</h3>
          <p className="project__main--text--para">
            Ease is a mood-based e-commerce web app built as a portfolio
            project. It lets users explore and shop products based on how they
            feel — creating a shopping experience that is personal, intuitive,
            and emotionally driven.
          </p>
          <div className="skills" style={{ marginBottom: "2rem" }}>
            <img className="skills__skill" src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" alt="React" />
            <img className="skills__skill" src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" alt="Node.js" />
            <img className="skills__skill" src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white" alt="Express.js" />
            <img className="skills__skill" src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" alt="MongoDB" />
          </div>
          <a
            href="https://mood-based-store-project.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Project 2 - Mobile App */}
      <div className="project__container">
        <div className="project__image--wrap project__image--mobile">
          <a href="YOUR_APP_LINK" target="_blank" rel="noopener noreferrer">
            <img
              className="project__image project__image--app"
              src="/images/energyflow.png"
              alt="EnergyFlow mobile app screenshot"
            />
          </a>
        </div>
        <div className="project__content">
          <h3 className="project__content--heading">EnergyFlow</h3>
          <p className="project__main--text--para">
            A mobile app that helps you take control of your daily energy. Log
            your activities throughout the day, spot patterns, and discover what
            truly boosts or drains you — so you can build better habits, one day
            at a time.
          </p>
          <div className="skills" style={{ marginBottom: "2rem" }}>
            <img className="skills__skill" src="https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB" alt="React Native" />
            <img className="skills__skill" src="https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white" alt="Expo" />
          </div>
          <a
            href="YOUR_APP_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;