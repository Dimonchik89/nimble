import React from 'react';

const Spinner = ({ style }) => {
  return (
    <div className="flex justify-center w-full">
      <div className={`loader ${style}`}></div>
    </div>
  );
};

export default Spinner;
