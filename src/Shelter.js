import { data } from './data';
import Pets from './Pets';
import { useState } from 'react';
import Buttons from './Buttons';

function Shelter () {
    const [pets, setPets] = useState(data);
    const chosenPets = (searchTerm) =>{
        const newPets=data.filter(element=>element.searchTerm===searchTerm)
        setPets(newPets);
    }
    return (
    <div>
        <div className='cont'>
            <h2 className='back'>Choose a new friend!</h2> 
        </div>
        <Buttons filteredPets={chosenPets}/>
        <Pets anyPets={pets}/>
    </div>
    )
}

export default Shelter;