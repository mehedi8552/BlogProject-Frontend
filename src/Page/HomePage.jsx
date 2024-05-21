import React from 'react';
import Layout from '../Layout/Layout';
import Slider from '../Component/Slider';
import ProfileLogo from '../Component/ProfileLogo';
import Remark from '../Component/Remark';
import Link from '../Component/Link';
import Card from '../Component/Card';

const HomePage = () => {
    return (
        <Layout>
            <Slider />
            <ProfileLogo />
            <Remark />
            <Link/>
            <Card/>
        </Layout>
    );
};

export default HomePage;