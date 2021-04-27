import React from 'react'
import './Header.css'
const Header = ({title,HeaderExpand}) => {
    return (
        <div className="head-container ">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" 
            className={`head-img ${HeaderExpand ? 'head-img-expanded' :'head-img-contracted'}`} />
            <h1 className={`head-txt ${HeaderExpand ? 'head-txt-expanded' :'head-txt-contracted'}`} >{title}</h1>
            
        </div>
    )
}

export default Header
