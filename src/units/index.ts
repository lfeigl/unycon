import { Unit } from '../types';
import unitsOfLength from './length';
import unitsOfMass from './mass';
import unitsOfTemperature from './temperature';

const units: Unit[] = [...unitsOfLength, ...unitsOfMass, ...unitsOfTemperature];

export default units;
