import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './layout/layout'
import './style/globalStyle'
import g from 'guark'


export const App = () => {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>

      </Route>
    </Routes>
  </BrowserRouter>
}
