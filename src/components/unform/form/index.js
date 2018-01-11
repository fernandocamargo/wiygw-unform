import React, { Component } from 'react';

import { propTypes, defaultProps } from './props';

export default class extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  state = {};

  componentDidMount() {
    this.setInitialState();
  }

  setInitialState = () => {
    const { enqueue, getStatus, getFields } = this;

    enqueue(getStatus(), getFields());
  };

  getFields = () => {
    const { props: { fields }, enqueue } = this;
    const format = ({ name, defaultValue }) => () =>
      enqueue({ [name]: defaultValue }, queue);
    const queue = fields.map(format)[Symbol.iterator]();

    return queue;
  };

  enqueue = (change, queue) =>
    this.setState(this.update(change), queue.next().value);

  update = change => current => ({ ...current, ...change });

  getState = () => this.state || {};

  getStatus = () => {
    const {
      original = true,
      focused = false,
      debugging = false,
    } = this.getState();

    return {
      original,
      focused,
      debugging,
    };
  };

  render() {
    const { state } = this;

    return <pre>{JSON.stringify(state, null, 2)}</pre>;
  }
}
