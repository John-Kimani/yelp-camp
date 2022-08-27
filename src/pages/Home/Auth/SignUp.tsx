import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

interface ISignUpPage {};

const SignUpPage: React.FC<ISignUpPage> = () => {
  return (
    <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Sign Up</h2>
            <Form>
                <Form.Group id="email">
                <Form.Label>
                    Email
                </Form.Label>
                <Form.Control type="email" required />
                </Form.Group>

                <Form.Group id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' required />
                </Form.Group>


                <Form.Group id='password-confirm'>
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type='password' required />
                </Form.Group>

                <Button className='w-100' type='submit'>Sign Up</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className="text-center w-100 mt-2">
    Already have an account? Log in
    </div>
    </>
  )
}

export default SignUpPage