import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import animateursData from './data.json';
import Animateurs1 from './Animateurs1.jsx';
import FormSeminaire from "./FormSeminaire.jsx"
import 'bootstrap/dist/css/bootstrap.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    {/*<Animateurs1 animateurs={animateursData.animateurs} />*/}
    <FormSeminaire/>
  </StrictMode>,
)
