import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from "./assets/Logo.png";
import Logo2 from "./assets/UXDX.png"
import { Home, Pool, Scan } from "./pages";
import Navbar from "./layout/Navbar";

function getRandomPosition(maxWidth, maxHeight) {
  const x = Math.floor(Math.random() * maxWidth);
  const y = Math.floor(Math.random() * maxHeight);
  return { x, y };
}

function getRandomRotation() {
  return Math.floor(Math.random() * 31); 
}

function App() {
  const logos = [
    { src: Logo, name: "Logo 1" },
    { src: Logo2, name: "Logo 2" },
  ];

  const numInstances = 5; 

  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const updatePositions = () => {
      const newPositions = [];
      const occupiedPositions = [];
    
      const isOverlapping = (pos) => {
        return occupiedPositions.some(
          (occupiedPos) =>
            Math.abs(pos.x - occupiedPos.x) < 100 && Math.abs(pos.y - occupiedPos.y) < 100
        );
      };
    
      for (let i = 0; i < numInstances; i++) {
        logos.forEach(() => {
          let newPos;
          do {
            newPos = getRandomPosition(window.innerWidth - 100, window.innerHeight - 100);
          } while (isOverlapping(newPos));
          
          newPositions.push(newPos);
          occupiedPositions.push(newPos);
        });
      }
      setPositions(newPositions);
    };
    

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, [logos.length]);

  return (
    <Router>
      <div className="app-background">
          <Navbar />
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/swap" element={<Home />} />
            <Route path="/pool" element={<Pool />} />
            <Route path="/scan" element={<Scan />} />
          </Routes>
        </div>
        {positions.map((position, index) => {
          const logo = logos[index % logos.length];
          const rotation = getRandomRotation();
          return (
            <div
              className="logo"
              key={index}
              data-name={logo.name}
              style={{
                top: position.y,
                left: position.x,
                transform: `rotate(${rotation}deg)`,
              }}
            >
              {/* Display logo name on hover */}
              <div className="group relative">
                  <span className="logo-name absolute top-20 -m-2 text-white font-bold hidden group-hover:block">
                    {logo.name}
                  </span>
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="animate-bounce hover:cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>
    </Router>
  );
}

export default App;
