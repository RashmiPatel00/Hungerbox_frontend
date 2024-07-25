import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Vendor.css';
import burgerImg from '../assets/img/Main/Burger1.jpg';
import pizzaImg from '../assets/img/Main/pizza.jpg';
import gulabJamunImg from '../assets/img/Main/gulab-jamun.jpg';
import southIndianImg from '../assets/img/Main/southindian.jpg';
import maharstrianImg from '../assets/img/Main/Maharstrian.jpg';
import northIndianImg from '../assets/img/Main/NorthIndian.jpg';
import dessertImg from '../assets/img/Main/dessert2.jpg';
import idaliImg from '../assets/img/Main/Idali.png';

const Vendor = ({ selectedVendor, onSelectVendor }) => {
  const navigate = useNavigate();
  const vendors = [
    { id: 1, name: 'Burger', src: burgerImg, type: 'Burger' },
    { id: 2, name: 'Pizza', src: pizzaImg, type: 'Pizza' },
    { id: 3, name: 'Dessert', src: gulabJamunImg, type: 'Desserts' },
    { id: 4, name: 'South Indian', src: southIndianImg, type: 'SouthIndian' },
    { id: 5, name: 'Maharashtrian', src: maharstrianImg, type: 'Maharashtrian' },
    { id: 6, name: 'North Indian', src: northIndianImg, type: 'NorthIndian' },
    { id: 7, name: 'Dessert', src: dessertImg, type: 'Desserts' },
    { id: 8, name: 'Idali', src: idaliImg, type: 'SouthIndian' },
  ];

  const handleVendorClick = (vendor) => {
    if (onSelectVendor) {
      onSelectVendor(vendor); // Update the selected vendor
      navigate('/'); // Redirect to the main page
    }
  };

  return (
    <div className="vendor-container">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Food Counter</h2>
        <p><span>Check Our</span> <span className="description-title">Food Counter</span></p>
      </div>
      <div className="vendor-list">
        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            className={`vendor-item ${selectedVendor && selectedVendor.id === vendor.id ? 'selected' : ''}`}
            onClick={() => handleVendorClick(vendor)}
          >
            <img src={vendor.src} alt={vendor.name} />
            <p>{vendor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendor;
