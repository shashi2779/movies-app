
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import Favourites from './components/Favourites';

import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<><div><Banner/> <Movies /></div></>}/>
        <Route exact path='/favourites' element={ <Favourites/>}/>
      </Routes>

   </BrowserRouter>


  );
}

export default App;
