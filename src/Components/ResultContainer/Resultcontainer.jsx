import React from 'react'
import NamedCard from '../NamedCard/NamedCard'
import './Resultcontainer.css'

const Resultcontainer = ({SuggestedNames}) => {
    const suggestedJsx=SuggestedNames.map((suggestedName,index)=>{
        return <NamedCard key={index} suggestedName={suggestedName}/>
    })
    return (
        <div className="result-container">
          {suggestedJsx}
        </div>
    )
}

export default Resultcontainer
