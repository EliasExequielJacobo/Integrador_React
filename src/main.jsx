import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './style/GlobalSty.js'
// import { Provider } from 'react-redux'


// import store from './Redux/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <App />
      <GlobalStyles />
      
    
     {/* <Provider store={ store }>

      
     </Provider> */}

    
    


    
  </React.StrictMode>,
)
