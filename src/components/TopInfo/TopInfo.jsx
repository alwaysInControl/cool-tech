import {arrow, top_info} from '../../assets/index'
import styles from './TopInfo.module.scss'

export const TopInfo = () => {
  return (
    <div className={styles.top_info}>
      <div className={styles.top_info_left}>
        <h2>Elevate Your Audio Experience with Our Newest Arrivals!</h2>
        <p>Cutting-edge Tech</p>
        <div className={styles.top_info_latest_btn}>
          <div>Latest collection</div>
          <img src={arrow} alt="arrow"/>
        </div>
      </div>
      <div className={styles.top_info_right}>
        <img src={top_info} alt="top_info"/>
      </div>
    </div>
  );
};