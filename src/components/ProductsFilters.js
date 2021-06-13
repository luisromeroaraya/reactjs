import React, { Component } from "react";

class ProductsFilters extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log(e);
    const value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
    const name = e.target.name;
    this.props.handleFilter({[name]: value});
  }
  render() {
    return (
      <form className="App-products-filters">
        <input
          type="text"
          name="filterText"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleChange}
        />
        <p>
          <input
            type="checkbox"
            name="inStockOnly"
            checked={this.props.inStockOnly}
            onChange={this.handleChange}
          />
          &nbsp;Only show products in stock
        </p>
      </form>
    );
  }
}

export default ProductsFilters;
