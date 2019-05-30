import React,{lazy, Suspense} from 'react';
import './App.css';
const MainPage = lazy(()=>import('./MainPage'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <MainPage/>
      </Suspense>
    </div>
  );
}

export default App;
