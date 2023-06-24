import React from 'react';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();

  function onChange(e) {
    dispatch(setFilter(e.target.value));
  }

  return (
    <>
      <h4>Find contacts by name</h4>
      <input type="text" name="find" onChange={onChange} />
    </>
  );
}
