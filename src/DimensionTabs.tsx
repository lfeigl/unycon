import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Dimension } from './types';

function DimensionTabs({
  setDimension,
}: {
  setDimension: (dimension: Dimension) => void;
}): React.ReactElement {
  const handleSelect = (eventKey: string | null): void => {
    if (!eventKey) return;
    const dimension = Object.values(Dimension)[Object.keys(Dimension).indexOf(eventKey)];
    setDimension(dimension);
  };

  return (
    <Tabs
      className="mb-2"
      variant="pills"
      justify
      onSelect={handleSelect}
    >
      {Object.entries(Dimension).map(([key, value]) => (
        <Tab
          key={key}
          eventKey={key}
          title={value}
        />
      ))}
    </Tabs>
  );
}

export default DimensionTabs;
