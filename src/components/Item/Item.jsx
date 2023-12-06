import styles from './Item.module.scss'

export const Item = ({data}) => {
  return (
    <div className={styles.item}>
      <img src={data.image} alt="item_img"/>
      <p>{data.name}</p>
      <div className={styles.item_prices}>
        <div className={styles.item_price_new}>
          {data.new_price} soms
        </div>
        <div className={styles.item_price_old}>
          {data.old_price} soms
        </div>
      </div>
    </div>
  );
};