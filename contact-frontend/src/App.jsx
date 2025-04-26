import './App.css'
import ContactComponent from './components/ContactComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListContactComponent from './components/ListContactComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            <Route path='/' element = { <ListContactComponent /> }></Route>
            <Route path='/contacts' element = { <ListContactComponent />}></Route>
            <Route path='/add-contact' element = {<ContactComponent />}></Route>
            <Route path='/edit-contact/:id' element = { <ContactComponent />}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
