
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Index from './Pages/Home'
import About from './Pages/About'
import Shop from './Pages/Shop'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Cart from './Pages/Cart'
import Shop2 from './Pages/Shop2'
import CombinedProductPage from './Pages/Product1'

import Nike from './Pages/Nike'

function App() {
 
  
  
  
  return (
   <BrowserRouter>
   <Routes>
 

    <Route path='/' element={<Index />} />
    <Route path='/Shop' element={<Shop/>}/> 
    <Route path='/Shop2' element={<Shop2/>}/>
    <Route path="/product1/:id" element={<CombinedProductPage />} />
     <Route path='Nike' element={<Nike/>} />
     <Route path='/Blog' element={<Blog/>}/>
     <Route path='/About' element={<About/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     <Route path='Cart' element={<Cart/>} />
     


   </Routes>
   </BrowserRouter>
  )
}

export default App;


