import React from 'react';
import { Container, Form } from 'react-bootstrap';
import './App.css';
import { Metadata, Dimension, System, Conversion } from '../types';
import DimensionTabs from './DimensionTabs';
import FormGroup from './FormGroup';

function App(): React.ReactElement {
  const [selectedDimension, setDimension] = React.useState<Dimension>(Dimension.length);
  const [selectedConversion, setConversion] = React.useState<Conversion>({} as Conversion);
  const isChromeRuntime = !!(chrome && chrome.runtime);
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
        <DimensionTabs setDimension={setDimension} />
        <Form>
          <FormGroup
            id={0}
            dimension={selectedDimension}
            initialSystem={System.metric}
            conversion={selectedConversion}
            convert={setConversion}
          />
          <FormGroup
            id={1}
            dimension={selectedDimension}
            initialSystem={System.imperial}
            conversion={selectedConversion}
            convert={setConversion}
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
