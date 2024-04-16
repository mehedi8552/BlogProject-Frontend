import React from 'react';
import Layout from '../Layout/Layout';
import BloggerSignUp from '../Component/BloggerSignUp';
import ProductCard from '../Component/ProductCard';
import Slider from '../Component/Slider';

const HomePage = () => {
    return (
        <Layout>
            <Slider/>
           {/* <BloggerSignUp/>  */}
           <ProductCard/>
        </Layout>
    );
};

export default HomePage;