import React, { useState } from 'react';
import './Count.scss';
import PropTypes from 'prop-types';

const Count = (props) => {
  const [val, setVal] = useState(1);

  const onChangeHandler = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '') {
      setVal('');
    } else if (re.test(e.target.value)) {
      setVal(parseInt(e.target.value, 10));
    }
  };

  const onSubmit = () => {
    props.onSubmit(val === '' ? 1 : val);
    setVal(1);
  };

  return (
    <div className="count">
      <input className="form-control" type="text" value={val} onChange={(event) => onChangeHandler(event, val)} />
      <button className="btn-plus" type="button" onClick={() => onSubmit()}>+</button>
    </div>
  );
};

Count.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

Count.defaultProps = {};

export default Count;
