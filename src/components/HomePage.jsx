import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Chess Logo" />
        </div>
        <div className="auth-buttons">
          <button className="btn-signup">Registrarse</button>
          <button className="btn-login">Iniciar Sesión</button>
        </div>
      </header>

      <main>
        <h1>Juega Ajedrez Online en el Sitio #1!</h1>
        
        <div className="stats">
          <span className="games-today">{stats.gamesPlayed} Partidas Hoy</span>
          <span className="playing-now">{stats.playingNow} Jugando Ahora</span>
        </div>

        <div className="play-options">
          <button className="play-online-btn">
            <span className="icon">🎮</span>
            <div>
              <h2>Jugar Online</h2>
              <p>Juega con alguien de tu nivel</p>
            </div>
          </button>

          <button className="play-computer-btn">
            <span className="icon">💻</span>
            <div>
              <h2>Jugar contra la Computadora</h2>
              <p>Practica con bots personalizables</p>
            </div>
          </button>
        </div>

        <div className="puzzles-section">
          <h2>Resolver Puzzles de Ajedrez</h2>
          <div className="chess-board">
            {/* Aquí irá el componente del tablero de ajedrez */}
          </div>
          <button className="solve-puzzles-btn">Resolver Puzzles</button>
        </div>
      </main>
    </div>
  );
};

export default HomePage; 