import React, {useState, useEffect, useCallback,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {subsContext} from './index'
const Step01 = () => {

  const navigate = useNavigate();
  const {dispatch} = useContext(subsContext)
  let [myService,setMyService] = useState(undefined)

  const setService = useCallback((e) => {
    setMyService(e.target.innerText);
    dispatch({type:'OTT',value:e.target.innerText})
  },[myService]);
  return (
    <>
      <h2>Step.01</h2>
      <h3>신청할 OTT 서비스를 선택해주세요.</h3>
      <button onClick={setService}>Netflix</button>
      <button onClick={setService}>Youtube</button>
      <div>
      <button onClick={()=>{navigate(`/subs/${myService}/step02`)}} disabled={!myService}>Next</button>
      </div>
    </>
  )
}

export default Step01