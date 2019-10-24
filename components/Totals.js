import styled from 'styled-components'

const Totals = styled.div`
  margin-top: 40px;
  p{
    color: rgba(2, 2, 0, 0.5);
    font-weight: 300;
    font-size: 18px;
    margin: 0;
    margin-bottom: 10px;
  }

  span{
    display: flex;
    justify-content: space-between;
  }

  .total > p{
    text-transform: uppercase;
    color: #000000;
    font-weight: normal
  }

  @media screen and (max-width: 800px){
    .total > p{
      font-size: 20px;
      margin-top: 15px;
    }
  }

  @media screen and (min-width: 801px){
    .total > p{
      font-size: 24px;
      margin-top: 25px;
    }
  }

`

export default Totals
