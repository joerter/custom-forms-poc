import { Form, FormGroup, createFormGroup } from './models/form-models';
import React from 'react';
import CreateFormGroup from './CreateFormGroup';
import { partial } from './util';

function CreateForm({
  form,
  onFormChange,
}: {
  form: Form;
  onFormChange: (form: Form) => void;
}) {
  function addFormGroup() {
    onFormChange({
      groups: [...form.groups, createFormGroup()],
    });
  }

  function handleGroupChange(index: number, formGroup: FormGroup) {
    const groups = form.groups.map((g: FormGroup, i: number) =>
      i !== index ? g : formGroup
    );

    onFormChange({
      groups,
    });
  }

  const formGroups = form.groups.map((fg, i) => {
    const handleGroupChangeAtIndex = partial(handleGroupChange, i);

    return (
      <CreateFormGroup
        group={fg}
        onGroupChange={handleGroupChangeAtIndex}
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
