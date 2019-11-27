import React from 'react';

import HomePageForm from '../../components/homepage-form/homepage-form.component';
import HomepageInfo from '../../components/homepage-info/homepage-info.component';

import './homepage.styles.scss';

const Homepage = () => (
    <div className='homepage-container'>
        <HomePageForm />
        <HomepageInfo />
    </div>
);

export default Homepage;