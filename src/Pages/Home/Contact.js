import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className='text-center text-3xl text-emerald-700 m-2'>Contact Us</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 ml-18 p-12 border-2 border-slate-400'>
                <div className='text-center'>
                    <h1 className='text-2xl text-red-600 m-2'>Our Location</h1>
                    <p>57/C, Sukrabad, Dhanmondi, Dhaka</p>
                    <p>Bangladesh</p>

                </div>
                <div className='text-center'>
                    <h1 className='text-2xl text-red-600 m-2'>Contact</h1>
                    <p>Email: affinitybdhelpcenter@gmail.com</p>
                    <p>Mobile: 01826095758</p>

                </div>
            </div>

        </div>
    );
};

export default Contact;