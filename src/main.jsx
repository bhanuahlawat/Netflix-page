import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Profile from './Profile'
import './index.css'
import {App} from './App.jsx'
// import {Practice} from './Practice.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    { <App /> }
    {/* <Practice /> */}
    {/* <Profile/> */}
  </StrictMode>,
)
