import { Dimension, System } from '../types';

const unitsOfLength = [
  {
    id: 'l_m_mm',
    dimension: Dimension.length,
    system: System.metric,
    name: 'millimeters',
    abbr: 'mm',
  },
  {
    id: 'l_m_cm',
    dimension: Dimension.length,
    system: System.metric,
    name: 'centimeters',
    abbr: 'cm',
  },
  {
    id: 'l_m_m',
    dimension: Dimension.length,
    system: System.metric,
    name: 'meters',
    abbr: 'm',
  },
  {
    id: 'l_m_km',
    dimension: Dimension.length,
    system: System.metric,
    name: 'kilometers',
    abbr: 'km',
  },
  {
    id: 'l_i_in',
    dimension: Dimension.length,
    system: System.imperial,
    name: 'inches',
    abbr: '″ / in',
  },
  {
    id: 'l_i_ft',
    dimension: Dimension.length,
    system: System.imperial,
    name: 'feet',
    abbr: '′ / ft',
  },
  {
    id: 'l_i_yd',
    dimension: Dimension.length,
    system: System.imperial,
    name: 'yards',
    abbr: 'yd',
  },
  {
    id: 'l_i_mi',
    dimension: Dimension.length,
    system: System.imperial,
    name: 'miles',
    abbr: 'mi',
  },
];

export default unitsOfLength;
