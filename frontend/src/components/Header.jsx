import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

function Header() {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)
  const onLogout = ()=>{
    dispatch(logout())
    dispatch(reset())
    nav('/')
  }
  return (
    <header className='header'>
        <div className='logo'> 
        <Link to='/'> Plant&Plants </Link>
        </div>
        <ul>
          <li>searchbar</li>
        </ul>
        <ul>
          {user ? (<li>
          <button className='btn' onClick ={onLogout}>
          <FaSignOutAlt/> Logout
          </button>
      </li>): (<>
          <li>
          <Link to='/login'> 
          <FaSignInAlt/> Login
          </Link>
      </li>
      <li>
          <Link to='/register'> 
          <FaUser/> Register
          </Link>
      </li>
          </>)}
          <li>Cart</li>
        </ul>
    </header>
  )
}

export default Header