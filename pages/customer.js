import styles from "../styles/customer.module.css";
import { app, database } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import useForm from "@/hooks/useForm";



function Customer() {
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

  const databaseRef = collection(database, "Customer Data Table");

  const addData = () => {
    addDoc(databaseRef, {
      name: form.name,
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
          <h1>Customer Details</h1>
        </div>
        <br />

        <div className={styles.form}>
          <form onSubmit={submitHandler}>
            <input
              id="name"
              name="name"
              placeholder="Name"
              type="text"
              onChange={onChangeHandler}
              value={form.name}
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

export default Customer;
