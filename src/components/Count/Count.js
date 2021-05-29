import React, { useState } from 'react';
import './Count.scss';
// import PropTypes from 'prop-types';

const Count = () => {
  const [val, setVal] = useState(1);

  const onChangeHandler = (event) => {
    setVal(event.target.value);
  };

  function onSubmit() {
    console.log(val);
  }

  return (
    <div className="count">
      <input className="form-control" type="text" value={val} onChange={(event) => onChangeHandler(event, val)} />
      <button className="btn-plus" type="button" onClick={() => onSubmit()}>+</button>
    </div>
  );
};

Count.propTypes = {};

Count.defaultProps = {};

export default Count;
