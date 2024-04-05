import React, { Children } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <div>
            <NavBar/>
            {props.children}    
            <Footer/>
        </div>
    );
};

export default Layout;