import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name:PropTypes.string,
      price:PropTypes.number,
      desc:PropTypes.string,
      status:PropTypes.string
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func
  }
  handleChange = (event) => {
    console.log(event.currentTarget);
    // update that fish
    // 1. Take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    }
    this.props.updateFish(this.props.index, updatedFish);
  }
  render(){
    return (
      <div className="fish-edit">
        <input name="name" value={this.props.fish.name} onChange={this.handleChange} type="text" placeholder="Name"/>
        <input name="price" value={this.props.fish.price} onChange={this.handleChange} type="text" placeholder="Price"/>
        <select name="status" value={this.props.fish.status} onChange={this.handleChange}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" value={this.props.fish.desc} onChange={this.handleChange} type="text" placeholder="Desc"/>
        <input name="image" value={this.props.fish.image} onChange={this.handleChange} type="text" placeholder="Image"/>
        <button onClick={()=>this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>
    )
  }
}

export default EditFishForm;
