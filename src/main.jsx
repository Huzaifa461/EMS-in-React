import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuthContext.jsx'
import TaskContetx from './context/TaskContetx.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthContext>
    <TaskContetx>
    <App/>
    </TaskContetx>
   </AuthContext>
  </StrictMode>,
)
