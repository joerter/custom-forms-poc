import React from 'react';
import { FormControl, FormControlType } from './models/form-models';
import { format } from 'path';

function CreateFormControl({
  control,
  onControlChange,
}: {
  control: FormControl;
  onControlChange: (c: FormControl) => void;
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Label"
        value={control.label}
        onChange={(e) => {
          onControlChange({
            ...control,
            label: e.target.value,
          });
        }}
      />
      <input
        type="text"
        placeholder="Name"
        value={control.name}
        onChange={(e) => {
          onControlChange({
            ...control,
            name: e.target.value,
          });
        }}
      />
      <select
        value={control.type}
        onChange={(e) => {
          onControlChange({
            ...control,
            type: e.target.value as FormControlType,
          });
        }}
      >
        <option value="text">Plain Text</option>
        <option value="email">Email</option>
        <option value="select">Dropdown</option>
        <option value="radio">Boolean</option>
        <option value="file">File</option>
      </select>
    </div>
  );
}

export default CreateFormControl;
