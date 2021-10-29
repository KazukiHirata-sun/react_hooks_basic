import React, {useState} from 'react'

function Basic1_other() {
  const [products , setProcuts] = useState({name: "", price: ""}) 

  return (
    <>
      <form>
        <input type="text" value={products.name}
        onChange ={env => setProcuts({...products, name: env.target.value})} />

<input type="text" value={products.price}
        onChange ={env => setProcuts({...products, price: env.target.value})} />

      </form>

      <h3>Product name is {products.name}</h3>
      <h3>Product price is {products.price}</h3>
      
    </>
  )
}

export default Basic1_other
