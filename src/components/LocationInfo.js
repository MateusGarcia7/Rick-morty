import axios from 'axios';
import React, { useEffect, useState } from 'react';

const LocationInfo = ({locationUrl} ) => {
const [info, setInfo] = useState({})
    useEffect( () => {
        axios.get(locationUrl)
            .then (res => setInfo(res.data))

    }, [])
    
    return (
        <div className='card'>
            <div >
            <ul>
            <img className='image' src={info.image} alt="" />
            <div className='info'>
            <h3>{info.name} </h3>
            <h4>{info.status}-{info.species} </h4>
            <p>Origin <br/> <b>{info.origin?.name} </b></p>
            <p>Episodes where apper <br /> <b>{info.episode?.length} </b></p>
            </div>
            </ul>
            </div>

        </div>
    );
};

export default LocationInfo;