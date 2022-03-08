import React from 'react';
import { Main } from '../../home/components/main/Main';
import { Navbar } from '../../navbar/Navbar';
import { Search } from '../../search/Search';


export const Home = () => {
    return(
        <div className='row'>
            <Navbar />
            <Main />
            <Search />
          </div>
    )

}