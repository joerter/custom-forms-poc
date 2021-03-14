import React, { useState } from 'react';
import './App.css';
import { Form, createForm } from './models/form-models';
import CreateForm from './CreateForm';

function App() {
  const [form, setForm] = useState(createForm());

  function handleFormChange(form: Form) {
    setForm(form);
    console.log(form);
  }

  return (
    <div>
      <fieldset>
        <legend>New Form</legend>
        <CreateForm form={form} onFormChange={handleFormChange} />
      </fieldset>

      <pre>
        <code>{JSON.stringify(form, null, '  ')}</code>
      </pre>
    </div>
  );
}

export default App;
