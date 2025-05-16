import React from 'react'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Index from './Pages/Home'
import About from './Pages/About'
import Shop from './Pages/Shop'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Cart from './Pages/Cart'
import Shop2 from './Pages/Shop2'
import Product1 from './Pages/Product1'
import Product2 from './Pages/Product2'
import Product3 from './Pages/Product3'
import Nike from './Pages/Nike'

function App() {
 
  
  
  
  return (
   <BrowserRouter>
   <Routes>
 

    <Route path='/' element={<Index />} />
    <Route path='/Shop' element={<Shop/>}/> 
    <Route path='/Shop2' element={<Shop2/>}/>
    <Route path='/product1' element={<Product1/>}/>
    <Route path='/product2' element={<Product2/>}/>
    <Route path='/product3' element={<Product3/>}/>
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


