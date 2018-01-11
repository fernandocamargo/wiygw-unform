import { string, node, func } from 'prop-types';

export const propTypes = {
  type: string.isRequired,
  name: string.isRequired,
  label: node,
  validation: func,
};

export const defaultProps = {};

export default { propTypes, defaultProps };
