import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'; // Import React Slick for the slider
import './MenuSection.css';
// Import images
import menuItem1 from '../assets/img/menu/Pizza.png';
import menuItem2 from '../assets/img/menu/pizza1.jpg';
import menuItem3 from '../assets/img/menu/pizza2.png';
import menuItem4 from '../assets/img/menu/pizz3.jpg';

const menuItems = [
    {
        id: 1,
        imgSrc: menuItem1,
        name: 'Magnam Tiste',
        description: 'Delicious and spicy dish',
        price: '5.95',
        calories: '300',
        quantity: 1,
        category: 'veg',
        vendor: 'Pizza'
    },
    {
        id: 2,
        imgSrc: menuItem2,
        name: 'Aut Luia',
        description: 'Rich and creamy delight',
        price: '14.95',
        calories: '500',
        quantity: 1,
        category: 'nonveg',
        vendor: 'Pizza'
    },
    {
        id: 3,
        imgSrc: menuItem3,
        name: 'Magnam Tiste',
        description: 'Delicious and spicy dish',
        price: '5.95',
        calories: '300',
        quantity: 1,
        category: 'veg',
        vendor: 'Burger'
    },
    {
        id: 4,
        imgSrc: menuItem4,
        name: 'Aut Luia',
        description: 'Rich and creamy delight',
        price: '14.95',
        calories: '500',
        quantity: 1,
        category: 'nonveg',
        vendor: 'Burger'
    },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};


const MenuSection = ({ selectedVendor, onAddItem }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [quantity, setQuantity] = useState({});
    const navigate = useNavigate();

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleQuantityChange = (id, value) => {
        setQuantity(prev => ({ ...prev, [id]: value }));
    };

    const handleAddToCart = (item) => {
        const updatedItem = { ...item, quantity: quantity[item.id] || 1 };
        onAddItem(updatedItem);
        navigate('/added-items'); // Redirect to the added items page
    };

    const filteredItems = menuItems.filter(item =>
        (selectedVendor ? item.vendor === selectedVendor.name : true) &&
        (selectedCategory === 'all' ? true : item.category === selectedCategory)
    );

    return (
        <section id="menu" className="menu section light-background">
            <div className="container section-title" data-aos="fade-up">
                <h2>Our Menu</h2>
                <p><span>Check Our</span> <span className="description-title">Yummy Menu</span></p>
            </div>

            <div className="container">
                <div className="category-filters">
                    <button
                        className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('all')}
                    >
                        All
                    </button>
                    <button
                        className={`filter-btn ${selectedCategory === 'veg' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('veg')}
                    >
                        Veg
                    </button>
                    <button
                        className={`filter-btn ${selectedCategory === 'nonveg' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('nonveg')}
                    >
                        Non-Veg
                    </button>
                </div>

                <Slider {...settings}>
                    {filteredItems.map(item => (
                        <div className="menu-item" key={item.id}>
                            <a href={`/item/${item.id}`} className="glightbox">
                                <img src={item.imgSrc} className="menu-img img-fluid" alt={item.name} />
                            </a>
                            <div className="menu-details">
                                <h4>{item.name}</h4>
                                <p className="description">{item.description}</p>
                                <p className="price">Price: Rs {item.price}</p>
                                <p className="calories">Calories: {item.calories}</p>
                                <div className="quantity-container">
                                    <p className="quantity-label">Quantity:</p>
                                    <input
                                        type="number"
                                        value={quantity[item.id] || 1}
                                        min="1"
                                        className="quantity-input"
                                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                    />
                                </div>
                                <button className="add-to-cart" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default MenuSection;
