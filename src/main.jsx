import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {DataLayer} from './components/DataLayer'
import reducer, { initialState } from './components/reducer.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataLayer initalState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
)
