import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    
    return(
        <div>
        {
            robots.map((robots) => {
                return (<Card key={robots.id} 
                                id={robots.id} 
                                name={robots.name} 
                                 email={robots.email} />
                         );
            })
        }
        </div>

    );
}

export default CardList;