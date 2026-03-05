const Contact = () => {
  return (
    <section className="contact__main" id="contact">
      <h1 className="contact__heading--prim">Contact</h1>
      <h2 className="contact__heading--sec">
        I am currently open to junior developer opportunities. Feel free to
        reach out - I would love to connect.
      </h2>
      <div className="contact__icons">
        <a
          href="mailto:jekaterinaantoine@gmail.com"
          className="contact__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white"
            alt="Email"
            className="contact__icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jekaterina-antoine-01634b106/"
          className="contact__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white"
            alt="LinkedIn"
            className="contact__icon"
          />
        </a>
        <a
          href="https://github.com/jekaterinaantoine"
          className="contact__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"
            alt="GitHub"
            className="contact__icon"
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;