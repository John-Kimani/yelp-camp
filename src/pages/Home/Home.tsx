import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import PlacesComponent, {IPlacesComponent} from '../../components/Places';
import placesData from './data/places.json';

export interface IHomePageProps {};

const HomePage: React.FC<IHomePageProps> = (props) => {

  const auth = getAuth()

  // const [listOfPlaces , setListOfPlaces] = useState([])

  // const url = "./data/json/data.JSON"

  // useEffect(() => {

  //   fetch(url).then(
  //     response => {
  //       console.log(response.json())
  //       return response.json()
  //     }
  //   ).then(
  //     (data: any) => {
  //       setListOfPlaces(data)
  //     }
  //   )
    
  // }, [])

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