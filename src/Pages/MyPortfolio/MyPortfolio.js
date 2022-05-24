import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='py-10'>
            <h1 className='text-4xl text-cyan-800'>Name: MD. RASHEDUL HAQUE ADOR</h1>
            <h1 className='text-4xl text-blue-800 py-3'> <a href="https://contacts.google.com/person/c983992226874029842?hl=en">E-mail: rashedulhaque111@gmail.com</a> </h1>

            <div>
                <h1 className='text-3xl text-red-600 m-8 text-center'>Educational Background</h1>
                <table className='border-4 border-black'>
                    <tr>
                        <th>Education</th>
                        <th>Institute/Board</th>
                        <th>Passing Year</th>
                        <th>CGPA</th>
                    </tr>
                    <tr>
                        <td>SSC</td>
                        <td>Dhaka</td>
                        <td>2016</td>
                        <td>5.00</td>
                    </tr>
                    <tr>
                        <td>HSC</td>
                        <td>Dhaka</td>
                        <td>2018</td>
                        <td>4.00</td>
                    </tr>
                    <tr>
                        <td>B.sc</td>
                        <td>Daffodil International University</td>
                        <td>2022</td>
                        <td>3.55</td>
                    </tr>

                </table>

            </div>
        </div>
    );
};

export default MyPortfolio;