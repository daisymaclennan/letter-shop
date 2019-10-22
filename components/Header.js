import styled from 'styled-components'

const Header = styled.header`
  h1{
    font-family: "Abril Fatface";
  }
  @media screen and (max-width: 800px){
    h1{
      font-size: 48px;
    }
  }
  @media screen and (min-width: 801px){
    h1{
      font-size: 64px;
    }
  }
`

export default Header
