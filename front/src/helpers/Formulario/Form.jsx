import React from 'react';

import { ErrorMessage, Field } from 'formik';

export const FormInput = ({ label, name, type, placeHolder, required }) => (
  <div className="form-group">
    <label htmlFor={name} className="form-label">
      {label}
    </label>
    <Field
      className="form-input"
      id={name}
      type={type}
      name={name}
      placeholder={placeHolder}
      
    />
  </div>
);

export const FormTextarea = ({ label, name, required, placeHolder }) => (
  <div className="form-group">
    <label htmlFor={name} className="form-label">
      {label}
    </label>
    <Field
      component="textarea"
      className="form-textarea"
      id={name}
      name={name}
      placeholder={placeHolder}
    />
  </div>
);

export const TextField = ({ name, placeholder, type }) => {
    return (
      <div className="form-group">
        <Field type={type} name={name} placeholder={placeholder} />
        <ErrorMessage className="mensaje" name={name} component="p" />
      </div>
    );
  };
  
