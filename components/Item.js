import styled from 'styled-components'

const Item = ({className, item, addToBasket}) => {

  return(
    <div className={`${className}`} onClick={() => addToBasket(item, "add")}>
      {/*When clicked it will add the item to the basket or increase its quantity*/}
      <div className="outer">
          <span>
            £{item.price}
          </span>
          <p>{item.product}</p>
          <button>
            Add to basket
          </button>
      </div>

      <div className="inner">
      </div>

    </div>
  )}


const StyledItem = styled(Item)`
  position: relative;
  cursor: pointer;
  .inner{
    transition: 0.25s ease-in-out;

    position: absolute;
    z-index: 0;
  }
  .outer{
    z-index: 1;
  }
  .outer:hover ~ .inner{
    top: 0;
    left: 0;
  }
  span{
    font-size: 18px;
    ${props => props.accentColor &&`
      color: ${props.accentColor};
    `}
  }
  .outer{
    box-sizing: border-box;
    position: relative;
    ${props => props.accentColor&&`
      border: 1px solid ${props.accentColor};
    `}
  }
  .inner{
    box-sizing: border-box;
    ${props => props.color && `
      background: ${props.color};
    `}
  }
  p, button, span{
    position: absolute;
  }
  p{
    font-family: Abril Fatface;
    margin: 0;
    margin-top: auto;
  }
  button{
    background: transparent;
    border: 0;
    padding: 0;
    font-family: Oswald;
    font-size: 24px;
    line-height: 36px;
  }

  p{
    font-size: 64px;
    top: 25px;
    left: 10px;
  }
  button, span{
    right: 10px;
  }
  span{
    top: 10px;
  }
  button{
    bottom: 5px;
  }

  @media screen and (max-width: 700px){
    width: 150px;
    height: 150px;
    .inner, .outer{
      width: 150px;
      height: 150px;
    }
    .inner{
      top: 10px;
      left: 10px;
    }

  }

  @media screen and (min-width: 701px){
    width: 175px;
    height: 175px;
    .inner, .outer{
      width: 175px;
      height: 175px;
    }
    .inner{
      top: 15px;
      left: 15px;
    }
    p{
      font-size: 72px;
    }
  }
`

export default StyledItem
