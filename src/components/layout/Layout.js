import React from 'react';
import Footer from './Footer';
import Header from './Header';


const Layout = ({ children }) => {
  return (
    <>
      
      <main className="text-gray-900">{children}</main>
     
    </>
  );
};

export default Layout;
