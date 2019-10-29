import styled from 'styled-components'

{/*The box container which holds the main content of the page*/}
const Content = styled.div`
  background: #FFFFFF;
  position: fixed;

  @media screen and (max-width: 800px){
    top: 200px;
    width: calc(100vw - 40px);
    left: 20px;
  }

  @media screen and (min-width: 801px){
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
    width: 650px;


    top: 240px;
    left: calc(50vw - 325px);
  }
`

export default Content
