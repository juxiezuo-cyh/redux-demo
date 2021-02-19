import About from "./components/about2";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <header style={{display: 'flex'}}>
        <Home />
        <About />
      </header>
    </div>
  );
}

export default App;
