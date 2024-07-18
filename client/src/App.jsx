import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import About from "./pages/About/About.jsx";
import Education from "./pages/Education/Education.jsx";
import Project from "./pages/Project/Project.jsx";
import Techstack from "./pages/Techstack/Techstack.jsx";

function App() {
  return (
    <>
      <Layout></Layout>
      <div className="container">
        <About></About>
        <Education></Education>
        <Techstack></Techstack>
        <Project></Project>
      </div>
    </>
  );
}

export default App;
