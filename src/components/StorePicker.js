import React, {Component, Fragment} from 'react';

class StorePicker extends Component{
  render(){
    return (
        <form className="store-selector">
          <h2>Please Enter A Store</h2>
          <input placeholder="Store Name" required/>
          <button type="submit">Visit Store -></button>
        </form>
    )
  }
}

export default StorePicker;