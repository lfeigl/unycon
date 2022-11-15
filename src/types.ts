export type Metadata = {
  name: string;
  version: string;
  homepageUrl: string;
};

export enum Dimension {
  length = 'Length',
  mass = 'Mass',
  temperature = 'Temperature',
}

export enum System {
  metric = 'Metric',
  imperial = 'Imperial',
}

export type Unit = {
  id: string;
  dimension: Dimension;
  system: System;
  name: string;
  abbr: string;
  isBaseUnit?: boolean;
};

export type Conversion = {
  formGroupId: number;
  value: number;
  unit: Unit;
};
