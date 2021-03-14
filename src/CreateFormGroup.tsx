import { FormGroup, createTextBox, FormControl } from './models/form-models';
import React from 'react';
import { partial } from './util';
import CreateFormControl from './CreateFormControl';

function CreateFormGroup({
  group,
  onGroupChange,
}: {
  group: FormGroup;
  onGroupChange: (fg: FormGroup) => void;
}) {
  function addFormControl() {
    onGroupChange({
      ...group,
      controls: [...group.controls, createTextBox()],
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

  const formControls = group.controls.map((fc, i) => {
    const handleControlChangeAtIndex = partial(handleControlChange, i);

    return (
      <CreateFormControl
        control={fc}
        onControlChange={handleControlChangeAtIndex}
        key={i}
      />
    );
  });

  return (
    <fieldset>
      <legend>Form Group</legend>
      {formControls}
      <button onClick={addFormControl}>Add Form Control</button>
    </fieldset>
  );
}

export default CreateFormGroup;
