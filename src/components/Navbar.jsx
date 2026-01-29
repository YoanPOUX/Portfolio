import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <span>Yoan POUX--BORIES</span>

        <div className="nav-links">
          <Link to="/">Accueil</Link>
          <Link to="/projects">Projets</Link>
          <Link to="/skills">Compétences</Link>
        </div>

        <div className="nav-social">
          <a href="https://github.com/YoanPOUX" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0.5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.77 8.205 11.36.6.11.82-.26.82-.58 0-.29-.01-1.05-.015-2.06-3.338.73-4.042-1.61-4.042-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.74.082-.73.082-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.83 2.807 1.3 3.492.995.108-.77.418-1.3.76-1.6-2.665-.3-5.467-1.33-5.467-5.92 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.52.115-3.17 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.65.245 2.867.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.807 5.615-5.48 5.91.43.37.815 1.1.815 2.22 0 1.605-.015 2.9-.015 3.295 0 .32.21.695.825.575C20.565 22.265 24 17.785 24 12.5 24 5.87 18.63.5 12 .5z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/yoan-poux-bories/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.85-3.037-1.85 0-2.132 1.444-2.132 2.939v5.667h-3.554V9h3.413v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.368 4.267 5.452v6.289zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.071 0-1.145.926-2.073 2.07-2.073 1.146 0 2.073.928 2.073 2.073 0 1.143-.927 2.071-2.073 2.071zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.228.792 24 1.771 24h20.451C23.2 24 24 23.228 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
} 
