import React from 'react';
import { MemoRender } from './stupid';

export default class Memo extends React.Component {
  state = {
    text: 'sample',
    count: 0,
    textToSend: 'sample',
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  render() {
    const { text, count } = this.state;

    return (
      <div>
        <div>
          <button type="button" onClick={this.decrement}>
            -
          </button>
          {count}
          <button type="button" onClick={this.increment}>
            +
          </button>
        </div>
        <div>
          <input
            type="text"
            value={text}
            onChange={({ target }) => this.setState({ text: target.value })}
          />
        </div>
        <MemoRender text={text} />
      </div>
    );
  }
}
