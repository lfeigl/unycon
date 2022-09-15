import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  const { name, version, homepage_url: homepageUrl } = chrome.runtime.getManifest();

  return (
    <Container className="app py-2 text-center">
      <header>
        <h1 title={`v${version}`}>{name}</h1>
      </header>
      <footer>
        <a
          className="App-link"
          href={homepageUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute
        </a>
      </footer>
    </Container>
  );
}

export default App;
