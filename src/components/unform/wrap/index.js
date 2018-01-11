import { compose, withProps } from 'recompose';

import Form from 'components/unform/form';

/*
export const test = (() => {
  var queue = ['a', 'b'];
  var iterator = queue[Symbol.iterator]();

  console.error(iterator.next());
  // queue.push('hueBR');
  console.error(iterator.next());
  // console.error(iterator.next());
  // console.error(iterator.next());
})();
*/

export const injectQueue = () => {
  // const queue = [];
  // const iterator = queue[Symbol.iterator]();

  return {
    queue: [],
  };
};

export default types => {
  return compose(withProps(injectQueue))(Form);
};
