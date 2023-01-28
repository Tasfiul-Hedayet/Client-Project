import { useEffect, useState } from "react";
import styles from "../styles/customer.module.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, database } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";


export default function Hello() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  const databaseRef = collection(database, "CRUD Data");

  const addData = () => {
    addDoc(databaseRef, {
      name: name,
      age: age,
    })
      .then(() => {
        alert("Data Send");
        setName("");
        setAge(null);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getData = async () => {
    await getDocs(databaseRef).then((response) => {
      console.log(
        response.docs.map((data) => {
          return data.data();
        })
      );
    });
  };


  return (
    <div>
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button onClick={addData}>Add</button>
      <button onClick={getData}>Get</button>
      
    </div>
  );
}
