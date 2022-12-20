import React from 'react'
import styled from 'styled-components';
import { GrKey } from "react-icons/gr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GiCaveEntrance, GiDesert, GiTreehouse, GiGolfTee } from "react-icons/gi";
import { TbBeach, TbWindmill } from "react-icons/tb";
import { MdOutlineBedroomParent, MdSurfing } from "react-icons/md";



const NavHeader = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <Container >
        <Content>
       <Slider {...settings}>
       <Icon1><GrKey/>Key</Icon1>
       <Icon2><GiCaveEntrance/>Cave</Icon2>
       <Icon3><GiDesert/>Desert</Icon3>
       <Icon4><GiTreehouse/>Treehouse</Icon4>
       <Icon5><GiGolfTee/>Golf</Icon5>
       <Icon6><TbBeach/>Beach</Icon6>
       <Icon7><TbWindmill/>Windmill</Icon7>
       <Icon8><MdOutlineBedroomParent/>Room</Icon8>
       <Icon9><MdSurfing/>Surfing</Icon9>
       </Slider>
       <FilterContent>
            <FilterIcon></FilterIcon>
            <FilterH1>Filters</FilterH1>
        </FilterContent>
        </Content>
    </Container>
  )
}

export default NavHeader
const Container=styled.div`
height:70px;
background:#fff;
width:100%;
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;

`

const Content=styled.div`
width:80%;
justify-content:center;
align-items:center;
margin-top:10px;

`

const FilterContent=styled.div`
border:1px solid #ccc;
border-radius:15px;
padding:0.5rem;
margin-left:30px;
`

const FilterIcon=styled.div`

`
const FilterH1=styled.h4`
font-size:1rem;
font-style:bold;
`

const Icon1=styled.div`
font-size:2rem;

`
const Icon2=styled.div`
font-size:2rem;
`

const Icon3=styled.div`
font-size:2rem;
`
const Icon4=styled.div`
font-size:2rem;
`

const Icon5=styled.div`
font-size:2rem;
`

const Icon6=styled.div`
font-size:2rem;
`

const Icon7=styled.div`
font-size:2rem;
`

const Icon8=styled.div`
font-size:2rem;
`

const Icon9=styled.div`
font-size:2rem;
`

