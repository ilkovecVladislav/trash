import React, { PureComponent } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { countries } from '../constants';
import '../App.css';
import { required, minLength, maxLength} from './validate';
import _ from 'lodash';
import FormHelperText from '@material-ui/core/FormHelperText';
import { connect } from 'react-redux';
import SimpleModal from './Modal';
import SimpleMap from './Map';
import LocationSearchInput from './AutoCComplete';
import MaterialForm from './MaterialForm';

const RenderRegistrationInput = ({
  input, label, meta: { touched, error }, helperText, ...custom 
}) => {
  return (
    <div>
      <label>{label}</label>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {' '}
      <Input 
        error={touched && !!error}
        {...input}
        {...custom}
      />
      {touched && (error && <span>{error}</span>)}
    </div>
  )
  
  

  };

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <div>
    <label>{label}</label>
    {' '}
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

class App extends PureComponent {
  render() {
    const { handleSubmit, pristine, submitting, countryValue } = this.props;
    const selectedCountryIndex = _.findIndex(countries, country => country.name === countryValue);
    const code = countries[selectedCountryIndex].code
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            component={RenderRegistrationInput}
            type="text"
            label="First Name"
            helperText='help'
            validate={[required, minLength, maxLength]}
          />
          {' '}
          <Field
            name="Country"
            label="Country"
            component={renderSelectField}
            validate={required}
            autoFocus
            
          >
            {countries.map(country =><MenuItem key={country.name} value={country.name}>{country.name}</MenuItem>)}
          </Field>
          {' '}
          <Field
            name="vat"
            component={RenderRegistrationInput}
            placeholder="VAT Number"
            type="text"
            label={code}
            
            validate={[required, minLength, maxLength]}
          />
          <Field
            name="test"
            component={RenderRegistrationInput}
            placeholder="Read OOnly"
            type="text"
            disabled
          />
          <Field
            name="price"
            component={RenderRegistrationInput}
            placeholder=" Number"
            type="number"
            inputProps={{min: 5, max: 125, step: 10}}
          />
          <Field
            name="mail"
            component={RenderRegistrationInput}
            placeholder="Mail"
            type="text"
            startAdornment={<i className="fas fa-envelope" />}
          />


          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </form>

        <SimpleModal />

        {' '}
        <div>
        <label>Pure</label>
        {' '}
        <Input
          placeholder="pure input"
          type="number"
          inputProps={{ min: 5, max: 125, step: 10 }}
          value={5}
            endAdornment={<i className="fab fa-adn" />}
          margin="none"
        />
        </div>
        <SimpleMap />
        <LocationSearchInput />
        <MaterialForm />
      </div>
    );
  }
}

const selector = formValueSelector('App')

const mapStateToProps = (state) => ({
  countryValue: selector(state, 'Country'),
});

App = connect(mapStateToProps)(App)


export default reduxForm({
  form:'App',
  initialValues: {
    firstName:'real talk',
    Country:'Afghanistan',
    test:'read only',
    price: 5
  }
})(App);
