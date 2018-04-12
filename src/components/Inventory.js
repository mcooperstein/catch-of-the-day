import React, {Component, Fragment} from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends Component {
  render(){
    return(
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadFishes}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
