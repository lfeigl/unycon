import React from 'react';
import { Form, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import './FormGroup.css';
import { Dimension, System } from './types';
import units from './units';

function FormGroup({
  dimension,
  initialSystem,
}: {
  dimension: Dimension;
  initialSystem: System;
}): React.ReactElement {
  const [selectedUnit, setSelectedUnit] = React.useState(
    units.find((unit) => unit.dimension === dimension && unit.system === initialSystem)
  );

  const handleSelect = (eventKey: string | null): void => {
    if (eventKey) setSelectedUnit(units.find((unit) => unit.id === eventKey));
  };

  return (
    <Form.Group className="mb-2">
      <InputGroup size="sm">
        <Form.Control
          placeholder="Insert value"
          type="number"
        />
        <DropdownButton
          title={selectedUnit?.abbr}
          onSelect={handleSelect}
        >
          {Object.values(System).map((system) => (
            <React.Fragment key={`${system}-fragment`}>
              <Dropdown.Header
                key={`${system}-header`}
                className="py-1"
              >
                {system}
              </Dropdown.Header>
              {units
                .filter((unit) => unit.dimension === dimension && unit.system === system)
                .map((unit) => (
                  <Dropdown.Item
                    key={unit.id}
                    eventKey={unit.id}
                  >
                    <div className="unit-selection-item-name">
                      <span>{unit.name}</span>
                      <i>{unit.abbr}</i>
                    </div>
                  </Dropdown.Item>
                ))}
            </React.Fragment>
          ))}
        </DropdownButton>
      </InputGroup>
    </Form.Group>
  );
}

export default FormGroup;
