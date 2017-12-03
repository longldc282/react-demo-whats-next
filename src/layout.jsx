import React from 'react';

const defaultLayout = ({ children }) => (
  <div className="App">
    <div className="App__header">
      <h2 className="text-center">What's Next</h2>
    </div>
    <div className="App__content">
      {children}
    </div>
  </div>
)

export default defaultLayout;
