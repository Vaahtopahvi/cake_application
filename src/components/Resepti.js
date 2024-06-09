import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import useFetch from '../useFetch';

function Resepti() {
  
  const { id } = useParams();
  const { data: resepti} = useFetch(`http://localhost:8000/reseptit/${id}`);

  const [ActiveTab, setActiveTab] = useState("ohjeet");

  console.log("resepti",resepti)
  return (
    <DetailWrapper>
      <div>
        <h2>{resepti?.title}</h2>
        <img height={400} width={"auto"} src={resepti?.image} alt = "" />
      </div>
      <Info>
        <Button className={ActiveTab === 'ohjeet' ? 'active' : ''} onClick={() => setActiveTab('ohjeet')}>
          Ohjeet
        </Button>
        <Button className={ActiveTab === 'ainesosat' ? 'active' : ''} onClick={() => setActiveTab('ainesosat')}>
          Ainesosat
        </Button>

        {/*Jos ohjeet tab on aktiivnen ja siellä on tekstiä*/}
        {ActiveTab === 'ohjeet' && (
          <div>
            <h3>{resepti?.ohjeet}</h3>
          </div>
        )}
        {ActiveTab === 'ainesosat' && (
          <ul>
              <li key={resepti?.id}>{resepti?.ainekset}</li>
          </ul>
        )}

      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(36deg, rgba(73,73,73,1) 35%, rgba(49,49,49,1) 100%);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem
    line-height: 2.5rem
  }
  ul {
    margin-top: 2rem
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`
const Info = styled.div`
 margin-left: 10rem;
 `

export default Resepti