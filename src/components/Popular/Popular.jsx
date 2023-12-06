import {Item} from '../index'
import {data_product} from '../../assets/data'
import styles from './Popular.module.scss'

export const Popular = () => {
  return (
    <div className={styles.popular}>
      <h1>POPULAR NOW</h1>
      <hr/>
      <div className={styles.popular_item}>
        {data_product.map((item, index) => {
          return <Item key={index} data={item}/>
        })}
      </div>
    </div>
  );
};