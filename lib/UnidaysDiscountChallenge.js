import React, { Component } from "react";

/*This component class would be more useful than the alternative version because it has
the ability to retain the basket values imbetween page rerenders and after the user leaves
the page*/
class UnidaysDiscountChallenge extends Component {
  constructor(props) {
    super();
    this.items = props.items;
    this.state = { basket: [] };
    this.addToBasket = this.addToBasket.bind(this);
    this.calculateTotalBeforeDiscount =
      this.calculateTotalBeforeDiscount.bind(this);
    this.calculateDiscount = this.calculateDiscount.bind(this);
    this.deliveryFee = this.deliveryFee.bind(this);
    this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
    this.clearBasket = this.clearBasket.bind(this);
    this.calculateTotalWithoutDelivery =
      this.calculateTotalWithoutDelivery.bind(this);
  }

  //Runs once the component is rendered
  componentDidMount() {
    this.getItems();
  }

  getItems() {
    //Retrieves basket from local storage
    var basket =
      process.browser && JSON.parse(localStorage.getItem("basket"))
        ? JSON.parse(localStorage.getItem("basket"))
        : [];
    //Sorts all items in the basket alphabetically by product name
    basket = basket.sort(function (a, b) {
      if (a.product < b.product) {
        return -1;
      }
      if (a.product > b.product) {
        return 1;
      }
      return 0;
    });

    //Sets the component state to the basket found in local storage
    this.setState({ basket: basket });
  }

  //Empties the users basket
  clearBasket() {
    if (process.browser) {
      localStorage.setItem("basket", JSON.stringify({}));
    }
    this.setState({ basket: {} });
  }

  //Passed in an item object to add it to the basket
  //Accepts parameter method so that amount of items in basket can be increased and decreased
  addToBasket(item, method) {
    const basket =
      process.browser && JSON.parse(localStorage.getItem("basket"))
        ? JSON.parse(localStorage.getItem("basket"))
        : [];
    const basketItem = basket.find((e) => e.product === item.product);
    if (method === "add") {
      if (basketItem) {
        basketItem.quantity++;
      } else {
        //If the basket item isn't there already it will add it to the basket array
        basket.push({
          product: item.product,
          quantity: 1,
        });
      }
    } else if (method === "minus") {
      //Decreases the amount of that item in the basket
      basketItem.quantity--;
      //No additional checks as the decrease button will only appear on screen if it is already in the basket array
    }
    //localStorage will only be accessible in the browser
    if (process.browser) {
      //Updates the local storage to the new basket value
      localStorage.setItem("basket", JSON.stringify(basket));
    }
    //Updates the state of the component to the new basket value
    this.setState({ basket: basket });
  }

  //Calculates the total value of the items without discounts applied
  calculateTotalBeforeDiscount() {
    //Loops through all the items in the basket, gets their price from the items array and accumulates it
    var total = this.state.basket.reduce((acc, item) => {
      var add =
        item.quantity *
        this.items.find((e) => e.product === item.product).price;
      return acc + add;
    }, 0);
    return total;
  }

  //Calculates how much the user saves through discounts
  calculateDiscount() {
    //Accumalates the discounts for each item in the basket
    var totalDiscount = this.state.basket.reduce((acc, item) => {
      var basketItem = this.items.find((e) => e.product === item.product);
      //If items required is equal to 0 there are no deals available for the product so discount is nothing
      if (basketItem.deal.items_required === 0) {
        var discount = 0;
      } else {
        var remainder = item.quantity % basketItem.deal.items_required;
        var leftOver = item.quantity - remainder;
        var discount =
          (leftOver / basketItem.deal.items_required) *
          basketItem.deal.discount;
      }
      return acc + discount;
    }, 0);

    return totalDiscount;
  }

  //Calculates how much the user actually has to pay excluding delivery
  calculateTotalWithoutDelivery() {
    return this.calculateTotalBeforeDiscount() + this.calculateDiscount();
  }

  //Calculates whether the user needs to pay delivery
  deliveryFee() {
    const totalWithoutDelivery = this.calculateTotalWithoutDelivery();
    //If the basket is empty or the total is bigger than 50 delivery fee is nothing
    if (totalWithoutDelivery >= 50 || totalWithoutDelivery === 0) {
      return 0;
    }
    return 7;
  }

  //Adds the total to the delivery fee
  calculateTotalPrice() {
    return this.calculateTotalWithoutDelivery() + this.deliveryFee();
  }

  //Allows me to use the methods in the class by referencing their key
  render() {
    return this.props.children({
      addToBasket: this.addToBasket,
      myItems: this.state.basket,
      calculateTotalBeforeDiscount: this.calculateTotalBeforeDiscount,
      calculateDiscount: this.calculateDiscount,
      calculateTotalPrice: this.calculateTotalPrice,
      deliveryFee: this.deliveryFee,
      clearBasket: this.clearBasket,
      calculateTotalWithoutDelivery: this.calculateTotalWithoutDelivery,
    });
  }
}

export default UnidaysDiscountChallenge;
