import React from 'react';
import { Main } from './Main';
import { Navbar } from './Navbar';
import { Search } from './Search';


export const Home = () => {
    return(
        <div className='row'>
            <Navbar />
            <Main />
            <Search />
          </div>
    )

}