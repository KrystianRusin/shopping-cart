import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="w-full p-0 m-0 font-plex-mono flex flex-col justify-between min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
