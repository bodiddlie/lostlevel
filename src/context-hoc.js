import React from 'react';

export const UserContext = React.createContext(null);

export function withUser(Component) {
  return props => (
    <UserContext.Consumer>
      {user => <Component user={user} {...props} />}
    </UserContext.Consumer>
  );
}
