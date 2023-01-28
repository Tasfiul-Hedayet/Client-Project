import styles from "../styles/invoice.module.css";


function invoice() {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.text}>
          <h1>Sales Invoice</h1>
        </div>
        <br />

      <div className={styles.form}>
        <form action="/send-data-here" method="post">
          <label for="cselect">Customer Select </label>
          <input type="text" id="cselect" name="cselect" />
          <br />
          <br />
          <label for="invoice no">Invoice No </label>
          <input type="text" id="invoice no" name="invoice no" />
          <br />
          <br />
          <label for="reference">Reference </label>
          <input type="text" id="reference" name="reference" />
          <br />
          <br />
          <label for="purchasing price">Purchasing Price</label>
          <input type="text" id="purchasing price" name="purchasing price" />
          <br />
          <br />
          <label for="product">Product </label>
          <input type="text" id="product" name="product" />
          <br />
          <br />
          <label for="Sales Price">Sales Price </label>
          <input type="text" id="Sales Price" name="Sales Price" />
          <br />
          <br />
          <label for="discount">Discount </label>
          <input type="text" id="discount" name="discount" />
          <br />
          <br />
          <label for="caring cost">Caring Cost </label>
          <input type="text" id="caring cost" name="caring cost" />
          <br />
          <br />
          <label for=" transportation cost"> Transportation Cost </label>
          <input
            type="text"
            id=" transportation cost"
            name=" transportation cost"
          />
          <br />
          <br />
          <label for=" authorized signature"> Authorized Signature </label>
          <input
            type="text"
            id=" authorized signature"
            name="  authorized signature"
          />
          <br />
          <br />
          <div className={styles.button}>
            <button>
            Submit
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default invoice;
