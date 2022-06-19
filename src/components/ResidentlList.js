import React from 'react';
import LocationInfo from './LocationInfo';
const ResidentList = ({location} ) => {

    return (
        <div className='grid'>
        <h2 className='residents'>Residents</h2>
        
            { 
             location?.map(resident => (
             <div key={resident}>
             <LocationInfo locationUrl={resident}/>
             </div>
             ))
            }
        </div>
    );
};

export default ResidentList; 