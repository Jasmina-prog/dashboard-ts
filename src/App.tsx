import { getCarts } from './api/carts';
import { getProducts } from './api/products';
import { getUsers } from './api/users'
import './App.css'

function App() {

  console.log(getUsers());
  getProducts()
  getCarts()
  return (
    <>    
    </>
  )
}

export default App
