import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to='/'><h2>Home</h2></Link>
      <ol>
        
      <li><Link to='/component' >component</Link></li>
      <li><Link to='/profile_card'>prop's</Link></li>
      <li><Link to='/conditional_rendering'>conditional rendering</Link></li>
      <li><Link to='/list'>list</Link></li>
      <li><Link to='/style'>style</Link></li>
      <li><Link to='/multipl_State'>multiple state</Link></li>
      <li><Link to='/array'>array</Link></li>
      <li><Link to='/task'>task</Link></li>
      <li><Link to='/score'>score</Link></li>
      <li><Link to='/test'>test</Link></li>
      <li><Link to='/useEffect'>useEffect</Link></li>
      <li><Link to='/form'>form</Link></li>
      <li><Link to='/books/oldbooks'>old book</Link></li>
      <li><Link to='/books/newbooks'>new books</Link></li>
      <li><Link to='/login'>login</Link></li>
      <li><Link to='/dashboard'>dashboard</Link></li>
      <li><Link to='/user/1'>user 1</Link></li>
      <li><Link to='/user/2'>user 2</Link></li>
      </ol>
    </div>
  )
}

export default Home
