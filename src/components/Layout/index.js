// Write your code here
import './index.css'
import Body from '../Body'
import Header from '../Header'
import Footer from '../Footer'

const Layout = () => (
  <div className="layout-app-container">
    <div className="layout-app-section">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
