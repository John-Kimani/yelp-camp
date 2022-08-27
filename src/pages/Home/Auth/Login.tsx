import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, Container, Form  } from 'react-bootstrap';

export interface ILoginPageProps {};

const LoginPage: React.FC<ILoginPageProps> = (props) => {

  const auth = getAuth();

  const navigate = useNavigate();

  const [authing, setAuthing] = useState(false);

  const signInWithGoogle =async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider()).then(
      response => {
        console.log(response.user.uid);
        navigate('/')
      }
    ).catch(
      error => {
        console.log(error);
        setAuthing(false);
      }
    )
  };

  return (

    <>
    <Container className='d-flex align-items-center justify-content-center'
        style={{minHeight: '100vh'}}>
    <div className="w-100 mt-2" style={{maxWidth: '400px'}}>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Login</h2>
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

                <Button className='w-100 mt-3' variant='dark' type='submit'>Login</Button>

                <Button className='w-100 mt-3' variant='light' type='submit' onClick={()=> signInWithGoogle()} disabled={authing}>Login With Google</Button>
            </Form>
        </Card.Body>
    </Card>
    <p className='text-center'>Need an account? <Link to='/signup'>Sign Up</Link></p>
    </div>
    </Container>
    </>
  )
};

export default LoginPage