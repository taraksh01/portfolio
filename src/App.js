import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";

const App = () => {
  return (
    <div className="bg-black/95">
      <Header />
      <Home />
      <Projects />
    </div>
  );
};

export default App;