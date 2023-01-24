import React from 'react'

const Counter = () => {
  const [counter, setCounter] = React.useState(0)

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  const decrementCounter = () => {
    setCounter(counter - 1);
  }

  return (
    <section className="counter container border">
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="button-up" className="border" onClick={incrementCounter}> Up</button>
      <button data-testid="button-down" className="border" onClick={decrementCounter}>Down</button>
    </section>
  )
}

export default Counter