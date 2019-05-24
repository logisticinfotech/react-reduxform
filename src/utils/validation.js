import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../Components/Example.scss';

export const required = (value) => {
  return value ? undefined : '*this field is required';
};

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined;



export const renderSelectField = ({ className, input, meta: { touched, error }, children }) => (
  <div>
    <div>
      <select className={className} {...input}>
        {children}
      </select>
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
  </div>
);

export const renderInputField = ({ input, valueKey, placeholder, className, defaultValue, type, meta: { touched, error, warning } }) => {
  return (
    <Fragment>
      {valueKey !== undefined ? (
        <input {...input} autoComplete="off" placeholder={placeholder} value={valueKey} defaultValue={defaultValue} className={className} type={type} />
      ) : (
          <input {...input} autoComplete="off" placeholder={placeholder} className={className} type={type} />
        )}

      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </Fragment>
  );
};

export const renderTextAreaField = ({ className, input, placeholder, meta: { touched, error, warning } }) => (
  <Fragment>
    <textarea {...input} className={className} placeholder={placeholder} />
    {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
  </Fragment>
);

export const confirmPassword = (value, allValues) => {
  return value !== allValues.new ? "Password don't match" : undefined;
};

export const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or more` : undefined);

export const minValue6 = minLength(6);

export const noSpace = value => (value && !/^[^\s]+(\s+[^\s]+)*$/.test(value) ? 'Not allow starting or ending of space' : undefined);

export const alphaNumeric = value => (value && !/^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/.test(value) ? 'Must be character include upper,lower and number' : undefined);


renderTextAreaField.defaultProps = {
  handleSubmit: () => { },
  pristine: () => { },
  reset: () => { },
  submitting: () => { },
};

renderTextAreaField.propTypes = {
  className: PropTypes.any,
  input: PropTypes.any,
  placeholder: PropTypes.any,
  meta: PropTypes.any,
};


renderInputField.defaultProps = {
  handleSubmit: () => { },
  pristine: () => { },
  reset: () => { },
  submitting: () => { },
};

renderInputField.propTypes = {
  className: PropTypes.any,
  input: PropTypes.any,
  valueKey: PropTypes.any,
  placeholder: PropTypes.any,
  defaultValue: PropTypes.any,
  type: PropTypes.any,
  meta: PropTypes.any
};

renderSelectField.defaultProps = {
  handleSubmit: () => { },
  pristine: () => { },
  reset: () => { },
  submitting: () => { },
};

renderSelectField.propTypes = {
  className: PropTypes.any,
  input: PropTypes.any,
  meta: PropTypes.any,
  children: PropTypes.any,
};