import React, { Component } from 'react';
import Result from './components/Resultado';
import Calculadora from './components/Calculadora';


class App extends Component {
  constructor() {
    super();

    this.state = {
      result: " "
    }
  }

  onClick = (button) => {
    if(button === "="){
      this.calculate()
    }

    else if(button === "C"){
      this.reset()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || " " ) + " "
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: " "
    })
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Calculadora</h1>
          <Result result={this.state.result} />
          <Calculadora onClick={this.onClick} />
        </div>
      </div>
    );
  }
}


export default App;