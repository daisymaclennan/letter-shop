import styled from 'styled-components'

const CheckoutItem = ({className, item, allItems, addToBasket}) => {
  //Loops through all the items to find the one that matches the price of the current item
  const price = allItems.find(e => e.product === item.product).price
  //If there are none of the items in the basket it will return null
  if(item.quantity === 0){
    return null
  }
  return(
    <div className={className}>
      <p className="product-name">{item.product}</p>

      <div className="quantity">
        {/*On click it will decrease the quantity of the items in the basket*/}
        <button onClick={() => addToBasket(item, "minus")}>
          {/*Minus square svg icon -- Font Awesome*/}
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="minus-square" className="svg-inline--fa fa-minus-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M108 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12H108zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
        </button>

        <span>
          {item.quantity}
        </span>

        {/*On click it will increase the quantity of the items in the basket*/}
        <button onClick={() => addToBasket(item, "add")}>
          {/*Plus square svg icon -- Font Awesome*/}
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus-square" className="svg-inline--fa fa-plus-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
        </button>

      </div>

      <span className="price">
        £{price}
      </span>

    </div>
)}

const StyledCheckoutItem = styled(CheckoutItem)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  p{
    font-family: 'Abril Fatface';
    margin: 0;
  }

  button{
    border: 0;
    background: transparent;
  }

  svg{
    fill: black;
  }

  .quantity{
    display: flex;
    align-items: center;
  }

  .quantity > span{
    text-align: center;
  }

  .price{
    color: rgba(0, 0, 0, 0.46);
    width: 100px;
    text-align: right;
  }
  .product-name{
    width: 100px;
  }

  @media screen and (max-width: 800px){
    p{
      font-size: 64px;
    }
    svg{
      height: 20px;
    }
    .quantity > span{
      margin-left: 20px;
      margin-right: 20px;
      font-size: 18px;
      width: 20px;
    }
    .price{
      font-size: 18px;
    }
  }

  @media screen and (min-width: 801px){
    p{
      font-size: 72px;
    }
    svg{
      height: 30px;
    }
    .quantity > span{
      font-size: 24px;
      width: 80px;
    }
    .price{
      font-size: 24px;
    }
  }

`

export default StyledCheckoutItem
