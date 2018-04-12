import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import StorePicker from './components/StorePicker';
import App from './components/App';
import './css/style.css';

/*class App extends Component {
  render(){
    return (
      <StorePicker/>
    )
  }
}*/

ReactDOM.render(<App />, document.getElementById('main'))
