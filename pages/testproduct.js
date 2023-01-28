import styles from "../styles/product.module.css";
import Link from "next/link";

function product() {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.text}>
          <h1>Product</h1>
        </div>
        <br />

        <div className={styles.form}>
          <form action="/send-data-here" method="post">

            <label for="product">Supplier Name </label>
            <select id="sname" name="same">
              <option value="">fetch</option>
              <option value="">fetch</option>
            </select>
            <br />
            <br />


            <label for="product">Product Category </label>
            <input type="text" id="category" name="category" />
            <br />
            <br />

            <label for="product">Sub Category </label>
            <input type="text" id=" sub category" name="sub category" />
            <br />
            <br />

            <label for="brand">Brand </label>
            <input type="text" id="brand" name="brand" />
            <br />
            <br />

            <label for="pname">Product Name </label>
            <input type="text" id="pname" name="pname" />
            <br />
            <br />

            <label for="unit">Unit Measure </label>
            <input type="text" id="unit" name="unit" />
            <br />
            <br />

            <label for="unit">Purchasing price </label>
            <input type="text" id="unit" name="unit" />
            <br />
            <br />

            <label for="unit">Selling price </label>
            <input type="text" id="unit" name="unit" />
            <br />
            <br />


            <div className={styles.button}>
              <button>
                <Link href="/stext">Submit</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default product;
