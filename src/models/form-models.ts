export interface GridLayout {
  columns: number;
  rows: number;
}

export interface Form extends GridLayout {
  name: string;
  groups: FormGroup[];
}

export interface FormGroup extends GridLayout {
  name: string;
  controls: FormControl[];
}

export interface FormControl {
  name: string;
  label: string;
  type: FormControlType;
  validation: Validation;
  position: GridPosition;

  microcopy?: string;
  conditional?: Conditional;
}

export interface Validation {
  isRequired: boolean;
  isRequiredMessage?: string;
}

export interface GridPosition {
  rowStart: number;
  rowEnd: number;
  columnStart: number;
  columnEnd: number;
}

export interface Conditional {
  formControlName: string;
  value: string;
}

export interface TextBox extends FormControl {}

export interface Email extends FormControl {}

export interface Select extends FormControl {
  options: string[];
}

export interface Radio extends FormControl {
  trueValue: string;
  falseValue: string;
}

export type FormControlType = 'text' | 'email' | 'select' | 'radio' | 'file';

export function createForm(): Form {
  return {
    columns: 1,
    rows: 1,
    groups: [],
    name: 'My Form',
  };
}

export function createFormGroup(): FormGroup {
  return {
    controls: [],
    columns: 1,
    rows: 1,
    name: 'My Form Group',
  };
}

export function createTextBox(): TextBox {
  return {
    label: 'My Text Box',
    name: 'my-text-box',
    type: 'text',
    position: {
      rowStart: 1,
      rowEnd: 1,
      columnStart: 1,
      columnEnd: 1,
    },
    validation: {
      isRequired: false,
    },
  };
}
