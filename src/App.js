import React from 'react';
import './App.css';
import USDtoVND from './components/USDtoVND';
import VNDtoUSD from './components/VNDtoUSD';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usd: 0,
      vnd: 0
    };
  }
  handleChange = (data) => {
    this.setState(data);
  };

  render() {
    return(
      <div>
        <USDtoVND onHandleChange={this.handleChange} value={this.state.usd}/>
        <VNDtoUSD onHandleChange={this.handleChange} value={this.state.vnd}/>
        <hr/>
      </div>
    );
  }
}

export default App;
