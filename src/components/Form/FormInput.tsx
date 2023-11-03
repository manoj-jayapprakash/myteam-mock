/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-props-no-spreading */
import Paragraph from 'components/UI/Paragraph';
import React, { ComponentProps } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormSchema } from './Form';

export type FormProps = {
  type: string;
  name: string;
  label: string;
  register: UseFormRegister<FormSchema>;
  errorMsg: string;
  errors: FieldErrors<FormSchema>;
} & ComponentProps<'input'>;

function FormInput({
  name,
  type,
  label,
  register,
  errors,
  errorMsg,
}: FormProps) {
  return (
    <fieldset>
      <div className="flex items-center justify-between">
        <label htmlFor={name}>{label}</label>
        <input type={type} id={name} {...register(name as keyof FormSchema)} className='rounded px-2 py-1.5 text-black' />
      </div>
      {errors[name as keyof FormSchema] && (
        <Paragraph className="w-fit ml-auto mr-1 text-sm xl:text-sm text-primary-coral italic">
          {errorMsg}
        </Paragraph>
      )}
    </fieldset>
  );
}

export default FormInput;
