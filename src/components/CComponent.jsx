import React from "react"


class CComponent extends React.Component {
    render(){
        return (
            <div className="border">
                <h1>Class Component</h1>
                {this.props.counter}
                <hr></hr>
            </div>
        )
    }
}

export default CComponent