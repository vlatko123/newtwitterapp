import React from 'react';
import {Navbar} from '../src/containers/navbar/Navbar';
import {Search} from '../src/containers/search/Search';
import {RoutesComponent} from './state/RoutesComponent';
import './App.css';

function App() {
  return (
    <div className="container-fluid" style={{backgroundColor: 'black'}}>
      <div className="row">
        <div className="container">
          {/*whole app goes down here */}
          <div className="row">
            <Navbar />
            <RoutesComponent />
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
