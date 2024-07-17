import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import About from "./pages/About/About.jsx";

function App() {
  return (
    <>
      <Layout></Layout>
      <div className="container">
        <About></About>
      </div>
    </>
  );
}

export default App;
