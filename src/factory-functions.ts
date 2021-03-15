import { Form, FormGroup, TextBox } from './form-models';
import { randomId } from './util';

export function createForm(): Form {
  return {
    columns: 1,
    rows: 1,
    groups: [],
    name: 'My Form',
  };
}

export function createFormGroup(i: number): FormGroup {
  return {
    controls: [],
    columns: 1,
    rows: 1,
    name: `My Form Group ${i}`,
  };
}

export function createTextBox(i: number): TextBox {
  return {
    id: randomId(),
    label: `My Text Box ${i}`,
    name: `my-text-box ${i}`,
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
