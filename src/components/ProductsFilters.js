import React, { Component } from "react";

class ProductsFilters extends Component {
  constructor(props) {
    super(props)
    this.clickStock = this.clickStock.bind(this);
  }
  clickStock() {
    this.props.clickStock();
  }
  render() {
    return (
      <form className="App-products-filters">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={this.props.filterText}
        />
        <p>
          <input type="checkbox" checked={this.props.inStockOnly} onClick={this.clickStock} />
          &nbsp;Only show stocked products
        </p>
      </form>
    );
  }
}

export default ProductsFilters;
