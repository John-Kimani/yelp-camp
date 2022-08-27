import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

export interface IHomePageProps {};

const HomePage: React.FC<IHomePageProps> = (props) => {

  const auth = getAuth()
  return (
    <div>
        <p>Home page (protected with firebase)</p>
        <button onClick={()=> signOut(auth)}>Sign Out of Firebase</button>
    </div>
  )
};

export default HomePage