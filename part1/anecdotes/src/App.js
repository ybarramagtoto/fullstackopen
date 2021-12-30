import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0])

  const pickRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const increaseVote = () => {
    const copyVotes = votes;
    copyVotes[selected] += 1
    setVotes([...copyVotes])
  }

  function getMaxIndex() {
    const max = Math.max(...votes)
    const index = votes.indexOf(max)

    return index
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]}</p>
        <button onClick={increaseVote}>Vote</button>
        <button onClick={pickRandomAnecdote}>Next Anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <div>
        <p>{anecdotes[getMaxIndex()]}</p>
        <p>has {votes[getMaxIndex()]}</p>
      </div>
    </>
  )
}

export default App