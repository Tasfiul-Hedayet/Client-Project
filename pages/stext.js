import styles from "../styles/stext.module.css";
import Link from "next/link";

function stext() {
  return (
    <>
    <div className={styles.bg}>
      <div className={styles.h1}>
        <h1>Sucessfully Added the information.</h1>
      </div>

      <div className={styles.btn}>
        <button>
          <Link href={"/"}>Submit</Link>
        </button>
      </div>
    </div>
    </>
  );
}

export default stext;
