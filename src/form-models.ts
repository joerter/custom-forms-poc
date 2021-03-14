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
  id: string;
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
  formControlId: string;
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
