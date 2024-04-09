import { animateScroll as scroll } from "react-scroll";
import ImageSlider from "./pages/Carousel";
import Diversity from "./pages/Diversity";
import Footer from "./pages/Footer";
import GlobalBusiness from "./pages/GlobalBusiness";
import Header from "./pages/Header";
import ReadMyStory from "./pages/ReadMyStory";
import SuccessCelebration from "./pages/SuccessCelebration";
import NavigationPage from "./pages/NavigationPage";
import ConnectingPeople from "./pages/ConnectingPeople";

function App() {
  const scrollToSection = (sectionName) => {
    scroll.scrollTo(sectionName, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div>
      <Header />
      <section className="relative lg:-mt-24 md:-mt-24">
        <ImageSlider />
      </section>

      <NavigationPage scrollToSection={scrollToSection} />

      <div id="we-stay-connected">
      <ConnectingPeople />

      </div>
      
      <div id="diversity">
        <Diversity />
      </div>
      <div id="success">
        <SuccessCelebration />
      </div>

      <ReadMyStory />
      <GlobalBusiness />
      <Footer />
    </div>
  );
}

export default App;
