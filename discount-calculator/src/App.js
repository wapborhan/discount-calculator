import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      price: 0,
      discount1: 0,
      total: 0,
      finalPrice: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  /* update values on change */
  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        this.setState({
          total: this.totalDiscount(),
          finalPrice: this.getFinalPrice(),
        });
      }
    );
  }

  /* calculate and return total discount */
  totalDiscount() {
    return Math.abs((1 - this.state.discount1 / 100 - 1) * 100).toFixed(2);
  }

  getFinalPrice() {
    return (
      this.state.price -
      (this.state.price * this.totalDiscount()) / 100
    ).toFixed(2);
  }

  render() {
    return (
      <div>
        <h2>Discount Calculator</h2>
        <h1>
          {this.state.price}$ - {this.state.total}% = {this.state.finalPrice}$
        </h1>
        <label>
          Price : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
            type="number"
            step="0.05"
            min="0"
          />
          $
        </label>
        <br />
        <label>
          Discount 1 :
          <input
            name="discount1"
            value={this.state.discount1}
            onChange={this.handleChange}
            type="number"
            min="0"
          />
          %
        </label>
      </div>
    );
  }
}
export default App;
