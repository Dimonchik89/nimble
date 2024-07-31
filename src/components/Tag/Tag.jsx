import React from 'react';

const Tag = ({ title }) => {
  return (
    <div className="px-3 py-0.5 bg-slate-400 rounded-md">
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default Tag;
