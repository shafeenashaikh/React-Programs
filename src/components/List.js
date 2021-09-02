import React from 'react';

function List({person}){
    return(
        <div>
            <h2>{person.name} {person.id}</h2>
        </div>
    )
}
export default List;