import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import About from "./pages/About/About.jsx";
import Techstack from "./pages/Techstack/Techstack.jsx";

function App() {
  return (
    <>
      <Layout></Layout>
      <div className="container">
        <About></About>
        <Techstack></Techstack>
      </div>
    </>
  );
}

export default App;
