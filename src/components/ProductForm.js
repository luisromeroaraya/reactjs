import React, { Component } from "react";

class ProductForm extends Component {
  render() {
    return (
      <form className="App-product-form">
        <h3>Add a new product:</h3>
        <p>
          <label>
            Name:&nbsp;
            <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Category:&nbsp;
            <input type="text" name="category" />
          </label>
        </p>
        <p>
          <label>
            Price:&nbsp;
            <input type="text" name="price" />
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" name="stocked" />
            &nbsp;In stock?
          </label>
        </p>
        <input type="submit" value="Add product to database" />
      </form>
    );
  }
}

export default ProductForm;
