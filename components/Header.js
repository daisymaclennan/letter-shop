import styled from 'styled-components'

const Header = styled.header`
  h1{
    font-family: "Abril Fatface";
    margin: 0;
  }

  @media screen and (max-width: 800px){
    height: 100px;
    h1{
      font-size: 48px;
      margin-left: 20px;
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 801px){
    height: 140px;
    background:#FFFFFF;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.12);

    position: fixed;
    width: 100vw;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    h1{
      font-size: 64px;
      text-align: center;
    }
  }
`

export default Header
