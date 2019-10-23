import items from './items'

class UnidaysDiscountChallenge{
  constructor(items){
    this.items = items
    if(process.browser){

      this.basket = JSON.parse(localStorage.getItem('basket'))
    }
  }

  addItem(item){
    const basketItem = this.basket.find(e => e.product === item.product)
    if(basketItem){
      //console.log("Item already in basket")
      basketItem.quantity++
      //console.log("Basket:", this.basket)
    }else{
      this.basket.push({
        product: item.product,
        quantity: 1
      })
      //console.log("Basket:", this.basket)
    }
    if(process.browser){
      localStorage.setItem('basket', JSON.stringify(this.basket))
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
    //console.log("Total before discount:", total)
    return total
  }


  //Calculates how much the user saves through discounts
  calculateDiscount(){
    var totalDiscount = 0
    //Loops through items in the basket, finds them in the items array calculates how many items are eligible for the deal and calculates the discount
    this.basket.map(item => {
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
    //console.log("Total saved:", totalDiscount)
    return totalDiscount
  }

  //Calculates how much the user actually has to pay excluding delivery
  calculateTotal(){
    var subTotal = this.calculateSubTotal()
    var discount = this.calculateDiscount()
    //console.log("Before delivery:", subTotal + discount)
    return subTotal + discount
  }

  //Calculates whether the user needs to pay delivery
  deliveryFee(){
    var total = this.calculateTotal()
    if(total >= 50){
      return 0
    }
    return 7
  }

  //Adds the total to the delivery fee
  toPay(){
    var total = this.calculateTotal()
    var deliveryFee = this.deliveryFee()
    console.log("Basket:", this.basket)
    console.log("Total to pay:", total + deliveryFee)
    return total + deliveryFee
  }
}

export default UnidaysDiscountChallenge
