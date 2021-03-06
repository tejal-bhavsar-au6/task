import React from 'react'
import './Naya.css'
 
 
import options from './asset/options.svg'
import logo from './asset/NoPath.png'
import cart from './asset/cart-sharp.svg'
import SearchIcon from '@material-ui/icons/Search'
import PersonSharpIcon from '@material-ui/icons/PersonSharp'
import DescriptionIcon from '@material-ui/icons/Description'
import InputBase from '@material-ui/core/InputBase'
import { display } from '@material-ui/system';


export default function Naya() {
    return (
        <div>
            <nav class="navbar row navbar-expand-lg navbar-light">
                <div className="col-xl-3 col-md-2 col-lg-3 col-2">
                    <ul className="navbar-nav">
                     <li> <img className="rectangle" src={options} /> </li>
                     <li>   
                         <img className="logok" id="hide-content" src={logo} alt="" loading="lazy"/>   
                     </li>
                    </ul>
                </div>
                <div className="hide-content col-xl-6 col-lg-6 col-md-6 ">
                  <InputBase 
                     
                    className="inputsearch"
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                    endAdornment={<SearchIcon  style={{fontSize:'2rem'}} className="search"/>}
                    />
                     
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4  col-10
                icons ">
                  <SearchIcon  className="search  icon d-lg-none d-md-none d-sm-none d-lg-none"/>
                  <PersonSharpIcon className="icon" fontSize="medium" />
                  <DescriptionIcon className="icon"  />
                   <img src={cart} className="icon" />
                </div>
                     
            </nav>
        </div>
    )
}
