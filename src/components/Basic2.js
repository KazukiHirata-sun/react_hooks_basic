import React, {useState} from 'react'

function Basic2() {
  const [products, setProducts ] = useState([]) 

  const newProducts = () => {
    setProducts([...products, {
      id: products.length,
      name: "Hello Resct"
    }]
    )
  }

  return (
    <>
    <button onClick = {newProducts}>Add new product</button>

    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name} id:{product.id}</li>
      ))}
    </ul>

      
    </>
  )
}

export default Basic2
