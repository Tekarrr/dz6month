
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Zustand from './pages/zustand'
import Redux from './pages/redux'
import MainPage from './pages/MainPage'
import Query from './pages/Query'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path='/zustand' element={<Zustand/>}/>
        <Route path='/redux' element={<Redux/>}/>
        <Route path='/query' element={<Query/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
