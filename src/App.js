import './App.css';
import Agbeke from './agbeke';
import Home from './Homepage';
import About from  './about';
import Services from './services';
import { Route, Switch, Routes,  } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'




function App() {
  return (

    <div className="App">

      <div>
        <Agbeke></Agbeke>
        {/* <Services></Services>
        <Home></Home> */}
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>


        </Routes>
      </div>

    </div>


  );
}

export default App;
