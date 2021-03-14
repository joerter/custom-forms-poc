import React, { useState } from 'react';
import './App.css';
import { Form } from './models/form-models';
import CreateForm from './CreateForm';

const initialForm: Form = {
  groups: [],
};

function App() {
  const [form, setForm] = useState(initialForm);

  function handleFormChange(form: Form) {
    setForm(form);
    console.log(form);
  }

  return (
    <div>
      <CreateForm form={form} onFormChange={handleFormChange} />
      <pre>{JSON.stringify(form)}</pre>
    </div>
  );
}

export default App;
