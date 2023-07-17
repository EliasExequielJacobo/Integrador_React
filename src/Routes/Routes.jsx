import React from 'react'
import { BrowserRouter,
         Route,
         Routes as ReactDomRoutes  
} from "react-router-dom"
import Layout from '../components/Layout/Layout'
import Home from "../pages/Home/Home"
import Ingresar from "../pages/Ingresar/Ingresar"
import Registrate from "../pages/Registrate/Registrate"


const Routes = () => {
    return (
      <BrowserRouter>
  
          <Layout>
  
              <ReactDomRoutes>
  
                  <Route path='/' element={< Home />} />
                  <Route path='Ingresar' element={< Ingresar />} />
                  <Route path='Registrate' element={< Registrate />} />
                  <Route path='*' element={<p>Error 404 temporal</p>} />
  
              </ReactDomRoutes>
  
          </Layout>
  
      </BrowserRouter>
    )
  }
  
  export default Routes