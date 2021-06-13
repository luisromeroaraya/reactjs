import React, { Component } from "react";

class ProductsFilters extends Component {
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
          <input type="checkbox" checked={this.props.inStockOnly} />
          &nbsp;Only show stocked products
        </p>
      </form>
    );
  }
}

export default ProductsFilters;
