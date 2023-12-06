import {exclusive} from '../../assets/index'
import styles from './Offers.module.scss'

export const Offers = () => {
  return (
    <div className={styles.offers}>
      <div className={styles.offers_left}>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className={styles.offers_right}>
        <img src={exclusive} alt="exclusive_for_you"/>
      </div>
    </div>
  );
};