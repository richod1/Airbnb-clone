import React from 'react'
import styled from 'styled-components'
import { BsMap } from "react-icons/bs";

const Map = () => {
  return (
    <Container>
    <Wrap>
    <Content>
<h2>Map  <BsMap fontSize='large'/></h2>
      </Content>
    </Wrap>

    </Container>
  )
}

export default Map

const Container=styled.div`
border:none;
width:100p%;
height:100%;
display:flex;
align-items:center;
justify-content:center;

`
const Wrap=styled.div`
display:flex;
paddin:1.5rem;
border:none;
align-items:center;
justify-content:center;
`
const Content=styled.div`
color:#000;
display:flex;
padding:1.5rem;
font-style:bold;
align-items:center;
justify-content:center;
cursor:pointer;
width:100px;



h2{
  display:flex;
  align-items:center;
  justify-content:center;
  border:1px solid #ccc;
  padding:0.4rem;
  border-radius:15px;
  backround:#000;


  &:hover{
    color:linear-gradient(blue,orange);
    transition:all 0.2s ease-in-out;
  }
}
`