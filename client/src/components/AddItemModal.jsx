import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import uuid from 'uuid'
import { addItem } from '../actions/ItemActions'

class AddItemModal extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            name: this.state.name
        }

        this.props.addItem(newItem);

        this.toggle();
    }

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                    >Add Item</Button>
                
                <Modal toggle={this.toggle} isOpen={this.state.modal}>
                    <ModalHeader toggle={this.toggle}>
                        Add to list
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input 
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add item"
                                    onChange={this.onChange}
                                />
                                <Button style={{marginTop: '5px'}} block>Add item </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
// const mapStateToProps = state => {
//     return {
//       item: state.item
//     }
//   }
export default connect(null, { addItem })(AddItemModal);

