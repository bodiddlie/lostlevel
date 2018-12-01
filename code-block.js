import React from 'react';

const CodeBlock = ({ children }) => (
  <span style={{ fontFamily: 'Menlo,monospace', color: '#f0f' }}>
    {children}
  </span>
);

export default CodeBlock;
