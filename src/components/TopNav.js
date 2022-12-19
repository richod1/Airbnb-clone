import React from 'react'
import styled from 'styled-components'
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";

const TopNav = () => {
  return (
    <Container>
        <NavLogo>
            <img src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png' alt="img"/>
        </NavLogo>
        <NavContent>
        <h2>the first</h2>
        <hr/>
        <h2>the second</h2>
        <hr/>
        <input type="text" placeholder='Add Guest'/><Icon><BsSearch/></Icon> 
        </NavContent>
        <AbContent>
            <AbH1>Airbnb your Home</AbH1>
            <MapIcon>
                <TbWorld/>
                </MapIcon>
            
            <Avatar>
             <MenuIcon>
                <AiOutlineMenu/>
                </MenuIcon>
             
                <img src='https://e7.pngegg.com/pngimages/717/24/png-clipart-computer-icons-user-profile-user-account-avatar-heroes-silhouette-thumbnail.png' alt="img"/>
            </Avatar>
        </AbContent>
         

    </Container>
  )
}

export default TopNav
const Container=styled.div`
width:100%;
height:50px;
display:flex;
align-items:center;
justify-content:space-between;
background:#fff;
border-bottom:1px solid #ccc;

@media screen and (max-width:780px){
    width:100%;
}

`

const NavLogo=styled.div`
display:flex;
align-items:center;
justify-content:center;
position:sticky;
margin-left:20px;
cursor:pointer;

img{
    display:flex;
    
    object-fit:contain;
    width:100px;
    height:100px;
}
`
const Icon=styled.div`
color:#fff;
background:#ff385b;
border:none;
font-size:small;
border-radius:50%;
padding:0.3rem;
`

const NavContent=styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-left:35%;
gap:15px;
border:1px solid #ccc;
border-radius:20px;
padding:0.4rem;
object-fit:contain;
cursor:pointer;
box-shadow:5px 7px rgba(246,246,246,0.8);




h2{
    font-size:10px;
    font-weight:15px;

    // &:hover{
    //     color:powderblue;
    //     padding:0.3rem;
    //     border:none;
    //     font-size:10px;
    //     object-fit:contain;
        
        
    // }

}
hr{
    height:10px;
    background:#fff;
}
input{
    background:#fff;
    padding:0.2rem;
    border:none;
    border-radius:5px;
    width:65px;
}

@media screen and(max-width:780px){
    font-size:5px;
    font-wieght:10px;
    display:flex;
}
`

const AbContent=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-left:30px;
`

const AbH1=styled.h4`
font-size:10px;
cursor:pointer;
`

const MapIcon=styled.div`
display:flex;
marin-left:30px;
cursor:pointer;

`
const MenuIcon=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
cursor:pointer;
`

const Avatar=styled.div`
display:flex;
align-items:center;
justify-conyent:space-between;
border:1px solid #ccc;
border-radius:15px;
padding:0.5rem;
margin-left:30px;

img{
    border:1px solid #ccc;
    padding:0.1rem;
    cursor:pointer;
    border-radius:100px;
    width:17px;
}


`