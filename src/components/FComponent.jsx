

function FComponent({counter}) {
  return (
    <div className="border">
        <h1>Function Component</h1>
        <h2>{counter}</h2>
        <hr></hr>
        <Fchild counter={counter} />
    </div>
  )
}


const Fchild = ({counter}) => {
  return (
    <div className="border">
        <h1>Function Child Component</h1>
        <h2>{counter}</h2>
    </div>
  )
}

export default FComponent