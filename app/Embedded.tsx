import React from 'react';

const Embedded = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="bg-gray-100 p-3">
      {children}
    </div>
  );
};

export default Embedded;