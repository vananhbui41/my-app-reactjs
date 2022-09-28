import React, {Component} from 'react';
import './App.css';

const Notification = (props) => {
  if (props.isShow) {
    return (
      <ul>
        <li>News</li>
      </ul>
    )
  } else {
    return null
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isShowNotification: false
    };
  }
  render() {
    const {isShowNotification} = this.state;
    return(
      <div>
        <p>AAA</p>
        <button onClick={() => {
          this.setState({isShowNotification: !isShowNotification})
        }}>
          {!isShowNotification ? 'Show' : 'Hide'}
        </button>
        <Notification isShow = {isShowNotification}/>
      </div>
    );
  }
}

export default App;
