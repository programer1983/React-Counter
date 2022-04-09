import {useState} from "react"
import FComponent from "./components/FComponent"
import CComponent from "./components/CComponent"
import {CounterContext} from "./CounterContext"
import './App.css';

function App() { 
  const [counter, setCounter] = useState(0)

  const increment = () => {
    return setCounter(counter + 1)
  }

  const decrement = () => {
    return setCounter(counter - 1)
  }

  return (
    <div className="App border">
      <h1>App Content</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr></hr>
      <CounterContext.Provider 
        value={{
          counter,
          setCounter,
        }}>
         <FComponent />
           <hr></hr>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
