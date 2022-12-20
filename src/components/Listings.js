import React,{useState} from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from './Detail'
import Slider from "react-slick";

const Listings = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const [list,setList]=useState([
        {
            id:1,
            img1:"https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2:"https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600",
            img3:"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"title 1",
            des:"hello form ghana",
            rating:3
        },
        {
            id:2,
            img1:"https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2:"https://images.pexels.com/photos/10511496/pexels-photo-10511496.jpeg?auto=compress&cs=tinysrgb&w=600",
            img3:"https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"title 2",
            des:" hello am in nigeria",
            rating:3
        },
        {
            id:3,
            img1:"https://images.pexels.com/photos/4031013/pexels-photo-4031013.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2:"https://images.pexels.com/photos/14369630/pexels-photo-14369630.jpeg?auto=compress&cs=tinysrgb&w=600",
            img3:"https://images.pexels.com/photos/9876850/pexels-photo-9876850.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"title 3",
            des:"Hello form Usa",
            rating:3
        },
        {
            id:4,
            img1:"https://images.pexels.com/photos/7746574/pexels-photo-7746574.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2:"https://images.pexels.com/photos/10048841/pexels-photo-10048841.jpeg?auto=compress&cs=tinysrgb&w=600",
            img3:"https://images.pexels.com/photos/10511470/pexels-photo-10511470.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Title 4",
            des:"Hello from germany",
            rating:3
        },
        {
            id:5,
            img1:"https://images.pexels.com/photos/9130978/pexels-photo-9130978.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2:"https://images.pexels.com/photos/9879606/pexels-photo-9879606.jpeg?auto=compress&cs=tinysrgb&w=600",
            img3:"https://images.pexels.com/photos/10171454/pexels-photo-10171454.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Title 5",
            des:"Hello from ",
            rating:3
        }
    ]);
    // const Ondes=()=>{
    //     setList((<Detail/>));
    // }
  return (
   <>
   <div >
    {list.map((lists)=>{
      return   <Container>
        <Wrap key={lists.id}>
            <Slider {...settings}>
            <ContentImg><img src={lists.img1} alt="img"/></ContentImg>
            <ContentImg><img src={lists.img2} alt="img"/> </ContentImg>
            <ContentImg><img src={lists.img3} alt="img"/> </ContentImg>
            </Slider>
            <ContentTitle>{lists.title}</ContentTitle>
            <ContentDes>{lists.des}</ContentDes>
            <ContentRate>{lists.rating}</ContentRate>
        </Wrap>
        <Wrap >
            <Slider {...settings}>
            <ContentImg><img src={lists.img1} alt="img"/></ContentImg>
            <ContentImg><img src={lists.img2} alt="img"/></ContentImg>
            <ContentImg><img src={lists.img3} alt="img"/> </ContentImg>
            </Slider>
            <ContentTitle>{lists.title}</ContentTitle>
            <ContentDes>{lists.des}</ContentDes>
            <ContentRate>{lists.rating}</ContentRate>
        </Wrap>
        <Wrap >
            <Slider {...settings}>
            <ContentImg><img src={lists.img1} alt="img"/> </ContentImg>
            <ContentImg><img src={lists.img2} alt="img"/></ContentImg>
            <ContentImg><img src={lists.img3} alt="img"/> </ContentImg>
            </Slider>
            <ContentTitle>{lists.title}</ContentTitle>
            <ContentDes>{lists.des}</ContentDes>
            <ContentRate>{lists.rating}</ContentRate>
        </Wrap>
        <Wrap >
            <Slider {...settings}>
            <ContentImg><img src={lists.img1} alt="img"/></ContentImg>
            <ContentImg><img src={lists.img2} alt="img"/></ContentImg>
            <ContentImg><img src={lists.img3} alt="img"/></ContentImg>
            </Slider>
            <ContentTitle>{lists.title}</ContentTitle>
            <ContentDes>{lists.des}</ContentDes>
            <ContentRate>{lists.rating}</ContentRate>
        </Wrap>

    </Container>
    })}
    </div>
   </>
  )
}

export default Listings

const Container=styled.div`
margin-top:16px;
width:100%;
height:auto;
display:flex;
flex-wrap:wrap;
justify-content:center;




`

const Wrap=styled.div`
width:250px;
border:1px solid #ccc;
margin:5px;
height:300px;
border:none;
border-radius:15px;
object-fit:contain;
margin-bottom:35px;
`
const ContentImg=styled.div`
display:flex;
align-self:center;
align-items:center;
justify-content:center;
width:250px;
height:300px;
object-fit:contain;
border-radius:15px;


img{
    object-fit:contain;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    border:1px solid #ccc;
    border-radius:15px;
}
`

const ContentTitle=styled.h5`
display:flex;
font-size:1.3rem;
font-style:bold;
`

const ContentDes=styled.p`
font-size:10px;
font-style:bold
`
const ContentRate=styled.div`
display:flex;
flex-direction:flex-start;
font-size:10px;
font-style:bold;

`