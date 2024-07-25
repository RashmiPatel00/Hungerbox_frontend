import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Addtocart = ({ onAddItem }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Example item data (you should fetch this based on the ID)
    const item = {
        id: id,
        name: 'Sample Item',
        description: 'This is a sample item description.',
        price: '10.00',
        calories: '200',
        imgSrc: '/path/to/image.png'
    };

    const handleAddToCart = () => {
        onAddItem(item);
        navigate('/added-items'); // Redirect to the added items page
    };

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.imgSrc} alt={item.name} />
            <p>{item.description}</p>
            <p>Price: Rs {item.price}</p>
            <p>Calories: {item.calories}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Addtocart;
