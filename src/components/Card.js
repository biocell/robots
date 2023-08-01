import React from 'react'

const Card = ({id, name, email}) => {
    return(
        <div className='bg-light-green dib br3 ma3 pa3 grow bw3 shadow-5t tc     '>
                <img alt='robo god' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;