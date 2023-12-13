import React from 'react';

export const Home = () => {
  console.log('process: ', process.env.APP_ENV);
  return (
    <>
      <h1>home</h1>
      <div>env: {process.env.APP_ENV}</div>
    </>
  );
};
