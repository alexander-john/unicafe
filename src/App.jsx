import { useState } from 'react'

const Header = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const increaseBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }


  return (
    <div>
      <Header title='give feedback' />

      <button onClick={increaseGood}>good</button>
      <button onClick={increaseNeutral}>neutral</button>
      <button onClick={increaseBad}>bad</button>

      <Header title='statistics' />
      
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
    </div>
  )
}

export default App