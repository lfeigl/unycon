import React from 'react';
import { Container, Form } from 'react-bootstrap';
import './App.css';
import { Dimension, Metadata, System } from './types';
import FormGroup from './FormGroup';

const isChromeRuntime = !!(chrome && chrome.runtime);
const dimension = Dimension.mass;

function App(): React.ReactElement {
  const metadata: Metadata = {
    name: 'UnyCon ❓',
    version: '?',
    homepageUrl: '/',
  };

  if (isChromeRuntime) {
    const { name, version, homepage_url: homepageUrl } = chrome.runtime.getManifest();
    Object.assign(metadata, { name, version, homepageUrl });
  }

  return (
    <Container className="app py-2 text-center">
      <header>
        <h3 title={`v${metadata.version}`}>{metadata.name}</h3>
      </header>
      <main>
        <Form>
          <FormGroup
            dimension={dimension}
            initialSystem={System.metric}
          />
          <hr />
          <FormGroup
            dimension={dimension}
            initialSystem={System.imperial}
          />
        </Form>
      </main>
      <footer>
        <a
          className="App-link"
          href={metadata.homepageUrl}
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
