import { useContext } from "react"
import {CounterContext} from "../CounterContext"

function FComponent({counter}) {
  const value = useContext(CounterContext)

  return (
    <div className="border">
        <h1>Function Component</h1>
        <h2>{counter}</h2>
        <h2>{value}</h2>
        <hr></hr>
        <Fchild counter={counter} />
    </div>
  )
}


const Fchild = ({counter}) => {
  const value = useContext(CounterContext)
  return (
    <div className="border">
        <h1>Function Child Component</h1>
        <h2>{counter}</h2>
        <h2>{value}</h2>
    </div>
  )
}

export default FComponent