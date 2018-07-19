import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ShoppingList from './components/ShoppingList';
import {Provider} from 'react-redux'
import store from './store'
import AddItemModal from './components/AddItemModal';
import { Container } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <Container>
            <AddItemModal/>
            <ShoppingList/>
          </Container>
        </div> 
      </Provider>
    );
  }
}

export default App;
