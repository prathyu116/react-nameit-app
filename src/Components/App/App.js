import React from 'react'
import Header from '../Header/Header'
import Resultcontainer from '../ResultContainer/Resultcontainer'
import Search from '../SearchBox/Search'
import './App.css'
let name = require('@rstacruz/startup-name-generator')
class App extends React.Component{
    state={
        headTitle:'Name It!',
        HeaderExpand:true,
        SuggestedNames:[]
    }
   HandleChange = (inptext)=>{
      this.setState({
          HeaderExpand:!(inptext.length > 0 ),
          SuggestedNames:inptext ? name(inptext) : []
      })
       
   }
    render(){
        
        return (
            <div>
               <Header HeaderExpand={this.state.HeaderExpand} title={this.state.headTitle}/>
               <Search onInputChange={this.HandleChange}/>
               <Resultcontainer SuggestedNames={this.state.SuggestedNames}/>
            </div>
        )
    }
}




export default App
