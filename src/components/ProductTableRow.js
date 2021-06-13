import React, { Component } from "react";

class ProductTableRow extends Component {
  render() {
    return (
      <tr className="App-product-table-row">
        <td>
          <span
            className={
              this.props.product.stocked ? "" : "App-product-out-of-stock"
            }
          >
            {this.props.product.name}
          </span>
        </td>
        <td>{this.props.product.price}</td>
        <td>
          <button>x</button>
        </td>
      </tr>
    );
  }
}

export default ProductTableRow;
