import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import PlacesComponent from '../../components/Places';
import placesData from './data/places.json';

export interface IHomePageProps {};

const HomePage: React.FC<IHomePageProps> = (props) => {

  const auth = getAuth()

  const placeList = placesData.map((place:any, index:number) => {
    return <PlacesComponent key={index} name={place.name} imageUrl={place.imageUrl} description={place.description}/>
  })
  

  return (
    <div>
        {placeList}
        <p>Home page (protected with firebase)</p>
        <button onClick={()=> signOut(auth)}>Sign Out of Firebase</button>
    </div>
  )
};

export default HomePage