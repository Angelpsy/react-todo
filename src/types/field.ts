import {ID} from './common';

export enum FieldType {
  TEXT = 'text',
  AREA = 'text-area',
  NUMBER = 'number',
}

interface _FieldNewText {
  name: string;
  type: FieldType.TEXT;
  value: string;
}

interface _FieldNewArea {
  name: string;
  type: FieldType.AREA;
  value: string;
}

interface _FieldNewNumber {
  name: string;
  type: FieldType.NUMBER;
  value: number;
}

export type FieldNew = _FieldNewText | _FieldNewArea | _FieldNewNumber;

export type Field = FieldNew & {
  id: ID;
}
