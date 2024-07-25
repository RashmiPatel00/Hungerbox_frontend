import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Additems.css'; // Make sure to create this CSS file

const Additems = ({ addedItems }) => {
    const navigate = useNavigate();

    return (
        <div className="added-items-table">
            <h2>Added Items</h2>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Calories</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {addedItems.length > 0 ? (
                        addedItems.map((item) => (
                            <tr key={item.id}>
                                <td><img src={item.imgSrc} alt={item.name} className="item-image" /></td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>Rs {item.price}</td>
                                <td>{item.calories}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No items added yet.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={() => navigate('/')} className="btn btn-secondary mt-4">
                Back to Home
            </button>
            <button  className="btn btn-secondary mt-4">
                Place order
            </button>
        </div>
    );
};

export default Additems;
