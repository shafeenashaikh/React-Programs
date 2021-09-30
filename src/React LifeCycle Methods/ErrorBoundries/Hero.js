import React from 'react'

function Hero({heroName}){
    if(heroName == 'joker'){
        throw new Error('Not a hero')
    }
    return(
        <div>
            <h2>{heroName}</h2>
        </div>
    )
}
export default Hero