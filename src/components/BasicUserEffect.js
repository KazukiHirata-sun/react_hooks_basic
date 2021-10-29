import React, {useState, useEffect}from 'react'



const BasicUserEffect = () => {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState("")

  useEffect(() => {

  })

  return (
    <div>
      <button onClick={()=>{setCount(prevCount=>prevCount+1)}}>click {count}</button>
      <input type="text" value={item} onChange={env => setItem(env.target.value)}></input>
    </div>
  )
}

export default BasicUserEffect
