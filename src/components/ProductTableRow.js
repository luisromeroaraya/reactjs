import React, { Component } from "react";

class ProductTableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    this.props.onDelete(this.props.product.id);
  }
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
          <button onClick={this.delete}>x</button>
        </td>
      </tr>
    );
  }
}

export default ProductTableRow;
