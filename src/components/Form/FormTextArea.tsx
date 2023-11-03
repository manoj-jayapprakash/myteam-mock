/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';

export type FormProps = {
  name: string;
  label: string;
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
  errorMsg: string;
};

function FormInput({ name, label, register, errorMsg }: FormProps) {
  return (
    <fieldset className="flex items-center justify-between">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...register(name)} />
    </fieldset>
  );
}

export default FormInput;
