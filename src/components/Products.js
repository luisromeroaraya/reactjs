import React, { Component } from "react";
import ProductsFilters from "./ProductsFilters.js";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable.js";

var products = {
  1: {
    id: 1,
    category: "Musical Instruments",
    price: "$500",
    stocked: true,
    name: "Clarinet",
  },
  2: {
    id: 2,
    category: "Musical Instruments",
    price: "$5,000",
    stocked: true,
    name: "Cello",
  },
  3: {
    id: 3,
    category: "Musical Instruments",
    price: "$11,000",
    stocked: false,
    name: "Fortepiano",
  },
  4: {
    id: 4,
    category: "Furniture",
    price: "$800",
    stocked: true,
    name: "Chaise Lounge",
  },
  5: {
    id: 5,
    category: "Furniture",
    price: "$1,300",
    stocked: false,
    name: "Dining Table",
  },
  6: {
    id: 6,
    category: "Furniture",
    price: "$100",
    stocked: true,
    name: "Bean Bag",
  },
};

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      filterText: "",
      inStockOnly: false,
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleFilter(filterInput) {
    this.setState(filterInput);
  }
  handleAdd(product) {
    this.setState((prevState) => {
      if (!product.id) {
        product.id = Object.keys(prevState.products).length + 1;
      }
      let products = prevState.products;
      products[product.id] = product;
      return { products };
    });
  }
  handleDelete(id) {
    this.setState((prevState) => {
      let products = prevState.products;
      delete products[id];
      return {products};
    });
  }
  render() {
    return (
      <div className="App-products">
        <h2>Products</h2>
        <ProductsFilters
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          handleFilter={this.handleFilter}
        />
        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onDelete={this.handleDelete}
        />
        <ProductForm onAdd={this.handleAdd} />
      </div>
    );
  }
}

export default Products;
