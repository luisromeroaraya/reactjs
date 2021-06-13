import React, { Component } from "react";

class ProductTableHeader extends Component {
  constructor(props) {
    super(props);
    this.handleSort = this.handleSort.bind(this);
  }
  handleSort(e) {
    this.props.onSort(this.props.column, e.target.name);
  }
  render() {
    let currentSort =
      this.props.currentSort.column === this.props.column
        ? this.props.currentSort.direction
        : false;
    return (
      <th className="App-product-table-header">
        {this.props.column}
        <button
          className={
            currentSort === "asc" ? "App-product-table-header-current" : ""
          }
          name="asc"
          onClick={this.handleSort}
        >
          &#x25B2;
        </button>
        <button
          className={
            currentSort === "desc" ? "App-product-table-header-current" : ""
          }
          name="desc"
          onClick={this.handleSort}
        >
          &#x25BC;
        </button>
      </th>
    );
  }
}

export default ProductTableHeader;
