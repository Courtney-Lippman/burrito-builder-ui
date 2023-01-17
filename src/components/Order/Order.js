import React from 'react';
import './Order.css';

const Order = ({ name, ingredientsList }) => {
  const ingredientList = ingredientsList.map(ingredient => {
    return <li key={ingredient}>{ingredient}</li>
  })
  return (
    <div className="order">
    <h3>{name}</h3>
    <ul className="ingredient-list">
      {ingredientList}
    </ul>
  </div>
  )
}

export default Order;