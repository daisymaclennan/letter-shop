import items from './items'

class UnidaysDiscountChallenge{
  constructor(items){
    this.items = items
    if(process.browser){
      this.basket = JSON.parse(localStorage.getItem('basket')) || []
    }else{
      //If the page is rendered on the server basket equals an empty array to avoid an error
      this.basket = []
    }
  }


  //Passed in an item object to add it to the basket
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
    if(process.browser){
      localStorage.setItem('basket', JSON.stringify(this.basket))
    }
  }

  //Adds the total to the delivery fee
  calculateTotalPrice(){
    var total = this.calculateTotal()
    var deliveryFee = this.deliveryFee()
    console.log("Basket:", this.basket)
    console.log("Total to pay:", total + deliveryFee)
    return total + deliveryFee
  }

  //Below are all the methods I added so that I could display the values on screen and add more functionality than specified in the brief
  //Gets all the items in the basket
  getItems(){
    //Sorts all items in the basket alphabetically by product name and returns them
    return this.basket.sort(function(a, b){
      if(a.product < b.product){return -1}
      if(a.product > b.product){return 1}
      return 0
    })
  }

  removeFromBasket(item){
    const basketItem = this.basket.find(e => e.product === item.product)
    if(basketItem){
      //console.log("Item already in basket")
      basketItem.quantity--
      console.log("Basket:", this.basket)
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
    return totalDiscount
  }

  //Calculates how much the user actually has to pay excluding delivery
  calculateTotal(){
    var subTotal = this.calculateSubTotal()
    var discount = this.calculateDiscount()
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
}

export default UnidaysDiscountChallenge
