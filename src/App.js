
import Header from "./components/Header";
import Footer from './components/Footer'
import Details from './components/Details'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { container } from "react-bootstrap";

function App() {

  

  return (
    <Router>

      <Header/>

      <main className='py-3'>

      <container>

        <Routes>

          <Route path='/' element={<Home/>}  />
          <Route path='/details/:id' element={<Details/>}  />


        </Routes>

      </container>

      </main>

      <Footer/>

    

      </Router>
  );
}

export default App;
