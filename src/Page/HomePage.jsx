import React from 'react';
import Layout from '../Layout/Layout';
import BloggerSignUp from '../Component/BloggerSignUp';
import ProductCard from '../Component/ProductCard';

const HomePage = () => {
    return (
        <Layout>
           {/* <BloggerSignUp/>  */}
           <ProductCard/>
        </Layout>
    );
};

export default HomePage;