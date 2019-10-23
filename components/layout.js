import { createGlobalStyle } from 'styled-components'
import Header from './Header'
import Content from './Content'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f2f2f2;
    font-family: "Oswald", "Abril Fatface", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0;
    color: #020200;
  }

  *:focus{
    outline: 0;
  }

  @media screen and (max-width: 800px){
    body{
      background-color: #ffffff;
    }
  }
`

const Layout = ({ children }) => {
  if(process.browser){
    localStorage.setItem('basket', JSON.stringify([]))
  }
  return(
    <div>
      <GlobalStyle />
      <Header>
        <h1>Lettershop.</h1>
      </Header>
      <Content>
        {children}
      </Content>
    </div>
  )}

export default Layout
