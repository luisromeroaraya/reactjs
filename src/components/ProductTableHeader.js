import React, { Component } from "react";

class ProductTableHeader extends Component {
  render() {
    let currentSort = this.props.currentSort.column === this.props.column ? this.props.currentSort.direction : false;
    return (
      <th className="App-product-table-header">
        {this.props.column}
        <button className={currentSort === 'asc' ? 'App-product-table-header-current' : ''}>&#x25B2;</button>
        <button className={currentSort === 'desc' ? 'App-product-table-header-current' : ''}>&#x25BC;</button>
      </th>
    );
  }
}

export default ProductTableHeader;
