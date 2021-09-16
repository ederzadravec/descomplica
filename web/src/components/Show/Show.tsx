import React from 'react';

interface IShowProps {
  show: boolean;
}

const Show: React.FC<IShowProps> = ({ show, children }) => {
  if (!show) return null;

  return <>{children}</>;
};

export default Show;
