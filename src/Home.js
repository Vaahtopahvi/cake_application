import React, { useEffect } from "react";
import Kategoriat from "./components/Kategoriat";
import Kakut from "./components/Kakut";
//import Kortit from "./components/Kortit";
import useFetch from "./useFetch";


const Home = () => {
  const { data: resepti, ladataan, virhe } = useFetch('http://localhost:8000/reseptit')

  return (
    <div className="home">
      {/*<Kortit resepti={resepti} />  */}
        <Kategoriat resepti = { resepti }/> 
        { virhe && <div> { virhe } </div>}
        { ladataan && <div>Ladataan...</div>} {/* jos tietojen lataamisessa kestää niin näytetään "Ladataan.." */}
        { resepti && <Kakut resepti={resepti} title = 'Suosikit' />} {/* jos resepti on false, niin toista ehtoa ei suoriteta. jos true, niin ladataan komponentti (Logical and)*/}
        { resepti && <Kakut resepti={resepti.filter((category) => category.kategoria === 'kakut')} title='Kakut ja kakkupohjat'/> }
    </div>
  )
};

export default Home;