import { Form, FormGroup, FormControl } from './form-models';
import React from 'react';
import CreateFormGroup from './CreateFormGroup';
import { partial } from './util';
import { createFormGroup } from './factory-functions';

function CreateForm({
  form,
  onFormChange,
  formControls,
}: {
  form: Form;
  onFormChange: (form: Form) => void;
  formControls: FormControl[];
}) {
  function addFormGroup() {
    onFormChange({
      ...form,
      groups: [...form.groups, createFormGroup()],
    });
  }

  function handleGroupChange(index: number, formGroup: FormGroup) {
    const groups = form.groups.map((g: FormGroup, i: number) =>
      i !== index ? g : formGroup
    );

    onFormChange({
      ...form,
      groups,
    });
  }

  const formGroups = form.groups.map((fg, i) => {
    const handleGroupChangeAtIndex = partial(handleGroupChange, i);

    return (
      <CreateFormGroup
        group={fg}
        onGroupChange={handleGroupChangeAtIndex}
        formControls={formControls}
        key={i}
      />
    );
  });

  return (
    <div>
      {formGroups}
      <button onClick={addFormGroup}>Add Form Group</button>
    </div>
  );
}

export default CreateForm;
