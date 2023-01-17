import React from 'react';
import Order from '../Order/Order'
import './Orders.css';

const Orders = ({orders}) => {
  const orderEls = orders.map(order => {
    return (
      <Order
      key={order.id}
      id={order.id}
      name={order.name}
      ingredientsList={order.ingredients}
      />
    )
  });

  return (
    <section>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;