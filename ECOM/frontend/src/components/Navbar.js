import './Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { logout } from '../utils/localstorage';
import { setInitialState } from '../redux/actions/userAction';

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // console.log({user})

  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const _handleLogout = () => {
    // console.log('click')
    dispatch(setInitialState());
    logout();
    history.push('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>NICE COMPUTERS</h2>
      </div>

      {/* Search Bar */}
      <div className="navbar__search">
        <input type="text" placeholder="Search..." />
        <button type="submit"><i className="fas fa-search"></i></button>
      </div>

      <ul className="navbar__links">
        {/* Categories Dropdown */}
        <li className="dropdown">
          <button className="dropbtn">Categories <i className="fa fa-caret-down"></i></button>
          <div className="dropdown-content">
            <Link to="/">Home</Link>
            <Link to="/categories">All</Link>
            <Link to="/categories/smartphone">Smartphones</Link>
            <Link to="/categories/headphones">Headphones</Link>
            <Link to="/categories/speakers">Speakers</Link>
            <Link to="/categories/cameras">Cameras</Link>
            <Link to="/categories/tvs">TVs</Link>
            <Link to="/categories/set-top-boxes">Set Top Boxes</Link>
            <Link to="/categories/monitors">Monitors</Link>
            <Link to="/categories/laptops">Laptops</Link>
            <Link to="/categories/tablets">Tablets</Link>
            <Link to="/categories/computers">Computers</Link>
            <Link to="/categories/appliances">Appliances</Link>
          </div>
        </li>

        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>

        <li>
          <Link to="/">Shop</Link>
        </li>

        {!user.userInfo.isLogin ? (
          <li>
            <Link to="/signin">Login</Link>
          </li>
        ) : (
          <li>
            <p onClick={_handleLogout}>Logout</p>
          </li>
        )}
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;