import React from 'react';
import './App.css';

function App() {
  const { name, version, homepage_url: homepageUrl } = chrome.runtime.getManifest();

  return (
    <div className="App">
      <header className="App-header">
        <h1 title={`v${version}`}>{name}</h1>
        <p>
          <a
            className="App-link"
            href={homepageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
