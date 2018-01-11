import React from 'react';

import Form from 'components/form';

import settings from './settings';

export default () => (
  <div>
    <h1>(un)Form</h1>
    <Form {...settings} />
  </div>
);
