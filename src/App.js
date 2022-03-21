 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar,Container,Button,Form} from 'react-bootstrap'

 import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { CoinList } from './Components/CoinList';
import { CoinSingle } from './Components/CoinSingle';
import {SearchForm} from './Components/SearchForm'
import { useState } from 'react';

function App() {

  const[searchformvalue,setSearchformvalue]=useState("")

 
  function inputCoin(e){

    console.log( e.target.value)
  

    setSearchformvalue(e.target.value)
    

      
  }

  return (
    <>
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">BCD Financial</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
      
  
        <Nav.Link href="#" disabled>
          GitHub
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <SearchForm method={inputCoin}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>


<Router>
<Routes>
   <Route path="/" element={<CoinList searchvalue={searchformvalue}/>} />
   <Route path="/Single" element={<CoinSingle/>} />
 


   </Routes>
</Router>

</>

  );
}

export default App;
