import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="/img/meAndGrogu.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section--description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            quas consectetur nulla laboriosam unde. Minus explicabo mollitia qui
            veniam? Porro blanditiis et labore illo saepe officia iusto sequi
            ducimus autem!
          </p>
          <p className="hero--section--description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            quas consectetur nulla laboriosam unde. Minus explicabo mollitia qui
          </p>
        </div>
      </div>
    </section>
  );
}
