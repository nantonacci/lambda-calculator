import React from 'react';

const OperatorButton = props => {
  console.log('operatorButton: ', props);

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operatorButton">{props.operators}</button>
    </>
  );
};

export default OperatorButton;
