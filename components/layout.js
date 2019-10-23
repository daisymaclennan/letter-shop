import { createGlobalStyle } from 'styled-components'
import Header from './Header'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f2f2f2;
    font-family: "Oswald", "Abril Fatface", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
  }
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Header>
      <h1>Lettershop.</h1>
    </Header>
    {children}
  </div>
)

export default Layout
