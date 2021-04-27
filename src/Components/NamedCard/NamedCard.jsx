import React from 'react'
import './NamedCard.css'
const NamedCard = ({suggestedName}) => {
    const NameUrl="https://www.namecheap.com/domains/registration/results/?domain="
    return (
        <a style={{textDecoration:'none'}} href={`${NameUrl}${suggestedName}`}>
            <div className="named-container">
            <p className="result-name">{suggestedName}</p>
            
        </div>
        </a>
    )
}

export default NamedCard
