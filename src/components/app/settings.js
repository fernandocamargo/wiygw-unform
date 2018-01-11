import isPlainObject from 'lodash/isPlainObject';

import { INPUT, PASSWORD } from 'constants/fields';

export const validatePassword = (value = '') => {
  const password = String(value).trim();
  const { length } = password;

  return {
    length: {
      min: length >= 6,
      max: length <= 20,
    },
    chars: {
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /[\d]/.test(password),
      special: /[^A-Za-z0-9]/.test(password),
    },
  };
};

export const validateConfirmation = (value, { password }) =>
  value && value === password;

export const acceptance = report => {
  switch (true) {
    case isPlainObject(report):
      return;
    default:
      return !!isPlainObject;
  }
};

export default {
  fields: [
    {
      type: INPUT,
      name: 'name',
      label: 'Your name',
      defaultValue: 'Fernando Camargo',
      extra: {
        type: 'text',
      },
    },
    {
      type: PASSWORD,
      name: 'password',
      label: 'Your password',
      validation: validatePassword,
    },
    {
      type: INPUT,
      name: 'confirmation',
      label: 'Your password confirmation',
      extra: {
        type: 'password',
      },
      validation: validateConfirmation,
    },
  ],
  acceptance,
};
