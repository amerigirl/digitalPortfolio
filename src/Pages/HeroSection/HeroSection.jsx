import './HeroSection.css';

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Software Engineer </p>
          <h1 className="hero--section--title">
            <span>Hey, I'm Be-Asia</span>
            <br />
            McKerracher
          </h1>
          {/* <p className="hero--section-description">
            Welcome to my page! Please have a look around :) I'd love to chat
            <br></br>about how my skills can help  your team reach it's goals!
          </p> */}
        </div>
        <button className="btn btn-primary">Download CV</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/mePic.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
