import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {  fetchingnews} from './Store/slices/NewsSlice';
import { useEffect, useState } from 'react';

function App() {

  const [first, setfirst] = useState('light')
  const data = useSelector((state) => state.NEWS);
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(fetchingnews());
    
  }, [dispatch, data.page,data.category]);

  
  return (
    <>

 

      <BrowserRouter>
        <Navbar first={first} setfirst={setfirst}  />
        <Routes>

          <Route exact key="general" path='/' element={<Home first={first} category='general' />} />
          <Route exact key="entertainment" path='/entertainment' element={<Home  first={first} category='entertainment'/>}/>
          <Route exact key="business'"path='/business' element={<Home  first={first} category='business'/>}/>
          <Route exact key="health" path='/health' element={<Home  first={first} category='health'/>}/>
          <Route exact key="general" path='/general' element={<Home  first={first} category='general'/>}/>
          <Route exact key="science" path='/science' element={<Home  first={first} category='science'/>}/>
          <Route exact key="sports'"path='/sports' element={<Home  first={first} category='sports'/>}/>
          <Route exact key="technology" path='/technology' element={<Home  first={first} category='technology'/>}/>

        </Routes>


      </BrowserRouter>



    </>
  );
}

export default App;
