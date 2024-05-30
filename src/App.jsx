import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Lppools, Pool, Scan } from "./pages";
import Navbar from "./layout/Navbar";
import bgImage from "./assets/bgImage.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/swap" element={<Home />} />
          <Route path="/pool" element={<Pool />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/lppools" element={<Lppools />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
