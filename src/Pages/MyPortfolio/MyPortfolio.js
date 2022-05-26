import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='py-10'>
            <h1 className='text-4xl text-cyan-800'>Name: MD. RASHEDUL HAQUE ADOR</h1>
            <h1 className='text-4xl text-blue-800 py-3'> <a href="https://contacts.google.com/person/c983992226874029842?hl=en">E-mail: rashedulhaque111@gmail.com</a> </h1>

            <h1 className='text-center text-4xl text-cyan-700 m-6'>Educational Background</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Education Level</th>
                            <th>Passing Year</th>
                            <th>Board/University</th>
                            <th>CGPA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SSC</td>
                            <td>2016</td>
                            <td>DHAKA</td>
                            <td>4.94</td>
                        </tr>
                        <tr>
                            <td>HSC</td>
                            <td>2018</td>
                            <td>DHAKA</td>
                            <td>3.92</td>
                        </tr>
                        <tr>
                            <td>B.Sc</td>
                            <td>2022</td>
                            <td>DAFFODIL INTERNATIONAL UNIVERSITY</td>
                            <td>3.55</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div>
                <h1 className='text-3xl text-blue-600 m-8 text-center'>List of Technologies and Skills of mine as Web Developer</h1>
                <ul>
                    <li>HTML</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>CSS3</li>
                    <li>Bootstrap</li>
                    <li>Tailwind</li>
                    <li>JavaScript</li>
                    <li>ES6</li>
                    <li>React.js</li>
                    <li>MongoDB</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Authentication</li>
                    <li>Database</li>
                    <li>Unique Design Concept</li>
                </ul>
            </div>


            <div>
                <h1 className='text-3xl text-yellow-600 m-8 text-center'>List of my 3 Best Projects</h1>

                <div>
                    <h2>Live Link: https://affinity-79d3a.web.app/</h2>
                    <h2>Live Link: https://travel-guide-service.web.app/</h2>
                    <h2>Live Link: https://precious-cajeta-baf51c.netlify.app/</h2>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;