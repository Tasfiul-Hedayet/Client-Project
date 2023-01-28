
import styles from "../styles/inventory.module.css";

function inventory ()  {
  
  return (
    <>
    <div className={styles.bg}>
    <h1>Setting</h1>
    <button className={styles.btn}>LIFO</button>
    <button  className={styles.btn}>FIFO</button>
    <button  className={styles.btn}>Average</button>
    <button  className={styles.btn}>Purchase return to supplier </button>
    </div>
    </>
  )
}

export default inventory;