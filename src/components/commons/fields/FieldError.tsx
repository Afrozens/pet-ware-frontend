'use client';

import React from 'react';

const FieldError = ({ error }: { error?: string }) => {
  return (
    <>
      {error ? (
        <p className="ml-1 mt-1 animate-fade self-start text-xs text-red-500 ">{error}</p>
      ) : null}
    </>
  );
};

export default FieldError;
