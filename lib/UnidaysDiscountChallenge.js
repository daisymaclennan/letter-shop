import React, { Component } from 'react'
import items from './items'

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
    this.clearBasket = this.clearBasket.bind(this)
    this.calculateTotalWithoutDelivery = this.calculateTotalWithoutDelivery.bind(this)
  }

  //Runs once the component is rendered
  componentDidMount(){
    this.getItems()
  }

  getItems(){
    //Retrieves basket from local storage
    var basket = process.browser ? JSON.parse(localStorage.getItem('basket')) : []
    //Sorts all items in the basket alphabetically by product name
    basket = basket.sort(function(a, b){
      if(a.product < b.product){return -1}
      if(a.product > b.product){return 1}
      return 0
    })
    //Sets the component state to the basket found in local storage
    this.setState({basket: basket})
  }

  clearBasket(){
    if(process.browser){
      localStorage.setItem('basket', JSON.stringify({}))
    }
    this.setState({basket: {}})
  }


  //Passed in an item object to add it to the basket
  //Accepts parameter method so that amount of items in basket can be increased and decreased
  addToBasket(item, method){
    const basket = process.browser ? JSON.parse(localStorage.getItem('basket')) : []
    const basketItem = basket.find(e => e.product === item.product)
    if(method === "add"){
      if(basketItem){
        basketItem.quantity++
      }else{
        //If the basket item isn't there already it will add it to the basket array
        basket.push({
          product: item.product,
          quantity: 1
        })
      }
    }else if(method === "minus"){
      basketItem.quantity--
    }
    if(process.browser){
      //Updates the local storage to the new basket value
      localStorage.setItem('basket', JSON.stringify(basket))
    }
    //Updates the state of the component to the new basket value
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
    //Accumalates the discounts for each item in the basket
    var totalDiscount = this.state.basket.reduce((acc, item) => {
      var basketItem = items.find(e => e.product === item.product)
      if(basketItem.deal.items_required === 0){
        var discount = 0
      }else{
        var remainder = item.quantity % basketItem.deal.items_required
        var leftOver = item.quantity - remainder
        var discount = leftOver / basketItem.deal.items_required * basketItem.deal.discount
      }
      return acc + discount
    }, 0)

    return totalDiscount
  }

  //Calculates how much the user actually has to pay excluding delivery
  calculateTotalWithoutDelivery(){
    return this.calculateSubTotal() + this.calculateDiscount()
  }

  //Calculates whether the user needs to pay delivery
  deliveryFee(){
    const totalWithoutDelivery = this.calculateTotalWithoutDelivery()
    if(totalWithoutDelivery >= 50 || totalWithoutDelivery === 0){
      return 0
    }
    return 7
  }

  //Adds the total to the delivery fee
  calculateTotalPrice(){
    return this.calculateTotalWithoutDelivery() + this.deliveryFee()
  }

  //Allows me to use the methods in the class by referencing their key
  render(){
    return this.props.children({
      addToBasket: this.addToBasket,
      myItems: this.state.basket,
      calculateSubTotal: this.calculateSubTotal,
      calculateDiscount: this.calculateDiscount,
      calculateTotalPrice: this.calculateTotalPrice,
      deliveryFee: this.deliveryFee,
      clearBasket: this.clearBasket,
      calculateTotalWithoutDelivery: this.calculateTotalWithoutDelivery
    })
  }
}

export default UnidaysDiscountChallenge
