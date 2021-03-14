# Custom Forms Proof of Concept

This project shows a proof-of-concept of a data model that could be used to create a custom form builder.

## Demo

To try it out, you can either open the project in StackBlitz or clone the repo. This project was built using
React and `create-react-app`.

[Open in Stackblitz](https://stackblitz.com/github/joerter/custom-forms-poc)

or

After cloning the repo run the following commands:

```
npm install
npm start
```

## Data Model

All of the TypeScript interfaces used to create the data model can be found in `src/form-models.ts`. Functions uses to create objects based on these interfaces can be found in `src/factory-functions.ts`.

The hiearchy of these models is `Form` has many `FormGroup` has many `FormControl`. A `FormControl` can currently be a text box, email, single select dropdown, boolean, or file input.

### Form

The `Form` interface is meant to hold all of the data for a custom form. It has a configurable name and an array of `FormGroup`. It also extends a `GridLayout` interface that is meant to allow for users to define a custom layout for their form using CSS Grid under the covers.

### FormGroup

The `FormGroup` interface also extends the `GridLayout` interface to allow users to layout the `FormControl`s within the `FormGroup`. It also has a `name` property and array of `FormControl`. The `name` property could be used to show a subheading for the `FormGroup`.

### FormControl

The `FormControl` interface defines the common properties that the `TextBox`, `Email`, `Select` and `Radio` interfaces share.

- `id`: Used to uniquely identify a control. Currently, it is only used for setting conditional visibility.
- `name`: A human readable title for the control
- `label`: A label for the field to assist users
- `type`: The type of FormControl. Currently 'text' | 'email' | 'select' | 'radio' | 'file'
- `validation`: Stores information about how the control should be validated. Currently, required or not required is the only validation options, but this could be expanded on later to hold any desired validation requirements.
- `position`: Uses the `GridPosition` interface to position the `FormControl` using CSS Grid
- `microcopy` (optional): Any help text to assist users with how to complete this `FormControl`
- `conditional` (optional): Controls criteria for when this field should be visible. Currently the `Conditional` interface only allows for equal comparisons, but this could be expanded to greater than, less than, etc. More complicated scenarios could be added as well.
