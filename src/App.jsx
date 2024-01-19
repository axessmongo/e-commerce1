import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Items from './Components/Items'
import More from './Components/More'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            {/* <Route path='/item' element={<Items />} />
            <Route path='/More.jsx' element={<More />} /> */}
           
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
