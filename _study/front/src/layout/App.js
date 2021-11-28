import React from 'react';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import Subs from "../pages/subs";
import Step00 from "../pages/subs/step00";
import Step01 from "../pages/subs/step01";
import Step02 from "../pages/subs/step02";
/*render={(props) => (<Login authState={false} {...props} />)*/
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="subs/*" element={<Subs/>}>
          <Route path="" element={<Step00/>}/>
          <Route path="step01" element={<Step01/>}/>
          <Route path="step02" element={<Step02/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;