import React from 'react';
import Navbar from './Navbar';

const propertyData = new Array(8).fill().map((_, i) => ({
  name: `House #${i + 1}`,
  amenities: "Balcony, Gym, Garage, Wi-Fi",
  rentSqft: "$1,050",
  rent: `$${1100 + i * 50}`,
  expiry: "12/12/2025",
  suggested: "$1200/mo",
  image: `https://source.unsplash.com/400x30${i}/?house`,
}));

const Compare = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h2 style={{ textAlign: 'center' }}>Compare Rental Properties</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {propertyData.map((property, index) => (
            <div key={index} style={{
              border: '1px solid #ccc',
              padding: '15px',
              width: '280px',
              borderRadius: '8px',
              textAlign: 'left'
            }}>
              <img src={property.image} alt="Property" style={{ width: '100%', borderRadius: '5px' }} />
              <h3>{property.name}</h3>
              <p><strong>Amenities:</strong> {property.amenities}</p>
              <p><strong>Rent/Sqft:</strong> {property.rentSqft}</p>
              <p><strong>Rent:</strong> {property.rent}</p>
              <p><strong>Lease Expiry:</strong> {property.expiry}</p>
              <p><strong>Suggested Rent:</strong> {property.suggested}</p>
              <button style={{ padding: '8px 12px', background: '#2c3e50', color: '#fff', border: 'none', borderRadius: '5px' }}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Compare;
