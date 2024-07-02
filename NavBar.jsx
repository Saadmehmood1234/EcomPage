import React from 'react'
import styled from 'styled-components';
import { TiThMenuOutline } from "react-icons/ti";
const NavBar = () => {
  return (
    <NavContainer>
        <div className='logo'>
            <img src="logo.png" alt="logo" />
        </div>
        <div>
        <ul>
           <li>Category</li>
           <li>About</li>
           <li>Login</li>
        </ul>
        <TiThMenuOutline className='Menu'/>
        </div>
    </NavContainer>
  )
}
export default NavBar;
const NavContainer=styled.div`
display: flex;
gap:20px;
width: 100%;
height: 100px;
color: white;
img{
    width: 150px;
}
ul{
display: flex;
list-style-type:none;
gap:100px;
justify-content: center;
align-items: center;
height: 100px;
font-size: 20px;
}
.Menu{
    display: none;
}
@media (max-width:700px){
    display: flex;
    justify-content: space-between;
    ul{
        display: none;
    }
    .Menu{
    display: block;
    margin-top: 40px;
    font-size: 40px;
    margin-right: 40px;
}
}

`;