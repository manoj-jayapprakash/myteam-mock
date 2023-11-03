import React from 'react';
import { useForm } from 'react-hook-form';
import Buttons from 'components/UI/Buttons';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from './FormInput';

export type FormSchema = {
  name: string;
  email: string;
  company: string;
  title: string;
  message: string;
};

function Form() {
  const schema: ZodType<FormSchema> = z.object({
    name: z.string().min(3).max(20),
    email: z.string().email(),
    company: z.string().min(3).max(15),
    title: z.string().min(3).max(30),
    message: z.string().min(3).max(200),
  });
  const { register, handleSubmit, formState } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  const formFields = [
    {
      type: 'text',
      name: 'name',
      label: 'Full Name',
      register,
      errorMsg: 'This field is required',
      error: formState.errors,
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email Address',
      register,
      errorMsg: 'This field is required',
      error: formState.errors,
    },
    {
      type: 'text',
      name: 'company',
      label: 'Company Name',
      register,
      errorMsg: 'This field is required',
      error: formState.errors,
    },
    {
      type: 'text',
      name: 'title',
      label: 'Title',
      register,
      errorMsg: 'This field is required',
      error: formState.errors,
    },
    {
      type: 'textarea',
      name: 'message',
      label: 'Message',
      register,
      errorMsg: 'This field is required',
      error: formState.errors,
    },
  ];

  const submitHandler = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <div className="p-4 md:w-1/2 md:mx-auto">
      <form className="grid gap-8" onSubmit={handleSubmit(submitHandler)}>
        {formFields.map((formField) => (
          <FormInput
            key={formField.name}
            type={formField.type}
            label={formField.label}
            name={formField.name}
            register={formField.register}
            errorMsg={formField.errorMsg}
            errors={formField.error}
          />
        ))}
        <Buttons
          model="secondary"
          mode="light"
          text="submit"
          className="mx-auto"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Form;
