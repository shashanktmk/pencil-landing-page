import logo from "./logo.svg";
import "./App.css";
import { HeroSection } from "./components/Hero";
let categories = [
  {
    name: " JavaScRIPT COMMUNITY",
    members: "",
    type: "",
    heroImage: "https://via.placeholder.com/150",
    rating: 4,
  },
  {
    name: "Gammers Nation",
    members: "",
    type: "",
    heroImage: "https://via.placeholder.com/150",
    rating: 3,
  },
  {
    name: "React COMMUNITY",
    members: "",
    type: "",
    heroImage: "https://via.placeholder.com/150",
    rating: 5,
  },
  {
    name: "",
    members: "",
    type: "",
    heroImage: "",
  },
];
function renderCards(categories) {
  return categories.map((category) => {
    return (
      <div className="card">
        <div className="content">
          <img src={category.heroImage} alt="Card" />
          <div className="name">{category.name}</div>
          <div className="rating" style={{ "--completed": category.rating }}>
            {category.description}

            <div className="rating-bar">
              <div
                style={{
                  backgroundColor: "#00ff00",
                  height: "30px",
                  width: "100%",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "#ff0000",
                  height: "30px",
                  width: "calc(var(--completed) /5 * 100%)",
                }}
              ></div>
              <div style={{ clear: "left" }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
function App() {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <div className="card-component grid"> {renderCards(categories)}</div>
    </div>
  );
}

export default App;
