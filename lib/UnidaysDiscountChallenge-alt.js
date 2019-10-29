import items from './items'

//This is a simpler version of the class
class UnidaysDiscountChallenge{
  constructor(items){
    this.items = items
    this.basket = []
  }

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
  calculateSubTotal(){
    var total = 0
    //Loops through all the items in the basket, gets their price from the items array and accumulates it
    this.basket.map(item => {
      var add = item.quantity * items.find(e => e.product === item.product).price
      total += add
    })
    return total
  }


  //Calculates how much the user saves through discounts
  calculateDiscount(){
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
    return this.calculateSubTotal() + this.calculateDiscount()
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
