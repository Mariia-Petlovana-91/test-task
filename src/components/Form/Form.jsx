import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import IntlTelInput from 'intl-tel-input/reactWithUtils';
import 'intl-tel-input/build/css/intlTelInput.css';

import { schemaValidationForm } from '../../utils/validation';

const getApi = (data, quiz = [{ name: 'karlos' }, { name: 'karlos' }]) => {
  const newData = { ...data, quiz: quiz };
  console.log(newData);
  return newData;
};

const Form = ({ quiz }) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidationForm),
  });

  const onSubmit = (data) => {
    getApi(data, quiz);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input {...register('name')} />
      {errors.name && <div className="error">{errors.name.message}</div>}

      <label>Email:</label>
      <input {...register('email')} />
      {errors.email && <div className="error">{errors.email.message}</div>}

      <label>Phone:</label>
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <IntlTelInput
            {...field}
            onChangeNumber={(value) => setValue('phone', value)}
            initOptions={{
              initialCountry: 'ua',
              separateDialCode: true,
            }}
            className="custom-phone-input"
          />
        )}
      />
      {errors.phone && <div className="error">{errors.phone.message}</div>}

      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
