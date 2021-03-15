import { FormGroup, FormControl } from './form-models';
import React from 'react';
import { partial } from './util';
import CreateFormControl from './CreateFormControl';
import { createTextBox } from './factory-functions';

function CreateFormGroup({
  group,
  onGroupChange,
  formControls,
}: {
  group: FormGroup;
  onGroupChange: (fg: FormGroup) => void;
  formControls: FormControl[];
}) {
  function addFormControl() {
    onGroupChange({
      ...group,
      controls: [...group.controls, createTextBox(group.controls.length + 1)],
    });
  }

  function handleControlChange(index: number, changedFormControl: FormControl) {
    const controls = group.controls.map((c, i) =>
      i !== index ? c : changedFormControl
    );

    onGroupChange({
      ...group,
      controls,
    });
  }

  const createFormControls = group.controls.map((fc, i) => {
    const handleControlChangeAtIndex = partial(handleControlChange, i);

    return (
      <CreateFormControl
        control={fc}
        onControlChange={handleControlChangeAtIndex}
        formControls={formControls}
        key={i}
      />
    );
  });

  return (
    <fieldset>
      <legend>Form Group</legend>
      {createFormControls}
      <button onClick={addFormControl}>Add Form Control</button>
    </fieldset>
  );
}

export default CreateFormGroup;
