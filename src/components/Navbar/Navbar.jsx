import {useState} from "react";
import {Link} from "react-router-dom";
import {logo, cart} from '../../assets/index'
import styles from './Navbar.module.scss';

export const Navbar = () => {
  const [menu, setMenu] = useState('shop')

  return (
    <div className={styles.navbar}>
      <Link to='/' className={styles.navbar_logo}>
        <img src={logo} alt="logo"/>
        <p>Cool Tech</p>
      </Link>
      <ul className={styles.navbar_menu}>
        <li onClick={() => setMenu('shop')}>
          <Link to='/'>Shop</Link>
          {menu === 'shop' ? <hr/> : <></>}
        </li>
        <li onClick={() => setMenu('headphones')}>
          <Link to='/headphones'>Headphones</Link>
          {menu === 'headphones' ? <hr/> : <></>}
        </li>
        <li onClick={() => setMenu('earphones')}>
          <Link to='/earphones'>Earphones</Link>
          {menu === 'earphones' ? <hr/> : <></>}
        </li>
        <li onClick={() => setMenu('accessories')}>
          <Link to='/accessories'>Other accessories</Link>
          {menu === 'accessories' ? <hr/> : <></>}
        </li>
      </ul>
      <div className={styles.navbar_login_cart}>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart} alt="cart"/></Link>
        <div className={styles.navbar_cart_count}>0</div>
      </div>
    </div>
  );
};