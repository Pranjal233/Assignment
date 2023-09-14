import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';
import Update from './Components/Update';
import Create from './Components/Create';


function App() {
  return (
    <div >

         <BrowserRouter>
        <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route>

   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
