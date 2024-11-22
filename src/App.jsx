import { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [alternatingText, setAlternatingText] = useState("Team Builder");
  const texts = [
    "Team builder", "Product Manager",
    "Financial Planner", "Document Pro",
    "Product Designer", "Software Developer",
    "Cofounder Finder", "Investor Seeker",
    "Idea Validator", "Product Researcher"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAlternatingText(prev => {
        const currentIndex = texts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-container">
      <nav className="navbar glassmorphism">
        <h1 className="navbar-brand">Founder Zero</h1>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li>Team</li>
          <li>Control panel</li>
          <li>Docs</li>
          <li>Co-Founders</li>
          <li>Wallet</li>
        </ul>
      </nav>

      <header className="main-section glassmorphism">
        <div className="content">
          <h1 className="headline">Founding is challenging, but we've built this to make your journey exciting and rewarding</h1>
          <p className="description">
          Founder Zero combines the power of AI with human expertise to help you create, customize, and optimize your journey as a founder—whether it's your first venture or your tenth. Use our tools you bring your ideas to life with less risk and more joy.
           
          </p>
          <p className="sub-headline"><strong>Founder Zero is your </strong> <span className="highlight"><i>{alternatingText}</i></span></p>
          <div className="buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Discover your team</button>
          </div>
        </div>
        
        <div className="graphics">
          <div className="circle glassmorphism"></div>
          <div className="half-circle glassmorphism"></div>
        </div>
      </header>
    </div>
  );
}

export default App;