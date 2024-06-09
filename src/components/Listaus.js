import React from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../useFetch';

const Listaus = () => {
    const { kategoria } = useParams();
    const { data: resepti, virhe, ladataan } = useFetch('http://localhost:8000/reseptit/'+ { kategoria })
    return (

        <Grid>
            { ladataan && <div>Ladataan...</div>}
            { virhe && <div> { virhe } </div> }
            { resepti && (
                <Card key={resepti.id}>
                <Link to={"/resepti/" + resepti.id}>
                    <img src={resepti.image} alt="" />
                    <h4>{resepti.title}</h4>
                </Link>
            </Card>
            )}

        </Grid>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`
const Card = styled.div`
    img{
        width: 100%
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`


export default Listaus