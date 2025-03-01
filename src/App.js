import Header from "./components/header/header";
import CircularGallery from "./components/howSection/image";
import How from "./components/howSection/how";
import Footer from "./components/footersection/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <Header />
      </div>
      <div className="how-container">
        <How />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
