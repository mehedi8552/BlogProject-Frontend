import React from 'react';
import Layout from '../Layout/Layout';
import Slider from '../Component/Slider';
import ProfileLogo from '../Component/ProfileLogo';
import Remark from '../Component/Remark';
import Link from '../Component/Link';

const HomePage = () => {
    return (
        <Layout>
            <Slider />
            <ProfileLogo />
            <Remark />
            <Link/>
        </Layout>
    );
};

export default HomePage;