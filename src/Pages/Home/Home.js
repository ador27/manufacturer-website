import React from 'react';
import Banner from './Banner';
import Review from './Review';
import Tools from './Tools';
import BusinessSummary from './BusinessSummary';
import Footer from '../Shared/Footer';
import Charts from './Charts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
            <Charts></Charts>
            <Footer></Footer>
        </div>
    );
};

export default Home;