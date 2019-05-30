import React,{lazy, Suspense} from 'react';
import './App.css';
const MainPage = lazy(()=>import('./MainPage'))

function App() {
  return (
    <div className="App">
      <div className="page-header">
        <div className="instruction"><h2>Scan the Barcode</h2></div> 
        <div className="helper-text">The number below is your OTP.</div> 

      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <MainPage/>
      </Suspense>
    </div>
  );
}

export default App;
