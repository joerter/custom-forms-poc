import React from 'react';
import { FormControl, FormControlType } from './models/form-models';

function CreateFormControl({
  control,
  onControlChange,
  formControls,
}: {
  control: FormControl;
  onControlChange: (c: FormControl) => void;
  formControls: FormControl[];
}) {
  const formControlOptions = formControls
    .filter((f) => f.id !== control.id)
    .map((f) => <option value={f.id}>{f.name}</option>);

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

      <p>Conditional Field</p>
      <label htmlFor="triggering-control">Triggering Control</label>
      <select
        name="triggering-control"
        id="triggering-control"
        value={control.conditional?.formControlId}
        onChange={(e) => {
          onControlChange({
            ...control,
            conditional: {
              value: '',
              formControlId: e.target.value,
            },
          });
        }}
      >
        <option>None</option>
        {formControlOptions}
      </select>
      <label htmlFor="triggering-value">Triggering Value</label>
      <input
        type="text"
        value={control.conditional?.value}
        onChange={(e) => {
          onControlChange({
            ...control,
            conditional: {
              value: e.target.value,
              formControlId: control.conditional?.formControlId,
            },
          });
        }}
      />
    </fieldset>
  );
}
export default CreateFormControl;
