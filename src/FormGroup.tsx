import React from 'react';
import { Form, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import './FormGroup.css';
import { Dimension, System, Unit } from './types';
import units from './units';

function FormGroup({
  dimension,
  initialSystem,
}: {
  dimension: Dimension;
  initialSystem: System;
}): React.ReactElement {
  const getFirstMatchingUnit = (_dimension: Dimension, _system: System): Unit => {
    const filtered = units.filter(
      (unit) => unit.dimension === _dimension && unit.system === _system
    );
    return filtered.find((unit) => unit.isBaseUnit) ?? filtered[0];
  };

  const [selectedUnit, setUnit] = React.useState<Unit>(
    getFirstMatchingUnit(dimension, initialSystem)
  );

  React.useEffect(() => {
    setUnit(getFirstMatchingUnit(dimension, initialSystem));
  }, [dimension]);

  const handleSelect = (eventKey: string | null): void => {
    if (!eventKey) return;
    setUnit(units.find((unit) => unit.id === eventKey) ?? units[0]);
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
