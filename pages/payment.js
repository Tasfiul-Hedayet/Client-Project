import styles from "../styles/product.module.css";
import { app, database } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import useForm from "@/hooks/useForm";


function payment() {

  const { form, onChangeHandler } = useForm({
    name: '',
    cash: '',
    cheque: '',
    online: '',
    discount:'',
    total:'',
    signature:'',
    reference:'',
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(form);
  };

  const databaseRef = collection(database, "Supplier Invoice Table");

  const addData = () => {
    addDoc(databaseRef, {

      name: form.name,
      cash: form.cash,
      cheque: form.cheque,
      online: form.online,
      discount: form.discount,
      total: form.total,
      signature: form.signature,
      reference: form.reference,

    })
      .then(() => {
        alert("Data Send");
        useForm(" ");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.text}>
          <h1>Supplier Invoice</h1>
        </div>
        <br />

        <div className={styles.form}>
          <form onSubmit={submitHandler}>

          <input
              id="name"
              name="name"
              placeholder="Supplier Name"
              type="text"
              onChange={onChangeHandler}
              value={form.name}
              required
            />
            <br />
            <br />

          {/* //Supplier’s  payment:  
             // invoice - Suppliers name (drop down), 
            //Amount - Cash and Check and Online box, 
           //Discount amount, Total amount, Authorized signature, reference box,  */}

           <input
              id="cash"
              name="cash"
              placeholder="Cash Amount"
              type="text"
              onChange={onChangeHandler}
              value={form.cash}
              required
            />
            <br />
            <br />


            <input
              id="cheque"
              name="cheque"
              placeholder="Cheque Amount"
              type="text"
              onChange={onChangeHandler}
              value={form.cheque}
              required
            />
            <br />
            <br />

            <input
              id="online"
              name="online"
              placeholder="Online Amount"
              type="text"
              onChange={onChangeHandler}
              value={form.online}
              required
            />
            <br />
            <br />


            <input
              id="discount"
              name="discount"
              placeholder="Discount Amount"
              type="text"
              onChange={onChangeHandler}
              value={form.discount}
              required
            />
            <br />
            <br />

            <input
              id="total"
              name="total"
              placeholder="Total Amount"
              type="text"
              onChange={onChangeHandler}
              value={form.total}
              required
            />
            <br />
            <br />

            <input
              id="signature"
              name="signature"
              placeholder="Authorized Signature"
              type="text"
              onChange={onChangeHandler}
              value={form.signature}
              required
            />
            <br />
            <br />


            <input
              id="reference"
              name="reference"
              placeholder="Reference"
              type="text"
              onChange={onChangeHandler}
              value={form.reference}
              required
            />
            <br />
            <br />

            <div className={styles.button}>
              <button onClick={addData}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default payment;
