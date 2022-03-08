import React from 'react';
import './App.css';
import {Home} from './containers/home/components/Home';

function App() {
  return (
    <div className="container-fluid" style={{backgroundColor: 'black'}}>
      <div className="row">
        <div className="container">
          {/*whole app goes down here */}
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
