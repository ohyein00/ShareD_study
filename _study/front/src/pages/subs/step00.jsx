import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Step01 = () => {
  useEffect(() => {
  })
  return (
    <>
      <h2>Step.0</h2>
      <h3>쉐어디 구독 신청하기</h3>
      <button><Link to="/subs/step01">START</Link></button>
    </>
  )
}


export default Step01