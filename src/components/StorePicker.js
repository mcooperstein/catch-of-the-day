import React, {Component, Fragment} from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component{

  myInput = React.createRef();

  goToStore = (event) => {
    // 1. Stop form from submitting
    event.preventDefault();
    // 2. Get Text from input
    let inputValue = this.myInput.value.value;
    // 3. Change page to /store/:inputValue
    this.props.history.push(`/store/${inputValue}`);
  }
  render(){
    return (
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input placeholder="Store Name" defaultValue={getFunName()} required ref={this.myInput}/>
          <button type="submit">Visit Store -></button>
        </form>
    )
  }
}

export default StorePicker;
