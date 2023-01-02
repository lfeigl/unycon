import React from 'react';
import { Form, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import './FormGroup.css';
import { Dimension, System, Unit, ConversionObject } from '../types';
import units from '../units';

function FormGroup({
  id,
  dimension,
  initialSystem,
  conversionObject,
  triggerConversion,
}: {
  id: number;
  dimension: Dimension;
  initialSystem: System;
  conversionObject: ConversionObject;
  triggerConversion: (conversion: ConversionObject) => void;
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

  const convert = (): void => {
    if (!formControlRef.current || !conversionObject.unit || !conversionObject.unit.conversion)
      return;
    const conversion = conversionObject.unit.conversion[selectedUnit.id];

    if (conversionObject.formGroupId !== id && conversion) {
      const value =
        typeof conversion === 'number'
          ? conversionObject.value * conversion
          : conversion(conversionObject.value);
      formControlRef.current.value = conversionObject.value === 0 ? '' : String(value);

      console.log(
        '[CONVERTED]',
        conversionObject.value,
        conversionObject.unit.abbr,
        '→',
        value,
        selectedUnit.abbr
      );
    }
  };

  React.useEffect(() => setUnit(getFirstMatchingUnit(dimension, initialSystem)), [dimension]);
  React.useEffect(() => convert(), [conversionObject]);
  React.useEffect(
    () =>
      triggerConversion({
        formGroupId: id,
        value: Number(formControlRef.current?.value),
        unit: selectedUnit,
      }),
    [selectedUnit]
  );

  const handleFormControlChange = (changeEvent: React.ChangeEvent<HTMLInputElement>): void =>
    triggerConversion({
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
