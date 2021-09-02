import React from 'react';
import List from './List';

function NameList(){

   const persons = [
       {
           name: 'bruce',
           id: 2
       },
       {
        name: 'diana',
        id: 3
    },
    {
        name: 'john',
        id: 5
    }
   ]
    const personList =  persons.map(person => (
        <List key={person.id} person={person} />
    ))
    return(
        <div>
           {personList}
        </div>
    )
}
export default NameList;