import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import SimpleMap from './Map'
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import '../App.css';
import { required, minLength, maxLength} from './validate';

const RenderRegistrationInput = ({
  input, label, meta: { touched, error }, ...custom 
}) => {
  return (
    <div>
      <Input 
        error={touched && error}
        {...input}
        {...custom}
      />
      {touched && (error && <span>{error}</span>)}
    </div>
  )
  
  

  };

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <div>
    <Select
    
      error={touched && error}
      {...input}
      {...custom}
    >
      {children}
    </Select>
    {touched && (error && <span>{error}</span>)}
  </div>
  );

class App extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            component={RenderRegistrationInput}
            type="text"
            placeholder="First Name"
            validate={[required, minLength, maxLength]}
          />
          {' '}
          <Field
            name="favoriteColor"
            placeholder="First Name"
            component={renderSelectField}
            validate={required}
            
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={23}>23</MenuItem>
            <MenuItem value={444}>444</MenuItem>
          </Field>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
        <SimpleMap />
      </div>
    );
  }
}

export default reduxForm({
  form:'App',
  initialValues: {
    firstName:'real talk',
    favoriteColor:'123'
  }
})(App);
