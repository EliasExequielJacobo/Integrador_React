import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './style/GlobalSty.js'
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'
import { persistor } from './Redux/store.js'
import { PersistGate } from "redux-persist/integration/react";




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      
      <Provider store={ store }>
      <PersistGate persistor={ persistor }>
       <App />
       <GlobalStyles />
       </PersistGate>
      </Provider>

      
     
</React.StrictMode>,
)
