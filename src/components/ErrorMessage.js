
import React from 'react';

function ErrorMessage({ message }) {
  return (
    <div className="text-center text-red-500 mt-4 p-4 bg-red-100 border border-red-200 rounded">
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
