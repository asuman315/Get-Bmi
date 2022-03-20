import React from 'react';
import Genders from './genders';
import Results from './results';
// import Weight from './weight';
// import Height from './height';
import Age from './age';
import './index.css';

const Main = () => {
  return (
    <section className="app">
      <h1>BMI calculator</h1>
      <Genders />
      <Age />
    </section> 
  )
}

export default Main