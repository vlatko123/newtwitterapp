import React from 'react';
import './App.css';
import { Home } from './containers/home/Home';

function App() {
  return (
    <div className="container-fluid" style={{backgroundColor: "black", height: "100vh"}}>
      <div className = "row">
        <div className='container' style={{height: "100vh"}}> 
        {/*whole app goes down here */}
          <Home />

        </div>
      </div>     
    </div>
  );
}

export default App;
