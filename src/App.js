import "./App.css";
import { HeroSection } from "./components/Hero";
import { TextHighLightSection } from "./components/TextHighLightSection";
import { SideNav } from "./components/SideNav";

import { CommunityDescription } from "./components/CommunityDescription";
import { CommunityOwnerInfo } from "./components/CommunityOwnerInfo";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";

let categories = [
  {
    name: " JavaScRIPT COMMUNITY",
    members: "1K",
    type: "Open",
    heroImage: "https://via.placeholder.com/150",
    rating: 4,
    membersOnline: "200",
    lastPosted: "Yesterday",
  },
  {
    name: "Gammers Nation with JS",
    members: "40K",
    type: "Closed",
    heroImage: "https://via.placeholder.com/150",
    rating: 3,
    membersOnline: "30K",
    lastPosted: "Today",
  },
  {
    name: "ReactJS er's",
    members: "100K",
    type: "Open",
    heroImage: "https://via.placeholder.com/150",
    rating: 5,
    membersOnline: "50K",
    lastPosted: "A week ago",
  },
  {
    name: "at.js",
    members: "100",
    type: "Restricted",
    heroImage: "https://via.placeholder.com/150",
    rating: 5,
    membersOnline: "10",
    lastPosted: "A month ago",
  },
  {
    name: "three.js",
    members: "1B",
    type: "Restricted",
    heroImage: "https://via.placeholder.com/150",
    rating: 3.5,
    membersOnline: "700K",
    lastPosted: "Few weeks ago",
  },
  {
    name: "Angular",
    members: "100K",
    type: "Restricted",
    heroImage: "https://via.placeholder.com/150",
    rating: 5,
    membersOnline: "50K",
    lastPosted: "An hour ago",
  },
];
function renderCards(categories) {
  return categories.map((category) => {
    return (
      <div className="card link">
        <div className="content">
          <img src={category.heroImage} alt="Card" />
          <div className="name">{category.name}</div>
          <div className="rating" style={{ "--completed": category.rating }}>
            {category.description}
          </div>

          <div className="rating-bar">
            <div
              // style={{
              //   backgroundColor: "#ff0000",
              //   height: "30px",
              //   width: "calc(var(--completed) /5 * 100%)",
              // }}
              className="rating"
            >
              {category.rating + " / 5"}
            </div>
          </div>
          <div>
            {category.type + " Group with " + category.members + " Pencilers"}
          </div>
          <div>{"Active Pencilers -- " + category.membersOnline}</div>
          <div>{"Last posted - " + category.lastPosted}</div>
        </div>
      </div>
    );
  });
}
function App() {
  return (
    <div className="App">
      <SideNav></SideNav>
      <HeroSection></HeroSection>
      <TextHighLightSection></TextHighLightSection>
      <CommunityDescription></CommunityDescription>
      <CommunityOwnerInfo></CommunityOwnerInfo>
      <div className="card-component grid"> {renderCards(categories)}</div>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
    </div>
  );
}

export default App;
