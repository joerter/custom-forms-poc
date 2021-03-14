import React, { useState } from 'react';
import './App.css';
import { Form, createForm, FormControl } from './models/form-models';
import CreateForm from './CreateForm';

function App() {
  const [form, setForm] = useState(createForm());
  const [formControls, setFormControls] = useState([] as FormControl[]);

  function handleFormChange(form: Form) {
    setForm(form);
    console.log(form);

    const formControls = form.groups.flatMap((g) => g.controls);
    setFormControls(formControls);
  }

  return (
    <div>
      <fieldset>
        <legend>New Form</legend>
        <CreateForm
          form={form}
          onFormChange={handleFormChange}
          formControls={formControls}
        />
      </fieldset>

      <pre>
        <code>{JSON.stringify(form, null, '  ')}</code>
      </pre>
    </div>
  );
}

export default App;
