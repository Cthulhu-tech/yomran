import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/layout'
import { Home } from './view/home'
import { Room } from './view/room'
import './style/globalStyle.scss'

export const App = () => {

  return <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home/>}/>
        <Route path='/room/:roomName' element={<Room/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}
