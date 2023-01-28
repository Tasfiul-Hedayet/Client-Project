import styles from "../styles/purchase.module.css";
import { useEffect, useState } from 'react';
import { app, database } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import useForm from "@/hooks/useForm";

function purchase() {

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const { form, onChangeHandler } = useForm({
    name: "",
    product_name: "",
    purchase: "",
    quantity: "",
    discount: "",
    caring_cost: "",
    transportation: "",
    signature: "",
    reference: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(form);
  };

  const databaseRef = collection(database, "Purchase List Table");

  const addData = () => {
    addDoc(databaseRef, {
      name: form.name,
      product_name: form.product_name,
      purchase: form.purchase,
      quantity: form.quantity,
      discount: form.discount,
      caring_cost: form.caring_cost,
      transportation: form.transportation,
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

            {/* <p> The current date is: {currentDate.toString()} </p> */}
            

            <input
              id="product_name"
              name="product_name"
              placeholder="Product Name"
              type="text"
              onChange={onChangeHandler}
              value={form.product_name}
              required
            />
            <br />
            <br />

            <input
              id="purchase"
              name="purchase"
              placeholder="Purchasing price"
              type="text"
              onChange={onChangeHandler}
              value={form.purchase}
              required
            />
            <br />
            <br />

            <input
              id="quantity"
              name="quantity"
              placeholder="Quantity"
              type="text"
              onChange={onChangeHandler}
              value={form.quantity}
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
              id="caring_cost"
              name="caring_cost"
              placeholder="Caring Cost"
              type="text"
              onChange={onChangeHandler}
              value={form.caring_cost}
              required
            />
            <br />
            <br />

            <input
              id="transportation"
              name="transportation"
              placeholder="Transportation Cost"
              type="text"
              onChange={onChangeHandler}
              value={form.transportation}
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

export default purchase;
