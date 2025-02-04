import './HeroSection.css';

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Software Engineer </p>
          <h1 className="hero--section--title">
            <span>Hi, I'm Be-Asia!</span>
          </h1>
        </div>
        <br></br>
        <button className="btn btn-primary download--button">Download CV</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/mePic.jpg" alt="Hero Section" />
      </div>
    
    </section>
  );
}
