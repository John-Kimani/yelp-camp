import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import PlacesComponent from '../../components/Places';
import placesData from './data/places.json';
import NavbarComponent from '../../components/Navbar';
import SearchComponent from '../../components/search/SearchComponent';

export interface IHomePageProps {};

const HomePage: React.FC<IHomePageProps> = (props) => {

  const auth = getAuth()

  const placeList = placesData.map((place:any, index:number) => {
    return <PlacesComponent key={index} name={place.name} imageUrl={place.imageUrl} description={place.description}/>
  })
  

  return (
    <main>
      {/* navbar */}
      <NavbarComponent />
      <SearchComponent />
      <div>
        {placeList}
      </div>
    </main>
    // <div>
    //     {placeList}
    //     <p>Home page (protected with firebase)</p>
    //     <button onClick={()=> signOut(auth)}>Sign Out of Firebase</button>
    // </div>
  )
};

export default HomePage