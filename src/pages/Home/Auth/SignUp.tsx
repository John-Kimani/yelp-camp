import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface ISignUpPage {};

const SignUpPage: React.FC<ISignUpPage> = () => {
  return (
    <>
    <Container className='d-flex align-items-center justify-content-center'
        style={{minHeight: '100vh'}}>
    <div className="w-100 mt-2" style={{maxWidth: '400px'}}>
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

                <Button className='submit-btn w-100 mt-3' variant='dark' type='submit'>Sign Up</Button>
            </Form>
        </Card.Body>
    </Card>
    <p className='text-center'>Already have an account? <Link to='/login'>Login</Link></p>
    </div>
    </Container>
    </>
  )
}

export default SignUpPage