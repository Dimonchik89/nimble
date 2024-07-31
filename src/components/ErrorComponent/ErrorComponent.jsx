import React from 'react';

const ErrorComponent = ({ status, stlye = '', showRefetch = false, refetch }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <p className={`w-full text-center ${stlye}`}>{`Error: ${status}! Try again later `}</p>
      {showRefetch && (
        <button
          className="mt-3 border-2 border-gray-800 px-2 rounded-md cursor-pointer hover:bg-gray-300 duration-200"
          onClick={refetch}
        >
          Refetch
        </button>
      )}
    </div>
  );
};

export default ErrorComponent;
