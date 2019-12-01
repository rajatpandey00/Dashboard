import React from 'react';
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/form.scss'

export class SignInForm extends React.Component {
    render() {
        return (
        <Form className="signin-form">
            <Form.Group className="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
      </Form.Text>
            </Form.Group>

            <Form.Group className="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div className="button-form">
                <Button variant="primary" className="submit" type="submit">
                    Submit
           </Button>
                <Button variant="secondary" href="/home" className="signup" type="submit">
                    SignUp
    </Button>
            </div>
        </Form>)
    }
}
export default SignInForm