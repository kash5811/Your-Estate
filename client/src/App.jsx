import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Profile from './pages/Profile'
import SignUp from './pages/SignOut'
import Header from './assets/components/Header'
import PrivateRoute from './assets/components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdtingListing from './pages/UpdtingListing';
import Listing from './pages/Listing';
import Search from './pages/Search';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes basename = "/Your-Estate">
      <Route path="/" element = {<Home />} /> 
      <Route path="sign-in" element = {<SignIn />} /> 
      <Route path="sign-up" element = {<SignUp />} /> 
      <Route path="/about" element = {<About />} /> 
      <Route path='/search' element = {<Search />} />
      <Route path='/listing/:listingId' element = {<Listing />} />
      <Route element= {<PrivateRoute />}>
      <Route path="/profile" element = {<Profile  />} /> 
      <Route path="/create-listing" element = {<CreateListing />} /> 
      <Route path="/update-listing/:listingId" element = {<UpdtingListing />} /> 
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;