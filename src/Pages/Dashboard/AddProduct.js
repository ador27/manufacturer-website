const AddProduct = () => {
    const handleAddTool = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const picture = event.target.picture.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const minimum = event.target.minimum.value;
        const available = event.target.available.value;
        const tools = { name, picture, description, price, minimum, available };


        fetch('https://young-peak-15744.herokuapp.com/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tools)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('New Tool added successfully!!!');
                event.target.reset();
            })

    }
    return (
        <div>
            <h1 className='text-3xl text-yellow-700 m-12 text-center'>Add a New Product</h1>
            <form onSubmit={handleAddTool}>
                <input className='border-2 h-10 w-30 m-2' type="text" name='name' placeholder='Tool Name' required /> <br />
                <input className='border-2 h-10 w-30 m-2' type="text" name='picture' placeholder='Picture Link' required /> <br />
                <input className='border-2 h-10 w-30 m-2' type="text" name='description' placeholder='Description' required /> <br />
                <input className='border-2 h-10 w-30 m-2' type="number" name='price' placeholder='Price' required /> <br />
                <input className='border-2 h-10 w-30 m-2' type="number" name='minimum' placeholder='Minimum' required /> <br />
                <input className='border-2 h-10 w-30 m-2' type="number" name='available' placeholder='Available' required /> <br />
                <input className='border-2 text-white bg-slate-600 px-4 py-1' type="submit" value="Add Product" />

            </form>
        </div>
    );
};

export default AddProduct;