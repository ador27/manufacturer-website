import React from 'react';
import Banner from './Banner';
import Review from './Review';
import Tools from './Tools';
import BusinessSummary from './BusinessSummary';
import Charts from './Charts';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
            <Charts></Charts>
            <Contact></Contact>
        </div>
    );
};

export default Home;