import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Vendor from './components/Vendor';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import ChefsSection from './components/ChefsSection';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Addtocart from './components/Addtocart'; // Import ItemDetails
import Additems from './components/Additems'; // Import AddedItemsTable
import './Styles/Styles.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [addedItems, setAddedItems] = useState([]);

  const handleAddItem = (item) => {
    setAddedItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Vendor selectedVendor={selectedVendor} onSelectVendor={setSelectedVendor} />
              <MenuSection selectedVendor={selectedVendor} onAddItem={handleAddItem} />
              <AboutSection />
              <ChefsSection />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/item/:id" element={<Addtocart onAddItem={handleAddItem} />} />
          <Route path="/added-items" element={<Additems addedItems={addedItems} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
