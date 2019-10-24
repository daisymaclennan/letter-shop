import items from './items'

import React, { Component } from 'react'

class UnidaysDiscountChallenge extends Component{
  constructor(items){
    super()
    this.items = items
    this.state = {basket: []}
    this.addToBasket = this.addToBasket.bind(this)
    this.calculateSubTotal = this.calculateSubTotal.bind(this)
    this.calculateDiscount = this.calculateDiscount.bind(this)
    this.deliveryFee = this.deliveryFee.bind(this)
    this.calculateTotalPrice = this.calculateTotalPrice.bind(this)
  }

  //Runs once the component is rendered
  componentDidMount(){
    this.getItems()
  }

  getItems(){
    //Retrieves basket from local storage
    var basket = JSON.parse(localStorage.getItem('basket')) || []
    //Sorts all items in the basket alphabetically by product name
    basket = basket.sort(function(a, b){
      if(a.product < b.product){return -1}
      if(a.product > b.product){return 1}
      return 0
    })
    //Sets the component state to the basket found in local storage
    this.setState({basket: basket})
  }

  //Passed in an item object to add it to the basket
  //Accepts parameter method so that amount of items in basket can be increased and decreased
  addToBasket(item, method){
    const basket = JSON.parse(localStorage.getItem('basket')) || []
    console.log("Original basket", basket)
    const basketItem = basket.find(e => e.product === item.product)
    if(method === "add"){
      if(basketItem){
        basketItem.quantity++
      }else{
        basket.push({
          product: item.product,
          quantity: 1
        })
      }
    }else if(method === "minus"){
      basketItem.quantity--
    }
    //Updates both the local storage and the state
    if(process.browser){
      localStorage.setItem('basket', JSON.stringify(basket))
    }
    this.setState({basket: basket})
  }

  //Calculates the total value of the items without discounts applied
  calculateSubTotal(){
    var total = 0
    //Loops through all the items in the basket, gets their price from the items array and accumulates it
    this.state.basket.map(item => {
      var add = item.quantity * items.find(e => e.product === item.product).price
      total += add
    })
    return total
  }

  //Calculates how much the user saves through discounts
  calculateDiscount(){
    var totalDiscount = 0
    //Loops through items in the basket, finds them in the items array calculates how many items are eligible for the deal and calculates the discount
    this.state.basket.map(item => {
      var basketItem = items.find(e => e.product === item.product)
      if(basketItem.deal.items_required === 0){
        var discount = 0
      }else{
        var remainder = item.quantity % basketItem.deal.items_required
        var leftOver = item.quantity - remainder
        var discount = leftOver / basketItem.deal.items_required * basketItem.deal.discount
      }
      totalDiscount += discount
    })
    return totalDiscount
  }

  //Calculates how much the user actually has to pay excluding delivery
  calculateTotal(){
    return this.calculateSubTotal() + this.calculateDiscount()
  }

  //Calculates whether the user needs to pay delivery
  deliveryFee(){
    if(this.calculateTotal() >= 50){
      return 0
    }
    return 7
  }

  //Adds the total to the delivery fee
  calculateTotalPrice(){
    return this.calculateTotal() + this.deliveryFee()
  }

  //Passes props so that they can be accessed by child components
  render(){
    return this.props.children({
      addToBasket: this.addToBasket,
      myItems: this.state.basket,
      calculateSubTotal: this.calculateSubTotal,
      calculateDiscount: this.calculateDiscount,
      calculateTotalPrice: this.calculateTotalPrice,
      deliveryFee: this.deliveryFee
    })
  }
}

export default UnidaysDiscountChallenge
