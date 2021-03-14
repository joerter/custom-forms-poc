import React from 'react';
import { FormControl, FormControlType } from './models/form-models';

function CreateFormControl({
  control,
  onControlChange,
}: {
  control: FormControl;
  onControlChange: (c: FormControl) => void;
}) {
  return (
    <fieldset>
      <legend>{control.name}</legend>

      <label htmlFor="type">Type</label>
      <select
        id="type"
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

      <label htmlFor="name">Name</label>
      <input
        id="name"
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

      <label htmlFor="label">Label</label>
      <input
        id="label"
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
    </fieldset>
  );
}

export default CreateFormControl;
