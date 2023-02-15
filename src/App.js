import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (

<div className="App">
            
               <BrowserRouter>
                  <NavBar />
                    <Routes>
                          <Route path='/' element={<ItemListContainer/>}> </Route>
                          <Route path='/competition/:competition' element={<ItemListContainer/> } ></Route>
                    </Routes>
              </BrowserRouter>
            
          
    </div>
  );
}

export default App;
