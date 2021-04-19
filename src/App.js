import './App.css';
import React from 'react'

class Square extends React.Component {
 
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.value}
      </button>
    )
  }
}

class Borad extends React.Component {

  constructor(props){
    super(props)
    console.log(props);
  }

  state = { title: 'hello2' }

  renderSquare = (i)=> {
    return <Square  value={i} onClick={this.showThis}/>
  }

  showThis = (e) => {
    console.log(this);
    alert(e)
  }

  render() {
    return (
      <div>
        <div style={{ fontSize: '20px' }}>{this.props.title}</div>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}




function App() {

  const o = {title:'hello',subtitle:' world'}

  return <Borad {...o} />
}

export default App;
