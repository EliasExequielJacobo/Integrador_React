import React from 'react'
import { BrowserRouter,
         Route,
         Routes as ReactDomRoutes  
} from "react-router-dom"
import Layout from '../components/Layout/Layout'
import Home from "../pages/Home/Home"
import Ingresar from "../pages/Ingresar/Ingresar"
import Registrate from "../pages/Registrate/Registrate"
import Error404 from '../pages/Error404/Error404'
import Verify from '../pages/Verify/Verify'
import MisComprasPage from '../pages/MisCompras/MisComprasPage'
import PurchaseFormPage from '../pages/PurchaseFormPage/PurchaseFormPage'


const Routes = () => {
    return (
      <BrowserRouter>
  
          <Layout>
  
              <ReactDomRoutes>
  
                  <Route path='/' element={< Home />} />
                  <Route path='Ingresar' element={< Ingresar />} />
                  <Route path='Registrate' element={< Registrate />} />
                  <Route path='*' element={ <Error404 /> } />
                  <Route path='Verficarse' element={ <Verify /> } />
                  <Route path='MisCompras' element={ <MisComprasPage /> } />

                  <Route path='/FormularioCompra' element={ <PurchaseFormPage /> } />
                    
              </ReactDomRoutes>
  
          </Layout>
  
      </BrowserRouter>
    )
  }
  
  export default Routes