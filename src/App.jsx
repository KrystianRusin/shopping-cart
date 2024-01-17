import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="w-full p-0 m-0 font-plex-mono">
        <Navbar />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
