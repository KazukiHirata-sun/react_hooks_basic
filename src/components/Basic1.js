import React, {useState} from 'react'

const Basic1 = (props) => {
  const [count , setCount] = useState(0) 
  const clickHundler = () => {
    setCount(prevCount=>prevCount+1)
    setCount(prevCount=>prevCount+1)
  }

  return (
    <>
    <button onClick={clickHundler}>click {count}</button>
    <h1>hello {props.name}</h1>
    <h1>hello react2</h1>
    </>
  )
}

export default Basic1
