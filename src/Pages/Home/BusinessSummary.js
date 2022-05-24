import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <h1 className='text-3xl text-blue-900 m-12 text-center'>Our Trustable Electronics Tools Manufacturer Business</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div class="indicator">
                    <span class="indicator-item badge badge-secondary">157+</span>
                    <button class="btn">Our Electric Tools</button>
                </div>
                <div class="indicator">
                    <span class="indicator-item badge badge-secondary">765+</span>
                    <button class="btn">Our Happy Clients</button>
                </div>
                <div class="indicator">
                    <span class="indicator-item badge badge-secondary">2700+</span>
                    <button class="btn">Our Reviews</button>
                </div>
                <div class="indicator">
                    <span class="indicator-item badge badge-secondary">132M+</span>
                    <button class="btn">Annual Revenue</button>
                </div>
            </div>


        </div>
    );
};

export default BusinessSummary;