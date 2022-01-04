import styled from 'styled-components'

{/*The box container which holds the main content of the page*/}
const Content = styled.div`
  background: #FFFFFF;

  @media screen and (max-width: 800px){
    margin-top: 130px;
    width: calc(100vw - 40px);
    margin-left: 20px;
  }

  @media screen and (min-width: 801px){
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
    width: 650px;
    position: relative;
    margin-top: 240px;
    margin-left: calc(50vw - 325px);
    margin-bottom: 200px;
  }
`

export default Content
