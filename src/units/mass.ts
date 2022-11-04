import { Dimension, System, Unit } from '../types';

const unitsOfMass: Unit[] = [
  {
    id: 'm_m_mg',
    dimension: Dimension.mass,
    system: System.metric,
    name: 'Milligrams',
    abbr: 'mg',
  },
  {
    id: 'm_m_g',
    dimension: Dimension.mass,
    system: System.metric,
    name: 'Grams',
    abbr: 'g',
  },
  {
    id: 'm_m_kg',
    dimension: Dimension.mass,
    system: System.metric,
    name: 'Kilograms',
    abbr: 'kg',
    isBaseUnit: true,
  },
  {
    id: 'm_m_t',
    dimension: Dimension.mass,
    system: System.metric,
    name: 'Tonnes',
    abbr: 't',
  },
  {
    id: 'm_i_oz',
    dimension: Dimension.mass,
    system: System.imperial,
    name: 'Ounces',
    abbr: 'oz',
  },
  {
    id: 'm_i_lb',
    dimension: Dimension.mass,
    system: System.imperial,
    name: 'Pounds',
    abbr: 'lb',
    isBaseUnit: true,
  },
  {
    id: 'm_i_st',
    dimension: Dimension.mass,
    system: System.imperial,
    name: 'Stones',
    abbr: 'st',
  },
];

export default unitsOfMass;
