import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Education from "./pages/Education/Education.jsx";
import Project from "./pages/Project/Project.jsx";
import Techstack from "./pages/Techstack/Techstack.jsx";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <Layout></Layout>
      <div className="container">
        <About></About>
        <Education></Education>
        <Techstack></Techstack>
        <Project></Project>
        <Contact></Contact>
      </div>
      <div className="footer mb-3"></div>
      <h4 className="text-center">Sohilvaghela © 2024</h4>
      <ScrollToTop smooth />
    </>
  );
}

export default App;
