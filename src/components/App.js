import React, { Component } from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends Component {
  constructor(){
    super();

    this.state = {
      fishes: {},
      order: {},
    }
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
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory addFish={this.addFish} loadFishes={this.loadSampleFishes}/>
      </div>
    );
  }
}

export default App;
