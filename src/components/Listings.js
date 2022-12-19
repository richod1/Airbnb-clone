import React,{useState} from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
            img2:"",
            img3:"",
            title:"title 1",
            des:"hello form ghana",
            rating:3
        },
        {
            id:2,
            img1:"",
            img2:"",
            img3:"",
            title:"title 2",
            des:" hello am in nigeria",
            rating:3
        },
        {
            id:3,
            img1:"",
            img2:"",
            img3:"",
            title:"title 3",
            des:"Hello form Usa",
            rating:3
        },
        {
            id:4,
            img1:"",
            img2:"",
            img3:"",
            title:"Title 4",
            des:"Hello from germany",
            rating:3
        },
        {
            id:5,
            img1:"",
            img2:"",
            img3:"",
            title:"Title 5",
            des:"Hello from ",
            rating:3
        }
    ]);
    const Ondes=()=>{
        setList(list)
    }
  return (
   <>
   <div>
    {list.map((lists)=>{
      return   <Container onClick={Ondes}>
        <Wrap key={lists.id}>
            <Slider {...settings}>
            <ContentImg>{lists.img1} </ContentImg>
            <ContentImg>{lists.img2} </ContentImg>
            <ContentImg>{lists.img3} </ContentImg>
            </Slider>
            <ContentTitle>{lists.title}</ContentTitle>
            <ContentDes>{lists.des}</ContentDes>
            <ContentRate>{lists.rating}</ContentRate>
        </Wrap>
        <Wrap onClick={Ondes}>
            <Slider {...settings}>
            <ContentImg>{lists.img1} </ContentImg>
            <ContentImg>{lists.img2} </ContentImg>
            <ContentImg>{lists.img3} </ContentImg>
            </Slider>
            <ContentTitle>{lists.title}</ContentTitle>
            <ContentDes>{lists.des}</ContentDes>
            <ContentRate>{lists.rating}</ContentRate>
        </Wrap>
        <Wrap onClick={Ondes}>
            <Slider {...settings}>
            <ContentImg>{lists.img1} </ContentImg>
            <ContentImg>{lists.img2} </ContentImg>
            <ContentImg>{lists.img3} </ContentImg>
            </Slider>
            <ContentTitle>{lists.title}</ContentTitle>
            <ContentDes>{lists.des}</ContentDes>
            <ContentRate>{lists.rating}</ContentRate>
        </Wrap>
        <Wrap onClick={Ondes}>
            <Slider {...settings}>
            <ContentImg>{lists.img1} </ContentImg>
            <ContentImg>{lists.img2} </ContentImg>
            <ContentImg>{lists.img3} </ContentImg>
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
margin:5px;
height:300px;
background:linear-gradient(purple,red);
border:1px solid #ccc;
border-radius:15px;
`
const ContentImg=styled.div`

`

const ContentTitle=styled.h5`

`

const ContentDes=styled.p`

`
const ContentRate=styled.div`


`