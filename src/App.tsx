import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Photography from './pages/photography/Photography'
import Video from './pages/videography'
import Audio from './pages/audiography'
import Podcast from './pages/podcast'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/photography' element={<Photography/>} />
          <Route path='/videography' element={<Video/>} />
          <Route path='/audio' element={<Audio/>} />
          <Route path='/podcast' element={<Podcast/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App