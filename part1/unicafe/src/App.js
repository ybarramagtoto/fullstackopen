import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)


  return (
    <div>
      <Header text='give feedback'/>
      <Button text='good' onClick={handleGoodClick}/>
      <Button text='neutral' onClick={handleNeutralClick}/>
      <Button text='bad' onClick={handleBadClick}/>
      <Header text='statistics'/>

      <Statistics text='all' feedback={[good, neutral, bad]}/>
      
    </div>
  )
}

const Header = ({text}) => {
  return <h1>{text}</h1>
}

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = (props) => {
  const good = props.feedback[0]
  const neutral = props.feedback[1]
  const bad = props.feedback[2]
  const totalCount = good + neutral + bad

  if (totalCount > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text='good' value={good}/>
          <StatisticLine text='neutral' value={neutral}/>
          <StatisticLine text='bad' value={bad}/>
          <StatisticLine text='all' value={totalCount}/>
          <StatisticLine text='average' value={(props.feedback[0] - props.feedback[1])/totalCount}/>
          <StatisticLine text='positive' value={(props.feedback[0]/totalCount) * 100 + "%"} />
        </tbody>
      </table>
    )
  }

  return (
    <p>No feedback given</p>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

export default App