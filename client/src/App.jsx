import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import MobileNav from "./components/MobileNav/MobileNav.jsx";
import { useTheme } from "./Contex/ThemeContex.jsx";
import About from "./pages/About/About.jsx";

import Education from "./pages/Education/Education.jsx";
import Project from "./pages/Project/Project.jsx";
import Techstack from "./pages/Techstack/Techstack.jsx";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [theme, setTheme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav></MobileNav>
        <Layout></Layout>
        <div className="container px-4 mx-auto">
          <About></About>
          <Education></Education>
          <Techstack></Techstack>
          <Project></Project>
        </div>
        <div className="footer pb-3">
          <h4 className="text-center"> Made By SohilVaghela © 2024</h4>
        </div>
      </div>
      <ScrollToTop smooth />
    </>
  );
}

export default App;
