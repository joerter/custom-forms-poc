import { FormGroup } from './models/form-models';

export const SimpleForm: FormGroup = {
  controls: [
    {
      name: 'plain-text-box',
      label: 'Plain Text Box',
      type: 'text',
    },
    {
      name: 'email-text-box',
      label: 'Email Text Box',
      type: 'email',
    },
    {
      name: 'single-select',
      label: 'Single select dropdown',
      type: 'select',
    },
    {
      name: 'boolean-field',
      label: 'Boolean Field',
      type: 'radio',
    },
    {
      name: 'file-field',
      label: 'File Field',
      type: 'file',
    },
  ],
};
