import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f2f2f2;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    {children}
  </div>
)

export default Layout
