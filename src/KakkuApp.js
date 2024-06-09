import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Listaus from './components/Listaus';
import NavBar from './components/NavBar';
import Resepti from './components/Resepti';
import Toive from './components/Toive';

function KakkuApp() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes> 
          <Route exact path='/' element={<Home />}> </Route>
          <Route path='/listaus/:kategoria' element = { <Listaus /> }> </Route> {/* kategorian sijaan id?*/}
          <Route path='/reseptit/:id' element = { <Resepti /> }> </Route> 
          <Route path='/toive' element = { <Toive />}> </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default KakkuApp;