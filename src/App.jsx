import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Lppools, Pool, Scan } from "./pages";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <div className="bg-gradient-to-t from-violet-600 to-indigo-600">
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
