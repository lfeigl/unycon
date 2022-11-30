import { Unit, TemperatureIds, Dimension, System } from '../types';

const unitsOfTemperature: Unit[] = [
  {
    id: TemperatureIds.celsius,
    dimension: Dimension.temperature,
    system: System.metric,
    name: 'Celsius',
    abbr: '°C',
    conversion: {
      [TemperatureIds.fahrenheit]: (value: number) => (value * 9) / 5 + 32,
    },
  },
  {
    id: TemperatureIds.fahrenheit,
    dimension: Dimension.temperature,
    system: System.imperial,
    name: 'Fahrenheit',
    abbr: '°F',
    conversion: {
      [TemperatureIds.celsius]: (value: number) => ((value - 32) * 5) / 9,
    },
  },
];

export default unitsOfTemperature;
