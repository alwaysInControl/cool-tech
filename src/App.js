import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar} from "./components";
import {
  Shop,
  ShopCategory,
  Cart,
  Login,
  Product
} from "./pages/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/headphones' element={<ShopCategory categoty='headphone'/>}/>
          <Route path='/earphones' element={<ShopCategory categoty='earphone'/>}/>
          <Route path='/accessories' element={<ShopCategory categoty='accessory'/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
