import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Pool, Scan, Swap } from "./pages";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/pool" element={<Pool />} />
          <Route path="/scan" element={<Scan />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
