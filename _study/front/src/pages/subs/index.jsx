import React, {useState, useEffect, useReducer, createContext, useMemo} from 'react';
import {Route, Routes, Outlet} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const subsContext = createContext({

  dispatch: () => {
  },
})
const subsData = {
  ottService: null,
  days: null,
  startDate: null,
  startTime: null,
  price: 0,
  payInfo: null,
  payState: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'OTT':
      return {
        ...state,
        ottService : action.value}
  }
}

const Subs = () => {
  const [state, dispatch] = useReducer(reducer, subsData);
  let valueMemo = useMemo(() => ({subsData: state, dispatch}), [state])
  return (
    <subsContext.Provider value={valueMemo}>
      <h2>subs</h2>
      <Outlet/>
      <p>안내문구</p>
    </subsContext.Provider>
  )
}


export default Subs