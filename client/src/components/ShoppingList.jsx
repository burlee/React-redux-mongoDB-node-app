import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'
import {connect} from 'react-redux'
import { getItems, removeItem } from '../actions/ItemActions'

 class ShoppingList extends Component {
    componentDidMount(){
        this.props.getItems();
    }

    onDeleteClick = (id) =>{
        this.props.removeItem(id);
    }
    render() {
        const { items } = this.props.item;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({_id, name}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button 
                                        className="remove-btn" 
                                        color="danger"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                        >Delete</Button>
                                    {name}
                                </ListGroupItem> 
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}
const mapStateToProps = state => {
    return {
      item: state.item
    }
  }

export default connect(mapStateToProps, {getItems, removeItem})(ShoppingList)