import React, { useContext } from 'react';
import SmurfContext from '../contexts/SmurfContext';

function DisplaySmurfs() {
    const {smurfs} = useContext(SmurfContext);
    // console.log(smurfs)
    return (
        <div className='smurfs'>
            {smurfs.map(smurf =>
                <div className='smurf' key={smurf.name}>
                    <h1>{smurf.name}</h1>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                </div>)}
        </div>
    )
}

export default DisplaySmurfs;