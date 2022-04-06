import './App.css';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Booking from './Pages/Booking/Booking/Booking';
function App() {
  return (
    <>
    {/* <BrowserRouter> */}
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes> */}

      
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/booking/:serviceId">
              <Booking></Booking>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      
      {/* </BrowserRouter> */}
    
    
      
    </>
  );
}

export default App;
