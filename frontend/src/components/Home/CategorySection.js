import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategorySection.css';

const CategorySection = () => {
  const navigate = useNavigate();
  
  const categories = [
    { id: 1, name: 'Biryani', icon: '🍛', color: '#ff6b6b' },
    { id: 2, name: 'Pizza', icon: '🍕', color: '#D99A2E' },
    { id: 3, name: 'North Indian', icon: '🍲', color: '#4ecdc4' },
    { id: 4, name: 'Chinese', icon: '🥡', color: '#f7b731' },
    { id: 5, name: 'Desserts', icon: '🍰', color: '#fd79a8' },
    { id: 6, name: 'Beverages', icon: '🥤', color: '#a29bfe' },
  ];

  return (
    <div className="category-section">
      <h2>Explore Categories</h2>
      <div className="category-grid">
        {categories.map(cat => (
          <div key={cat.id} className="category-card" style={{ '--cat-color': cat.color }} onClick={() => navigate('/menu')}>
            <div className="category-icon">{cat.icon}</div>
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
