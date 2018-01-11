import Select from 'react-select';

import { INPUT, SELECT } from 'constants/fields';
import wrap from 'components/unform/wrap';
import Input from 'components/fields/input';

export default wrap({
  [INPUT]: Input,
  [SELECT]: Select,
});
