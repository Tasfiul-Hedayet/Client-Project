import styles from "../styles/supplier.module.css";
import { app, database } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import useForm from "@/hooks/useForm";

function Supplier() {
  const { form, onChangeHandler } = useForm({
    name: "",
    address: "",
    phoneNumber: "",
    description: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(form);
  };

  const databaseRef = collection(database, "Supplier Data Table");

  const addData = () => {
    addDoc(databaseRef, {
      name: form.cname,
      address: form.address,
      phoneNumber: form.phoneNumber,
      description: form.description,
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
          <h1>Supplier Details</h1>
        </div>
        <br />

        <div className={styles.form}>
          <form onSubmit={submitHandler}>
            <input
              id="cname"
              name="cname"
              placeholder="Name"
              type="text"
              onChange={onChangeHandler}
              value={form.cname}
              required
            />
            <br />
            <br />

            <input
              id="address"
              name="address"
              placeholder="Address"
              type="text"
              onChange={onChangeHandler}
              value={form.address}
              required
            />
            <br />
            <br />

            <input
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              type="text"
              onChange={onChangeHandler}
              value={form.phoneNumber}
              required
            />
            <br />
            <br />

            <input
              id="description"
              name="description"
              placeholder="Description"
              type="text"
              onChange={onChangeHandler}
              value={form.description}
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

export default Supplier;
