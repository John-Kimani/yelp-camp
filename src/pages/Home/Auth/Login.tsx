import React from 'react'

export interface ILoginPageProps {};

const LoginPage: React.FC<ILoginPageProps> = (props) => {
  return (
    <div>
        <p>This is the login page</p>
        <button>Sign In with Google</button>
    </div>
  )
};

export default LoginPage