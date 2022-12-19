
import React from 'react'
import styled from 'styled-components'
import { BsFacebook,BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div>
        <Container>
        <FooterWrapper>
            <FooterRow>
               
                <FooterColumn>
                
                    <FooterLink >Marketing</FooterLink>
                </FooterColumn>
                <FooterColumn>
                
                    <FooterLink >Australia</FooterLink>
                    <FooterLink >Support</FooterLink>
                </FooterColumn>
                <FooterColumn>
               
                    <FooterLink >Facebook <BsFacebook/></FooterLink>
                    <FooterLink >Instagram <BsInstagram/></FooterLink>
                    
                </FooterColumn>
            </FooterRow>
            </FooterWrapper>
        </Container>
    </div>
  )
}

export default Footer
const Container=styled.div`
width:100%;
height:30%;
overflow:hidden;
padding: 10px 10px;
background:#ccc;

border-top:1px solid #ccc;
@media (max-width: 1000px) {
  padding: 70px 30px;
}
`
const FooterWrapper=styled.div`
display: flex;

flex-direction: row;
justify-content: space-between;
max-width: 100%;
margin: 0 auto;
height:10%;
overflow:hidden;
`

const FooterRow=styled.div`
display: flex;
align-items:center;
justify-content:space-between;
overflow:hidden;
// grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
// grid-gap: 20px;
@media (max-width: 1000px) {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
`

const FooterColumn=styled.div`
display: flex;
  flex-direction: row;
  text-align: left;
  margin-left: 60px;
`

const FooterLink=styled.a`
color: #000;
display:flex;
cursor:pointer;
font-size: 18px;
text-decoration: none;
&:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`

