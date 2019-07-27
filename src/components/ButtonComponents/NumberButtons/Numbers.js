import React, { useState } from 'react';

//import any components needed
import NumberButton from './NumberButton.js';

//Import your array data to from the provided data file
import { numbers } from '../src/data.js';

const Numbers = () => {
  // STEP 2 - add the imported data to state

  const [numberState, setNumberState] = useState(numbers);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numbers.map(number => {
        return <NumberButton numbers={number} />;
      })}
    </div>
  );
};

export default Numbers;
