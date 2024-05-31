import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Lppools, Pool, Scan } from "./pages";
import Navbar from "./layout/Navbar";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const getRandomNumber = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const generateStars = () => {
      const newStars = [];
      const numStars = 20; // Number of stars

      for (let i = 0; i < numStars; i++) {
        const star = {
          top: `${getRandomNumber(0, 100)}%`,
          left: `${getRandomNumber(0, 100)}%`,
        };
        newStars.push(star);
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500 via-purple-600 to-indigo-700">
      <div>
        <section className="animation-section">
        <span className="animation-span"></span>
            <span className="animation-span"></span>
            <span className="animation-span"></span>
            <span className="animation-span"></span>
            <span className="animation-span"></span>
            <span className="animation-span"></span>
            <span className="animation-span"></span>
            <span className="animation-span"></span>
            <span className="animation-span"></span>
            <span className="animation-span"></span>
          {stars.map((star, index) => (
            <span
              key={index}
              className="blinking-star"
              style={{ top: star.top, left: star.left }}
            ></span>
          ))}
        </section>
      </div>
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
