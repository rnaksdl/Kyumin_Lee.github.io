import React from 'react';
import './App.css';
// Import images
import image1 from './assets/IMG_9675.jpg';
import image2 from './assets/IMG_9772.jpg';

function App() {
  return (
    <div className="App">
      <header className="sticky-header">
        <h1>Kyumin Lee</h1>
      </header>
      <section className="section" id="section1" style={{ backgroundImage: `url(${image1})` }}>
        <div className="content">
          {/* Empty because name is in sticky header */}
        </div>
      </section>
      <section className="section" id="section2" style={{ backgroundImage: `url(${image2})` }}>
        <div className="content">
          <h1>CS Student at OU</h1>
        </div>
      </section>
      <section className="section" id="section3">
        <div className="content">
          <a href="https://github.com/rnaksdl" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </div>
      </section>
    </div>
  );
}

export default App;