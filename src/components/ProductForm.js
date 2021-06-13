import React, { Component } from "react";

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.state = {
      product: Object.assign({}, RESET_VALUES),
      errors: {}
    };
  }
  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState((prevState) => {
      prevState.product[name] = value;
      return { product: prevState.product };
    });
  }
  handleAdd(e) {
    this.props.onAdd(this.state.product);
    // reset the form values to blank after submitting
    this.setState({ product: Object.assign({}, RESET_VALUES), errors: {} });
    // prevent the form submit event from triggering an HTTP Post:
    e.preventDefault();
  }
  render() {
    return (
      <form className="App-product-form">
        <h3>Add a new product:</h3>
        <p>
          <label>
            Name:&nbsp;
            <input type="text" name="name" onChange={this.handleChange} value={this.state.product.name} />
          </label>
        </p>
        <p>
          <label>
            Category:&nbsp;
            <input type="text" name="category" onChange={this.handleChange} value={this.state.product.category} />
          </label>
        </p>
        <p>
          <label>
            Price:&nbsp;
            <input type="text" name="price" onChange={this.handleChange} value={this.state.product.price} />
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" name="stocked" onChange={this.handleChange} checked={this.state.product.stocked} />
            &nbsp;In stock?
          </label>
        </p>
        <input
          type="submit"
          value="Add product to database"
          onClick={this.handleAdd}
        />
      </form>
    );
  }
}

export default ProductForm;
