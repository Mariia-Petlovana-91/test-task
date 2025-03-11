import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import IntlTelInput from 'intl-tel-input/reactWithUtils';
import 'intl-tel-input/build/css/intlTelInput.css';

import css from './Form.module.css';
import clsx from 'clsx';

import { schemaValidationForm } from '../../utils/validation';
import { postData } from '../../api/api';

const Form = ({ quizAnswer }) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidationForm),
  });

  const onSubmit = async (data) => {
    await postData(data, quizAnswer);
    window.location.reload();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={css.formLabel}>Name:</label>
      <input className={css.formInput} {...register('name')} />
      {errors.name && (
        <div className={css.formError}>{errors.name.message}</div>
      )}

      <label className={css.formLabel}>Email:</label>
      <input className={css.formInput} {...register('email')} />
      {errors.email && (
        <div className={css.formError}>{errors.email.message}</div>
      )}

      <label className={css.formLabel}>Phone:</label>
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <IntlTelInput
            {...field}
            useFullscreenPopup={false}
            onChangeNumber={(value) => setValue('phone', value)}
            initOptions={{
              initialCountry: 'ua',
              separateDialCode: true,
            }}
          />
        )}
      />
      {errors.phone && (
        <div className={css.formError}>{errors.phone.message}</div>
      )}

      <button className={clsx('btn', css.formBtn)} type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
