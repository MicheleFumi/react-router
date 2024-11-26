import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contacts from './pages/Contacts'
import DefaultLayout from './pages/DefaultLayout'
import Add from './pages/Add'
import SingleRecipe from './pages/SingleRecipe'
import NotFound from './pages/NotFound'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/add' element={<Add />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/about' element={<About />} />
            <Route path=':id' element={<SingleRecipe />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
