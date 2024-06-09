import {RiCake3Line} from 'react-icons/ri'
import {BiCake} from 'react-icons/bi'
import {GiWrappedSweet, GiPieSlice} from 'react-icons/gi'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
//NavLinkit on reactin omia hienouksia, mitkä lisää vielä jonkun aktiivin, jolla voi stailata.
//Kakut vie sivulle missä listattu kakut, Makeat makeat sivulle jne.
import React from 'react'

//ei a (anchor) tageja, koska sen idea on päivittää koko sivu
function Kategoriat() {
  return (
    <List>
            <SLink to = {"/"}>
            <BiCake />
            <h4>Kakut</h4>
            </SLink>            
            <SLink to = {"/listaus/piirakat"}>
            <GiPieSlice />
            <h4>Piirakat</h4>
            </SLink>
            <SLink to = {"/listaus/pikkukakut"}>
            <RiCake3Line />
            <h4>Pikkukakut</h4>
            </SLink>
            <SLink to = {"/listaus/makeat"}>
            <GiWrappedSweet />
            <h4>Makeat</h4>
            </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(36deg, rgba(73,73,73,1) 35%, rgba(49,49,49,1) 100%);
    width: 5.5rem;
    height: 5.5rem;
    cursor: pointer;
    transform: scale(1);

    h4 {
        color: white;
        font-size: 0.8rem
    }
    svg {
        color: white;
        font-size: 1.5rem;
    }

    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg {
            color: white;
        }
        h4 {
            color:white
        }
    }
`
export default Kategoriat