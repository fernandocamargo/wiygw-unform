import React, { Fragment } from 'react';

import Input from 'components/fields/input';

export default props => (
  <Fragment>
    <blockquote>
      <h4>Rules:</h4>
      <ul>
        <li>Minimum 6 characters</li>
        <li>Maximum 20 characters</li>
        <li>At least one uppercase letter</li>
        <li>At least one lowercase letter</li>
        <li>At least one number</li>
        <li>At least one special character</li>
      </ul>
    </blockquote>
    <Input type="password" {...props} />
  </Fragment>
);
