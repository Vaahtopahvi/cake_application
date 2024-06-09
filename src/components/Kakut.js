//täällä on kortteja erilaisista kakuista. Juustokakut, Täytekakut, Bento-kakut... 
import React from 'react'
import {Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import styled from 'styled-components'
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom'

const Kakut = (props) => {
    const resepti = props.resepti
  return (
    <div className='kakut'>
      <Wrapper>
        <h3>{props.title}</h3>
        <Splide options = {{
          perPage: 3,
          arrows: false,
          preloadPages: resepti.length,
          pagination: false,
          drag: 'free',
          gap: '5rem'
        }}>
        {resepti.map((reseptit) => {
          return(
            <SplideSlide key={reseptit.id}>
              <Card>
                <Link to = {'/reseptit/' + reseptit.id}>
                  <Gradient />
                  <p>{reseptit.title}</p>
                  <CardMedia component='img'
                  image = { reseptit.image }
                  alt = { reseptit.title } />
                </Link>
              </Card>
            </SplideSlide>
          )
        })}
        </Splide>
      </Wrapper>
    {/*<div className='kakut'>
        {resepti.map((reseptit) => (
        <div className="resepti" key={reseptit.id}>          
          <img src={reseptit.image} height={200} width={200} alt={reseptit.title} />
          <h2>{reseptit.title}</h2>
          <p>{reseptit.ohjeet}</p>

        </div>
      ))}*/}
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0 rem
`;

const Card = styled.div`


  img {
    border-radius: 2rem;
    postion: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 0%;
    bottom: 0%;
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Gradient = styled.div`
  z-index: 3;
  border-radius: 2rem;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Kakut