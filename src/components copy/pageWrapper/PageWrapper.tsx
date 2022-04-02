import React from 'react';
import {Navbar} from '../../containers/navbar/Navbar';
import {Search} from '../../containers/search/Search';

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const PageWrapper = ({children}: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Search />
    </>
  );
};
