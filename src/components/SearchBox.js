import React, { useState } from 'react';
import axios from 'axios';

const SearchBox = ({setLocation}) => {
    const [LocationId, setLocationId] = useState ("")

    const SearchLocation = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${LocationId} `)
        .then(res => setLocation(res.data))
      
    }
    return (
        <div className='searchbox'>
       <input type="text" placeholder='Type a Location By Id' onChange={e => setLocationId(e.target.value)} value={LocationId}  /> 
       <button onClick={SearchLocation}>Search</button>   
        </div>
    );
};

export default SearchBox;