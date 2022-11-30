import { Unit, LengthIds, Dimension, System } from '../types';

const unitsOfLength: Unit[] = [
  {
    id: LengthIds.millimeter,
    dimension: Dimension.length,
    system: System.metric,
    name: 'millimeters',
    abbr: 'mm',
    conversion: {
      [LengthIds.centimeter]: 1 / 10,
      [LengthIds.meter]: 1 / 1_000,
      [LengthIds.kilometer]: 1 / 1_000_000,
      [LengthIds.inch]: 1 / 25.4,
      [LengthIds.foot]: 1 / 304.8,
      [LengthIds.yard]: 1 / 914.4,
      [LengthIds.mile]: 1 / 1_609_300,
    },
  },
  {
    id: LengthIds.centimeter,
    dimension: Dimension.length,
    system: System.metric,
    name: 'centimeters',
    abbr: 'cm',
  },
  {
    id: LengthIds.meter,
    dimension: Dimension.length,
    system: System.metric,
    name: 'meters',
    abbr: 'm',
    isBaseUnit: true,
  },
  {
    id: LengthIds.kilometer,
    dimension: Dimension.length,
    system: System.metric,
    name: 'kilometers',
    abbr: 'km',
  },
  {
    id: LengthIds.inch,
    dimension: Dimension.length,
    system: System.imperial,
    name: 'inches',
    abbr: '″ / in',
  },
  {
    id: LengthIds.foot,
    dimension: Dimension.length,
    system: System.imperial,
    name: 'feet',
    abbr: '′ / ft',
  },
  {
    id: LengthIds.yard,
    dimension: Dimension.length,
    system: System.imperial,
    name: 'yards',
    abbr: 'yd',
    isBaseUnit: true,
  },
  {
    id: LengthIds.mile,
    dimension: Dimension.length,
    system: System.imperial,
    name: 'miles',
    abbr: 'mi',
  },
];

export default unitsOfLength;
