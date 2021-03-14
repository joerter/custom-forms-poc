export interface Form {
  groups: FormGroup[];
}

export interface FormGroup {
  controls: FormControl[];
}

export interface FormControl {
  name: string;
  label: string;
  type: FormControlType;
}

export type FormControlType = 'text' | 'email' | 'select' | 'radio' | 'file';

export function createFormGroup(): FormGroup {
  return {
    controls: [],
  };
}

export function createFormControl(): FormControl {
  return {
    label: 'New Form Control',
    name: 'new-form-control',
    type: 'text',
  };
}
