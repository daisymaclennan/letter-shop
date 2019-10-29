import items from './items'

//This is a simpler version of the class
class UnidaysDiscountChallenge{
  constructor(items){
    this.items = items
    this.basket = []
  }

  //Adds an item to the basket array or increase the quantity of that item in the array
  addToBasket(item){
    const basketItem = this.basket.find(e => e.product === item.product)
    if(basketItem){
      basketItem.quantity++
    }else{
      this.basket.push({
        product: item.product,
        quantity: 1
      })
    }
  }

  //Calculates the total value of the items without discounts applied
  calculateTotalBeforeDiscount(){
    //Loops through all the items in the basket, gets their price from the items array and accumulates it
    var total = this.basket.reduce((acc, item) => {
      var add = item.quantity * items.find(e => e.product === item.product).price
      return acc + add
    }, 0)
    return total
  }


  //Calculates how much the user saves through discounts
  calculateDiscount(){
    //Accumalates the discounts for each item in the basket
    var totalDiscount = this.basket.reduce((acc, item) => {
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
    return this.calculateTotalBeforeDiscount() + this.calculateDiscount()
  }

  //Calculates whether the user needs to pay delivery
  deliveryFee(){
    var total = this.calculateTotalWithoutDelivery()
    if(total >= 50 || total === 0){
      return 0
    }
    return 7
  }

  //Adds the total to the delivery fee
  toPay(){
    return this.calculateTotalWithoutDelivery() + this.deliveryFee()
  }
}

export default UnidaysDiscountChallenge
