import styled from 'styled-components'

const Button = styled.button`


  border: 0;
  height: 40px;

  font-family: Oswald;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;

  padding-left: 15px;
  padding-right: 15px;

  @media screen and (max-width: 800px){
    background: rgba(0, 0, 0, 0.59);
    color: #FFFFFF;

    position: fixed;
    right: 20px;
    top: 120px;
  }

  @media screen and (min-width: 801px){
    background: #FFFFFF;
    color: #7C873B;
    box-shadow: 2px 2px 4px #7C873B;

    position: absolute;
    top: -70px;
    right: 0;
  }
`

export default Button
