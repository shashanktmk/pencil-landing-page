import "./Hero.css";
export function HeroSection() {
  return (
    <div className="HeroSection">
      <div className="heading">The Journey of the ULTIMATE</div>
      <div className="tagline">Step in to Step Out ... </div>
      <img
        className="heroImage"
        src="https://via.placeholder.com/1500"
        width="2000px"
        height="430px"
        alt="Hero"
      ></img>
    </div>
  );
}
