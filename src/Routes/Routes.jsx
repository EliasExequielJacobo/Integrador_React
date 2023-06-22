import React from 'react'
import { BrowserRouter,
         Route,
         Routes as ReactDomRoutes  
} from "react-router-dom"
import Layout from '../components/Layout/Layout'
import Home from "../pages/Home/Home"
import AboutUs from "../pages/AboutUs/AboutUs"
import ContactUs from "../pages/ContactUs/ContactUs"


const Routes = () => {
    return (
      <BrowserRouter>
  
          <Layout>
  
              <ReactDomRoutes>
  
                  <Route path='/' element={< Home />} />
                  <Route path='AboutUs' element={< AboutUs />} />
                  <Route path='ContactUs' element={< ContactUs />} />
                  <Route path='*' element={<p>Error 404 temporal</p>} />
  
              </ReactDomRoutes>
  
          </Layout>
  
      </BrowserRouter>
    )
  }
  
  export default Routes