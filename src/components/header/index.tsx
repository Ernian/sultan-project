import { Link } from 'react-router-dom'

const Header = () => (
  <header style={{
    padding: 30,
    backgroundColor: '#eee'
  }}>
    <h1>header</h1>
    <Link to='/'>Main page</Link>
    <Link to='/catalog'>Catalog page</Link>
    <Link to='/cart'>Cart page</Link>
  </header>
)

export default Header