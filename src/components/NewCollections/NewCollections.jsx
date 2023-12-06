import {Item} from '../index'
import {new_collections} from '../../assets/new_collections'
import styles from './NewCollections.module.scss'

export const NewCollections = () => {
  return (
    <div className={styles.new_collections}>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className={styles.collections}>
        {new_collections.map((item, index)=> {
          return <Item key={index} data={item}/>
        })}
      </div>
    </div>
  );
};