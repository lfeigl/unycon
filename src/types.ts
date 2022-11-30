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

export enum LengthIds {
  millimeter = 'l_m_mm',
  centimeter = 'l_m_cm',
  meter = 'l_m_m',
  kilometer = 'l_m_km',
  inch = 'l_i_in',
  foot = 'l_i_ft',
  yard = 'l_i_yd',
  mile = 'l_i_mi',
}

export enum MassIds {
  milligram = 'm_m_mg',
  gram = 'm_m_g',
  kilogram = 'm_m_kg',
  tonne = 'm_m_t',
  ounce = 'm_i_oz',
  pound = 'm_i_lb',
  stone = 'm_i_st',
}

export enum TemperatureIds {
  celsius = 't_m_c',
  fahrenheit = 't_i_f',
}

export type UnitId = LengthIds | MassIds | TemperatureIds;

export type Unit = {
  id: UnitId;
  dimension: Dimension;
  system: System;
  name: string;
  abbr: string;
  isBaseUnit?: boolean;
  conversion?: {
    [key in UnitId]?: number | ((value: number) => number);
  };
};

export type ConversionObject = {
  formGroupId: number;
  value: number;
  unit: Unit;
};
