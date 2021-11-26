import React, {useState, useEffect, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

const Step01 = () => {

  const navigation = useNavigate();

  let [myService,setMyService] = useState(undefined)

  const setService = useCallback((e) => {
    setMyService(e.target.innerText);
  },[myService]);
  return (
    <>
      <h2>Step.01 - {myService}</h2>
      <h3>신청할 OTT 서비스를 선택해주세요.</h3>
      <button onClick={setService}>Netflix</button>
      <button>Youtube</button>
      <div>
      <button onClick={()=>{navigation(`/subs/${myService}/step02`)}} disabled={!myService}>Next</button>
      </div>
    </>
  )
}


export default Step01