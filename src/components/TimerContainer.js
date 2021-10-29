import React, {useState} from 'react'
import Timer from './Timer'

const TimerContainer = () => {

  const [display, steDisplay] = useState(true)
  return (
    <div>
      <button onClick={()=>steDisplay(!display)}>Switch Timer</button>
      { display && <Timer /> }
    </div>
  )
}

export default TimerContainer
