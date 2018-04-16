import React, { Component } from "react";
import PropTypes from 'prop-types';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends Component {
  constructor(){
    super();

    this.state = {
      fishes: {},
      order: {},
    }
  }
  static propTpyes = {
    match: PropTypes.object
  }
  componentDidMount(){
    // first reinstate our localStorage data
    const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
    console.log(localStorageRef);
    if(localStorageRef){
      this.setState({order: JSON.parse(localStorageRef)});
    }
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }
  componentWillUnmount(){
    // removes store ref when leaving App
    base.removeBinding(this.ref);
  }
  componentDidUpdate(){
    // console.log(this.state.order)
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
  }
  addFish = (fish) => {
    // 1. Take a copy of the existing state
    const fishes = {...this.state.fishes};
    // 2. Add new fish to fishes object and give each fish unique key using timestamp
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set new fishes object to state
    this.setState({
      fishes: fishes
    })
  }
  updateFish = (key,updatedFish) => {
    // 1. Take a copy of the current state
    const fishes = {...this.state.fishes};
    // 2. Update that state
    fishes[key] = updatedFish;
    // 3. Set that to state
    this.setState({fishes});
  }
  deleteFish = (key) => {
    // 1. Take a copy of the current state
    const fishes = {...this.state.fishes};
    // 2. Update that state -> need to set to null to also delete from firebase
    fishes[key] = null;
    // 3.
    this.setState({fishes});
  }
  loadSampleFishes = () => {
    this.setState({fishes:sampleFishes})
  }
  addToOrder = (key) => {
    // 1. take a copy of state
    const order = {...this.state.order}
    // 2. add to order or update quantity
    order[key] = order[key]+1 || 1;
    //3. call setState to update state object
    this.setState({order});
  }
  removeFromOrder = (key) => {
    // 1. take a copy of state
    const order = {...this.state.order}
    // 2. remove from order or update quantity
    delete order[key]
    //3. call setState to update state object
    this.setState({order});
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline='The Fish "Marc"-it'/>
          <ul className="fishes">
              {Object.keys(this.state.fishes).map(key =>
                <Fish key={key} details={this.state.fishes[key]} index={key} addToOrder={this.addToOrder}/>
              )}
          </ul>
        </div>
        <Order removeFromOrder={this.removeFromOrder} fishes={this.state.fishes} order={this.state.order}/>
        <Inventory storeId={this.props.match.params.storeId} deleteFish={this.deleteFish} updateFish={this.updateFish} addFish={this.addFish} loadFishes={this.loadSampleFishes} fishes={this.state.fishes}/>
      </div>
    );
  }
}

export default App;
