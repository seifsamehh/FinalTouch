import React , {useState, useEffect} from 'react'
import {Route,useLocation} from "react-router-dom";
import SlideRoutes from 'react-slide-routes';
import { Offline, Online } from "react-detect-offline";
import './App.css'
import { About, AboutAr, Administrative, AdministrativeAr, Commercial, CommercialAr, Contact, ContactAr, Furniture, FurnitureAr, Home, HomeAr, Hotel, HotelAr, Landscape, LandscapeAr, Residential, ResidentialAr, Work, WorkAr } from './components';
function App() {
    const location = useLocation();
    // loading
    const [loading , setLoading] = useState(false)
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },4000)
    },[])
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  return (
    <>
    {
      loading?
      <h1 className='btn-shine'>Final Touch</h1>
      :
      <>
      <Online>
        <main>
          <SlideRoutes location={location} animation='slide' duration={500}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/work' element={<Work/>}/>
            <Route path='/Residential' element={<Residential/>}/>
            <Route path='/Commercial' element={<Commercial/>}/>
            <Route path='/Hotel' element={<Hotel/>}/>
            <Route path='/Administrative' element={<Administrative/>}/>
            <Route path='/Landscape' element={<Landscape/>}/>
            <Route path='/Furniture' element={<Furniture/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/homeAr' element={<HomeAr/>}/>
            <Route path='/aboutAr' element={<AboutAr/>}/>
            <Route path='/workAr' element={<WorkAr/>}/>
            <Route path='/ResidentialAr' element={<ResidentialAr/>}/>
            <Route path='/CommercialAr' element={<CommercialAr/>}/>
            <Route path='/AdministrativeAr' element={<AdministrativeAr/>}/>
            <Route path='/HotelAr' element={<HotelAr/>}/>
            <Route path='/LandscapeAr' element={<LandscapeAr/>}/>
            <Route path='/FurnitureAr' element={<FurnitureAr/>}/>
            <Route path='/ContactAr' element={<ContactAr/>}/>
          </SlideRoutes>
        </main>
      </Online>
      <Offline>
      <div className='offline projects'>
        <h1>Your Are Offline</h1>
        <div className="overlay"></div>
      </div>
      </Offline>
      </>
    }
    </>
  )
}

export default App
