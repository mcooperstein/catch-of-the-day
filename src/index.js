import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import StorePicker from './components/StorePicker';
// import App from './components/App';
import Router from './components/Router';
import './css/style.css';

/*class App extends Component {
  render(){
    return (
      <StorePicker/>
    )
  }
}*/

ReactDOM.render(<Router />, document.getElementById('main'))
