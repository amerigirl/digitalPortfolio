export default function HeroSection() {
  return (
    <section id="hereSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Be-Asia </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet elit?
          </p>
        </div>
        <button className="btn btn-primary">Let's Chat!</button>
      </div>
      <div className="hero--section--image">
        <img src="./img/draftPic.jpg" alt="Hero Section"/>
      </div>
    </section>
  );
}
