import React ,{useState} from 'react'
import Header from '../Header/Header'
import Resultcontainer from '../ResultContainer/Resultcontainer'
import Search from '../SearchBox/Search'
import './App.css'
let name = require('@rstacruz/startup-name-generator')

const App =()=>{
    const [headTitle,setheadTitle]=useState('Name It!');
    const [HeaderExpand,setHeaderExpand]=useState(true);
    const [SuggestedNames,setSuggestedNames]=useState([])

  const  HandleChange = (inptext)=>{
        setHeaderExpand(!(inptext.length > 0 ))
        setSuggestedNames(inptext ? name(inptext) : [])
        
         
     }
    return (
        <div>
           <Header HeaderExpand={HeaderExpand} title={headTitle}/>
           <Search onInputChange={HandleChange}/>
           <Resultcontainer SuggestedNames={SuggestedNames}/>
        </div>
    )

}






export default App
 