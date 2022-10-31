import { Dimension, System } from '../types';

const unitsOfTemperature = [
  {
    id: 't_m_c',
    dimension: Dimension.temperature,
    system: System.metric,
    name: 'Celsius',
    abbr: '°C',
  },
  {
    id: 't_i_f',
    dimension: Dimension.temperature,
    system: System.imperial,
    name: 'Fahrenheit',
    abbr: '°F',
  },
];

export default unitsOfTemperature;