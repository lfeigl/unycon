import { Unit, MassIds, Dimension, System } from '../types';

const unitsOfMass: Unit[] = [
  {
    id: MassIds.milligram,
    dimension: Dimension.mass,
    system: System.metric,
    name: 'Milligrams',
    abbr: 'mg',
  },
  {
    id: MassIds.gram,
    dimension: Dimension.mass,
    system: System.metric,
    name: 'Grams',
    abbr: 'g',
  },
  {
    id: MassIds.kilogram,
    dimension: Dimension.mass,
    system: System.metric,
    name: 'Kilograms',
    abbr: 'kg',
    isBaseUnit: true,
  },
  {
    id: MassIds.tonne,
    dimension: Dimension.mass,
    system: System.metric,
    name: 'Tonnes',
    abbr: 't',
  },
  {
    id: MassIds.ounce,
    dimension: Dimension.mass,
    system: System.imperial,
    name: 'Ounces',
    abbr: 'oz',
  },
  {
    id: MassIds.pound,
    dimension: Dimension.mass,
    system: System.imperial,
    name: 'Pounds',
    abbr: 'lb',
    isBaseUnit: true,
  },
  {
    id: MassIds.stone,
    dimension: Dimension.mass,
    system: System.imperial,
    name: 'Stones',
    abbr: 'st',
  },
];

export default unitsOfMass;
