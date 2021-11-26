import React, {useState, useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';

const Step02 = () => {
  let params = useParams()
  useEffect(() => {
  })
  return (
    <>
      <h2>Step.02 - {params.service}</h2>
      <h3>신청할 날짜와 시간을 선택해주세요</h3>
      <button><Link to="step02">Next</Link></button>
    </>
  )
}


export default Step02