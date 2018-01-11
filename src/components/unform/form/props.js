import { arrayOf, shape } from 'prop-types';

import { propTypes as Field } from 'components/unform/field/props';
import { propTypes as Control } from 'components/unform/control/props';

export const propTypes = {
    fields: arrayOf(shape(Field).isRequired).isRequired,
    Controls: arrayOf(shape(Control).isRequired),
};

export const defaultProps = {
    fields: [],
    controls: [],
};

export default { propTypes, defaultProps };
