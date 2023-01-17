import React, { Component } from 'react';
import './App.css';
import {getOrders, goPostData} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  componentDidMount = () => {
    getOrders()
      .then(data => {
        this.setState({ orders: data.orders})
      })
      .catch(err => console.error('Error fetching:', err));
  }

  postData = (newOrder) => {
      goPostData(newOrder)
        .then(response => {
          if(response.ok) {
            this.setState({ orders: [...this.state.orders, newOrder]})
          }
        })
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm postData={this.postData} />
        </header>
        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
