import React from 'react';

export function StupidRender(props) {
  const range = [...Array(10000).keys()];

  return (
    <ul>
      {range.map(n => (
        <StupidItem key={n}>{props.text}</StupidItem>
      ))}
    </ul>
  );
}

function StupidItem(props) {
  return <li>{props.children}</li>;
}

export const MemoRender = React.memo(StupidRender);
