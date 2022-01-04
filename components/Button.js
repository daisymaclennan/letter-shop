import styled from 'styled-components'

{/*Styles for the buttons shown at the top of the page to navigate between them*/}
const Button = styled.button`
  border: 0;
  height: 40px;
  font-family: Oswald;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (max-width: 800px){
    margin-bottom: 25px;
    display: block;
    background: rgba(0, 0, 0, 0.59);
    color: #FFFFFF;
  }

  @media screen and (min-width: 801px){
    position: absolute;
    top: -70px;
    right: 0;
    background: #FFFFFF;
    color: #7C873B;
    box-shadow: 2px 2px 4px #7C873B;
  }
`

export default Button
