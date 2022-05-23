import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='border-4 border-slate-800 mt-5 py-7'>
                <h1 className='mt-8 mb-5 text-2xl'>How will you improve the performance of a React Application?</h1>
                <div className='text-left pl-10'>
                    <p>1. Keeping component state local where necessary.</p>
                    <p>2. Memoizing React components to prevent unnecessary re-renders.</p>
                    <p>3. Code-splitting in React using dynamic import.</p>
                    <p>4. Windowing or list virtualization in React.</p>
                    <p>5. Lazy loading images in React.</p>
                </div>
            </div>
            <div className='border-4 border-slate-800 mt-5 py-7'>
                <h1 className='mt-8 mb-5 text-2xl'>What are the different ways to manage a state in a React application?</h1>
                <div className='text-left pl-10'>
                    <p>1. Local State</p>
                    <p>2. Global State</p>
                    <p>3. Server State</p>
                    <p>4. URL State</p>
                </div>
            </div>
            <div className='border-4 border-slate-800 mt-5 py-7'>
                <h1 className='mt-8 mb-5 text-2xl'>How does prototypical inheritance work?</h1>
                <div className='text-left pl-10'>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.</p>
                </div>
            </div>
            <div className='border-4 border-slate-800 mt-5 py-7'>
                <h1 className='mt-8 mb-5 text-2xl'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                <div className='text-left pl-10'>
                    <p>One should never update the state directly because of the following reasons:</p>
                    <p>1. If you update it directly, calling the setState() afterward may just replace the update you made.</p>
                    <p>2. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>
                    <p>3. You will lose control of the state across all components.</p>
                </div>
            </div>
            <div className='border-4 border-slate-800 mt-5 py-7'>
                <h1 className='mt-8 mb-5 text-2xl'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <div className='text-left pl-10'>
                    <p>I will use destructure to implement this. By calling it's name I can easily find that wanted products.</p>
                </div>
            </div>
            <div className='border-4 border-slate-800 mt-5 py-7'>
                <h1 className='mt-8 mb-5 text-2xl'>What is a unit test? Why should write unit tests?</h1>
                <div className='text-left pl-10'>
                    <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;