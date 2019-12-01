import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/form.scss'

export class SignUpForm extends Component {
    render() {
        return (
            <Form className="signin-form">
                <Form.Group className="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="button-form">
                    <Button variant="secondary" className="signup" type="submit">
                        SignUp
    </Button>
                </div>
            </Form>)
    }
}
export default SignUpForm