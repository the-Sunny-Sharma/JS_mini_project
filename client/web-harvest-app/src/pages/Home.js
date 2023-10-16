import "../styles/home.css";
import Navbar from "../components/Navbar";
import HCards from "./HCards";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";

export default function Home() {
  return (
    <div className="wrapper" style={{ minHeight: '100vh' }}>
      <Navbar />
      <div className="main-home">
        {/* Your content here */}
        <div className="nav-section">
          <div className="search-section">
            <form>
              <div className="search-bar">
                <input type="text" placeholder="Search fresh. Eat Fresh." />
              </div>
              <div className="search-sym">
                <input className="search-sym" type="submit" aria-label="" />
              </div>
            </form>
          </div>
        </div>
        {/* <div className="caurosel-size">
        </div> */}
        <Slideshow />
        <HCards />
      </div>
      <Footer />
    </div>
  );
}
