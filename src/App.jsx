import Home from './Pages/Home'
import Success from './Pages/Success'
import Error from './Pages/Error'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  

  return (
    <>
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/*" element={<Error/>}/>
         </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
