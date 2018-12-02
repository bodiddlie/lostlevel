import React from 'react';

import { UserContext } from './context-hoc';

export class NeedsUser extends React.Component {
  static contextType = UserContext;

  componentDidMount() {
    const user = this.context;
    api.makeCallWithUser(user).then(() => {
      //do stuff
    });
  }

  render() {
    const user = this.context;
    return <div>Hello {user.name}</div>;
  }
}
