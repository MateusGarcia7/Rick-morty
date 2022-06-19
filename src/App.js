import { useState, useEffect } from 'react';
import './App.css';
import ResidentList from './components/ResidentlList';
import SearchBox from './components/SearchBox';
import axios from 'axios';
import LocationInfo from './components/LocationInfo';

function App() {
  const [location, setLocation] = useState({})
  useEffect(() => {
    const random = Math.floor(Math.random () * 126) + 1 
 axios.get(`https://rickandmortyapi.com/api/location/${random} `)
 .then(res => setLocation(res.data))
}, []);

   
  return (
    <div className="App">
      <img className='gif' src="https://i.gifer.com/7Jg9.gif" alt="" />
      <h1 className='tittle'>Rick and Morty wiki</h1>
      <SearchBox setLocation={setLocation} />        
      <h2 className='namelocation'>{location.name} </h2>
      <div>
            <p className='type'><b> Type:</b> {location.type}</p>
            <p className='dimension'><b> Dimension: </b>{location.dimension} </p>
            <p className='population'> <b> Population:</b> {location.residents?.length} </p>
            </div>  

    <ResidentList location={location.residents} />
      
    </div>
  );
}

export default App;
