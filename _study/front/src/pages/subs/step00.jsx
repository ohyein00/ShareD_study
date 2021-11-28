import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from 'react-bootstrap';
const Step01 = () => {
  const navigate = useNavigate

  useEffect(() => {
  })
  return (
    <>
      <h2>Step.0</h2>
      <h3>쉐어디 구독 신청하기</h3>
      <Button variant="primary">시작하기</Button>
    </>
  )
}


export default Step01