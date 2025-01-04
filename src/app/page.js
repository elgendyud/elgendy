
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import Aboutme from "./component/Aboutme";
import Projects from "./component/Projects";
import Services from "./component/Service";
import ContactMe from "./component/ContactMe";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Aboutme />
    <Projects />
    <Services />
    <ContactMe />
    <Footer />
    </>
  );
}
