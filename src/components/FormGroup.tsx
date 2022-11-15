import React from 'react';
import { Form, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import './FormGroup.css';
import { Dimension, System, Unit, Conversion } from '../types';
import units from '../units';

function FormGroup({
  id,
  dimension,
  initialSystem,
  conversion,
  convert,
}: {
  id: number;
  dimension: Dimension;
  initialSystem: System;
  convert: (conversion: Conversion) => void;
  conversion: Conversion;
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

  const formControlRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

  React.useEffect(() => setUnit(getFirstMatchingUnit(dimension, initialSystem)), [dimension]);
  React.useEffect(() => {
    if (conversion.formGroupId !== id && formControlRef.current) {
      const value = conversion.value * 2; // TODO: Add conversion logic
      formControlRef.current.value = conversion.value === 0 ? '' : String(value);
    }
  }, [conversion]);

  const handleFormControlChange = (changeEvent: React.ChangeEvent<HTMLInputElement>): void =>
    convert({
      formGroupId: id,
      value: Number(changeEvent.target.value),
      unit: selectedUnit,
    });

  const handleUnitSelect = (eventKey: string | null): void => {
    if (!eventKey) return;
    setUnit(units.find((unit) => unit.id === eventKey) ?? units[0]);
  };

  return (
    <Form.Group className="mb-2">
      <InputGroup size="sm">
        <Form.Control
          placeholder="Insert value"
          type="number"
          ref={formControlRef}
          onChange={handleFormControlChange}
        />
        <DropdownButton
          title={selectedUnit.abbr}
          onSelect={handleUnitSelect}
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
