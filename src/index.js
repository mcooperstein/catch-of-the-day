import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import StorePicker from './components/StorePicker';
import './css/style.css';

class App extends Component {
  render(){
    return (
      <StorePicker/>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('main'))
